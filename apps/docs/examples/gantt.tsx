"use client";

import { useState } from "react";
import { Gantt, type GanttItem } from "../../../registry/blocks/gantt";

export default function GanttExample() {
  const [items, setItems] = useState<GanttItem[]>([{ id: "research", title: "Research", startAt: new Date(2026, 8, 14, 12), endAt: new Date(2026, 8, 17, 12) }, { id: "design", title: "Design", startAt: new Date(2026, 8, 18, 12), endAt: new Date(2026, 8, 22, 12) }]);
  return <Gantt items={items} onItemsChange={setItems} startDate={new Date(2026, 8, 14, 12)} days={14} />;
}
