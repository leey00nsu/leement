import * as React from "react";
import { cn } from "@/lib/utils";
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input data-slot="input" type={type} className={cn("h-10 w-full min-w-0 rounded-md border border-input bg-background px-3 text-base text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-destructive/30 md:text-sm", className)} {...props} />;
}
export { Input };
