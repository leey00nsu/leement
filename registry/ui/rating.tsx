"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type RatingProps = Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & { label: string; value?: number; defaultValue?: number; onValueChange?: (value: number) => void; max?: number; readOnly?: boolean };

function Rating({ label, value, defaultValue = 0, onValueChange, max = 5, readOnly = false, className, ...props }: RatingProps) {
  const count = Math.min(10, Math.max(1, Math.floor(max)));
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = value ?? internal;
  const refs = React.useRef<Array<HTMLButtonElement | null>>([]);
  function choose(next: number) { if (readOnly) return; if (value === undefined) setInternal(next); onValueChange?.(next); }
  if (readOnly) return <div data-slot="rating" role="img" aria-label={`${label}: ${selected} of ${count} stars`} className={cn("inline-flex items-center gap-1", className)} {...props}>{Array.from({ length: count }, (_, index) => <Star key={index} aria-hidden="true" className={cn("size-5 text-muted-foreground", index < selected && "fill-primary text-primary")} />)}<span aria-hidden="true" className="ml-2 text-xs text-muted-foreground">{selected}/{count}</span></div>;
  return <div data-slot="rating" role="radiogroup" aria-label={label} className={cn("inline-flex items-center gap-1", className)} {...props}>{Array.from({ length: count }, (_, index) => { const score = index + 1; return <button key={score} ref={(node) => { refs.current[index] = node; }} type="button" role="radio" aria-label={`${score} of ${count} stars`} aria-checked={score === selected} tabIndex={readOnly ? -1 : score === (selected || 1) ? 0 : -1} disabled={readOnly} onClick={() => choose(score)} onKeyDown={(event) => { if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) { event.preventDefault(); const next = event.key === "Home" ? 1 : event.key === "End" ? count : Math.max(1, Math.min(count, (selected || 1) + (event.key === "ArrowRight" || event.key === "ArrowUp" ? 1 : -1))); choose(next); refs.current[next - 1]?.focus(); } }} className="rounded-md p-1 text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default"><Star aria-hidden="true" className={cn("size-5", score <= selected && "fill-primary text-primary")} /></button>; })}<span className="ml-2 text-xs text-muted-foreground" aria-hidden="true">{selected}/{count}</span></div>;
}

export { Rating };
export type { RatingProps };
