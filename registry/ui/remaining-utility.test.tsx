import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pill } from "./pill";
import { QRCode } from "./qr-code";
import { Rating } from "./rating";
import { RelativeTime } from "./relative-time";
import { Spinner } from "./spinner";
import { Status } from "./status";
import { ThemeSwitcher } from "./theme-switcher";
import { Tree } from "./tree";

afterEach(cleanup);

test("pill exposes a named removal action", async () => {
  const user = userEvent.setup();
  const onRemove = vi.fn();
  render(<Pill label="Design" onRemove={onRemove} />);
  await user.click(screen.getByRole("button", { name: "Remove Design" }));
  expect(onRemove).toHaveBeenCalledOnce();
});

test("QR code renders an SVG and copies its encoded value", async () => {
  const user = userEvent.setup();
  const writeText = vi.spyOn(navigator.clipboard, "writeText");
  render(<QRCode value="https://example.com" label="Example link" />);
  expect(screen.getByRole("img", { name: "Example link QR code" }).querySelector("svg path")).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Copy QR value" }));
  expect(writeText).toHaveBeenCalledWith("https://example.com");
});

test("rating changes by arrow key with radio state", async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();
  render(<Rating label="Quality" defaultValue={2} onValueChange={onValueChange} />);
  screen.getByRole("radio", { name: "2 of 5 stars" }).focus();
  await user.keyboard("{ArrowRight}");
  expect(screen.getByRole("radio", { name: "3 of 5 stars" }).getAttribute("aria-checked")).toBe("true");
  expect(onValueChange).toHaveBeenCalledWith(3);
});

test("relative time includes both relative and absolute meaning", () => {
  render(<RelativeTime date="2026-09-26T12:00:00.000Z" now={new Date("2026-09-27T12:00:00.000Z")} />);
  const time = screen.getByText("yesterday");
  expect(time.getAttribute("datetime")).toBe("2026-09-26T12:00:00.000Z");
  expect(time.getAttribute("aria-label")).toContain("yesterday");
});

test("spinner and status expose text meaning", () => {
  render(<><Spinner label="Saving" /><Status tone="warning" label="Needs review" /></>);
  expect(screen.getByRole("status", { name: "Saving" })).toBeTruthy();
  expect(screen.getByText("Needs review")).toBeTruthy();
});

test("theme switcher changes the Leement document attribute", async () => {
  const user = userEvent.setup();
  render(<ThemeSwitcher defaultValue="light" />);
  await user.click(screen.getByRole("button", { name: "Switch to dark mode" }));
  expect(document.documentElement.dataset.lmTheme).toBe("dark");
  expect(screen.getByRole("button", { name: "Switch to light mode" }).getAttribute("aria-pressed")).toBe("true");
});

test("tree expands and moves selection with arrows", async () => {
  const user = userEvent.setup();
  const onSelect = vi.fn();
  render(<Tree label="Files" onSelect={onSelect} nodes={[{ id: "src", label: "src", children: [{ id: "app", label: "app.tsx" }] }, { id: "config", label: "config.json" }]} />);
  const root = screen.getByRole("treeitem", { name: "src" });
  root.focus();
  await user.keyboard("{ArrowRight}{ArrowDown}{Enter}");
  expect(screen.getByRole("treeitem", { name: "app.tsx" }).getAttribute("aria-selected")).toBe("true");
  expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: "app" }));
});
