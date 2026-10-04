"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { motionSeconds, motionEasing, useMotionRevision } from "@/lib/leement-motion";

import * as React from "react";
import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";
const OpenContext = React.createContext(false);
function HoverCard({ open: controlled, defaultOpen = false, onOpenChange, ...props }: React.ComponentProps<typeof Primitive.Root>) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const open = controlled ?? internal;
  return <OpenContext.Provider value={open}><Primitive.Root open={open} onOpenChange={(next) => { if (controlled === undefined) setInternal(next); onOpenChange?.(next); }} {...props} /></OpenContext.Provider>;
}
// Keep native handlers inside nativeProps so Motion does not reinterpret HTML onDrag.
const MotionContent = motion.create(React.forwardRef<HTMLDivElement, { style?: React.CSSProperties; children?: React.ReactNode; nativeProps: React.ComponentProps<typeof Primitive.Content> & { "data-slot"?: string } }>(({ nativeProps, ...animationProps }, ref) => <Primitive.Content {...nativeProps} {...animationProps} style={{ ...nativeProps.style, ...animationProps.style }} ref={ref} />));

const HoverCardTrigger = Primitive.Trigger;
function HoverCardContent({ className, align = "center", sideOffset = 8, children, ...props }: ComponentProps<typeof Primitive.Content>) { const open = React.useContext(OpenContext); useMotionRevision(); const reduced = useReducedMotion(); const tokenElement = typeof document === "undefined" ? null : document.documentElement; const transition = { duration: !reduced && tokenElement ? motionSeconds(tokenElement, "duration-fast") : 0, ease: tokenElement ? motionEasing(tokenElement, "standard") : "linear" as const };
  return <Primitive.Portal forceMount><AnimatePresence>{open && <React.Fragment key="content"><MotionContent ref={props.ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition} nativeProps={{ ...props, forceMount: true, "data-slot": "hover-card-content", "align": align, "sideOffset": sideOffset, "className": cn("z-50 w-72 max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-popover p-4 text-popover-foreground shadow-md", className) }}>{children}<Primitive.Arrow className="fill-popover" /></MotionContent></React.Fragment>}</AnimatePresence></Primitive.Portal>;
}
export { HoverCard, HoverCardTrigger, HoverCardContent };
