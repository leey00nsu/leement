import type { ComponentProps } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Pagination({ className, ...props }: ComponentProps<"nav">) { return <nav aria-label="Pagination" className={cn("flex justify-center", className)} {...props} />; }
function PaginationContent({ className, ...props }: ComponentProps<"ul">) { return <ul className={cn("flex flex-wrap items-center gap-1", className)} {...props} />; }
function PaginationItem(props: ComponentProps<"li">) { return <li {...props} />; }
type PaginationLinkProps = ComponentProps<"a"> & { isActive?: boolean; disabled?: boolean; size?: ComponentProps<typeof import("@/components/ui/button").Button>["size"] };
function PaginationLink({ isActive, disabled, size = "icon", className, onClick, href, ...props }: PaginationLinkProps) {
  return <a aria-current={isActive ? "page" : undefined} aria-disabled={disabled || undefined} href={disabled ? undefined : href} {...props} tabIndex={disabled ? -1 : props.tabIndex} className={cn(buttonVariants({ variant: isActive ? "outline" : "ghost", size }), disabled && "cursor-not-allowed opacity-50", className)} onClick={event => { if (disabled) { event.preventDefault(); return; } onClick?.(event); }} />;
}
function PaginationPrevious({ children, ...props }: PaginationLinkProps) { return <PaginationLink aria-label="Previous page" size="default" {...props}><ChevronLeft aria-hidden="true" />{children ?? "Previous"}</PaginationLink>; }
function PaginationNext({ children, ...props }: PaginationLinkProps) { return <PaginationLink aria-label="Next page" size="default" {...props}>{children ?? "Next"}<ChevronRight aria-hidden="true" /></PaginationLink>; }
function PaginationEllipsis({ className, ...props }: ComponentProps<"span">) { return <span aria-hidden="true" {...props} className={cn("flex size-10 items-center justify-center text-muted-foreground", className)}><MoreHorizontal className="size-4" /></span>; }
export { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis };
export type { PaginationLinkProps };
