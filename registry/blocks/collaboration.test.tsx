import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarStack } from "../ui/avatar-stack";
import { Cursor, CursorBody, CursorName, CursorPointer } from "../ui/cursor";
import { Calendar } from "../ui/calendar";
import { List } from "../ui/list";
import { DataTable, type TableColumn } from "../ui/table";
import { Gantt, type GanttItem } from "./gantt";
import { Kanban, type KanbanCard } from "./kanban";

afterEach(cleanup);

test("avatar stack is named and cursor remains decorative", () => {
  render(<><AvatarStack aria-label="Team" size={36}><Avatar><AvatarFallback>AL</AvatarFallback></Avatar><Avatar><AvatarFallback>BM</AvatarFallback></Avatar></AvatarStack><Cursor><CursorPointer /><CursorBody><CursorName>Alex</CursorName></CursorBody></Cursor></>);
  expect(screen.getByRole("group", { name: "Team" }).textContent).toContain("AL");
  expect(screen.getByText("Alex").closest("[data-slot=cursor]")?.getAttribute("aria-hidden")).toBe("true");
});

test("calendar navigates dates and announces scheduled events", async () => {
  const user = userEvent.setup();
  render(<Calendar defaultValue={new Date(2026, 8, 14, 12)} events={[{ id: "review", title: "Design review", startAt: new Date(2026, 8, 15, 12) }]} />);
  const selected = screen.getByRole("button", { name: /Monday, September 14, 2026/ });
  selected.focus();
  await user.keyboard("{ArrowRight}");
  const next = screen.getByRole("button", { name: /Tuesday, September 15, 2026, 1 events/ });
  expect(document.activeElement).toBe(next);
  await user.keyboard("{Enter}");
  expect(within(screen.getByRole("list")).getByText("Design review")).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Next month" }));
  expect(screen.getByRole("grid", { name: /October 2026/ })).toBeTruthy();
});

test("list reorders with an accessible move control", async () => {
  const user = userEvent.setup();
  function Example() { const [items, setItems] = useState([{ id: "a", label: "Alpha" }, { id: "b", label: "Beta" }]); return <List aria-label="Steps" items={items} onItemsChange={setItems} />; }
  render(<Example />);
  await user.click(screen.getByRole("button", { name: "Move Beta up" }));
  expect(screen.getAllByRole("listitem")[0].textContent).toContain("Beta");
});

test("table sorts numeric values with aria-sort", async () => {
  const user = userEvent.setup();
  const columns: TableColumn<{ id: string; count: number }>[] = [{ id: "id", header: "Name", cell: (row) => row.id }, { id: "count", header: "Count", cell: (row) => row.count, sortValue: (row) => row.count }];
  render(<DataTable caption="Counts" columns={columns} data={[{ id: "high", count: 9 }, { id: "low", count: 2 }]} rowId={(row) => row.id} />);
  await user.click(screen.getByRole("button", { name: "Count" }));
  expect(screen.getByRole("columnheader", { name: "Count" }).getAttribute("aria-sort")).toBe("ascending");
  expect(screen.getAllByRole("row")[1].textContent).toContain("low");
});

test("gantt moves a task by keyboard", async () => {
  const user = userEvent.setup();
  function Example() { const [items, setItems] = useState<GanttItem[]>([{ id: "a", title: "Research", startAt: new Date(2026, 8, 14, 12), endAt: new Date(2026, 8, 16, 12) }]); return <Gantt items={items} onItemsChange={setItems} startDate={new Date(2026, 8, 14, 12)} days={7} />; }
  render(<Example />);
  const bar = screen.getByRole("button", { name: /Research, Sep 14 to Sep 16/ });
  bar.focus();
  await user.keyboard("{ArrowRight}");
  expect(screen.getByRole("button", { name: /Research, Sep 15 to Sep 17/ })).toBeTruthy();
});

test("kanban moves a card across columns and announces the change", async () => {
  const user = userEvent.setup();
  function Example() { const [cards, setCards] = useState<KanbanCard[]>([{ id: "a", title: "Write spec", columnId: "todo" }]); return <Kanban columns={[{ id: "todo", title: "To do" }, { id: "done", title: "Done" }]} cards={cards} onCardsChange={setCards} />; }
  render(<Example />);
  await user.click(screen.getByRole("button", { name: "Move Write spec right" }));
  expect(screen.getByRole("region", { name: "Done" }).textContent).toContain("Write spec");
  expect(screen.getByRole("status").textContent).toContain("moved to Done");
});
