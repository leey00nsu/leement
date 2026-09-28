import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function FilterToolbar({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="filter-toolbar" className={cn("flex w-full flex-col gap-3 rounded-xl border border-border bg-card p-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between", className)} {...props} />;
}
function FilterGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="filter-group" className={cn("flex flex-wrap items-center gap-2", className)} {...props} />;
}
function FilterToggle({ pressed = false, className, children, ...props }: Omit<React.ComponentProps<typeof Button>, "variant"> & { pressed?: boolean }) {
  return <Button data-slot="filter-toggle" type="button" variant="outline" aria-pressed={pressed} className={cn("aria-pressed:border-data-accent/40 aria-pressed:bg-data-accent/15 aria-pressed:text-(--lm-color-brand-text)", className)} {...props}>{children}</Button>;
}

export { FilterToolbar, FilterGroup, FilterToggle };
