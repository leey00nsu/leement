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
  events?: Array<{ id: string; title: string; startAt: Date; endAt?: Date }>;
};

function dateNumber(date: Date) { return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate(); }
function sameDay(a: Date | undefined, b: Date) { return a ? dateNumber(a) === dateNumber(b) : false; }
function shift(date: Date, days: number) { return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days, 12); }

function Calendar({ className, value, defaultValue, onValueChange, min, max, locale = "en-US", startDay = 0, events = [], ...props }: CalendarProps) {
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

  return <div data-slot="calendar" className={cn("w-fit rounded-xl border border-border bg-card p-4 text-card-foreground", className)} {...props}>
    <div className="mb-3 flex items-center justify-between gap-3">
      <button type="button" aria-label="Previous month" onClick={() => changeMonth(-1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"><ChevronLeft className="size-4" /></button>
      <div aria-live="polite" className="text-sm font-semibold">{monthLabel}</div>
      <button type="button" aria-label="Next month" onClick={() => changeMonth(1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"><ChevronRight className="size-4" /></button>
    </div>
    <div role="grid" aria-label={`Choose date, ${monthLabel}`} className="space-y-1">
      <div role="row" className="grid grid-cols-7 gap-1">{Array.from({ length: 7 }, (_, index) => <div key={`weekday-${index}`} role="columnheader" className="flex size-8 items-center justify-center text-xs text-muted-foreground">{new Intl.DateTimeFormat(locale, { weekday: "short" }).format(new Date(2024, 0, 7 + ((index + startDay) % 7)))}</div>)}</div>
      {Array.from({ length: cells.length / 7 }, (_, weekIndex) => <div key={weekIndex} role="row" className="grid grid-cols-7 gap-1">{cells.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, index) => {
        if (day < 1 || day > daysInMonth) return <div key={`blank-${index}`} role="gridcell" />;
        const current = new Date(view.getFullYear(), view.getMonth(), day, 12);
        const disabled = !inRange(current);
        const active = sameDay(selected, current);
        const count = eventsOn(current).length;
        return <div key={day} role="gridcell" aria-selected={active}>
          <button ref={(node) => { if (node) dayRefs.current.set(dateNumber(current), node); }} type="button" aria-label={`${dateLabel.format(current)}${count ? `, ${count} events` : ""}`} aria-current={sameDay(today, current) ? "date" : undefined} disabled={disabled} tabIndex={sameDay(focused, current) ? 0 : -1} onClick={() => select(current)} onKeyDown={(event) => {
            const delta = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key as "ArrowLeft" | "ArrowRight" | "ArrowUp" | "ArrowDown"];
            if (delta !== undefined) { event.preventDefault(); moveFocus(shift(current, delta)); }
          }} className={cn("relative flex size-8 items-center justify-center rounded-md text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-40", active && "bg-primary text-primary-foreground hover:bg-primary")}>{day}{count > 0 && <span aria-hidden="true" className={cn("absolute bottom-0.5 size-1 rounded-full bg-data-accent", active && "bg-primary-foreground")} />}</button>
        </div>;
      })}</div>)}
    </div>
    {selected && events.length > 0 && <div className="mt-4 border-t border-border pt-3 text-sm"><p className="font-medium">{dateLabel.format(selected)}</p><ul className="mt-2 space-y-1 text-muted-foreground">{eventsOn(selected).map((event) => <li key={event.id}>{event.title}</li>)}{eventsOn(selected).length === 0 && <li>No events</li>}</ul></div>}
  </div>;
}

export { Calendar };
export type { CalendarProps };
