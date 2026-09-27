import * as React from "react";
import { cn } from "@/lib/utils";
function Card({ className, size = "default", ...props }: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return <div data-slot="card" data-size={size} className={cn("group/card flex flex-col gap-5 overflow-hidden rounded-xl border border-border bg-card py-5 text-sm text-card-foreground has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 data-[size=sm]:has-data-[slot=card-footer]:pb-0", className)} {...props} />;
}
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={cn("grid items-start gap-x-3 gap-y-1 px-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] group-data-[size=sm]/card:px-4", className)} {...props} />;
}
function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 data-slot="card-title" className={cn("text-base font-semibold leading-snug group-data-[size=sm]/card:text-sm", className)} {...props} />;
}
function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="card-description" className={cn("text-sm text-muted-foreground", className)} {...props} />;
}
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-action" className={cn("col-start-2 row-span-2 row-start-1 self-start", className)} {...props} />;
}
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-5 group-data-[size=sm]/card:px-4", className)} {...props} />;
}
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cn("flex items-center gap-2 border-t border-border bg-muted/50 p-5 group-data-[size=sm]/card:p-4", className)} {...props} />;
}
export { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter };
