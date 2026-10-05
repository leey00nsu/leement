"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Marker, MarkerContent } from "../../../registry/ui/marker";

function MarkerShimmerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker role="status">
        <MarkerContent>
          <ShimmerText>Thinking...</ShimmerText>
        </MarkerContent>
      </Marker>
      <Marker variant="separator" role="status">
        <MarkerContent>
          <ShimmerText>Reading 4 files</ShimmerText>
        </MarkerContent>
      </Marker>
    </div>
  );
}

export default function Example() {
  return <MarkerShimmerDemo />;
}

import * as React from "react";
import { useMotionLoop } from "../../../registry/lib/leement-motion";
function ShimmerText({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  useMotionLoop(
    ref,
    { backgroundPosition: ["200% 0%", "-200% 0%"] },
    "cycle-pulse",
  );
  return (
    <span
      ref={ref}
      className="bg-[linear-gradient(90deg,var(--lm-color-foreground-muted)_30%,var(--lm-color-foreground-default)_50%,var(--lm-color-foreground-muted)_70%)] bg-[length:200%_100%] bg-clip-text text-transparent motion-reduce:bg-none motion-reduce:text-muted-foreground"
    >
      {children}
    </span>
  );
}
