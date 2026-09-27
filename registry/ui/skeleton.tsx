import type * as React from "react";

import { cn } from "@/lib/utils";

type SkeletonProps = React.ComponentProps<"div"> & { variant?: "neutral" | "brand" };

function Skeleton({ className, variant = "neutral", ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      data-variant={variant}
      className={cn("rounded-md", variant === "brand" ? "lm-brand-skeleton" : "animate-pulse bg-muted motion-reduce:animate-none", className)}
      {...props}
    />
  );
}

export type { SkeletonProps };
export { Skeleton };
