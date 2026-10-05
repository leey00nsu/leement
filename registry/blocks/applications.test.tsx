import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Codebase, type CodebaseFile } from "./codebase";
import { CollaborativeCanvas, type CanvasObject } from "./collaborative-canvas";
import { Roadmap, type RoadmapFeature, type RoadmapMarker } from "./roadmap";

afterEach(cleanup);
const files: CodebaseFile[] = [
  { id: "one", filename: "one.ts", code: "const first = 1;", language: "ts" },
  { id: "two", filename: "two.ts", code: "const second = 2;", language: "ts" },
];

test("codebase keeps tree, selector and copy code synchronized", async () => {
  const user = userEvent.setup();
  const change = vi.fn();
  render(
    <Codebase
      files={files}
      nodes={files.map((file) => ({ id: file.id, label: file.filename }))}
      onSelectedFileChange={change}
    />,
  );
  await user.click(screen.getByRole("treeitem", { name: "two.ts" }));
  expect(change.mock.calls.at(-1)?.[0].id).toBe("two");
  expect(
    screen.getByRole("combobox", { name: "Current file" }).textContent,
  ).toContain("two.ts");
  await user.click(screen.getByRole("button", { name: "Copy code" }));
  expect(await navigator.clipboard.readText()).toBe("const second = 2;");
});

test("codebase respects a controlled selection and an empty file list", async () => {
  const user = userEvent.setup();
  const change = vi.fn();
  const { rerender } = render(
    <Codebase
      files={files}
      nodes={files.map((file) => ({ id: file.id, label: file.filename }))}
      selectedFileId="one"
      onSelectedFileChange={change}
    />,
  );
  await user.click(screen.getByRole("treeitem", { name: "two.ts" }));
  expect(change).toHaveBeenCalledWith(files[1]);
  expect(
    screen.getByRole("combobox", { name: "Current file" }).textContent,
  ).toContain("one.ts");
  rerender(<Codebase files={[]} nodes={[]} />);
  expect(screen.getByRole("status").textContent).toBe("No files to display.");
});

test("canvas keyboard movement is controlled, bounded and announced", async () => {
  const user = userEvent.setup();
  const change = vi.fn();
  function Example() {
    const [objects, setObjects] = useState<CanvasObject[]>([
      { id: "a", label: "Brief", position: { x: 99, y: 50 } },
    ]);
    return (
      <CollaborativeCanvas
        participants={[{ id: "p", name: "Alex", position: { x: 30, y: 30 } }]}
        objects={objects}
        onObjectsChange={(next) => {
          setObjects(next);
          change(next);
        }}
      />
    );
  }
  render(<Example />);
  const object = screen.getByRole("button", { name: /^Move Brief/ });
  object.focus();
  await user.keyboard("{ArrowRight}{Shift>}{ArrowUp}{/Shift}");
  expect(change.mock.calls.at(-1)?.[0][0].position).toEqual({ x: 100, y: 40 });
  expect(screen.getByRole("status").textContent).toContain("100%, 40%");
  expect(
    screen.getByRole("group", { name: "1 participants: Alex" }),
  ).toBeTruthy();
});

test("canvas objects are disabled when no change callback is supplied", () => {
  render(
    <CollaborativeCanvas
      participants={[]}
      objects={[{ id: "a", label: "Brief", position: { x: 50, y: 50 } }]}
    />,
  );
  expect(
    screen
      .getByRole("button", { name: /^Move Brief/ })
      .hasAttribute("disabled"),
  ).toBe(true);
  expect(screen.getByText("Read-only canvas.")).toBeTruthy();
});

const start = new Date(2026, 9, 5, 12);
const features: RoadmapFeature[] = [
  {
    id: "a",
    name: "Alpha",
    startAt: start,
    endAt: new Date(2026, 9, 7, 12),
    statusId: "todo",
  },
  {
    id: "b",
    name: "Beta",
    startAt: start,
    endAt: new Date(2026, 9, 10, 12),
    statusId: "todo",
  },
];
const statuses = [
  { id: "todo", name: "Planned" },
  { id: "done", name: "Done" },
];
function RoadmapExample() {
  const [data, setData] = useState(features);
  const [markers, setMarkers] = useState<RoadmapMarker[]>([]);
  return (
    <Roadmap
      features={data}
      statuses={statuses}
      onFeaturesChange={setData}
      startDate={start}
      markers={markers}
      onMarkersChange={setMarkers}
    />
  );
}

test("roadmap updates survive view changes and preserve tasks hidden by filters", async () => {
  const user = userEvent.setup();
  render(<RoadmapExample />);
  const filter = screen.getByRole("textbox", { name: "Filter roadmap" });
  await user.type(filter, "Alpha");
  const bar = screen.getByRole("button", { name: /Alpha, Oct 5 to Oct 7/ });
  bar.focus();
  await user.keyboard("{ArrowRight}");
  await user.click(screen.getByRole("tab", { name: "Table" }));
  expect(screen.getByRole("table").textContent).toContain("Oct 6, 2026");
  await user.clear(filter);
  expect(screen.getByRole("table").textContent).toContain("Beta");
  await user.click(screen.getByRole("tab", { name: "Kanban" }));
  await user.click(screen.getByRole("button", { name: "Move Alpha right" }));
  expect(
    within(screen.getByRole("region", { name: "Done" })).getByText("Alpha"),
  ).toBeTruthy();
  await user.click(screen.getByRole("tab", { name: "Table" }));
  const row = screen.getByRole("row", { name: /Alpha.*Done/ });
  expect(row.textContent).toContain("Oct 6, 2026");
});

test("roadmap saves local edits, creates and removes milestones", async () => {
  const user = userEvent.setup();
  render(<RoadmapExample />);
  await user.click(screen.getByRole("button", { name: "View Alpha" }));
  const dialog = screen.getByRole("dialog", { name: "Edit feature" });
  const name = within(dialog).getByRole("textbox", { name: "Name" });
  await user.clear(name);
  await user.type(name, "Alpha revised");
  await user.click(
    within(dialog).getByRole("button", { name: "Save feature" }),
  );
  expect(screen.queryByRole("dialog")).toBeNull();
  expect(
    screen.getByRole("button", { name: "View Alpha revised" }),
  ).toBeTruthy();
  await user.type(
    screen.getByRole("textbox", { name: "Milestone name" }),
    "Launch",
  );
  await user.click(screen.getByRole("button", { name: "Add milestone" }));
  expect(
    screen.getByRole("button", { name: "Remove milestone Launch" }),
  ).toBeTruthy();
  await user.click(
    screen.getByRole("button", { name: "Remove milestone Launch" }),
  );
  expect(
    screen.queryByRole("button", { name: "Remove milestone Launch" }),
  ).toBeNull();
});

test("roadmap list reordering persists into the table view", async () => {
  const user = userEvent.setup();
  render(<RoadmapExample />);
  await user.click(screen.getByRole("tab", { name: "List" }));
  await user.click(screen.getByRole("button", { name: "Move Beta up" }));
  await user.click(screen.getByRole("tab", { name: "Table" }));
  expect(screen.getAllByRole("row")[1]?.textContent).toContain("Beta");
  expect(screen.getAllByRole("row")[2]?.textContent).toContain("Alpha");
});
