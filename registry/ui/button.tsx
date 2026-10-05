"use client";
import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { mergeProps } from "@base-ui/react/merge-props";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useMotionLoop, useStyleMotion } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border text-sm font-medium focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  { variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground hover:bg-(--lm-color-action-primary-hover)",
      link: "border-transparent bg-transparent text-primary underline-offset-4 hover:underline",
      primary: "border-transparent bg-primary text-primary-foreground hover:bg-(--lm-color-action-primary-hover)",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-(--lm-color-action-secondary-hover) aria-expanded:bg-(--lm-color-action-secondary-hover)",
      outline: "border-border bg-background text-foreground hover:bg-muted aria-expanded:bg-muted",
      ghost: "border-transparent bg-transparent text-foreground hover:bg-muted aria-expanded:bg-muted",
      destructive: "border-transparent bg-destructive/10 text-destructive hover:bg-destructive/20",
    },
    size: { xs: "h-8 px-2.5 text-xs", sm: "h-9 px-3", default: "h-10 px-4", lg: "h-11 px-5", icon: "size-10 px-0", "icon-sm": "size-9 px-0", "icon-xs": "size-8 px-0", "icon-lg": "size-11 px-0" },
  }, defaultVariants: { variant: "primary", size: "default" } }
);

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants> & { asChild?: boolean; loading?: boolean };
function ButtonLoading() {
  const ref = React.useRef<HTMLSpanElement>(null);
  useMotionLoop(ref, { rotate: [0, 360] }, "cycle-spin");
  return <span ref={ref} aria-hidden="true" className="size-4 rounded-full border-2 border-current border-r-transparent" />;
}
function Button({ ref: forwardedRef, className, variant = "primary", size = "default", asChild = false, loading = false, disabled, children, onClick, tabIndex, ...props }: ButtonProps) {
  const motionRef = useStyleMotion<HTMLElement>(forwardedRef);
  const classes = (state: ButtonPrimitive.State) => cn(buttonVariants({ variant, size }), typeof className === "function" ? className(state) : className);
  if (asChild) {
    const state = {disabled:Boolean(disabled || loading)};
    const nativeProps = {...props, style:typeof props.style === "function" ? props.style(state) : props.style};
    delete nativeProps.render; delete nativeProps.nativeButton; delete nativeProps.focusableWhenDisabled;
    const legacyProps = mergeProps<"button">({onClickCapture:event=>{if (state.disabled) {event.preventDefault(); event.stopPropagation();}}}, {...nativeProps, onClick:state.disabled ? undefined : onClick});
    return <Slot ref={motionRef} data-slot="button" data-variant={variant} data-size={size} className={classes(state)} aria-disabled={state.disabled || undefined} aria-busy={loading || undefined} tabIndex={state.disabled ? -1 : tabIndex} {...legacyProps}>{children}</Slot>;

  }
  return <ButtonPrimitive ref={motionRef} data-slot="button" data-variant={variant} data-size={size} className={classes} disabled={disabled || loading} aria-busy={loading || undefined} tabIndex={tabIndex} onClick={onClick} {...props}>{loading ? <><ButtonLoading />{children}</> : children}</ButtonPrimitive>;

}
export { Button, buttonVariants };
export type { ButtonProps };
