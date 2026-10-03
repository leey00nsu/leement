"use client";
import type { ComponentProps } from "react";
import * as Primitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";
const HoverCard = Primitive.Root;
const HoverCardTrigger = Primitive.Trigger;
function HoverCardContent({ className, align = "center", sideOffset = 8, children, ...props }: ComponentProps<typeof Primitive.Content>) {
  return <Primitive.Portal><Primitive.Content data-slot="hover-card-content" align={align} sideOffset={sideOffset} className={cn("z-50 w-72 max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-popover p-4 text-popover-foreground shadow-md", className)} {...props}>{children}<Primitive.Arrow className="fill-popover" /></Primitive.Content></Primitive.Portal>;
}
export { HoverCard, HoverCardTrigger, HoverCardContent };
