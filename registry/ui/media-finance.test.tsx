import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageCrop } from "./image-crop";
import { ImageZoom } from "./image-zoom";
import { CreditCard } from "./credit-card";
import { Ticker } from "./ticker";
import { Stories } from "./stories";
import { Reel } from "../blocks/reel";
import { VideoPlayer } from "./video-player";

vi.stubGlobal("matchMedia", () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} }));
beforeEach(() => { vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue(); vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {}); });
afterEach(cleanup);
afterEach(() => vi.restoreAllMocks());

test("image crop applies and resets percentage bounds", async () => {
  const user = userEvent.setup();
  const onApply = vi.fn();
  render(<ImageCrop src="/scene.svg" alt="Landscape" onApply={onApply} />);
  await user.click(screen.getByRole("button", { name: "Apply crop" }));
  expect(onApply).toHaveBeenCalledWith(expect.objectContaining({ unit: "%", width: 80 }));
  await user.click(screen.getByRole("button", { name: "Reset" }));
});

test("image zoom opens a named dialog and closes with Escape", async () => {
  const user = userEvent.setup();
  render(<ImageZoom src="/scene.svg" alt="Landscape" caption="Wide landscape" />);
  await user.click(screen.getByRole("button", { name: "Enlarge Landscape" }));
  expect(screen.getByRole("dialog", { name: "Landscape" })).toBeTruthy();
  await user.keyboard("{Escape}");
  expect(screen.queryByRole("dialog")).toBeNull();
});

test("credit card keeps its last four digits masked while flipping", async () => {
  const user = userEvent.setup();
  render(<CreditCard brand="Demo" holder="Alex" last4="1234567890124242" expiry="12/28" />);
  expect(screen.getByRole("group", { name: "Demo card ending in 4242" }).textContent).toContain("4242");
  expect(screen.getByRole("group", { name: "Demo card ending in 4242" }).textContent).not.toContain("1234567890124242");
  await user.click(screen.getByRole("button", { name: "Show card back" }));
  expect(screen.getByText(/payment provider/)).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Show card front" }));
  expect(screen.getByRole("group", { name: "Demo card ending in 4242" }).textContent).toContain("4242");
});

test("ticker expands supplied high and low data", async () => {
  const user = userEvent.setup();
  render(<Ticker symbol="LMNT" name="Demo asset" price={100} changePercent={-2} high={110} low={90} />);
  await user.click(screen.getByRole("button", { name: /Demo asset LMNT.*down 2 percent/ }));
  expect(screen.getByText("$110.00")).toBeTruthy();
  expect(screen.getByRole("button").getAttribute("aria-expanded")).toBe("true");
});

test("stories navigate and expose pause control", async () => {
  const user = userEvent.setup();
  render(<Stories items={[{ id: "a", src: "/a.svg", alt: "First", author: "Alex" }, { id: "b", src: "/b.svg", alt: "Second", author: "Robin" }]} />);
  await user.click(screen.getByRole("button", { name: "Next story" }));
  expect(screen.getByRole("img", { name: "Second" })).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Pause stories" }));
  expect(screen.getByRole("button", { name: "Play stories" })).toBeTruthy();
});

test("reel changes active media with keyboard and toggles mute", async () => {
  const user = userEvent.setup();
  render(<Reel items={[{ id: "a", src: "/a.mp4", title: "First", author: "Alex" }, { id: "b", src: "/b.mp4", title: "Second", author: "Robin" }]} />);
  screen.getByLabelText(/Video reel/).focus();
  await user.keyboard("{ArrowDown}");
  expect(screen.getByText("Second")).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Unmute reel" }));
  expect(screen.getByRole("button", { name: "Mute reel" })).toBeTruthy();
});

test("video player toggles mute and offers an accessible seek control", async () => {
  const user = userEvent.setup();
  render(<VideoPlayer src="/demo.mp4" title="Demo" />);
  await user.click(screen.getByRole("button", { name: "Mute video" }));
  expect(screen.getByRole("button", { name: "Unmute video" })).toBeTruthy();
  expect(screen.getByRole("slider", { name: "Seek video" })).toBeTruthy();
});
