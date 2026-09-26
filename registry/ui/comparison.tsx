"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ComparisonProps = Omit<React.ComponentProps<"div">, "onChange"> & {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
};

function Comparison({ beforeSrc, afterSrc, beforeAlt, afterAlt, value, defaultValue = 50, onValueChange, className, ...props }: ComparisonProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const position = Math.max(0, Math.min(100, value ?? internal));
  function change(next: number) { if (value === undefined) setInternal(next); onValueChange?.(next); }
  return <div data-slot="comparison" className={cn("relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-xl border border-border bg-muted", className)} {...props}>
    <img src={afterSrc} alt={afterAlt} className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}><img src={beforeSrc} alt={beforeAlt} className="size-full object-cover" /></div>
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary-foreground shadow-md" style={{ left: `${position}%` }} /><span aria-hidden="true" className="pointer-events-none absolute top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-sm text-card-foreground shadow-md" style={{ left: `${position}%` }}>↔</span><span className="pointer-events-none absolute left-2 top-2 rounded bg-card/90 px-2 py-1 text-xs text-card-foreground">Before</span><span className="pointer-events-none absolute right-2 top-2 rounded bg-card/90 px-2 py-1 text-xs text-card-foreground">After</span>
    <input type="range" min="0" max="100" value={position} onChange={(event) => change(Number(event.target.value))} onKeyDown={(event) => { const next = event.key === "ArrowRight" || event.key === "ArrowUp" ? position + 1 : event.key === "ArrowLeft" || event.key === "ArrowDown" ? position - 1 : event.key === "Home" ? 0 : event.key === "End" ? 100 : null; if (next !== null) { event.preventDefault(); change(Math.max(0, Math.min(100, next))); } }} aria-label={`Compare ${beforeAlt} and ${afterAlt}`} aria-valuetext={`${position}% before image visible`} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring" />
  </div>;
}

export { Comparison };
export type { ComparisonProps };
