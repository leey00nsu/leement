"use client";

import * as React from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

type KanbanColumn = { id: string; title: string };
type KanbanCard = { id: string; title: string; columnId: string; description?: string };
type KanbanProps = Omit<React.ComponentProps<"div">, "children"> & {
  columns: KanbanColumn[];
  cards: KanbanCard[];
  onCardsChange: (cards: KanbanCard[]) => void;
};

function Kanban({ columns, cards, onCardsChange, className, ...props }: KanbanProps) {
  const dragged = React.useRef<string | null>(null);
  const [announcement, setAnnouncement] = React.useState("");
  function move(id: string, columnId: string, beforeId?: string) {
    const card = cards.find((entry) => entry.id === id);
    if (!card || (beforeId && beforeId === id)) return;
    const next = cards.filter((entry) => entry.id !== id);
    const updated = { ...card, columnId };
    const index = beforeId ? next.findIndex((entry) => entry.id === beforeId) : -1;
    next.splice(index < 0 ? next.length : index, 0, updated);
    onCardsChange(next);
    setAnnouncement(`${card.title} moved to ${columns.find((column) => column.id === columnId)?.title ?? columnId}`);
  }
  function moveVertical(card: KanbanCard, amount: -1 | 1) {
    const peers = cards.filter((entry) => entry.columnId === card.columnId);
    const index = peers.findIndex((entry) => entry.id === card.id);
    const target = peers[index + amount];
    if (!target) return;
    const next = [...cards];
    const from = next.findIndex((entry) => entry.id === card.id);
    const to = next.findIndex((entry) => entry.id === target.id);
    const first = next[from];
    const second = next[to];
    if (!first || !second) return;
    next[from] = second;
    next[to] = first;
    onCardsChange(next);
    setAnnouncement(`${card.title} moved ${amount < 0 ? "up" : "down"}`);
  }
  return <div data-slot="kanban" className={cn("w-full overflow-x-auto", className)} {...props}>
    <div className="flex min-w-max gap-4 pb-2">{columns.map((column, columnIndex) => {
      const columnCards = cards.filter((card) => card.columnId === column.id);
      return <section key={column.id} aria-label={column.title} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); const id = dragged.current ?? event.dataTransfer.getData("text/plain"); if (id) move(id, column.id); dragged.current = null; }} className="w-64 shrink-0 rounded-xl border border-border bg-muted/30 p-3">
        <h3 className="mb-3 flex items-center justify-between text-sm font-semibold">{column.title}<span className="text-xs text-muted-foreground">{columnCards.length}</span></h3>
        <ol className="min-h-24 space-y-2">{columnCards.map((card, cardIndex) => <li key={card.id} draggable onDragStart={(event) => { dragged.current = card.id; event.dataTransfer.setData("text/plain", card.id); event.dataTransfer.effectAllowed = "move"; }} onDragEnd={() => { dragged.current = null; }} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); event.stopPropagation(); const id = dragged.current ?? event.dataTransfer.getData("text/plain"); if (id) move(id, column.id, card.id); dragged.current = null; }} className="rounded-lg border border-border bg-card p-3 text-card-foreground shadow-sm">
          <div className="flex items-start gap-2"><GripVertical aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted-foreground" /><div className="min-w-0 flex-1"><p className="text-sm font-medium">{card.title}</p>{card.description && <p className="mt-1 text-xs text-muted-foreground">{card.description}</p>}</div></div>
          <div className="mt-2 flex justify-end gap-1">{([[ArrowLeft, "left", columnIndex > 0, () => move(card.id, columns[columnIndex - 1]?.id ?? card.columnId)], [ArrowUp, "up", cardIndex > 0, () => moveVertical(card, -1)], [ArrowDown, "down", cardIndex < columnCards.length - 1, () => moveVertical(card, 1)], [ArrowRight, "right", columnIndex < columns.length - 1, () => move(card.id, columns[columnIndex + 1]?.id ?? card.columnId)]] as const).map(([Icon, direction, enabled, action]) => <button key={direction} type="button" aria-label={`Move ${card.title} ${direction}`} disabled={!enabled} onClick={action} className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:opacity-30"><Icon className="size-3.5" /></button>)}</div>
        </li>)}</ol>
      </section>;
    })}</div>
    <span role="status" className="sr-only">{announcement}</span>
  </div>;
}

export { Kanban };
export type { KanbanCard, KanbanColumn, KanbanProps };
