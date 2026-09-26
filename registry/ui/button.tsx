"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border text-sm font-medium transition-colors duration-(--lm-motion-duration-normal) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  { variants: {
    variant: {
      primary: "border-transparent bg-primary text-primary-foreground hover:bg-(--lm-color-action-primary-hover)",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-(--lm-color-action-secondary-hover)",
      outline: "border-border bg-background text-foreground hover:bg-muted",
      ghost: "border-transparent bg-transparent text-foreground hover:bg-muted",
      destructive: "border-transparent bg-destructive text-white hover:bg-(--lm-color-action-danger-hover)",
    },
    size: { sm: "h-9 px-3", default: "h-10 px-4", lg: "h-11 px-5", icon: "size-10 px-0" },
  }, defaultVariants: { variant: "primary", size: "default" } }
);

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean; loading?: boolean };
function Button({ className, variant, size, asChild = false, loading = false, disabled, children, onClick, tabIndex, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return <Component data-slot="button" className={cn(buttonVariants({ variant, size, className }))} disabled={!asChild ? disabled || loading : undefined} aria-disabled={asChild && (disabled || loading) ? true : undefined} aria-busy={loading || undefined} tabIndex={asChild && (disabled || loading) ? -1 : tabIndex} onClick={(event) => { if (disabled || loading) { event.preventDefault(); return; } onClick?.(event); }} {...props}>
    {loading && !asChild ? <><span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />{children}</> : children}
  </Component>;
}
export { Button, buttonVariants };
export type { ButtonProps };
