import { createRef } from "react";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AudioPlayer } from "./audio-player";
import { formatMediaTime } from "../lib/media-player";

const wave = vi.hoisted(() => ({ records: [] as Array<{ events: Record<string, (...args: unknown[]) => void>; destroy: ReturnType<typeof vi.fn>; setOptions: ReturnType<typeof vi.fn> }> }));
vi.mock("wavesurfer.js", () => ({ default: { create: vi.fn(() => {
  const record = { events: {} as Record<string, (...args: unknown[]) => void>, destroy: vi.fn(), setOptions: vi.fn() };
  wave.records.push(record);
  return { on: (name: string, callback: (...args: unknown[]) => void) => { record.events[name] = callback; }, destroy: record.destroy, setOptions: record.setOptions };
}) } }));
beforeEach(() => {
  wave.records.length = 0;
  vi.stubGlobal("matchMedia", () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => {});
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

async function readyAudio() {
  const view = render(<AudioPlayer src="/audio.wav" title="Sample" />);
  await waitFor(() => expect(wave.records).toHaveLength(1));
  const media = view.container.querySelector("audio")!;
  Object.defineProperty(media, "duration", { value: 12, configurable: true });
  Object.defineProperty(media, "readyState", { value: 1, configurable: true });
  fireEvent.loadedMetadata(media);
  act(() => wave.records[0]!.events.ready?.(12));
  return { view, media };
}
test("audio static HTML preserves native controls and finite unknown time", () => {
  expect(renderToString(<AudioPlayer src="/audio.wav" title="Sample" />)).toContain('controls=""');
  expect(formatMediaTime(Infinity)).toBe("0:00");
  expect(formatMediaTime(NaN)).toBe("0:00");
  expect(formatMediaTime(-10)).toBe("0:00");
  expect(formatMediaTime(65.9)).toBe("1:05");
});
test("waveform keyboard seeks and native events update play, speed and volume", async () => {
  const user = userEvent.setup();
  const { media } = await readyAudio();
  const slider = screen.getByRole("slider", { name: "Sample waveform" });
  fireEvent.keyDown(slider, { key: "ArrowRight" });
  expect(media.currentTime).toBe(5);
  fireEvent.keyDown(slider, { key: "End" });
  expect(media.currentTime).toBe(12);
  fireEvent.keyDown(slider, { key: "Home" });
  expect(media.currentTime).toBe(0);
  await user.click(screen.getByRole("button", { name: "Play audio" }));
  expect(media.play).toHaveBeenCalled();
  Object.defineProperty(media, "paused", { value: false, configurable: true });
  fireEvent.play(media);
  expect(screen.getByRole("button", { name: "Pause audio" })).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "audio playback speed 1×" }));
  await user.click(screen.getByRole("button", { name: "1.25×" }));
  expect(media.playbackRate).toBe(1.25);
  fireEvent.rateChange(media);
  expect(screen.getByRole("button", { name: "audio playback speed 1.25×" })).toBeTruthy();
  await user.keyboard("{Escape}");
  act(() => { media.volume = 0.4; });
  fireEvent.volumeChange(media);
  act(() => { media.volume = 0; });
  fireEvent.volumeChange(media);
  await user.click(screen.getByRole("button", { name: "Unmute audio" }));
  expect(media.volume).toBe(0.4);
  expect(media.muted).toBe(false);
});
test("decode error preserves native audio; source replacement destroys the old engine and rejects late updates", async () => {
  const ref = createRef<HTMLDivElement>();
  const view = render(<AudioPlayer ref={ref} src="/first.wav" title="Sample" />);
  await waitFor(() => expect(wave.records).toHaveLength(1));
  const old = wave.records[0]!;
  act(() => old.events.error?.(new Error("Decode")));
  expect(view.container.querySelector("audio")?.hidden).toBe(false);
  expect(screen.getByText(/Waveform unavailable/)).toBeTruthy();
  view.rerender(<AudioPlayer ref={ref} src="/second.wav" title="Sample" />);
  await waitFor(() => expect(wave.records).toHaveLength(2));
  expect(old.destroy).toHaveBeenCalledOnce();
  act(() => old.events.ready?.(100));
  expect(ref.current?.getAttribute("data-waveform")).toBe("loading");
  view.unmount();
  expect(wave.records[1]!.destroy).toHaveBeenCalledOnce();
  expect(ref.current).toBeNull();
});
test("rejected playback exposes retry and native fallback without an unhandled promise", async () => {
  const user = userEvent.setup();
  const { media, view } = await readyAudio();
  vi.mocked(media.play).mockRejectedValueOnce(new DOMException("Not allowed", "NotAllowedError"));
  await user.click(screen.getByRole("button", { name: "Play audio" }));
  expect(await screen.findByRole("alert")).toHaveProperty("textContent", expect.stringContaining("Playback could not start"));
  expect(view.container.querySelector("audio")?.hidden).toBe(false);
  await user.click(screen.getByRole("button", { name: "Retry media" }));
  expect(media.load).toHaveBeenCalled();
});
test("empty source is idle rather than indefinitely loading", () => {
  render(<AudioPlayer src="" title="Choose a source" />);
  expect(screen.getByRole("status").textContent).toBe("No audio source.");
});
