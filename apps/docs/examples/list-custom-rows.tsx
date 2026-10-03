"use client";
import { useState } from "react";
import { List } from "../../../registry/ui/list";
import { Badge } from "../../../registry/ui/badge";
export default function Example() {
  const [items, setItems] = useState([
    {
      id: "brief",
      label: "Product brief",
      description: "Ready",
      owner: "Alex",
    },
    {
      id: "tokens",
      label: "Token review",
      description: "In progress",
      owner: "Blair",
    },
    {
      id: "docs",
      label: "Documentation",
      description: "Planned",
      owner: "Casey",
    },
  ]);
  return (
    <div className="w-full max-w-md space-y-4">
      <List
        aria-label="Project deliverables"
        items={items}
        onItemsChange={setItems}
        renderItem={(item) => (
          <div className="min-w-0 space-y-1">
            <p className="text-sm font-medium">{item.label}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>{item.owner}</span>
              <Badge variant="secondary">{item.description}</Badge>
            </div>
          </div>
        )}
      />
      <p role="status" className="text-xs text-muted-foreground">
        Order: {items.map((item) => item.label).join(" → ")}
      </p>
    </div>
  );
}
