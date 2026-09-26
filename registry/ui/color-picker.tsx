"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ColorPickerProps = Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  label: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (hex: string) => void;
  swatches?: string[];
  disabled?: boolean;
};

function normalize(value: string) { const candidate = value.startsWith("#") ? value : `#${value}`; return /^#[0-9a-f]{6}$/i.test(candidate) ? candidate.toUpperCase() : null; }

function ColorPicker({ label, value, defaultValue, onValueChange, swatches = [], disabled, className, ...props }: ColorPickerProps) {
  const id = React.useId();
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const selected = value ?? internal;
  const [draft, setDraft] = React.useState(selected);
  const color = normalize(selected) ?? "#000000";
  React.useEffect(() => { if (value !== undefined) setDraft(value); }, [value]);
  React.useEffect(() => {
    if (value !== undefined || defaultValue !== undefined) return;
    const token = getComputedStyle(document.documentElement).getPropertyValue("--lm-color-data-accent").trim();
    const initial = normalize(token);
    if (initial) { setInternal(initial); setDraft(initial); }
  }, [defaultValue, value]);
  function choose(next: string) { const valid = normalize(next); if (!valid || disabled) return; if (value === undefined) setInternal(valid); setDraft(valid); onValueChange?.(valid); }
  return <div data-slot="color-picker" className={cn("w-full max-w-xs rounded-xl border border-border bg-card p-4 text-card-foreground", className)} {...props}>
    <label htmlFor={id} className="mb-2 block text-sm font-medium">{label}</label><div className="flex items-center gap-2"><input type="color" aria-label={`${label} color well`} value={color} disabled={disabled} onChange={(event) => choose(event.target.value)} className="size-10 cursor-pointer rounded-md border border-border bg-transparent disabled:cursor-not-allowed" /><input id={id} type="text" value={draft} disabled={disabled} onChange={(event) => setDraft(event.target.value)} onBlur={() => { if (normalize(draft)) choose(draft); else setDraft(color); }} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); if (normalize(draft)) choose(draft); else setDraft(color); } }} aria-invalid={draft.length > 0 && !normalize(draft)} className="h-10 min-w-0 flex-1 rounded-md border border-input bg-background px-3 font-mono text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:opacity-50" /></div>
    {swatches.length > 0 && <div role="group" aria-label={`${label} presets`} className="mt-3 flex flex-wrap gap-2">{swatches.filter((swatch) => normalize(swatch)).map((swatch) => <button key={swatch} type="button" disabled={disabled} onClick={() => choose(swatch)} aria-label={`Choose ${swatch}`} aria-pressed={color.toUpperCase() === normalize(swatch)} className="size-7 rounded-full border border-border focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:opacity-50" style={{ backgroundColor: swatch }} />)}</div>}
  </div>;
}

export { ColorPicker };
export type { ColorPickerProps };
