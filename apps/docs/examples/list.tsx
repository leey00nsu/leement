"use client";

import { useState } from "react";
import { List } from "../../../registry/ui/list";

export default function ListExample() {
  const [items, setItems] = useState([{ id: "one", label: "Draft plan" }, { id: "two", label: "Review design" }, { id: "three", label: "Publish update" }]);
  return <List aria-label="Project steps" className="w-full max-w-sm" items={items} onItemsChange={setItems} />;
}
