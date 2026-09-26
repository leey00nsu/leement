import * as React from "react";
import { cn } from "@/lib/utils";
function PageHeader({ className, ...props }: React.ComponentProps<"header">) { return <header data-slot="page-header" className={cn("flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between", className)} {...props} />; }
function PageHeaderContent({ className, ...props }: React.ComponentProps<"div">) { return <div className={cn("space-y-1", className)} {...props} />; }
function PageHeaderTitle({ className, ...props }: React.ComponentProps<"h1">) { return <h1 className={cn("text-2xl font-semibold tracking-tight", className)} {...props} />; }
function PageHeaderDescription({ className, ...props }: React.ComponentProps<"p">) { return <p className={cn("text-sm text-muted-foreground", className)} {...props} />; }
function PageHeaderActions({ className, ...props }: React.ComponentProps<"div">) { return <div className={cn("flex shrink-0 items-center gap-2", className)} {...props} />; }
PageHeader.Content = PageHeaderContent; PageHeader.Title = PageHeaderTitle; PageHeader.Description = PageHeaderDescription; PageHeader.Actions = PageHeaderActions;
export { PageHeader, PageHeaderContent, PageHeaderTitle, PageHeaderDescription, PageHeaderActions };
