"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type GanttItem = { id: string; title: string; startAt: Date; endAt: Date; group?: string };
type GanttProps = Omit<React.ComponentProps<"div">, "children"> & {
  items: GanttItem[];
  onItemsChange: (items: GanttItem[]) => void;
  startDate?: Date;
  days?: number;
  locale?: string;
};

function dayNumber(date: Date) { return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000; }
function addDays(date: Date, amount: number) { return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount, 12); }
function Gantt({ items, onItemsChange, startDate, days = 14, locale = "en-US", className, ...props }: GanttProps) {
  const first = React.useMemo(() => { const date = startDate ?? new Date(); return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12); }, [startDate]);
  const dayCount = Math.min(Math.max(days, 7), 90);
  const dates = Array.from({ length: dayCount }, (_, index) => addDays(first, index));
  const gridStyle = { gridTemplateColumns: `9rem repeat(${dayCount}, 2.5rem)` };
  const dragged = React.useRef<string | null>(null);
  const [announcement, setAnnouncement] = React.useState("");
  const format = new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" });
  const monthFormat = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" });
  const monthGroups = dates.flatMap((date, index) => index === 0 || date.getMonth() !== dates[index - 1]?.getMonth() ? [{ date, start: index, count: dates.slice(index).findIndex((candidate) => candidate.getMonth() !== date.getMonth()) }] : []).map((group) => ({ ...group, count: group.count < 0 ? dates.length - group.start : group.count }));
  function update(id: string, direction: number, resize = false) {
    const item = items.find((entry) => entry.id === id);
    if (!item) return;
    const updated = resize ? { ...item, endAt: addDays(item.endAt, direction) } : { ...item, startAt: addDays(item.startAt, direction), endAt: addDays(item.endAt, direction) };
    if (dayNumber(updated.endAt) < dayNumber(updated.startAt)) return;
    onItemsChange(items.map((entry) => entry.id === id ? updated : entry));
    setAnnouncement(`${item.title} ${resize ? "duration" : "start"} changed to ${format.format(resize ? updated.endAt : updated.startAt)}`);
  }
  function drop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const id = dragged.current ?? event.dataTransfer.getData("text/plain");
    const item = items.find((entry) => entry.id === id);
    if (!item) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const targetIndex = Math.max(0, Math.min(dayCount - 1, Math.floor((event.clientX - rect.left) / 40)));
    update(id, dayNumber(dates[targetIndex] ?? first) - dayNumber(item.startAt));
    dragged.current = null;
  }
  return <div data-slot="gantt" className={cn("w-full overflow-x-auto rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <div className="min-w-max">
      <div className="grid border-b border-border bg-muted/50 text-xs text-muted-foreground" style={gridStyle}><div className="sticky left-0 z-10 border-r border-border bg-muted/50 px-3 py-2 font-medium">Task</div>{monthGroups.map((group) => <div key={dayNumber(group.date)} className="border-r border-border px-2 py-2 font-medium" style={{ gridColumn: `${group.start + 2} / span ${group.count}` }}>{monthFormat.format(group.date)}</div>)}</div>
      <div aria-hidden="true" className="grid border-b border-border bg-muted/30 text-center text-xs text-muted-foreground" style={gridStyle}><div className="sticky left-0 z-10 border-r border-border bg-muted/30" />{dates.map((date) => <div key={dayNumber(date)} className={cn("border-r border-border/50 py-1 last:border-0", (date.getDay() === 0 || date.getDay() === 6) && "bg-muted/50")} title={format.format(date)}>{date.getDate()}</div>)}</div>
      <div role="list" aria-label="Timeline tasks">{items.map((item, index) => {
        const start = dayNumber(item.startAt) - dayNumber(first);
        const end = dayNumber(item.endAt) - dayNumber(first);
        const visibleStart = Math.max(0, start);
        const visibleEnd = Math.min(dayCount - 1, end);
        return <React.Fragment key={item.id}>{item.group && (index === 0 || item.group !== items[index - 1]?.group) && <div className="sticky left-0 z-10 border-b border-border bg-muted/40 px-3 py-2 text-xs font-semibold text-muted-foreground">{item.group}</div>}<div role="listitem" className="grid min-h-14 border-b border-border last:border-0" style={gridStyle}>
          <div className="sticky left-0 z-10 flex min-w-0 flex-col justify-center border-r border-border bg-card px-3 text-sm"><span className="truncate font-medium">{item.title}</span><span className="text-xs text-muted-foreground">{Math.max(1, dayNumber(item.endAt) - dayNumber(item.startAt) + 1)} days</span></div>
          <div className="relative grid items-center" style={{ gridColumn: "2 / -1", gridTemplateColumns: `repeat(${dayCount}, 2.5rem)` }} onDragOver={(event) => event.preventDefault()} onDrop={drop}>
            {dates.map((date) => <div key={dayNumber(date)} aria-hidden="true" className="h-full border-r border-border/50 last:border-0" />)}
            {visibleStart <= visibleEnd && <button type="button" draggable onDragStart={(event) => { dragged.current = item.id; event.dataTransfer.setData("text/plain", item.id); event.dataTransfer.effectAllowed = "move"; }} onDragEnd={() => { dragged.current = null; }} onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); update(item.id, event.key === "ArrowLeft" ? -1 : 1, event.shiftKey); } }} aria-label={`${item.title}, ${format.format(item.startAt)} to ${format.format(item.endAt)}. Arrow keys move; Shift and arrow keys resize.`} className="z-10 mx-0.5 h-8 truncate rounded-md bg-primary px-2 text-left text-xs font-medium text-primary-foreground shadow-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40" style={{ gridRow: 1, gridColumn: `${visibleStart + 1} / span ${visibleEnd - visibleStart + 1}` }}>{item.title}</button>}
          </div>
        </div></React.Fragment>;
      })}</div>
    </div>
    <span role="status" className="sr-only">{announcement}</span>
  </div>;
}

export { Gantt };
export type { GanttItem, GanttProps };
