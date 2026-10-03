import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
function Kbd({ className, ...props }: ComponentProps<"kbd">) { return <kbd className={cn("inline-flex min-h-6 min-w-6 items-center justify-center rounded-sm border border-border bg-muted px-1.5 font-mono text-xs text-muted-foreground shadow-sm", className)} {...props} />; }
function KbdGroup({ className, ...props }: ComponentProps<"span">) { return <span className={cn("inline-flex items-center gap-1", className)} {...props} />; }
export { Kbd, KbdGroup };
