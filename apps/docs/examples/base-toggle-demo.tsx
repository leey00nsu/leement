"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { BookmarkIcon } from "lucide-react";

import { Toggle } from "../../../registry/ui/toggle";

function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  );
}

export default function Example() {
  return <ToggleDemo />;
}
