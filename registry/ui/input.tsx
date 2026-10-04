"use client";
import { useStyleMotion } from "@/lib/leement-motion";
import * as React from "react";
import { cn } from "@/lib/utils";
function Input({ ref: motionForwardedRef, className, type, ...props }: React.ComponentProps<"input">) {
  const styleMotionRef1 = useStyleMotion<HTMLInputElement>(motionForwardedRef);

  return <input ref={styleMotionRef1} data-slot="input" type={type} className={cn("h-10 w-full min-w-0 rounded-md border border-input bg-(--lm-color-surface-default) px-3 text-base text-foreground file:mr-2 file:inline-flex file:h-full file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/30 md:text-sm", className)} {...props} />;
}
export { Input };
