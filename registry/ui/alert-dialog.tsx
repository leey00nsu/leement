"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
function AlertDialogOverlay({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return <AlertDialogPrimitive.Overlay data-slot="alert-dialog-overlay" className={cn("fixed inset-0 z-50 bg-foreground/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 motion-reduce:data-[state=open]:animate-none motion-reduce:data-[state=closed]:animate-none", className)} {...props} />;
}
function AlertDialogContent({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return <AlertDialogPortal><AlertDialogOverlay /><AlertDialogPrimitive.Content data-slot="alert-dialog-content" className={cn("fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-xl border border-border bg-popover p-6 text-popover-foreground shadow-lg focus:outline-none", className)} {...props} /></AlertDialogPortal>;
}
function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) { return <div data-slot="alert-dialog-header" className={cn("flex flex-col gap-1.5", className)} {...props} />; }
function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) { return <div data-slot="alert-dialog-footer" className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />; }
function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) { return <AlertDialogPrimitive.Title data-slot="alert-dialog-title" className={cn("text-lg font-semibold", className)} {...props} />; }
function AlertDialogDescription({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Description>) { return <AlertDialogPrimitive.Description data-slot="alert-dialog-description" className={cn("text-sm text-muted-foreground", className)} {...props} />; }
function AlertDialogAction({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Action>) { return <AlertDialogPrimitive.Action data-slot="alert-dialog-action" className={cn(buttonVariants({ variant: "destructive" }), className)} {...props} />; }
function AlertDialogCancel({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) { return <AlertDialogPrimitive.Cancel data-slot="alert-dialog-cancel" className={cn(buttonVariants({ variant: "outline" }), className)} {...props} />; }

export { AlertDialog, AlertDialogTrigger, AlertDialogPortal, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel };
