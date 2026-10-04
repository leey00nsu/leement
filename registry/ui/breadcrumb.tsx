"use client";
import { useStyleMotion } from "@/lib/leement-motion";
import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

function Breadcrumb(props: ComponentProps<"nav">) { return <nav aria-label="Breadcrumb" {...props} />; }
function BreadcrumbList({ className, ...props }: ComponentProps<"ol">) { return <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2", className)} {...props} />; }
function BreadcrumbItem({ className, ...props }: ComponentProps<"li">) { return <li className={cn("inline-flex items-center gap-1.5", className)} {...props} />; }
function BreadcrumbLink({ ref: motionForwardedRef, asChild = false, className, ...props }: ComponentProps<"a"> & { asChild?: boolean }) {
  const styleMotionRef1 = useStyleMotion<HTMLAnchorElement>(motionForwardedRef);

  const Component = asChild ? Slot : "a";
  return <Component ref={styleMotionRef1} className={cn("rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring", className)} {...props} />;
}
function BreadcrumbPage({ className, ...props }: ComponentProps<"span">) { return <span aria-current="page" className={cn("font-medium text-foreground", className)} {...props} />; }
function BreadcrumbSeparator({ children, className, ...props }: ComponentProps<"li">) { return <li aria-hidden="true" role="presentation" className={cn("[&_svg]:size-3.5", className)} {...props}>{children ?? <ChevronRight />}</li>; }
function BreadcrumbEllipsis({ className, ...props }: ComponentProps<"span">) { return <span aria-hidden="true" className={cn("flex size-6 items-center justify-center", className)} {...props}><MoreHorizontal className="size-4" /></span>; }
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };
