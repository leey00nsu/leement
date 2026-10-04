"use client";

import * as React from "react";
import { useMotionLoop } from "@/lib/leement-motion";

import { cn } from "@/lib/utils";

type SkeletonProps = React.ComponentProps<"div"> & { variant?: "neutral" | "brand"; paused?: boolean };

function Skeleton({ className, variant = "neutral", paused = false, ref: forwardedRef, ...props }: SkeletonProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(forwardedRef, () => ref.current!);
  const { active } = useMotionLoop(ref, variant === "brand" ? { backgroundPosition: ["0% 50%", "100% 50%"] } : { opacity: [1, 0.5, 1] }, "cycle-brand-surface", paused, undefined, variant === "brand");
  return (
    <div
      ref={ref}
      data-motion-paused={paused || !active}
      data-slot="skeleton"
      data-variant={variant}
      className={cn("rounded-md", variant === "brand" ? "lm-brand-skeleton" : "bg-muted", className)}
      {...props}
    />
  );
}

export type { SkeletonProps };
export { Skeleton };
