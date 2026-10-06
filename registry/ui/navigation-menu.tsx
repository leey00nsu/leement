// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";

import * as React from "react"
import { usePresenceMotion, useStyleMotion } from "@/lib/leement-motion"
import { PopupContainerContext } from "@/lib/popup-scope"
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

import { ChevronDownIcon } from "lucide-react"

const ExitContext = React.createContext<((present: boolean) => void) | undefined>(undefined);

function NavigationMenu({
  actionsRef,
  onValueChange,
  align = "start",
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align">) {
  const actions = React.useRef<NavigationMenuPrimitive.Root.Actions | null>(null);
  React.useImperativeHandle(actionsRef, () => ({ unmount: () => actions.current?.unmount() }), []);
  const complete = React.useCallback((present: boolean) => { if (!present) actions.current?.unmount(); }, []);
  return (
    <ExitContext.Provider value={complete}><NavigationMenuPrimitive.Root
      actionsRef={actions}
      onValueChange={(value, details) => { onValueChange?.(value, details); }}
      data-slot="navigation-menu"
      className={(state) => cn(
        "max-w-max group/navigation-menu relative flex w-fit min-w-0 max-w-full items-center justify-center",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root></ExitContext.Provider>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={(state) => cn(
        "gap-0 group flex min-w-0 flex-1 flex-wrap list-none items-center justify-center",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={(state) => cn("relative", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted focus-visible:ring-ring/40 data-popup-open:bg-muted data-popup-open:hover:bg-muted rounded-md px-3 py-2 text-sm font-medium focus-visible:ring-3 focus-visible:outline-none disabled:opacity-50 group/navigation-menu-trigger inline-flex h-10 w-max items-center justify-center outline-none disabled:pointer-events-none"
)

function NavigationMenuTrigger({
  ref: forwardedRef,
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  const iconRef = useStyleMotion<SVGSVGElement>(undefined, ["rotate"]);
  const ref = useStyleMotion<HTMLButtonElement>(forwardedRef, ["backgroundColor", "color", "boxShadow"]);
  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      data-slot="navigation-menu-trigger"
      className={(state) => cn(navigationMenuTriggerStyle(), "group", (typeof className === "function" ? className(state) : className))}
      {...props}
    >
      {children}{""}
      <ChevronDownIcon ref={iconRef} className="relative top-px ml-1 size-3 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180" aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  ref: forwardedRef,
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  const ref = useStyleMotion<HTMLDivElement>(forwardedRef, ["opacity", "translate"]);
  return (
    <NavigationMenuPrimitive.Content
      ref={ref}
      data-slot="navigation-menu-content"
      className={(state) => cn(
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:border-border p-1 group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:border data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] h-full w-auto data-ending-style:opacity-0 data-starting-style:opacity-0",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    />
  )
}

function NavigationMenuPositioner({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  const container = React.useContext(PopupContainerContext);
  const complete = React.useContext(ExitContext);
  const popupRef = usePresenceMotion<HTMLDivElement>(undefined, "fast", false, complete);
  return (
    <NavigationMenuPrimitive.Portal container={container ?? undefined}>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={(state) => cn(
          "data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)",
          (typeof className === "function" ? className(state) : className)
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup ref={popupRef} className="bg-popover text-popover-foreground border border-border rounded-md shadow-md outline-none     xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) max-w-full origin-(--transform-origin)">
          <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden p-1" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

function NavigationMenuLink({
  ref: forwardedRef,
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  const ref = useStyleMotion<HTMLAnchorElement>(forwardedRef, ["backgroundColor", "color", "boxShadow"]);
  return (
    <NavigationMenuPrimitive.Link
      ref={ref}
      data-slot="navigation-menu-link"
      className={(state) => cn("data-active:focus:bg-muted data-active:hover:bg-muted data-active:bg-muted focus-visible:ring-ring/40 hover:bg-muted focus:bg-muted flex items-center gap-2 rounded-md p-2 text-sm outline-none focus-visible:ring-3 focus-visible:outline-none in-data-[slot=navigation-menu-content]:rounded-md [&_svg:not([class*='size-'])]:size-4", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={(state) => cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    >
      <div className="bg-border rounded-tl-sm shadow-md relative top-[60%] h-2 w-2 rotate-45" />
    </NavigationMenuPrimitive.Icon>
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
}
