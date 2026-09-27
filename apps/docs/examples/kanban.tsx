"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "../../../registry/ui/avatar";
import { Kanban, type KanbanCard } from "../../../registry/blocks/kanban";

type WorkCard = KanbanCard & { owner: string; due: string };
const columns = [{ id: "todo", title: "Planned" }, { id: "doing", title: "In progress" }, { id: "done", title: "Done" }];
const initial: WorkCard[] = [
  { id: "a", title: "Interview customers", columnId: "todo", owner: "AL", due: "Sep 18" },
  { id: "b", title: "Review design tokens", columnId: "todo", owner: "BK", due: "Sep 20" },
  { id: "c", title: "Prepare handoff", columnId: "todo", owner: "CP", due: "Sep 23" },
  { id: "d", title: "Build prototype", columnId: "doing", owner: "DN", due: "Sep 17" },
  { id: "e", title: "Audit accessibility", columnId: "doing", owner: "EH", due: "Sep 19" },
  { id: "f", title: "Write product brief", columnId: "done", owner: "AL", due: "Sep 11" },
  { id: "g", title: "Map user journey", columnId: "done", owner: "BK", due: "Sep 12" },
];

export default function KanbanExample() {
  const [cards, setCards] = useState(initial);
  return <Kanban columns={columns} cards={cards} onCardsChange={setCards} renderCard={(card) => <div className="space-y-3"><p className="min-h-10 text-sm font-medium">{card.title}</p><div className="flex items-center justify-between gap-2"><span className="text-xs text-muted-foreground">{card.due}</span><Avatar className="size-6"><AvatarFallback className="text-[10px]">{card.owner}</AvatarFallback></Avatar></div></div>} />;
}
