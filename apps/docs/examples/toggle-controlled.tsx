"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { Toggle } from "../../../registry/ui/toggle";
export default function Example() {
  const [pressed, setPressed] = useState(false);
  return (
    <div className="space-y-3">
      <Toggle
        size="sm"
        variant="outline"
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Show favorites only"
      >
        <Star aria-hidden="true" />
        Favorites
      </Toggle>
      <p role="status" className="text-sm">
        {pressed ? "Only favorites are visible" : "All items are visible"}
      </p>
    </div>
  );
}
