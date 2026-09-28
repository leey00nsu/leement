import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Announcement } from "./announcement";
import { Banner } from "./banner";
import { Typography } from "./typography";
import { ColorPicker } from "./color-picker";
import { Comparison } from "./comparison";
import { Deck } from "../blocks/deck";
import { DialogStack } from "../blocks/dialog-stack";
import { Editor } from "./editor";
import { Glimpse } from "./glimpse";
import { Marquee } from "./marquee";

afterEach(cleanup);
afterEach(() => vi.restoreAllMocks());

test("announcement link and dismissal remain separate controls", async () => {
  const user = userEvent.setup();
  const onDismiss = vi.fn();
  render(<Announcement label="New" title="Catalog" href="/showcase" dismissible onDismiss={onDismiss} />);
  expect(screen.getByRole("link", { name: "Catalog" }).getAttribute("href")).toBe("/showcase");
  await user.click(screen.getByRole("button", { name: "Dismiss announcement" }));
  expect(onDismiss).toHaveBeenCalledOnce();
  expect(screen.queryByRole("status")).toBeNull();
});

test("banner exposes title, action and close", async () => {
  const user = userEvent.setup();
  render(<Banner title="Update" description="New release" action={<a href="/changes">View changes</a>} dismissible />);
  expect(screen.getByRole("region", { name: "Update" })).toBeTruthy();
  expect(screen.getByRole("link", { name: "View changes" })).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Dismiss banner" }));
  expect(screen.queryByRole("region", { name: "Update" })).toBeNull();
});

test("typography keeps the requested semantic heading", () => {
  render(<Typography as="h2" variant="display">Overview</Typography>);
  expect(screen.getByRole("heading", { name: "Overview", level: 2 })).toBeTruthy();
});

test("color picker commits a valid hex value and rejects invalid text", async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();
  render(<ColorPicker label="Accent" defaultValue="#123456" onValueChange={onValueChange} swatches={["#abcdef"]} />);
  await user.click(screen.getByRole("button", { name: "Choose #abcdef" }));
  expect(onValueChange).toHaveBeenCalledWith("#ABCDEF");
  await user.clear(screen.getByRole("textbox", { name: "Accent" }));
  await user.type(screen.getByRole("textbox", { name: "Accent" }), "invalid{Enter}");
  expect((screen.getByRole("textbox", { name: "Accent" }) as HTMLInputElement).value).toBe("#ABCDEF");
});

test("color picker emits eight-digit hex for opacity and keeps alternate output read-only", async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();
  render(<ColorPicker label="Illustration" defaultValue="#123456" onValueChange={onValueChange} />);
  const opacity = screen.getByRole("spinbutton", { name: "Opacity percentage" });
  await user.clear(opacity);
  await user.type(opacity, "50");
  expect(onValueChange).toHaveBeenLastCalledWith("#12345680");
  await user.selectOptions(screen.getByRole("combobox", { name: "Color format" }), "rgb");
  const output = screen.getByRole("textbox", { name: "Illustration" }) as HTMLInputElement;
  expect(output.readOnly).toBe(true);
  expect(output.value).toBe("rgba(18, 52, 86, 0.5)");
});

test("comparison exposes a keyboard-operable range with percent text", async () => {
  const user = userEvent.setup();
  render(<Comparison beforeSrc="/a.svg" afterSrc="/b.svg" beforeAlt="Day" afterAlt="Night" />);
  const slider = screen.getByRole("slider", { name: "Compare Day and Night" });
  slider.focus();
  await user.keyboard("{ArrowRight}");
  expect(slider.getAttribute("aria-valuetext")).toBe("51% before image visible");
});

test("deck navigates slides by arrow key and names position", async () => {
  const user = userEvent.setup();
  render(<Deck slides={[{ id: "a", title: "First", content: "One" }, { id: "b", title: "Second", content: "Two" }]} />);
  screen.getByRole("region", { name: "Presentation deck" }).focus();
  await user.keyboard("{ArrowRight}");
  expect(screen.getByRole("heading", { name: "Second" })).toBeTruthy();
  expect(screen.getByRole("status").textContent).toBe("2 / 2");
});

test("dialog stack advances and returns focus after Escape", async () => {
  const user = userEvent.setup();
  render(<DialogStack triggerLabel="Start" pages={[{ id: "one", title: "First step", content: <input aria-label="Name" /> }, { id: "two", title: "Second step", content: <p>Two</p> }]} />);
  const trigger = screen.getByRole("button", { name: "Start" });
  await user.click(trigger);
  await user.type(screen.getByRole("textbox", { name: "Name" }), "Studio");
  await user.click(screen.getByRole("button", { name: "Continue" }));
  expect(screen.getByRole("dialog", { name: "Second step" })).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Previous step" }));
  expect((screen.getByRole("textbox", { name: "Name" }) as HTMLInputElement).value).toBe("Studio");
  await user.keyboard("{Escape}");
  expect(screen.queryByRole("dialog")).toBeNull();
  expect(document.activeElement).toBe(trigger);
});

test("editor accepts typing and emits updated HTML", async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  vi.spyOn(window, "scrollBy").mockImplementation(() => {});
  const rectangle = new DOMRect(0, 0, 1, 1);
  Object.defineProperty(Range.prototype, "getClientRects", { configurable: true, value: () => ({ 0: rectangle, length: 1, item: () => rectangle }) });
  Object.defineProperty(Range.prototype, "getBoundingClientRect", { configurable: true, value: () => rectangle });
  render(<Editor label="Project notes" initialContent="<p>Notes</p>" onChange={onChange} />);
  const textbox = await screen.findByRole("textbox", { name: "Project notes" });
  expect(textbox.textContent).toContain("Notes");
  textbox.focus();
  await user.type(textbox, " update", { skipClick: true });
  expect(onChange).toHaveBeenCalled();
  expect(onChange.mock.lastCall?.[0]).toContain("update");
});

test("glimpse preserves a usable destination link and opens a preview", async () => {
  const user = userEvent.setup();
  vi.stubGlobal("ResizeObserver", class { observe() {} unobserve() {} disconnect() {} });
  render(<Glimpse href="/components/button" label="Button" title="Button preview" description="Actions" />);
  const link = screen.getByRole("link", { name: "Button" });
  expect(link.getAttribute("href")).toBe("/components/button");
  await user.hover(link);
  expect(await screen.findByText("Button preview")).toBeTruthy();
});

test("marquee pause control changes state and hides duplicate content", async () => {
  const user = userEvent.setup();
  render(<Marquee label="Items" items={["Alpha", "Beta"]} />);
  await user.click(screen.getByRole("button", { name: "Pause marquee" }));
  expect(screen.getByRole("button", { name: "Play marquee" })).toBeTruthy();
  expect(screen.getByLabelText("Items").querySelector('div[aria-hidden="true"]')?.textContent).toContain("Alpha");
});
