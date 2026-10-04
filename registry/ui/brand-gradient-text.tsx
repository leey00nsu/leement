"use client";

import * as React from "react";
import { useMotionLoop } from "@/lib/leement-motion";

import { cn } from "@/lib/utils";

type BrandGradientTextProps = React.ComponentProps<"span"> & { animated?: boolean; paused?: boolean };

function BrandGradientText({ animated = true, paused = false, className, ref: forwardedRef, ...props }: BrandGradientTextProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(forwardedRef, () => ref.current!);
  const { active } = useMotionLoop(ref, { backgroundPosition: ["0% 50%", "100% 50%"] }, "cycle-brand-text", paused || !animated, undefined, true);
  return <span ref={ref} data-motion-paused={paused || !active} data-slot="brand-gradient-text" data-animated={animated} className={cn("lm-brand-gradient-text", className)} {...props} />;
}

export type { BrandGradientTextProps };
export { BrandGradientText };
