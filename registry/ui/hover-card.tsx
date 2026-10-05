// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";
import * as React from "react"
import { usePresenceMotion } from "@/lib/leement-motion"
import { PopupContainerContext } from "@/lib/popup-scope"

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"
import { cn } from "@/lib/utils"

const ExitContext = React.createContext<((present: boolean) => void) | undefined>(undefined);
const DelayContext = React.createContext<{ delay?: number; closeDelay?: number }>({});
function HoverCard<Payload>({ openDelay, closeDelay, actionsRef, onOpenChange, ...props }: PreviewCardPrimitive.Root.Props<Payload> & { openDelay?: number; closeDelay?: number }) {
  const actions = React.useRef<PreviewCardPrimitive.Root.Actions | null>(null);
  React.useImperativeHandle(actionsRef, () => ({ close: () => actions.current?.close(), unmount: () => actions.current?.unmount() }), []);
  const complete = React.useCallback((present: boolean) => { if (!present) actions.current?.unmount(); }, []);
  return <ExitContext.Provider value={complete}><DelayContext.Provider value={{ delay: openDelay, closeDelay }}><PreviewCardPrimitive.Root {...props} actionsRef={actions} onOpenChange={(open, details) => { onOpenChange?.(open, details); if (!open && !details.isCanceled) details.preventUnmountOnClose(); }} /></DelayContext.Provider></ExitContext.Provider>;
}
function HoverCardTrigger({ asChild, children, render, ...props }: PreviewCardPrimitive.Trigger.Props & { asChild?: boolean }) {
  const delays = React.useContext(DelayContext);
  const child = asChild && React.isValidElement<{ children?: React.ReactNode }>(children) ? children : undefined;
  return <PreviewCardPrimitive.Trigger {...delays} data-slot="hover-card-trigger" {...props} render={child ?? render}>{child ? child.props.children : children}</PreviewCardPrimitive.Trigger>;
}
function HoverCardContent({
  ref: forwardedRef,
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 4,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  const complete = React.useContext(ExitContext);
  const presence = usePresenceMotion<HTMLDivElement>(forwardedRef, "fast", false, complete);
  const ref = presence;
  const container = React.useContext(PopupContainerContext);
  return (
    <PreviewCardPrimitive.Portal container={container ?? undefined} data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PreviewCardPrimitive.Popup ref={ref}
          data-slot="hover-card-content"
          className={(state) => cn(
            "bg-popover text-popover-foreground w-72 max-w-[calc(100vw-2rem)] rounded-xl border border-border p-4 text-sm shadow-md z-50 origin-(--transform-origin) outline-hidden",
            (typeof className === "function" ? className(state) : className)
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
