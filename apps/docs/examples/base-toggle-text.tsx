"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { ItalicIcon } from "lucide-react";

import { Toggle } from "../../../registry/ui/toggle";

function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  );
}

export default function Example() {
  return <ToggleText />;
}
