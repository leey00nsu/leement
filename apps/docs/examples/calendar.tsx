"use client";

import { useState } from "react";
import { Calendar } from "../../../registry/ui/calendar";

const events = [{ id: "review", title: "Design review", startAt: new Date(2026, 8, 14, 12) }, { id: "ship", title: "Release", startAt: new Date(2026, 8, 17, 12) }];

export default function CalendarExample() {
  const [date, setDate] = useState(new Date(2026, 8, 14, 12));
  return <Calendar value={date} onValueChange={setDate} events={events} />;
}
