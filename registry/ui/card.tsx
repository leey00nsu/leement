import * as React from "react";
import { cn } from "@/lib/utils";
function Card({ className, size = "default", ...props }: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return <div data-slot="card" data-size={size} className={cn("group/card flex flex-col rounded-xl border border-border bg-card text-card-foreground", className)} {...props} />;
}
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={cn("grid grid-cols-[1fr_auto] items-start gap-x-3 gap-y-1 px-5 pt-5 group-data-[size=sm]/card:px-4 group-data-[size=sm]/card:pt-4", className)} {...props} />;
}
function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 data-slot="card-title" className={cn("text-base font-semibold leading-tight", className)} {...props} />;
}
function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="card-description" className={cn("col-start-1 text-sm text-muted-foreground", className)} {...props} />;
}
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-action" className={cn("col-start-2 row-span-2 row-start-1 self-start", className)} {...props} />;
}
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-5 py-5 group-data-[size=sm]/card:px-4 group-data-[size=sm]/card:py-4", className)} {...props} />;
}
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cn("flex items-center gap-2 border-t border-border px-5 py-4 group-data-[size=sm]/card:px-4 group-data-[size=sm]/card:py-3", className)} {...props} />;
}
export { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter };
