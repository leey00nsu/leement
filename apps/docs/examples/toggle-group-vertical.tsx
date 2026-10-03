"use client";
import { useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../registry/ui/toggle-group";
export default function Example() {
  const [value, setValue] = useState<string[]>(["design"]);
  return (
    <div className="flex max-w-full flex-col items-center gap-3 text-center">
      <ToggleGroup
        orientation="vertical"
        multiple
        aria-label="Visible disciplines"
        value={value}
        onValueChange={setValue}
        className="w-fit"
      >
        {["design", "engineering", "research"].map((item) => (
          <ToggleGroupItem value={item} key={item} variant="outline" size="sm">
            {item}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <p role="status" className="text-sm">
        Visible: {value.join(", ") || "none"}
      </p>
    </div>
  );
}
