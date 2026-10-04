"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  motionSeconds,
  motionEasing,
  useMotionRevision,
} from "@/lib/leement-motion";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
const TooltipProvider = TooltipPrimitive.Provider;
const OpenContext = React.createContext(false);
function Tooltip({
  open: controlled,
  defaultOpen = false,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const open = controlled ?? internal;
  return (
    <OpenContext.Provider value={open}>
      <TooltipPrimitive.Root
        open={open}
        onOpenChange={(next) => {
          if (controlled === undefined) setInternal(next);
          onOpenChange?.(next);
        }}
        {...props}
      />
    </OpenContext.Provider>
  );
}
// Keep native handlers inside nativeProps so Motion does not reinterpret HTML onDrag.
const MotionContent = motion.create(
  React.forwardRef<
    HTMLDivElement,
    {
      style?: React.CSSProperties;
      children?: React.ReactNode;
      nativeProps: React.ComponentProps<typeof TooltipPrimitive.Content> & {
        "data-slot"?: string;
      };
    }
  >(({ nativeProps, children, ...animationProps }, ref) => (
    <TooltipPrimitive.Content
      {...nativeProps}
      {...animationProps}
      style={{ ...nativeProps.style, ...animationProps.style }}
      ref={ref}
    >
      {children ?? nativeProps.children}
    </TooltipPrimitive.Content>
  )),
);

const TooltipTrigger = TooltipPrimitive.Trigger;
function TooltipContent({
  className,
  sideOffset = 4,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  const open = React.useContext(OpenContext);
  useMotionRevision();
  const reduced = useReducedMotion();
  const tokenElement =
    typeof document === "undefined" ? null : document.documentElement;
  const transition = {
    duration:
      !reduced && tokenElement
        ? motionSeconds(tokenElement, "duration-fast")
        : 0,
    ease: tokenElement
      ? motionEasing(tokenElement, "standard")
      : ("linear" as const),
  };
  return (
    <TooltipPrimitive.Portal forceMount>
      <AnimatePresence>
        {open && (
          <React.Fragment key="content">
            <MotionContent
              ref={props.ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              nativeProps={{
                ...props,
                forceMount: true,
                "data-slot": "tooltip-content",
                sideOffset: sideOffset,
                className: cn(
                  "z-50 max-w-xs rounded-md bg-foreground px-3 py-1.5 text-xs text-background shadow-md",
                  className,
                ),
              }}
            >
              {children}
            </MotionContent>
          </React.Fragment>
        )}
      </AnimatePresence>
    </TooltipPrimitive.Portal>
  );
}
export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
