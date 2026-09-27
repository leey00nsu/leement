"use client";

import * as React from "react";
import { ChevronDown, ChevronUp, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

type ListItem = { id: string; label: string; description?: string };
type ListProps<T extends ListItem> = Omit<React.ComponentProps<"ol">, "children"> & {
  items: T[];
  onItemsChange: (items: T[]) => void;
  renderItem?: (item: T) => React.ReactNode;
};

function List<T extends ListItem>({ items, onItemsChange, renderItem, className, ...props }: ListProps<T>) {
  const dragged = React.useRef<string | null>(null);
  const [announcement, setAnnouncement] = React.useState("");
  function move(from: number, to: number) {
    if (from === to || from < 0 || to < 0 || to >= items.length) return;
    const next = [...items];
    const [item] = next.splice(from, 1);
    if (!item) return;
    next.splice(to, 0, item);
    onItemsChange(next);
    setAnnouncement(`${item.label} moved to position ${to + 1} of ${items.length}`);
  }
  return <ol data-slot="list" className={cn("space-y-2", className)} {...props}>
    {items.map((item, index) => <li key={item.id} draggable onDragStart={(event) => { dragged.current = item.id; event.dataTransfer.effectAllowed = "move"; }} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); move(items.findIndex((entry) => entry.id === dragged.current), index); dragged.current = null; }} onDragEnd={() => { dragged.current = null; }} className="flex min-w-0 items-center gap-2 rounded-lg border border-border bg-card p-2.5 text-card-foreground shadow-sm hover:border-foreground/20">
      <GripVertical aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
      <div className="min-w-0 flex-1">{renderItem ? renderItem(item) : <><p className="truncate text-sm font-medium">{item.label}</p>{item.description && <p className="truncate text-xs text-muted-foreground">{item.description}</p>}</>}</div>
      <div className="flex shrink-0 gap-1"><button type="button" aria-label={`Move ${item.label} up`} disabled={index === 0} onClick={() => move(index, index - 1)} className="rounded-md p-1 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:opacity-40"><ChevronUp className="size-4" /></button><button type="button" aria-label={`Move ${item.label} down`} disabled={index === items.length - 1} onClick={() => move(index, index + 1)} className="rounded-md p-1 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:opacity-40"><ChevronDown className="size-4" /></button></div>
    </li>)}
    <li role="status" className="sr-only">{announcement}</li>
  </ol>;
}

export { List };
export type { ListItem, ListProps };
