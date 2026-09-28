"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MiniCalendarProps = Omit<React.ComponentProps<"div">, "defaultValue"> & {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date) => void;
  locale?: string;
};

function atNoon(date: Date, offset: number) { return new Date(date.getFullYear(), date.getMonth(), date.getDate() + offset, 12); }
function MiniCalendar({ value, defaultValue, onValueChange, locale = "en-US", className, ...props }: MiniCalendarProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? new Date());
  const selected = value ?? internal;
  const [week, setWeek] = React.useState(() => atNoon(selected, -selected.getDay()));
  const dayRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const label = new Intl.DateTimeFormat(locale, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const days = Array.from({ length: 7 }, (_, index) => atNoon(week, index));
  function select(date: Date) { if (value === undefined) setInternal(date); onValueChange?.(date); }
  function navigate(offset: number) { setWeek((current) => atNoon(current, offset)); }
  return <div data-slot="mini-calendar" className={cn("flex w-fit max-w-full items-center gap-0.5 rounded-xl border border-border bg-card p-2 text-card-foreground", className)} {...props}>
    <button type="button" aria-label="Previous week" onClick={() => navigate(-7)} className="flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ChevronLeft className="size-4" /></button>
    <div role="group" aria-label="Choose a day" className="flex items-center gap-0.5">{days.map((day, index) => <button key={day.toDateString()} ref={(node) => { dayRefs.current[index] = node; }} type="button" aria-label={label.format(day)} aria-pressed={day.toDateString() === selected.toDateString()} onClick={() => select(day)} onKeyDown={(event) => { if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return; event.preventDefault(); const nextIndex = index + (event.key === "ArrowRight" ? 1 : -1); if (nextIndex >= 0 && nextIndex < 7) dayRefs.current[nextIndex]?.focus(); else { navigate(nextIndex < 0 ? -7 : 7); window.setTimeout(() => dayRefs.current[nextIndex < 0 ? 6 : 0]?.focus(), 0); } }} className={cn("flex h-12 w-8 shrink-0 flex-col items-center justify-center rounded-md text-xs hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", day.toDateString() === selected.toDateString() && "bg-primary text-primary-foreground hover:bg-primary")}><span className="text-[10px]">{new Intl.DateTimeFormat(locale, { month: "short" }).format(day)}</span><span className="text-sm font-medium">{day.getDate()}</span></button>)}</div>
    <button type="button" aria-label="Next week" onClick={() => navigate(7)} className="flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ChevronRight className="size-4" /></button>
    <span className="sr-only" aria-live="polite">{label.format(days[0]!)} through {label.format(days[6]!)}</span>
  </div>;
}

export { MiniCalendar };
export type { MiniCalendarProps };
