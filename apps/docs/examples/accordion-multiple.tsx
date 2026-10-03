"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../registry/ui/accordion";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [value, setValue] = useState<string[]>(["source", "theme"]);
  return (
    <div className="w-full max-w-lg space-y-4">
      <Accordion multiple value={value} onValueChange={setValue}>
        {[
          {
            id: "source",
            title: "Source ownership",
            text: "Edit installed components in your own project.",
          },
          {
            id: "theme",
            title: "Theme overrides",
            text: "Override semantic tokens for your product.",
          },
        ].map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.text}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button size="sm" variant="outline" onClick={() => setValue([])}>
        Collapse all
      </Button>
      <p role="status" className="text-sm">
        Open: {value.join(", ") || "none"}
      </p>
    </div>
  );
}
