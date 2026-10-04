"use client";
import { useStyleMotion } from "@/lib/leement-motion";

import { Toggle as Primitive } from "@base-ui/react/toggle";
import { cn } from "@/lib/utils";
type ToggleProps = Primitive.Props & { variant?: "default" | "outline"; size?: "sm" | "default" };
function Toggle({ ref: motionForwardedRef, className, variant = "default", size = "default", ...props }: ToggleProps) {
  const styleMotionRef1 = useStyleMotion<HTMLButtonElement>(motionForwardedRef);

  return <Primitive ref={styleMotionRef1} data-slot="toggle" className={(state) => cn("inline-flex shrink-0 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium text-foreground outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring data-pressed:ring-1 data-pressed:ring-muted-foreground data-pressed:bg-accent data-pressed:text-accent-foreground data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4", variant === "outline" ? "border-border data-pressed:border-primary" : "border-transparent", size === "sm" ? "h-9" : "h-10", typeof className === "function" ? className(state) : className)} {...props} />;
}
export { Toggle };
export type { ToggleProps };
