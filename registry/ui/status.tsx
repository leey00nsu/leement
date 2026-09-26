import * as React from "react";
import { cn } from "@/lib/utils";

type StatusTone = "neutral" | "success" | "warning" | "danger";
type StatusProps = Omit<React.ComponentProps<"span">, "children"> & { label: string; tone?: StatusTone };

function Status({ label, tone = "neutral", className, ...props }: StatusProps) {
  const dot = { neutral: "bg-muted-foreground", success: "bg-success", warning: "bg-warning", danger: "bg-destructive" }[tone];
  return <span data-slot="status" className={cn("inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-card-foreground", className)} {...props}><span aria-hidden="true" className={cn("size-1.5 rounded-full", dot)} />{label}</span>;
}

export { Status };
export type { StatusProps, StatusTone };
