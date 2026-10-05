// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"
import { PopupContainerContext } from "@/lib/popup-scope"
import { usePresenceMotion, useStyleMotion } from "@/lib/leement-motion"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react"

const ExitContext = React.createContext<((present: boolean) => void) | undefined>(undefined);
function ComboboxRoot<Value, Multiple extends boolean | undefined = false>({ actionsRef, ...props }: ComboboxPrimitive.Root.Props<Value, Multiple>) {
  const actions = React.useRef<ComboboxPrimitive.Root.Actions | null>(null);
  React.useImperativeHandle(actionsRef, () => ({ unmount: () => actions.current?.unmount() }), []);
  const complete = React.useCallback((present: boolean) => { if (!present) actions.current?.unmount(); }, []);
  return <ExitContext.Provider value={complete}><ComboboxPrimitive.Root {...props} actionsRef={actions} /></ExitContext.Provider>;
}
type ComboboxOption = { value: string; label: string; disabled?: boolean };
/** Compatibility shorthand. New examples use the compound Base UI API. */
type ComboboxProps = Omit<React.ComponentProps<"div">, "onChange"> & { options: ComboboxOption[]; label: string; value?: string; defaultValue?: string; onValueChange?: (value: string) => void; placeholder?: string; disabled?: boolean };
function Combobox(props: ComboboxProps): React.JSX.Element;
function Combobox<Value, Multiple extends boolean | undefined = false>(props: ComboboxPrimitive.Root.Props<Value, Multiple>): React.JSX.Element;
function Combobox(props: ComboboxProps | ComboboxPrimitive.Root.Props<unknown, boolean | undefined>) {
  if ("options" in props) return <SimpleCombobox {...props} />;
  return <ComboboxRoot {...props} />;
}
function SimpleCombobox({options, label, value, defaultValue, onValueChange, placeholder="Search options", disabled, className, ...props}: ComboboxProps) {
  const id = React.useId();
  return <div className={cn("w-full max-w-sm",className)} {...props}><label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label><ComboboxRoot items={options.map(option=>option.value)} value={value} defaultValue={defaultValue} disabled={disabled} autoHighlight itemToStringLabel={value=>options.find(option=>option.value===value)?.label ?? value} onValueChange={next=>onValueChange?.(next ?? "")}><ComboboxInput id={id} placeholder={placeholder} disabled={disabled} /><ComboboxContent><ComboboxEmpty>No results</ComboboxEmpty><ComboboxList>{(value:string)=><ComboboxItem key={value} value={value} disabled={options.find(option=>option.value===value)?.disabled}>{options.find(option=>option.value===value)?.label}</ComboboxItem>}</ComboboxList></ComboboxContent></ComboboxRoot></div>;
}

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
  className,
  children, ref,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  const motionRef = useStyleMotion<HTMLElement>(ref);
  return (
    <ComboboxPrimitive.Trigger
      ref={motionRef}
      aria-label="Show suggestions"
      data-slot="combobox-trigger"
      className={(state) => cn("[&_svg:not([class*='size-'])]:size-4", (typeof className === "function" ? className(state) : className))}
      {...props}
    >
      {children}
      <ChevronDownIcon className="text-muted-foreground size-4 pointer-events-none" aria-hidden="true" />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      aria-label="Clear selection"
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={(state) => cn("", (typeof className === "function" ? className(state) : className))}
      {...props}
    >
      <XIcon className="pointer-events-none" aria-hidden="true" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean
  showClear?: boolean
}) {
  return (
    <InputGroup className={cn("w-auto", className)}>
      <ComboboxPrimitive.Input
        render={<InputGroupInput />}
        disabled={disabled}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            render={<ComboboxTrigger />}
            data-slot="input-group-button"
            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
            disabled={disabled}
          />
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  )
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ref,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  const container = React.useContext(PopupContainerContext);
  const complete = React.useContext(ExitContext);
  const motionRef = usePresenceMotion<HTMLDivElement>(ref, "fast", false, complete);
  return (
    <ComboboxPrimitive.Portal container={container ?? undefined}>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          ref={motionRef}
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={(state) => cn(
            "bg-popover text-popover-foreground ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 max-h-72 min-w-36 overflow-hidden rounded-lg shadow-md ring-1 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground! group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) data-[chips=true]:min-w-(--anchor-width)",
            (typeof className === "function" ? className(state) : className)
          )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={(state) => cn(
        "no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0 overflow-y-auto overscroll-contain",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={(state) => cn(
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={<span className="pointer-events-none absolute end-2 flex size-4 items-center justify-center" />}
      >
        <CheckIcon className="pointer-events-none" aria-hidden="true" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={(state) => cn("", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={(state) => cn("text-muted-foreground px-2 py-1.5 text-xs", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={(state) => cn("text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={(state) => cn("bg-border -mx-1 my-1 h-px", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={(state) => cn("dark:bg-input/30 border-input focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive dark:has-aria-invalid:border-destructive/50 flex min-h-8 flex-wrap items-center gap-1 rounded-lg border bg-transparent bg-clip-padding px-2.5 py-1 text-sm focus-within:ring-3 has-aria-invalid:ring-3 has-data-[slot=combobox-chip]:px-1", (typeof className === "function" ? className(state) : className))}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={(state) => cn(
        "bg-muted text-foreground flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm px-1.5 text-xs font-medium whitespace-nowrap has-data-[slot=combobox-chip-remove]:pr-0 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          aria-label={typeof children === "string" ? `Remove ${children}` : "Remove selection"}
          render={<Button variant="ghost" size="icon-xs" />}
          className="-ml-1 opacity-50 hover:opacity-100"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="pointer-events-none" aria-hidden="true" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

function ComboboxChipsInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={(state) => cn(
        "min-w-16 flex-1 outline-none",
        (typeof className === "function" ? className(state) : className)
      )}
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null)
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
}

export { ComboboxClear };
export type { ComboboxOption, ComboboxProps };

export type ComboboxRootProps<Value, Multiple extends boolean | undefined = false> = ComboboxPrimitive.Root.Props<Value, Multiple>;
