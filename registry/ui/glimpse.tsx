"use client";

import * as React from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

type GlimpseProps = { href: string; label: string; title: string; description: string; imageSrc?: string; imageAlt?: string; className?: string };

function Glimpse({ href, label, title, description, imageSrc, imageAlt = "", className }: GlimpseProps) {
  return <HoverCard openDelay={200} closeDelay={100}><HoverCardTrigger asChild><a href={href} className={cn("font-medium text-foreground underline decoration-foreground/45 underline-offset-4 hover:decoration-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40", className)}>{label}</a></HoverCardTrigger><HoverCardContent sideOffset={8} className="z-50 w-72 rounded-xl border border-border bg-popover p-4 text-popover-foreground shadow-md"><div className="flex gap-3">{imageSrc && <img src={imageSrc} alt={imageAlt} className="size-12 shrink-0 rounded-md object-cover" />}<div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-muted-foreground">{description}</p></div></div></HoverCardContent></HoverCard>;
}

export { Glimpse };
export type { GlimpseProps };
