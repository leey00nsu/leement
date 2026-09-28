"use client";

import { RelativeTime } from "../../../registry/ui/relative-time";

const sampleNow = new Date("2026-09-28T12:00:00.000Z");
const events = [
  { label: "Comment added", date: "2026-09-28T11:35:00.000Z" },
  { label: "Draft edited", date: "2026-09-27T12:00:00.000Z" },
  { label: "Review scheduled", date: "2026-09-30T12:00:00.000Z" },
];

export default function RelativeTimeExample() {
  return <div className="w-full max-w-sm rounded-xl border border-border bg-card p-4">
    <p className="mb-3 text-xs text-muted-foreground">Relative to a sample time</p>
    <ul className="space-y-3">{events.map((event) => <li key={event.label} className="flex items-center justify-between gap-3 text-sm"><span>{event.label}</span><RelativeTime date={event.date} now={sampleNow} className="shrink-0" /></li>)}</ul>
  </div>;
}
