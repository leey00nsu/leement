// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";

import * as React from "react"
import { usePresenceMotion, useStyleMotion } from "@/lib/leement-motion"
import { Toast as ToastPrimitive } from "@base-ui/react/toast"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { CircleCheckIcon, InfoIcon, OctagonXIcon, TriangleAlertIcon, XIcon } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

const manager = ToastPrimitive.createToastManager();
type LegacyToastOptions = { description?: React.ReactNode; duration?: number; action?: { label: React.ReactNode; onClick?: React.MouseEventHandler<HTMLButtonElement> } };
function legacyAdd(title: React.ReactNode, options?: LegacyToastOptions, type?: string) {
 return manager.add({ title, type, description: options?.description, timeout: options?.duration, actionProps: options?.action && { children: options.action.label, onClick: options.action.onClick } });
}
// Compatibility conveniences share the Base manager; there is only one toast runtime.
const toast = Object.assign(legacyAdd, manager, {
 success: (title: React.ReactNode, options?: LegacyToastOptions) => legacyAdd(title, options, "success"),
 info: (title: React.ReactNode, options?: LegacyToastOptions) => legacyAdd(title, options, "info"),
 warning: (title: React.ReactNode, options?: LegacyToastOptions) => legacyAdd(title, options, "warning"),
 error: (title: React.ReactNode, options?: LegacyToastOptions) => legacyAdd(title, options, "error"),
 loading: (title: React.ReactNode, options?: LegacyToastOptions) => legacyAdd(title, { ...options, duration: 0 }, "loading"),
 dismiss: manager.close,
});

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />
}

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={(state) => cn(
        "pointer-events-none fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-sm outline-none sm:right-4 sm:left-auto sm:mx-0 sm:w-full",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    />
  )
}

function Toast({ ref: forwardedRef, className, ...props }: ToastPrimitive.Root.Props) {
  const presence = usePresenceMotion<HTMLDivElement>(forwardedRef, "fast");
  const ref = useStyleMotion<HTMLDivElement>(presence, ["transform", "height", "opacity"], "fast");
  return (
    <ToastPrimitive.Root ref={ref}
      data-slot="toast"
      className={(state) => cn(
        "rounded-2xl group/toast pointer-events-auto absolute right-0 bottom-0 z-[calc(1000-var(--toast-index))] w-full origin-bottom border bg-popover text-popover-foreground shadow-lg will-change-transform outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]",
        "h-(--height) [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]",
        "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
        "data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]",
        "data-limited:opacity-0",

        "data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    />
  )
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      className={(state) => cn(
        "flex h-full items-center gap-3 overflow-hidden p-4 data-behind:opacity-0 data-expanded:opacity-100",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={(state) => cn("text-sm font-medium", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={(state) => cn("text-sm text-muted-foreground", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ToastAction({
  className,
  render = <Button variant="outline" size="sm" />,
  ...props
}: ToastPrimitive.Action.Props) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      render={render}
      className={(state) => cn("shrink-0", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ToastClose({
  className,
  children,
  render = <Button variant="ghost" size="icon-sm" />,
  ...props
}: ToastPrimitive.Close.Props) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Close toast"
      render={render}
      className={(state) => cn(
        "relative shrink-0 text-muted-foreground after:absolute after:-inset-2 after:content-[''] hover:text-foreground",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    >
      {children ?? (
        <XIcon aria-hidden="true"  />
      )}
    </ToastPrimitive.Close>
  )
}

function ToastIcon({ type }: { type: string | undefined }) {
  let icon: React.ReactNode = null

  if (type === "success") {
    icon = (
      <CircleCheckIcon aria-hidden="true"  />
    )
  }

  if (type === "info") {
    icon = (
      <InfoIcon aria-hidden="true"  />
    )
  }

  if (type === "warning") {
    icon = (
      <TriangleAlertIcon aria-hidden="true"  />
    )
  }

  if (type === "error") {
    icon = (
      <OctagonXIcon aria-hidden="true" className="text-destructive" />
    )
  }

  if (type === "loading") {
    icon = (
      <Spinner size="sm" />
    )
  }

  if (!icon) {
    return null
  }

  return (
    <span
      data-slot="toast-icon"
      className="shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
    >
      {icon}
    </span>
  )
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager()

  return toasts.map((toastItem) => (
    <Toast key={toastItem.id} toast={toastItem}>
      <ToastContent>
        <ToastIcon type={toastItem.type} />
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <ToastTitle />
          <ToastDescription />
        </div>
        <ToastAction />
        <ToastClose />
      </ToastContent>
    </Toast>
  ))
}

function Toaster({
  children,
  toastManager = toast,
  position = "bottom-right",
  theme,
  className,
  ...props
}: ToastPrimitive.Provider.Props & { position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"; theme?: "light" | "dark" | "system"; className?: string }) {
  return (
    <ToastProvider toastManager={toastManager} {...props}>
      {children}
      <ToastPortal>
        <ToastViewport data-lm-theme={theme === "system" ? undefined : theme} className={cn(position.startsWith("top") && "top-4 bottom-auto [&_[data-slot=toast]]:top-0 [&_[data-slot=toast]]:bottom-auto", position.endsWith("left") && "sm:start-4 sm:end-auto", position.endsWith("center") && "sm:inset-x-4 sm:mx-auto", className)}>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}

const createToastManager = ToastPrimitive.createToastManager
const useToastManager = ToastPrimitive.useToastManager

export {
  Toaster,
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
}
