"use client";
import { useContext, createContext, useRef, useCallback, useImperativeHandle } from "react";
import { PopupContainerContext } from "@/lib/popup-scope";
import { usePresenceMotion } from "@/lib/leement-motion";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "@/lib/utils";

const ExitContext = createContext<((present: boolean) => void) | undefined>(undefined);
function Popover<Payload>({ actionsRef, onOpenChange, ...props }: PopoverPrimitive.Root.Props<Payload>) {
  const actions = useRef<PopoverPrimitive.Root.Actions | null>(null);
  useImperativeHandle(actionsRef, () => ({
    close: () => actions.current?.close(),
    unmount: () => actions.current?.unmount(),
  }), []);
  const complete = useCallback((present: boolean) => {
    if (!present) actions.current?.unmount();
  }, []);
  return <ExitContext.Provider value={complete}><PopoverPrimitive.Root {...props} actionsRef={actions} onOpenChange={(open, details) => {
    onOpenChange?.(open, details);
    if (!open && !details.isCanceled) details.preventUnmountOnClose();
  }} /></ExitContext.Provider>;
}

function PopoverTrigger(props: PopoverPrimitive.Trigger.Props) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  align = "center",
  alignOffset = 0,
  className,
  side = "bottom",
  sideOffset = 6,
  ref: presenceForwardedRef,
  ...props
}: PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  const container = useContext(PopupContainerContext);
  const complete = useContext(ExitContext);
  const presenceRef = usePresenceMotion<HTMLDivElement>(presenceForwardedRef, "fast", false, complete);
  return (
    <PopoverPrimitive.Portal container={container ?? undefined}>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50"
        side={side}
        sideOffset={sideOffset}
      >
        <PopoverPrimitive.Popup
          ref={presenceRef}
          className={(state) => cn(
            "origin-(--transform-origin) rounded-md border border-border bg-popover p-3 text-popover-foreground shadow-md outline-none",
            (typeof className === "function" ? className(state) : className),
          )}
          data-slot="popover-content"
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="popover-header" className={cn("flex flex-col gap-1.5", className)} {...props} />;
}

function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
  return (
    <PopoverPrimitive.Title
      className={(state) => cn("text-sm font-semibold", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  );
}

function PopoverDescription({
  className,
  ...props
}: PopoverPrimitive.Description.Props) {
  return (
    <PopoverPrimitive.Description
      className={(state) => cn("text-xs text-muted-foreground", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  );
}

export {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverHeader,
  PopoverTrigger,
};
