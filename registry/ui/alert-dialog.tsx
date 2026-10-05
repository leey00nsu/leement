// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";

import * as React from "react"
import { usePresenceMotion } from "@/lib/leement-motion"
import { PopupContainerContext } from "@/lib/popup-scope"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

const ExitContext = React.createContext<((present: boolean) => void) | undefined>(undefined);
function AlertDialog<Payload>({ actionsRef, onOpenChange, ...props }: AlertDialogPrimitive.Root.Props<Payload>) {
  const actions = React.useRef<AlertDialogPrimitive.Root.Actions | null>(null);
  React.useImperativeHandle(actionsRef, () => ({ close: () => actions.current?.close(), unmount: () => actions.current?.unmount() }), []);
  const complete = React.useCallback((present: boolean) => { if (!present) actions.current?.unmount(); }, []);
  return <ExitContext.Provider value={complete}><AlertDialogPrimitive.Root {...props} actionsRef={actions} onOpenChange={(open, details) => { onOpenChange?.(open, details); if (!open && !details.isCanceled) details.preventUnmountOnClose(); }} /></ExitContext.Provider>;
}
function AlertDialogTrigger({ asChild, children, render, ...props }: AlertDialogPrimitive.Trigger.Props & { asChild?: boolean }) {
  const child = asChild && React.isValidElement<{ children?: React.ReactNode }>(children) ? children : undefined;
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} render={child ?? render}>{child ? child.props.children : children}</AlertDialogPrimitive.Trigger>;
}
function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  const container = React.useContext(PopupContainerContext);
  return (
    <AlertDialogPrimitive.Portal container={container ?? undefined} data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  ref: forwardedRef,
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  const ref = usePresenceMotion<HTMLDivElement>(forwardedRef);
  return (
    <AlertDialogPrimitive.Backdrop ref={ref}
      data-slot="alert-dialog-overlay"
      className={(state) => cn(
        "bg-foreground/50 fixed inset-0 isolate z-50",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  ref: forwardedRef,
  className,
  size = "default",
  children,
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: "default" | "sm"
}) {
  const complete = React.useContext(ExitContext);
  const [popup, setPopup] = React.useState<HTMLDivElement | null>(null);
  const presence = usePresenceMotion<HTMLDivElement>(forwardedRef, "fast", false, complete);
  const ref = React.useCallback((node: HTMLDivElement | null) => { presence(node); setPopup(node); }, [presence]);
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup ref={ref}
        data-slot="alert-dialog-content"
        data-size={size}
        className={(state) => cn(
          "bg-popover text-popover-foreground gap-4 rounded-xl border border-border p-6 shadow-lg data-[size=default]:max-w-lg data-[size=sm]:max-w-xs group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-h-[calc(100dvh-2rem)] overflow-y-auto -translate-x-1/2 -translate-y-1/2 outline-none",
          (typeof className === "function" ? className(state) : className)
        )}
        {...props}
      ><PopupContainerContext.Provider value={popup}>{children}</PopupContainerContext.Provider></AlertDialogPrimitive.Popup>
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        " flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn("bg-muted mb-2 inline-flex size-10 items-center justify-center rounded-md sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6", className)}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={(state) => cn("text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={(state) => cn("text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

// Preserve the existing auto-close action. Opt out when awaiting an asynchronous mutation.
function AlertDialogAction({ closeOnClick = true, variant = "destructive", ...props }: React.ComponentProps<typeof Button> & { closeOnClick?: boolean }) {
  const button = <Button data-slot="alert-dialog-action" variant={variant} {...props} />;
  return closeOnClick ? <AlertDialogPrimitive.Close disabled={Boolean(props.disabled || props.loading)} render={button} /> : button;
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      className={(state) => cn("", (typeof className === "function" ? className(state) : className))}
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
