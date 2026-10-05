// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";

import * as React from "react"
import { usePresenceMotion } from "@/lib/leement-motion"
import { PopupContainerContext } from "@/lib/popup-scope"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

const ExitContext = React.createContext<((present: boolean) => void) | undefined>(undefined);
function Dialog<Payload>({ actionsRef, onOpenChange, ...props }: DialogPrimitive.Root.Props<Payload>) {
  const actions = React.useRef<DialogPrimitive.Root.Actions | null>(null);
  React.useImperativeHandle(actionsRef, () => ({ close: () => actions.current?.close(), unmount: () => actions.current?.unmount() }), []);
  const complete = React.useCallback((present: boolean) => { if (!present) actions.current?.unmount(); }, []);
  return <ExitContext.Provider value={complete}><DialogPrimitive.Root {...props} actionsRef={actions} onOpenChange={(open, details) => { onOpenChange?.(open, details); if (!open && !details.isCanceled) details.preventUnmountOnClose(); }} /></ExitContext.Provider>;
}
function DialogTrigger({ asChild, children, render, ...props }: DialogPrimitive.Trigger.Props & { asChild?: boolean }) {
  const child = asChild && React.isValidElement<{ children?: React.ReactNode }>(children) ? children : undefined;
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} render={child ?? render}>{child ? child.props.children : children}</DialogPrimitive.Trigger>;
}
function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  const container = React.useContext(PopupContainerContext);
  return <DialogPrimitive.Portal container={container ?? undefined} data-slot="dialog-portal" {...props} />
}

function DialogClose({ asChild, children, render, ...props }: DialogPrimitive.Close.Props & { asChild?: boolean }) {
  const child = asChild && React.isValidElement<{ children?: React.ReactNode }>(children) ? children : undefined;
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} render={child ?? render}>{child ? child.props.children : children}</DialogPrimitive.Close>;
}
function DialogOverlay({
  ref: forwardedRef,
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  const ref = usePresenceMotion<HTMLDivElement>(forwardedRef);
  return (
    <DialogPrimitive.Backdrop ref={ref}
      data-slot="dialog-overlay"
      className={(state) => cn("bg-foreground/50 fixed inset-0 isolate z-50", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function DialogContent({
  ref: forwardedRef,
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
}) {
  const complete = React.useContext(ExitContext);
  const [popup, setPopup] = React.useState<HTMLDivElement | null>(null);
  const presence = usePresenceMotion<HTMLDivElement>(forwardedRef, "fast", false, complete);
  const ref = React.useCallback((node: HTMLDivElement | null) => { presence(node); setPopup(node); }, [presence]);
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup ref={ref}
        data-slot="dialog-content"
        className={(state) => cn(
          "bg-popover text-popover-foreground grid max-w-lg gap-4 rounded-xl border border-border p-6 text-sm shadow-lg fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-h-[calc(100dvh-2rem)] overflow-y-auto -translate-x-1/2 -translate-y-1/2 outline-none",
          (typeof className === "function" ? className(state) : className)
        )}
        {...props}
      >
        <PopupContainerContext.Provider value={popup}>{children}</PopupContainerContext.Provider>
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-3 end-3"
                size="icon-sm"
              />
            }
          >
            <XIcon aria-hidden="true" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("gap-2 flex flex-col", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        " flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={(state) => cn("text-base leading-none font-medium", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={(state) => cn("text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
