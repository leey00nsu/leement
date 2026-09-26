"use client";

import { useState } from "react";
import { Kanban, type KanbanCard } from "../../../registry/blocks/kanban";

const columns = [{ id: "todo", title: "To do" }, { id: "doing", title: "In progress" }, { id: "done", title: "Done" }];

export default function KanbanExample() {
  const [cards, setCards] = useState<KanbanCard[]>([{ id: "a", title: "Write spec", columnId: "todo" }, { id: "b", title: "Review tokens", columnId: "doing" }, { id: "c", title: "Build preview", columnId: "done" }]);
  return <Kanban columns={columns} cards={cards} onCardsChange={setCards} />;
}
