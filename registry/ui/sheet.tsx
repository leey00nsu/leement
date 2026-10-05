"use client";
import { usePresenceMotion } from "@/lib/leement-motion";


import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ExitContext = React.createContext<((present: boolean) => void) | undefined>(undefined);
function Sheet<Payload>({ actionsRef, onOpenChange, ...props }: SheetPrimitive.Root.Props<Payload>) {
  const actions = React.useRef<SheetPrimitive.Root.Actions | null>(null);
  React.useImperativeHandle(actionsRef, () => ({
    close: () => actions.current?.close(),
    unmount: () => actions.current?.unmount(),
  }), []);
  const complete = React.useCallback((present: boolean) => {
    if (!present) actions.current?.unmount();
  }, []);
  return <ExitContext.Provider value={complete}><SheetPrimitive.Root {...props} actionsRef={actions} onOpenChange={(open, details) => {
    onOpenChange?.(open, details);
    if (!open && !details.isCanceled) details.preventUnmountOnClose();
  }} /></ExitContext.Provider>;
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ ref: motionForwardedRef, className, ...props }: SheetPrimitive.Backdrop.Props) {
  const styleMotionRef1 = usePresenceMotion<HTMLDivElement>(motionForwardedRef);

  return (
    <SheetPrimitive.Backdrop ref={styleMotionRef1}
      data-slot="sheet-overlay"
      className={(state) => cn(
        "fixed inset-0 z-50 bg-foreground/50",
        (typeof className === "function" ? className(state) : className),
      )}
      {...props}
    />
  );
}

function SheetContent({ ref: motionForwardedRef,
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  const complete = React.useContext(ExitContext);
  const styleMotionRef2 = usePresenceMotion<HTMLDivElement>(motionForwardedRef, "fast", false, complete);

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup ref={styleMotionRef2}
        data-slot="sheet-content"
        data-side={side}
        className={(state) => cn(
          "fixed z-50 flex max-w-full min-w-0 flex-col gap-4 overflow-x-hidden overflow-y-auto border-border bg-popover bg-clip-padding text-sm text-popover-foreground break-words shadow-lg *:min-w-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:max-h-[calc(100dvh-1rem)] data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:max-h-[calc(100dvh-1rem)] data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          (typeof className === "function" ? className(state) : className),
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={<Button variant="ghost" className="absolute top-3 right-3" size="icon" />}
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sheet-header" className={cn("flex min-w-0 flex-col gap-0.5 p-4 pr-14", className)} {...props} />;
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="sheet-footer" className={cn("mt-auto flex min-w-0 flex-col gap-2 p-4", className)} {...props} />
  );
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={(state) => cn("min-w-0 break-words text-base font-semibold text-foreground", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  );
}

function SheetDescription({ className, ...props }: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={(state) => cn("min-w-0 break-words text-sm text-muted-foreground", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  );
}

export { SheetPortal, SheetOverlay, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger };
