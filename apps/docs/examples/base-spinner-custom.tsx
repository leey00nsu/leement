"use client";
import * as React from "react";
import { useMotionLoop } from "../../../registry/lib/leement-motion";

// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { LoaderIcon } from "lucide-react";

import { cn } from "../../../registry/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  const ref = React.useRef<SVGSVGElement>(null);
  useMotionLoop(ref, { rotate: [0, 360] }, "cycle-spin");
  return (
    <LoaderIcon
      ref={ref}
      role="status"
      aria-label="Loading"
      className={cn("size-4 ", className)}
      {...props}
    />
  );
}

function SpinnerCustom() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  );
}

export default function Example() {
  return <SpinnerCustom />;
}
