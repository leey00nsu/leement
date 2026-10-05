"use client";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { useStyleMotion } from "@/lib/leement-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const badgeVariants = cva("inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground", secondary: "border-transparent bg-secondary text-secondary-foreground", outline: "border-border text-foreground", ghost: "border-transparent text-foreground hover:bg-muted", link: "border-transparent text-primary underline-offset-4 hover:underline", destructive: "border-transparent bg-destructive/10 text-destructive" } }, defaultVariants: { variant: "default" } });
type BadgeProps = useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;
function Badge({ ref, className, variant = "default", render, ...props }: BadgeProps) {
  const motionRef = useStyleMotion<HTMLSpanElement>(ref);
  return useRender({defaultTagName:"span", ref:motionRef, render, state:{slot:"badge", variant}, props:mergeProps<"span">({className:cn(badgeVariants({variant}), "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40", className)}, props)});
}

export { Badge, badgeVariants };

export type { BadgeProps };
