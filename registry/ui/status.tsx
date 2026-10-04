"use client";
import * as React from "react";
import { useMotionLoop } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

type StatusTone = "neutral" | "success" | "warning" | "danger";
type StatusProps = Omit<React.ComponentProps<"span">, "children"> & { tone?: StatusTone } & (
  | { label: string; children?: never }
  | { label?: never; children: React.ReactNode }
);
type StatusIndicatorProps = React.ComponentProps<"span"> & { pulse?: boolean };

const indicatorColor = "group-data-[tone=neutral]/status:bg-muted-foreground group-data-[tone=success]/status:bg-success-foreground group-data-[tone=warning]/status:bg-warning-foreground group-data-[tone=danger]/status:bg-destructive";

function Status({ label, tone = "neutral", children, className, ...props }: StatusProps) {
  return <span data-slot="status" data-tone={tone} className={cn("group/status inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-card-foreground", className)} {...props}>
    {children ?? <><StatusIndicator /><StatusLabel>{label}</StatusLabel></>}
  </span>;
}

function StatusPulse() {
  const ref = React.useRef<HTMLSpanElement>(null);
  useMotionLoop(ref, { scale: [1, 2], opacity: [0.6, 0] }, "cycle-spin");
  return <span ref={ref} className={cn("absolute inset-0 rounded-full opacity-60", indicatorColor)} />;
}
function StatusIndicator({ pulse = false, className, ...props }: StatusIndicatorProps) {
  return <span data-slot="status-indicator" aria-hidden="true" className={cn("relative inline-flex size-1.5 shrink-0", className)} {...props}>
    {pulse && <StatusPulse />}
    <span className={cn("relative size-full rounded-full", indicatorColor)} />
  </span>;
}

function StatusLabel({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="status-label" className={cn("text-current", className)} {...props} />;
}

export { Status, StatusIndicator, StatusLabel };
export type { StatusProps, StatusIndicatorProps, StatusTone };
