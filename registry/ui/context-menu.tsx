// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";

import * as React from "react"
import { usePresenceMotion } from "@/lib/leement-motion"
import { PopupContainerContext } from "@/lib/popup-scope"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"
import { cn } from "@/lib/utils"

import { CheckIcon, ChevronRightIcon } from "lucide-react"

const ExitContext = React.createContext<((present: boolean) => void) | undefined>(undefined);
function ContextMenu({ actionsRef, onOpenChange, ...props }: ContextMenuPrimitive.Root.Props) {
  const actions = React.useRef<ContextMenuPrimitive.Root.Actions | null>(null);
  React.useImperativeHandle(actionsRef, () => ({ close: () => actions.current?.close(), unmount: () => actions.current?.unmount() }), []);
  const complete = React.useCallback((present: boolean) => { if (!present) actions.current?.unmount(); }, []);
  return <ExitContext.Provider value={complete}><ContextMenuPrimitive.Root data-slot="context-menu" {...props} actionsRef={actions} onOpenChange={(open, details) => { onOpenChange?.(open, details); if (!open && !details.isCanceled && "preventUnmountOnClose" in details && typeof details.preventUnmountOnClose === "function") details.preventUnmountOnClose(); }} /></ExitContext.Provider>;
}

function ContextMenuPortal({ ...props }: ContextMenuPrimitive.Portal.Props) {
  const container = React.useContext(PopupContainerContext);
  return (
    <ContextMenuPrimitive.Portal container={container ?? undefined} data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuTrigger({
  className,
  onKeyDown,
  ...props
}: ContextMenuPrimitive.Trigger.Props) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={(state) => cn("select-none", (typeof className === "function" ? className(state) : className))}
      {...props}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.defaultPrevented || !(event.key === "ContextMenu" || (event.shiftKey && event.key === "F10"))) return;
        event.preventDefault();
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, button: 2, clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 }));
      }}
    />
  )
}

function ContextMenuContent({
  ref: forwardedRef,
  className,
  align = "start",
  alignOffset = 4,
  side = "right",
  sideOffset = 0,
  ...props
}: ContextMenuPrimitive.Popup.Props &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  const container = React.useContext(PopupContainerContext);
  const complete = React.useContext(ExitContext);
  const ref = usePresenceMotion<HTMLDivElement>(forwardedRef, "fast", false, complete);
  return (
    <ContextMenuPrimitive.Portal container={container ?? undefined}>
      <ContextMenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <ContextMenuPrimitive.Popup
          ref={ref}
          data-slot="context-menu-content"
          className={(state) => cn(
            "bg-popover text-popover-foreground min-w-36 rounded-md border border-border p-1 shadow-md z-50 max-h-(--available-height) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none",
            (typeof className === "function" ? className(state) : className)
          )}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuGroup({ ...props }: ContextMenuPrimitive.Group.Props) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={(state) => cn("text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:ps-7", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: ContextMenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={(state) => cn(
        "focus:bg-accent focus:text-accent-foreground data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive focus:*:[svg]:text-accent-foreground gap-2 rounded-md px-2 py-1.5 text-sm data-inset:ps-7 [&_svg:not([class*='size-'])]:size-4 group/context-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    />
  )
}

function ContextMenuSub({ actionsRef, onOpenChange, ...props }: ContextMenuPrimitive.SubmenuRoot.Props) {
  const actions = React.useRef<ContextMenuPrimitive.Root.Actions | null>(null);
  React.useImperativeHandle(actionsRef, () => ({ close: () => actions.current?.close(), unmount: () => actions.current?.unmount() }), []);
  const complete = React.useCallback((present: boolean) => { if (!present) actions.current?.unmount(); }, []);
  return <ExitContext.Provider value={complete}><ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} actionsRef={actions} onOpenChange={(open, details) => { onOpenChange?.(open, details); if (!open && !details.isCanceled) details.preventUnmountOnClose(); }} /></ExitContext.Provider>;
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={(state) => cn(
        "focus:bg-accent focus:text-accent-foreground data-highlighted:bg-accent data-highlighted:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-2 rounded-md px-2 py-1.5 text-sm data-inset:ps-7 [&_svg:not([class*='size-'])]:size-4 flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ms-auto" />
    </ContextMenuPrimitive.SubmenuTrigger>
  )
}

function ContextMenuSubContent({
  ...props
}: React.ComponentProps<typeof ContextMenuContent>) {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
      side="right"
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: ContextMenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={(state) => cn(
        "focus:bg-accent focus:text-accent-foreground data-highlighted:bg-accent data-highlighted:text-accent-foreground gap-1.5 rounded-md py-1.5 pe-8 ps-2 text-sm data-inset:ps-7 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        (typeof className === "function" ? className(state) : className)
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute end-2 pointer-events-none">
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <CheckIcon  />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioGroup({
  ...props
}: ContextMenuPrimitive.RadioGroup.Props) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: ContextMenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset}
      className={(state) => cn(
        "focus:bg-accent focus:text-accent-foreground data-highlighted:bg-accent data-highlighted:text-accent-foreground gap-1.5 rounded-md py-1.5 pe-8 ps-2 text-sm data-inset:ps-7 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    >
      <span className="absolute end-2 pointer-events-none">
        <ContextMenuPrimitive.RadioItemIndicator>
          <CheckIcon  />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuPrimitive.Separator.Props) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={(state) => cn("bg-border -mx-1 my-1 h-px", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn("text-muted-foreground group-focus/context-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
