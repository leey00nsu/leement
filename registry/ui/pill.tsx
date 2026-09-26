"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type PillProps = Omit<React.ComponentProps<"span">, "children"> & { label: string; onRemove?: () => void; disabled?: boolean; leading?: React.ReactNode };

function Pill({ label, onRemove, disabled, leading, className, ...props }: PillProps) {
  return <span data-slot="pill" className={cn("inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground", disabled && "opacity-50", className)} {...props}>{leading && <span aria-hidden="true">{leading}</span>}{label}{onRemove && <button type="button" disabled={disabled} aria-label={`Remove ${label}`} onClick={onRemove} className="rounded-full p-0.5 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed"><X aria-hidden="true" className="size-3" /></button>}</span>;
}

export { Pill };
export type { PillProps };
