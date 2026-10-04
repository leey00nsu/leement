"use client";
import { useStyleMotion } from "@/lib/leement-motion";
import * as React from "react";
import { cn } from "@/lib/utils";
function Textarea({ ref: motionForwardedRef, className, ...props }: React.ComponentProps<"textarea">) {
  const styleMotionRef1 = useStyleMotion<HTMLTextAreaElement>(motionForwardedRef);
 return <textarea ref={styleMotionRef1} data-slot="textarea" className={cn("min-h-24 w-full min-w-0 resize-y rounded-md border border-input bg-(--lm-color-surface-default) px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-destructive/30 md:text-sm", className)} {...props} />; }
export { Textarea };
