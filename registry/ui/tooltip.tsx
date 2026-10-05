// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";
import * as React from "react"
import { usePresenceMotion } from "@/lib/leement-motion"
import { PopupContainerContext } from "@/lib/popup-scope"

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"
import { cn } from "@/lib/utils"

function TooltipProvider({
  delay,
  delayDuration,
  skipDelayDuration,
  ...props
}: TooltipPrimitive.Provider.Props & { delayDuration?: number; skipDelayDuration?: number }) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay ?? delayDuration ?? 0}
      timeout={skipDelayDuration}
      {...props}
    />
  )
}

const ExitContext = React.createContext<((present: boolean) => void) | undefined>(undefined);
const DescriptionContext = React.createContext<{ id: string; defaultId: string; setId: React.Dispatch<React.SetStateAction<string>>; open: boolean }>({ id: "", defaultId: "", setId: () => {}, open: false });
const DelayContext = React.createContext<{ delay?: number; closeDelay?: number }>({});
function Tooltip<Payload>({ delayDuration, open: controlled, defaultOpen = false, actionsRef, onOpenChange, ...props }: TooltipPrimitive.Root.Props<Payload> & { delayDuration?: number }) {
  const defaultId = React.useId();
  const [id, setId] = React.useState(defaultId);
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const open = controlled ?? internalOpen;
  const actions = React.useRef<TooltipPrimitive.Root.Actions | null>(null);
  React.useImperativeHandle(actionsRef, () => ({ close: () => actions.current?.close(), unmount: () => actions.current?.unmount() }), []);
  const complete = React.useCallback((present: boolean) => { if (!present) actions.current?.unmount(); }, []);
  return <ExitContext.Provider value={complete}><DescriptionContext.Provider value={{ id, defaultId, setId, open: open && !props.disabled }}><DelayContext.Provider value={{ delay: delayDuration }}><TooltipPrimitive.Root {...props} actionsRef={actions} open={controlled} defaultOpen={defaultOpen} onOpenChange={(open, details) => { onOpenChange?.(open, details); if (!details.isCanceled && controlled === undefined) setInternalOpen(open); if (!open && !details.isCanceled) details.preventUnmountOnClose(); }} /></DelayContext.Provider></DescriptionContext.Provider></ExitContext.Provider>;
}
function TooltipTrigger({ asChild, children, render, ...props }: TooltipPrimitive.Trigger.Props & { asChild?: boolean }) {
  const delays = React.useContext(DelayContext);
  const description = React.useContext(DescriptionContext);
  const child = asChild && React.isValidElement<{ children?: React.ReactNode }>(children) ? children : undefined;
  return <TooltipPrimitive.Trigger {...delays} data-slot="tooltip-trigger" {...props} aria-describedby={[props["aria-describedby"], description.open && description.id].filter(Boolean).join(" ") || undefined} render={child ?? render}>{child ? child.props.children : children}</TooltipPrimitive.Trigger>;
}
function TooltipContent({
  ref: forwardedRef,
  className,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  id,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  const description = React.useContext(DescriptionContext);
  const { setId, defaultId } = description;
  React.useLayoutEffect(() => { setId(id ?? defaultId); }, [id, defaultId, setId]);
  const complete = React.useContext(ExitContext);
  const presence = usePresenceMotion<HTMLDivElement>(forwardedRef, "fast", false, complete);
  const ref = presence;
  const container = React.useContext(PopupContainerContext);
  return (
    <TooltipPrimitive.Portal container={container ?? undefined}>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup ref={ref}
          data-slot="tooltip-content" role="tooltip" id={id ?? description.id}
          className={(state) => cn(
            "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm z-50 w-fit max-w-xs origin-(--transform-origin) bg-foreground text-background",
            (typeof className === "function" ? className(state) : className)
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className="size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 z-50 bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5" />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
