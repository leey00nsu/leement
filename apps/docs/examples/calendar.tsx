"use client";

import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import { Calendar, type DateRange } from "../../../registry/ui/calendar";

const events = [
  { id: "kickoff", title: "Project kickoff", startAt: new Date(2026, 8, 3, 12) },
  { id: "research", title: "Research sprint", startAt: new Date(2026, 8, 7, 12), endAt: new Date(2026, 8, 10, 12) },
  { id: "review", title: "Design review", startAt: new Date(2026, 8, 14, 12) },
  { id: "critique", title: "Team critique", startAt: new Date(2026, 8, 14, 12) },
  { id: "ship", title: "Release", startAt: new Date(2026, 8, 17, 12) },
  { id: "retro", title: "Retrospective", startAt: new Date(2026, 8, 25, 12) },
];

export default function CalendarExample() {
  const [date, setDate] = useState(new Date(2026, 8, 14, 12));
  const [variant, setVariant] = useState<"schedule" | "date" | "range">("schedule");
  const [range, setRange] = useState<DateRange | undefined>({from: new Date(2026, 8, 7, 12), to: new Date(2026, 8, 10, 12)});
  return <div className="w-full space-y-3"><div className="flex flex-wrap gap-2"><Button size="sm" variant={variant === "schedule" ? "secondary" : "ghost"} aria-pressed={variant === "schedule"} onClick={() => setVariant("schedule")}>Schedule</Button><Button size="sm" variant={variant === "date" ? "secondary" : "ghost"} aria-pressed={variant === "date"} onClick={() => setVariant("date")}>Date</Button><Button size="sm" variant={variant === "range" ? "secondary" : "ghost"} aria-pressed={variant === "range"} onClick={() => setVariant("range")}>Range</Button></div>{variant === "range" ? <Calendar mode="range" range={range} onRangeChange={setRange} min={new Date(2026, 8, 1)} max={new Date(2026, 8, 30)} /> : <Calendar value={date} onValueChange={setDate} events={events} variant={variant} />}</div>;
}
