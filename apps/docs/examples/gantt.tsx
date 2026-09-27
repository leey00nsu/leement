"use client";

import { useState } from "react";
import { Gantt, type GanttItem } from "../../../registry/blocks/gantt";

const initial: GanttItem[] = [
  { id: "interviews", title: "Customer interviews", group: "Discovery", startAt: new Date(2026, 8, 3, 12), endAt: new Date(2026, 8, 16, 12) },
  { id: "audit", title: "Product audit", group: "Discovery", startAt: new Date(2026, 8, 10, 12), endAt: new Date(2026, 8, 22, 12) },
  { id: "concept", title: "Concept review", group: "Design", startAt: new Date(2026, 8, 18, 12), endAt: new Date(2026, 9, 4, 12) },
  { id: "prototype", title: "Prototype", group: "Design", startAt: new Date(2026, 8, 28, 12), endAt: new Date(2026, 9, 20, 12) },
  { id: "build", title: "Implementation", group: "Delivery", startAt: new Date(2026, 9, 12, 12), endAt: new Date(2026, 10, 8, 12) },
  { id: "qa", title: "Quality review", group: "Delivery", startAt: new Date(2026, 10, 1, 12), endAt: new Date(2026, 10, 13, 12) },
];

export default function GanttExample() {
  const [items, setItems] = useState(initial);
  return <Gantt items={items} onItemsChange={setItems} startDate={new Date(2026, 8, 1, 12)} days={75} />;
}
