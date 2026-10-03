"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CalendarProps = Omit<React.ComponentProps<"div">, "defaultValue" | "onSelect"> & {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date) => void;
  min?: Date;
  max?: Date;
  locale?: string;
  startDay?: 0 | 1;
  variant?: "schedule" | "date";
  events?: Array<{ id: string; title: string; startAt: Date; endAt?: Date }>;
};

function dateNumber(date: Date) { return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate(); }
function sameDay(a: Date | undefined, b: Date) { return a ? dateNumber(a) === dateNumber(b) : false; }
function shift(date: Date, days: number) { return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days, 12); }

function Calendar({ className, value, defaultValue, onValueChange, min, max, locale = "en-US", startDay = 0, variant = "schedule", events = [], ...props }: CalendarProps) {
  const today = React.useMemo(() => new Date(), []);
  const [internalValue, setInternalValue] = React.useState<Date | undefined>(defaultValue);
  const selected = value ?? internalValue;
  const [view, setView] = React.useState(() => new Date((value ?? defaultValue ?? today).getFullYear(), (value ?? defaultValue ?? today).getMonth(), 1, 12));
  const [focused, setFocused] = React.useState(() => value ?? defaultValue ?? today);
  const pendingFocus = React.useRef(false);
  const dayRefs = React.useRef(new Map<number, HTMLButtonElement>());
  const monthLabel = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(view);
  const dateLabel = new Intl.DateTimeFormat(locale, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const firstOffset = (new Date(view.getFullYear(), view.getMonth(), 1).getDay() - startDay + 7) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: Math.ceil((firstOffset + daysInMonth) / 7) * 7 }, (_, index) => index - firstOffset + 1);
  const inRange = (day: Date) => (!min || dateNumber(day) >= dateNumber(min)) && (!max || dateNumber(day) <= dateNumber(max));
  const eventsOn = (day: Date) => events.filter((event) => dateNumber(event.startAt) <= dateNumber(day) && dateNumber(event.endAt ?? event.startAt) >= dateNumber(day));

  React.useEffect(() => {
    if (pendingFocus.current) {
      dayRefs.current.get(dateNumber(focused))?.focus();
      pendingFocus.current = false;
    }
  }, [focused, view]);

  function moveFocus(next: Date) {
    if (!inRange(next)) return;
    pendingFocus.current = true;
    setFocused(next);
    if (next.getMonth() !== view.getMonth() || next.getFullYear() !== view.getFullYear()) setView(new Date(next.getFullYear(), next.getMonth(), 1, 12));
  }
  function select(next: Date) {
    if (value === undefined) setInternalValue(next);
    setFocused(next);
    onValueChange?.(next);
  }
  function changeMonth(amount: number) {
    const nextView = new Date(view.getFullYear(), view.getMonth() + amount, 1, 12);
    setView(nextView);
    const nextDay = new Date(nextView.getFullYear(), nextView.getMonth(), Math.min(focused.getDate(), new Date(nextView.getFullYear(), nextView.getMonth() + 1, 0).getDate()), 12);
    setFocused(nextDay);
    pendingFocus.current = true;
  }

  const dateOnly = variant === "date";
  return <div data-slot="calendar" data-variant={variant} className={cn("rounded-xl border border-border bg-card text-card-foreground", dateOnly ? "w-[302px] max-w-full p-3" : "w-full", className)} {...props}>
    <div className={cn("flex items-center justify-between gap-3", !dateOnly && "border-b border-border px-3 py-2")}>
      <button type="button" aria-label="Previous month" onClick={() => changeMonth(-1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"><ChevronLeft className="size-4" /></button>
      <div aria-live="polite" className="text-sm font-semibold">{monthLabel}</div>
      <button type="button" aria-label="Next month" onClick={() => changeMonth(1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"><ChevronRight className="size-4" /></button>
    </div>
    <div className={cn(!dateOnly && "overflow-x-auto")}>
    <div role="grid" aria-label={`Choose date, ${monthLabel}`} className={cn(!dateOnly && "min-w-[560px]")}>
      <div role="row" className={cn("grid grid-cols-7", dateOnly && "gap-1")}>{Array.from({ length: 7 }, (_, index) => <div key={`weekday-${index}`} role="columnheader" className={cn("text-xs text-muted-foreground", dateOnly ? "flex h-9 min-w-0 items-center justify-center" : "border-b border-r border-border px-2 py-2 last:border-r-0")}>{new Intl.DateTimeFormat(locale, { weekday: "short" }).format(new Date(2024, 0, 7 + ((index + startDay) % 7)))}</div>)}</div>
      {Array.from({ length: cells.length / 7 }, (_, weekIndex) => <div key={weekIndex} role="row" className={cn("grid grid-cols-7", dateOnly && "gap-1")}>{cells.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, index) => {
        if (day < 1 || day > daysInMonth) return <div key={`blank-${index}`} role="gridcell" className={cn(!dateOnly && "min-h-24 border-b border-r border-border bg-muted/30 last:border-r-0")} />;
        const current = new Date(view.getFullYear(), view.getMonth(), day, 12);
        const disabled = !inRange(current);
        const active = sameDay(selected, current);
        const dayEvents = eventsOn(current);
        const count = dayEvents.length;
        return <div key={day} role="gridcell" aria-selected={active} className={cn("min-w-0", dateOnly ? "h-9" : "min-h-24 border-b border-r border-border p-1.5 last:border-r-0", active && !dateOnly && "bg-accent/50")}>
          <button ref={(node) => { if (node) dayRefs.current.set(dateNumber(current), node); }} type="button" aria-label={`${dateLabel.format(current)}${count ? `, ${count} events` : ""}`} aria-current={sameDay(today, current) ? "date" : undefined} disabled={disabled} tabIndex={sameDay(focused, current) ? 0 : -1} onClick={() => select(current)} onKeyDown={(event) => {
            const delta = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key as "ArrowLeft" | "ArrowRight" | "ArrowUp" | "ArrowDown"];
            if (delta !== undefined) { event.preventDefault(); moveFocus(shift(current, delta)); }
          }} className={cn("flex items-center justify-center rounded-md text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-40", dateOnly ? "h-9 w-full" : "size-8", active && "bg-primary text-primary-foreground hover:bg-primary")}>{day}</button>
          {!dateOnly && <div aria-hidden="true" className="mt-1 space-y-0.5">{dayEvents.slice(0, 2).map((event) => <p key={event.id} className="truncate rounded-sm bg-data-accent/15 px-1 py-0.5 text-[11px] leading-tight text-foreground">{event.title}</p>)}{count > 2 && <p className="px-1 text-[11px] text-muted-foreground">+{count - 2} more</p>}</div>}
        </div>;
      })}</div>)}
    </div>
    </div>
    {!dateOnly && selected && events.length > 0 && <div className="px-4 py-3 text-sm"><p className="font-medium">{dateLabel.format(selected)}</p><ul className="mt-2 space-y-1 text-muted-foreground">{eventsOn(selected).map((event) => <li key={event.id}>{event.title}</li>)}{eventsOn(selected).length === 0 && <li>No events</li>}</ul></div>}
  </div>;
}

export { Calendar };
export type { CalendarProps };
