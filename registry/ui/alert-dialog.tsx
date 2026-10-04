"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { motionSeconds, motionEasing, useMotionRevision } from "@/lib/leement-motion";


import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const OpenContext = React.createContext(false);
function AlertDialog({ open: controlled, defaultOpen = false, onOpenChange, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const open = controlled ?? internal;
  return <OpenContext.Provider value={open}><AlertDialogPrimitive.Root open={open} onOpenChange={(next) => { if (controlled === undefined) setInternal(next); onOpenChange?.(next); }} {...props} /></OpenContext.Provider>;
}
// Keep native handlers inside nativeProps so Motion does not reinterpret HTML onDrag.
const MotionContent = motion.create(React.forwardRef<HTMLDivElement, { style?: React.CSSProperties; children?: React.ReactNode; nativeProps: React.ComponentProps<typeof AlertDialogPrimitive.Content> & { "data-slot"?: string } }>(({ nativeProps, ...animationProps }, ref) => <AlertDialogPrimitive.Content {...nativeProps} {...animationProps} style={{ ...nativeProps.style, ...animationProps.style }} ref={ref} />));
const MotionOverlay = motion.create(React.forwardRef<HTMLDivElement, { style?: React.CSSProperties; children?: React.ReactNode; nativeProps: React.ComponentProps<typeof AlertDialogPrimitive.Overlay> & { "data-slot"?: string } }>(({ nativeProps, ...animationProps }, ref) => <AlertDialogPrimitive.Overlay {...nativeProps} {...animationProps} style={{ ...nativeProps.style, ...animationProps.style }} ref={ref} />));

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
function AlertDialogOverlay({ className, transition, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Overlay> & { transition?: React.ComponentProps<typeof MotionOverlay>["transition"] }) {
  return <MotionOverlay ref={props.ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition} nativeProps={{ ...props, forceMount: true, "data-slot": "alert-dialog-overlay", "className": cn("fixed inset-0 z-50 bg-foreground/50", className) }} />;
}
function AlertDialogContent({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Content>) { const open = React.useContext(OpenContext); useMotionRevision(); const reduced = useReducedMotion(); const tokenElement = typeof document === "undefined" ? null : document.documentElement; const transition = { duration: !reduced && tokenElement ? motionSeconds(tokenElement, "duration-normal") : 0, ease: tokenElement ? motionEasing(tokenElement, "standard") : "linear" as const };
  return <AlertDialogPortal forceMount><AnimatePresence>{open && <React.Fragment key="content"><AlertDialogOverlay transition={transition} /><MotionContent ref={props.ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition} nativeProps={{ ...props, forceMount: true, "data-slot": "alert-dialog-content", "className": cn("fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-xl border border-border bg-popover p-6 text-popover-foreground shadow-lg focus:outline-none", className) }} /></React.Fragment>}</AnimatePresence></AlertDialogPortal>;
}
function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) { return <div data-slot="alert-dialog-header" className={cn("flex flex-col gap-1.5", className)} {...props} />; }
function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) { return <div data-slot="alert-dialog-footer" className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />; }
function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) { return <AlertDialogPrimitive.Title data-slot="alert-dialog-title" className={cn("text-lg font-semibold", className)} {...props} />; }
function AlertDialogDescription({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Description>) { return <AlertDialogPrimitive.Description data-slot="alert-dialog-description" className={cn("text-sm text-muted-foreground", className)} {...props} />; }
function AlertDialogAction({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Action>) { return <AlertDialogPrimitive.Action data-slot="alert-dialog-action" className={cn(buttonVariants({ variant: "destructive" }), className)} {...props} />; }
function AlertDialogCancel({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) { return <AlertDialogPrimitive.Cancel data-slot="alert-dialog-cancel" className={cn(buttonVariants({ variant: "outline" }), className)} {...props} />; }

export { AlertDialog, AlertDialogTrigger, AlertDialogPortal, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel };
