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
  return <div data-slot="contribution-graph" className={cn("rounded-xl border border-border bg-card p-4 text-card-foreground", className)} {...props}>
    <div role="group" aria-label="Daily contributions" className="flex flex-wrap gap-1">{days.map((day) => <button key={day.date} type="button" onClick={() => { setActive(day); onSelect?.(day); }} aria-label={`${formatter.format(new Date(`${day.date}T12:00:00`))}: ${day.count} contributions`} aria-pressed={active?.date === day.date} className={cn("size-3.5 rounded-sm border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", day.count === 0 ? "bg-muted" : day.count / max < 0.4 ? "bg-data-accent/35" : day.count / max < 0.75 ? "bg-data-accent/65" : "bg-data-accent")} />)}</div>
    <p className="mt-3 text-xs text-muted-foreground" role="status">{active ? `${formatter.format(new Date(`${active.date}T12:00:00`))}: ${active.count} contributions` : `${days.reduce((sum, day) => sum + day.count, 0)} contributions in ${days.length} days`}</p>
  </div>;
}

export { ContributionGraph };
export type { Contribution, ContributionGraphProps };
