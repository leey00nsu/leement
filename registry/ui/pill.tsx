"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type PillProps = Omit<React.ComponentProps<"span">, "children"> & { label: string; onRemove?: () => void; disabled?: boolean; leading?: React.ReactNode; trailing?: React.ReactNode; tone?: "neutral" | "success" | "warning" | "danger" };

function Pill({ label, onRemove, disabled, leading, trailing, tone = "neutral", className, ...props }: PillProps) {
  return <span data-slot="pill" data-tone={tone} className={cn("inline-flex min-h-7 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium", tone === "neutral" && "border-border bg-muted text-foreground", tone === "success" && "border-success-foreground/20 bg-success text-success-foreground", tone === "warning" && "border-warning-foreground/20 bg-warning text-warning-foreground", tone === "danger" && "border-destructive/20 bg-destructive/10 text-destructive", disabled && "opacity-50", className)} {...props}>{leading && <span aria-hidden="true" className="inline-flex shrink-0">{leading}</span>}{label}{trailing && <span aria-hidden="true" className="inline-flex shrink-0">{trailing}</span>}{onRemove && <button type="button" disabled={disabled} aria-label={`Remove ${label}`} onClick={onRemove} className="rounded-full p-0.5 hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed"><X aria-hidden="true" className="size-3" /></button>}</span>;
}

export { Pill };
export type { PillProps };
