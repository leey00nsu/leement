"use client";

import * as React from "react";
import { Pause, Play } from "lucide-react";
import { useMotionLoop } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = Omit<React.ComponentProps<"div">, "children"> & { items: React.ReactNode[]; label: string; duration?: number };

function Marquee({ items, label, duration = 24, className, ...props }: MarqueeProps) {
  const [paused, setPaused] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const track = React.useRef<HTMLDivElement>(null);
  const { reduced } = useMotionLoop(track, { x: ["0%", "-50%"] }, "cycle-marquee", paused || hovered, Math.max(5, duration));
  return <div data-slot="marquee" role="region" aria-label={label} className={cn("group relative w-full overflow-hidden rounded-xl border border-border bg-card py-6 text-card-foreground", className)} {...props}>
    
    <div onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} data-slot="marquee-viewport" className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
      <div ref={track} data-slot="marquee-track" className="flex w-max gap-4">
        {[false, true].map((duplicate) => <div key={String(duplicate)} aria-hidden={duplicate || undefined} className="flex gap-4">{items.map((item, index) => <span key={index} className={cn("shrink-0", typeof item === "string" && "rounded-md border border-border bg-muted px-3 py-2 text-sm")}>{item}</span>)}</div>)}
      </div>
    </div>
    <button type="button" disabled={reduced} onClick={() => setPaused((current) => !current)} aria-label={reduced ? "Marquee motion paused by system preference" : paused ? "Play marquee" : "Pause marquee"} className="absolute right-2 top-2 rounded-md border border-border bg-card p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50">{paused || reduced ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}</button>
  </div>;
}

export { Marquee };
export type { MarqueeProps };
