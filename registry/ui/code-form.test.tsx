import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CodeBlock } from "./code-block";
import { ContributionGraph } from "./contribution-graph";
import { Snippet } from "./snippet";
import { Choicebox } from "./choicebox";
import { Combobox } from "./combobox";
import { Dropzone } from "./dropzone";
import { MiniCalendar } from "./mini-calendar";
import { Tags } from "./tags";

afterEach(cleanup);

test("code block copies the exact source", async () => {
  const user = userEvent.setup();
  const writeText = vi.spyOn(navigator.clipboard, "writeText");
  render(<CodeBlock code={"const a = 1;\nconst b = 2;"} language="TypeScript" showLineNumbers />);
  await user.click(screen.getByRole("button", { name: "Copy code" }));
  expect(writeText).toHaveBeenCalledWith("const a = 1;\nconst b = 2;");
  expect(screen.getByRole("button", { name: "Code copied" })).toBeTruthy();
});

test("code block switches examples and renders untrusted code as text", async () => {
  const user = userEvent.setup();
  const writeText = vi.spyOn(navigator.clipboard, "writeText");
  const unsafe = '<img src="x" onerror="alert(1)">';
  const { container } = render(<CodeBlock samples={[{ label: "TypeScript", filename: "app.ts", language: "typescript", code: "const value = 1;" }, { label: "HTML", filename: "index.html", language: "html", code: unsafe }]} showLineNumbers />);
  await user.click(screen.getByRole("combobox", { name: "Code example" }));
  await user.click(await screen.findByRole("option", { name: "HTML" }));
  expect(screen.getByLabelText("html code").textContent).toBe(unsafe);
  expect(container.querySelector("img")).toBeNull();
  await user.click(screen.getByRole("button", { name: "Copy code" }));
  expect(writeText).toHaveBeenCalledWith(unsafe);
});

test("contribution graph announces the selected daily count", async () => {
  const user = userEvent.setup();
  const onSelect = vi.fn();
  render(<ContributionGraph startDate="2026-09-01" endDate="2026-09-03" data={[{ date: "2026-09-02", count: 4 }]} onSelect={onSelect} />);
  await user.click(screen.getByRole("button", { name: /Sep 2, 2026: 4 contributions/ }));
  expect(onSelect).toHaveBeenCalledWith({ date: "2026-09-02", count: 4 });
  expect(screen.getByRole("status").textContent).toContain("4 contributions");
});

test("snippet keyboard switches format and copies the active command", async () => {
  const user = userEvent.setup();
  const writeText = vi.spyOn(navigator.clipboard, "writeText");
  render(<Snippet options={[{ label: "pnpm", code: "pnpm add x" }, { label: "npm", code: "npm i x" }]} />);
  screen.getByRole("tab", { name: "pnpm" }).focus();
  await user.keyboard("{ArrowRight}");
  expect(screen.getByRole("tab", { name: "npm" }).getAttribute("aria-selected")).toBe("true");
  await user.click(screen.getByRole("button", { name: "Copy snippet" }));
  expect(writeText).toHaveBeenCalledWith("npm i x");
});

test("choicebox changes a native radio selection", async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();
  render(<Choicebox legend="Workspace" choices={[{ value: "a", title: "Personal" }, { value: "b", title: "Team" }]} onValueChange={onValueChange} />);
  await user.click(screen.getByRole("radio", { name: "Team" }));
  expect(onValueChange).toHaveBeenCalledWith("b");
  expect((screen.getByRole("radio", { name: "Team" }) as HTMLInputElement).checked).toBe(true);
});

test("combobox filters and selects by keyboard", async () => {
  const user = userEvent.setup();
  render(<Combobox label="Assignee" options={[{ value: "a", label: "Alex" }, { value: "j", label: "Jamie" }]} />);
  await user.click(screen.getByRole("combobox", { name: "Assignee" }));
  await user.type(screen.getByRole("combobox"), "Jam{Enter}");
  expect((screen.getByRole("combobox") as HTMLInputElement).value).toBe("Jamie");
  expect(screen.getByRole("combobox").getAttribute("aria-expanded")).toBe("false");
});

test("dropzone forwards browser-selected files", async () => {
  const user = userEvent.setup();
  const onFiles = vi.fn();
  render(<Dropzone label="Attachments" onFiles={onFiles} />);
  const input = screen.getByLabelText("Attachments") as HTMLInputElement;
  const file = new File(["hello"], "hello.txt", { type: "text/plain" });
  await user.upload(input, file);
  expect(onFiles).toHaveBeenCalledWith([file]);
  expect(screen.getByRole("status").textContent).toContain("hello.txt");
});

test("mini calendar moves between weeks and selects a day", async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();
  render(<MiniCalendar defaultValue={new Date(2026, 8, 27, 12)} onValueChange={onValueChange} />);
  await user.click(screen.getByRole("button", { name: "Next week" }));
  await user.click(screen.getByRole("button", { name: /Monday, October 5, 2026/ }));
  expect(onValueChange).toHaveBeenCalledOnce();
});

test("tags add and remove values with keyboard and named controls", async () => {
  const user = userEvent.setup();
  render(<Tags label="Project tags" defaultValue={["Design"]} />);
  await user.type(screen.getByRole("textbox", { name: "Project tags" }), "Research{Enter}");
  expect(screen.getByRole("button", { name: "Remove Research" })).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Remove Design" }));
  expect(screen.queryByRole("button", { name: "Remove Design" })).toBeNull();
});
