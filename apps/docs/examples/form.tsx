"use client";
import { useState } from "react";
import { EventForm } from "../../../registry/blocks/form";
export default function EventFormExample() {
  const [result, setResult] = useState("");
  return (
    <div className="w-full min-w-0">
      <EventForm
        onSubmit={(data) => {
          setResult(`Local demo received ${data.name}. No event was saved.`);
        }}
        onSaveDraft={(data) => {
          setResult(
            `Local draft: ${data.name || "Untitled event"}. No data was persisted.`,
          );
        }}
      />
      <p role="status" className="px-4 text-sm text-muted-foreground">
        {result}
      </p>
    </div>
  );
}
