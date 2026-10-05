"use client";
import { useStyleMotion } from "@/lib/leement-motion";

import { Toggle as Primitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const toggleVariants = cva("inline-flex shrink-0 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium text-foreground outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring data-pressed:ring-1 data-pressed:ring-muted-foreground data-pressed:bg-accent data-pressed:text-accent-foreground data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4", {variants:{variant:{default:"border-transparent",outline:"border-border data-pressed:border-primary"},size:{default:"h-10",sm:"h-9",lg:"h-11"}},defaultVariants:{variant:"default",size:"default"}});
type ToggleProps = Primitive.Props & VariantProps<typeof toggleVariants>;
function Toggle({ ref: motionForwardedRef, className, variant = "default", size = "default", ...props }: ToggleProps) {
  const styleMotionRef1 = useStyleMotion<HTMLButtonElement>(motionForwardedRef);

  return <Primitive ref={styleMotionRef1} data-slot="toggle" className={(state) => cn(toggleVariants({variant,size}), typeof className === "function" ? className(state) : className)} {...props} />;
}
export { Toggle, toggleVariants };
export type { ToggleProps };
