"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { motionSeconds, motionEasing, useMotionRevision } from "@/lib/leement-motion";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
const OpenContext = React.createContext(false);
function Dialog({ open: controlled, defaultOpen = false, onOpenChange, ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const open = controlled ?? internal;
  return <OpenContext.Provider value={open}><DialogPrimitive.Root open={open} onOpenChange={(next) => { if (controlled === undefined) setInternal(next); onOpenChange?.(next); }} {...props} /></OpenContext.Provider>;
}
// Keep native handlers inside nativeProps so Motion does not reinterpret HTML onDrag.
const MotionContent = motion.create(React.forwardRef<HTMLDivElement, { style?: React.CSSProperties; children?: React.ReactNode; nativeProps: React.ComponentProps<typeof DialogPrimitive.Content> & { "data-slot"?: string } }>(({ nativeProps, ...animationProps }, ref) => <DialogPrimitive.Content {...nativeProps} {...animationProps} style={{ ...nativeProps.style, ...animationProps.style }} ref={ref} />));
const MotionOverlay = motion.create(React.forwardRef<HTMLDivElement, { style?: React.CSSProperties; children?: React.ReactNode; nativeProps: React.ComponentProps<typeof DialogPrimitive.Overlay> & { "data-slot"?: string } }>(({ nativeProps, ...animationProps }, ref) => <DialogPrimitive.Overlay {...nativeProps} {...animationProps} style={{ ...nativeProps.style, ...animationProps.style }} ref={ref} />));

const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;
function DialogOverlay({ className, transition, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay> & { transition?: React.ComponentProps<typeof MotionOverlay>["transition"] }) { return <MotionOverlay ref={props.ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition} nativeProps={{ ...props, forceMount: true, "data-slot": "dialog-overlay", "className": cn("fixed inset-0 z-50 bg-foreground/50", className) }} />; }
function DialogContent({ className, children, showCloseButton = true, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & { showCloseButton?: boolean }) { const open = React.useContext(OpenContext); useMotionRevision(); const reduced = useReducedMotion(); const tokenElement = typeof document === "undefined" ? null : document.documentElement; const transition = { duration: !reduced && tokenElement ? motionSeconds(tokenElement, "duration-normal") : 0, ease: tokenElement ? motionEasing(tokenElement, "standard") : "linear" as const };  return <DialogPortal forceMount><AnimatePresence>{open && <React.Fragment key="content"><DialogOverlay transition={transition} /><MotionContent ref={props.ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition} nativeProps={{ ...props, forceMount: true, "data-slot": "dialog-content", "className": cn("fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-xl border border-border bg-popover p-6 text-popover-foreground shadow-lg focus:outline-none", className) }}>{children}{showCloseButton && <DialogClose className="absolute right-4 top-4 rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><X className="size-4" /><span className="sr-only">Close</span></DialogClose>}</MotionContent></React.Fragment>}</AnimatePresence></DialogPortal>; }
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) { return <div className={cn("flex flex-col gap-1.5 pr-6", className)} {...props} />; }
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) { return <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />; }
function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) { return <DialogPrimitive.Title className={cn("text-lg font-semibold", className)} {...props} />; }
function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) { return <DialogPrimitive.Description className={cn("text-sm text-muted-foreground", className)} {...props} />; }
export { Dialog, DialogTrigger, DialogClose, DialogPortal, DialogOverlay, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };
