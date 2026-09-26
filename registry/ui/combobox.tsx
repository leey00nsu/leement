"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type ComboboxOption = { value: string; label: string; disabled?: boolean };
type ComboboxProps = Omit<React.ComponentProps<"div">, "onChange"> & {
  options: ComboboxOption[];
  label: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
};

function Combobox({ options, label, value, defaultValue, onValueChange, placeholder = "Search options", disabled, className, ...props }: ComboboxProps) {
  const id = React.useId();
  const root = React.useRef<HTMLDivElement>(null);
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const selected = value ?? internal;
  const filtered = options.filter((option) => option.label.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  const enabled = filtered.filter((option) => !option.disabled);
  const selectedLabel = options.find((option) => option.value === selected)?.label;
  React.useEffect(() => {
    function closeOutside(event: PointerEvent) { if (!root.current?.contains(event.target as Node)) { setOpen(false); setQuery(""); } }
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  function choose(option: ComboboxOption) { if (option.disabled) return; if (value === undefined) setInternal(option.value); onValueChange?.(option.value); setQuery(""); setOpen(false); }
  return <div ref={root} data-slot="combobox" className={cn("relative w-full max-w-sm", className)} {...props}>
    <label htmlFor={`${id}-input`} className="mb-1.5 block text-sm font-medium">{label}</label>
    <div className="relative"><input id={`${id}-input`} role="combobox" type="text" disabled={disabled} autoComplete="off" aria-expanded={open} aria-controls={`${id}-list`} aria-activedescendant={open && enabled[active] ? `${id}-${enabled[active].value}` : undefined} value={open ? query : selectedLabel ?? ""} placeholder={placeholder} onFocus={() => { setOpen(true); setQuery(""); }} onChange={(event) => { setQuery(event.target.value); setActive(0); setOpen(true); }} onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); setQuery(""); } else if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); setOpen(true); setActive((current) => Math.max(0, Math.min(enabled.length - 1, current + (event.key === "ArrowDown" ? 1 : -1)))); } else if (event.key === "Enter" && open && enabled[active]) { event.preventDefault(); choose(enabled[active]); } }} className="h-10 w-full rounded-md border border-input bg-background px-3 pr-9 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/40 disabled:opacity-50" /><ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-3 size-4 text-muted-foreground" /></div>
    {open && !disabled && <ul id={`${id}-list`} role="listbox" aria-label={label} className="absolute z-50 mt-1 max-h-56 w-full overflow-y-auto rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md">{filtered.length ? filtered.map((option) => <li key={option.value} id={`${id}-${option.value}`} role="option" aria-selected={selected === option.value} aria-disabled={option.disabled} onMouseDown={(event) => event.preventDefault()} onClick={() => choose(option)} className={cn("cursor-pointer rounded px-3 py-2 text-sm", option.disabled ? "cursor-not-allowed opacity-50" : "hover:bg-muted", enabled[active]?.value === option.value && "bg-muted")}>{option.label}</li>) : <li className="px-3 py-2 text-sm text-muted-foreground">No results</li>}</ul>}
  </div>;
}

export { Combobox };
export type { ComboboxOption, ComboboxProps };
