"use client";
import { useStyleMotion } from "@/lib/leement-motion";
import type { ComponentProps } from "react";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { isValidElement, type ReactNode } from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

function Breadcrumb(props: ComponentProps<"nav">) { return <nav aria-label="Breadcrumb" {...props} />; }
function BreadcrumbList({ className, ...props }: ComponentProps<"ol">) { return <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2", className)} {...props} />; }
function BreadcrumbItem({ className, ...props }: ComponentProps<"li">) { return <li className={cn("inline-flex items-center gap-1.5", className)} {...props} />; }
function BreadcrumbLink({ ref: forwardedRef, asChild = false, render, className, children, ...props }: useRender.ComponentProps<"a"> & { asChild?: boolean }) {
  const ref = useStyleMotion<HTMLElement>(forwardedRef);
  const child = asChild && isValidElement<{ children?: ReactNode }>(children) ? children : undefined;
  return useRender({ defaultTagName: "a", render: child ?? render, ref, props: mergeProps<"a">({ className: cn("rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring", className), children: child ? child.props.children : children }, props), state: { slot: "breadcrumb-link" } });
}
function BreadcrumbPage({ className, ...props }: ComponentProps<"span">) { return <span aria-current="page" className={cn("font-medium text-foreground", className)} {...props} />; }
function BreadcrumbSeparator({ children, className, ...props }: ComponentProps<"li">) { return <li aria-hidden="true" role="presentation" className={cn("[&_svg]:size-3.5", className)} {...props}>{children ?? <ChevronRight />}</li>; }
function BreadcrumbEllipsis({ className, ...props }: ComponentProps<"span">) { return <span aria-hidden="true" className={cn("flex size-6 items-center justify-center", className)} {...props}><MoreHorizontal className="size-4" /></span>; }
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };
