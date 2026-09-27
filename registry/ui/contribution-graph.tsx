"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Contribution = { date: string; count: number };
type ContributionGraphProps = Omit<React.ComponentProps<"div">, "onSelect"> & {
  data: Contribution[];
  startDate: string;
  endDate: string;
  onSelect?: (day: Contribution) => void;
  locale?: string;
};

function ContributionGraph({ data, startDate, endDate, onSelect, locale = "en-US", className, ...props }: ContributionGraphProps) {
  const counts = React.useMemo(() => new Map(data.map((day) => [day.date, day.count])), [data]);
  const [active, setActive] = React.useState<Contribution | null>(null);
  const start = new Date(`${startDate}T12:00:00`);
  const end = new Date(`${endDate}T12:00:00`);
  const days: Contribution[] = [];
  if (!Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime())) {
    for (const date = new Date(start); date <= end && days.length < 366; date.setDate(date.getDate() + 1)) {
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      days.push({ date: key, count: counts.get(key) ?? 0 });
    }
  }
  const max = Math.max(1, ...days.map((day) => day.count));
  const formatter = new Intl.DateTimeFormat(locale, { dateStyle: "medium" });
  const monthFormatter = new Intl.DateTimeFormat(locale, { month: "short" });
  const leading = days.length ? new Date(`${days[0]?.date}T12:00:00`).getDay() : 0;
  const weeks = Math.ceil((leading + days.length) / 7);
  const firstDay = days[0] ? new Date(`${days[0].date}T12:00:00`) : null;
  const monthLabels = days.flatMap((day, index) => index === 0 || day.date.slice(0, 7) !== days[index - 1]?.date.slice(0, 7) ? [{ date: day.date, week: Math.floor((leading + index) / 7) }] : []);
  const total = days.reduce((sum, day) => sum + day.count, 0);

  return <div data-slot="contribution-graph" className={cn("rounded-xl border border-border bg-card p-4 text-card-foreground", className)} {...props}>
    <div className="overflow-x-auto pb-2">
      <div className="min-w-max" style={{ width: Math.max(weeks * 17, 280) }}>
        <div aria-hidden="true" className="relative mb-1 h-4 text-xs text-muted-foreground">{monthLabels.map(({ date, week }) => <span key={date} className="absolute whitespace-nowrap" style={{ left: week * 17 }}>{monthFormatter.format(new Date(`${date}T12:00:00`))}</span>)}</div>
        <div role="group" aria-label="Daily contributions" className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${weeks}, 14px)`, gridTemplateRows: "repeat(7, 14px)", gridAutoFlow: "column" }}>
          {Array.from({ length: weeks * 7 }, (_, index) => {
            const offset = index - leading;
            const date = firstDay ? new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + offset, 12) : null;
            const key = date ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}` : "";
            const day = days[offset];
            if (!day) return <span key={`empty-${index}`} aria-hidden="true" />;
            return <button key={key} type="button" onClick={() => { setActive(day); onSelect?.(day); }} aria-label={`${formatter.format(date!)}: ${day.count} contributions`} aria-pressed={active?.date === day.date} className={cn("size-3.5 rounded-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-card", day.count === 0 ? "bg-muted" : day.count / max < 0.4 ? "bg-data-accent/35" : day.count / max < 0.75 ? "bg-data-accent/65" : "bg-data-accent", active?.date === day.date && "ring-2 ring-foreground ring-offset-1 ring-offset-card")} />;
          })}
        </div>
      </div>
    </div>
    <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
      <p role="status">{active ? `${formatter.format(new Date(`${active.date}T12:00:00`))}: ${active.count} contributions` : `${total} contributions in ${days.length} days`}</p>
      <div aria-hidden="true" className="flex items-center gap-1">Less {["bg-muted", "bg-data-accent/35", "bg-data-accent/65", "bg-data-accent"].map((tone) => <span key={tone} className={cn("size-3 rounded-[3px]", tone)} />)} More</div>
    </div>
  </div>;
}

export { ContributionGraph };
export type { Contribution, ContributionGraphProps };
