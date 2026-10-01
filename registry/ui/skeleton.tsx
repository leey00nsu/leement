"use client";

import * as React from "react";
import { useMotionActivity } from "@/lib/leement-motion";

import { cn } from "@/lib/utils";

type SkeletonProps = React.ComponentProps<"div"> & { variant?: "neutral" | "brand"; paused?: boolean };

function Skeleton({ className, variant = "neutral", paused = false, ref: forwardedRef, ...props }: SkeletonProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(forwardedRef, () => ref.current!);
  const { active } = useMotionActivity(ref);
  return (
    <div
      ref={ref}
      data-motion-paused={paused || !active}
      data-slot="skeleton"
      data-variant={variant}
      className={cn("rounded-md", variant === "brand" ? "lm-brand-skeleton" : "animate-pulse bg-muted motion-reduce:animate-none data-[motion-paused=true]:[animation-play-state:paused]", className)}
      {...props}
    />
  );
}

export type { SkeletonProps };
export { Skeleton };
