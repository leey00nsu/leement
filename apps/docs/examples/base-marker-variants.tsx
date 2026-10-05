"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Marker, MarkerContent } from "../../../registry/ui/marker";

function MarkerVariantsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <MarkerContent>A default marker for inline notes.</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>A separator marker</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>A border marker for row boundaries.</MarkerContent>
      </Marker>
    </div>
  );
}

export default function Example() {
  return <MarkerVariantsDemo />;
}
