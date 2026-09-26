import type * as React from "react";
import { cn } from "@/lib/utils";

const resourceRowInteractiveClassName = "group/resource-row relative isolate transition-colors hover:bg-muted/35 focus-within:bg-muted/35";
const stretchedActionClassName = "after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:outline-none focus-visible:after:ring-3 focus-visible:after:ring-ring";

function ResourceRow({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="resource-row" className={cn(resourceRowInteractiveClassName, className)} {...props} />;
}
function ResourceRowLink({ className, ...props }: React.ComponentProps<"a">) {
  return <a data-slot="resource-row-link" className={cn(stretchedActionClassName, className)} {...props} />;
}
function ResourceRowButton({ className, type = "button", ...props }: React.ComponentProps<"button">) {
  return <button data-slot="resource-row-button" type={type} className={cn(stretchedActionClassName, className)} {...props} />;
}

export { ResourceRow, ResourceRowLink, ResourceRowButton, resourceRowInteractiveClassName };
