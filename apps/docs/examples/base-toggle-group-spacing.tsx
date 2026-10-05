"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../registry/ui/toggle-group";

function ToggleGroupSpacing() {
  return (
    <ToggleGroup size="sm" defaultValue={["top"]} variant="outline" spacing={2}>
      <ToggleGroupItem value="top" aria-label="Toggle top">
        Top
      </ToggleGroupItem>
      <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
        Bottom
      </ToggleGroupItem>
      <ToggleGroupItem value="left" aria-label="Toggle left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Toggle right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export default function Example() {
  return <ToggleGroupSpacing />;
}
