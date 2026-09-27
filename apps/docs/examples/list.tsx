"use client";

import { useState } from "react";
import { List } from "../../../registry/ui/list";

const planned = [
  { id: "brief", label: "Write product brief", description: "Alex · Sep 14" },
  { id: "research", label: "Interview customers", description: "Blair · Sep 16" },
  { id: "tokens", label: "Review design tokens", description: "Casey · Sep 18" },
  { id: "handoff", label: "Prepare handoff", description: "Dana · Sep 21" },
];
const inProgress = [
  { id: "prototype", label: "Build prototype", description: "Eli · Sep 12" },
  { id: "audit", label: "Audit accessibility", description: "Alex · Sep 15" },
];

export default function ListExample() {
  const [queue, setQueue] = useState(planned);
  const [active, setActive] = useState(inProgress);
  return <div className="w-full space-y-5">
    <section aria-label="Planned tasks"><h3 className="mb-2 flex items-center gap-2 text-sm font-semibold"><span className="size-2 rounded-full bg-muted-foreground" />Planned <span className="text-muted-foreground">({queue.length})</span></h3><List aria-label="Reorder planned tasks" items={queue} onItemsChange={setQueue} /></section>
    <section aria-label="In progress tasks"><h3 className="mb-2 flex items-center gap-2 text-sm font-semibold"><span className="size-2 rounded-full bg-data-accent" />In progress <span className="text-muted-foreground">({active.length})</span></h3><List aria-label="Reorder in progress tasks" items={active} onItemsChange={setActive} /></section>
  </div>;
}
