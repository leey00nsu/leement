"use client";

import * as React from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type MarqueeProps = Omit<React.ComponentProps<"div">, "children"> & { items: React.ReactNode[]; label: string; duration?: number };

function Marquee({ items, label, duration = 24, className, ...props }: MarqueeProps) {
  const [paused, setPaused] = React.useState(false);
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    if (!window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return <div data-slot="marquee" role="region" aria-label={label} className={cn("group relative w-full overflow-hidden rounded-xl border border-border bg-card py-3 text-card-foreground", className)} {...props}>
    <style>{"@keyframes lm-marquee {to {transform: translateX(-50%)}}"}</style>
    <div className="flex w-max animate-[lm-marquee_24s_linear_infinite] gap-4 motion-reduce:animate-none group-hover:[animation-play-state:paused]" style={{ animationDuration: `${Math.max(5, duration)}s`, animationPlayState: paused ? "paused" : undefined }}><div className="flex gap-4">{items.map((item, index) => <span key={index} className="rounded-md border border-border bg-muted px-3 py-2 text-sm">{item}</span>)}</div><div aria-hidden="true" className="flex gap-4">{items.map((item, index) => <span key={index} className="rounded-md border border-border bg-muted px-3 py-2 text-sm">{item}</span>)}</div></div>
    <button type="button" disabled={reduced} onClick={() => setPaused((current) => !current)} aria-label={reduced ? "Marquee motion paused by system preference" : paused ? "Play marquee" : "Pause marquee"} className="absolute right-2 top-2 rounded-md border border-border bg-card p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50">{paused || reduced ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}</button>
  </div>;
}

export { Marquee };
export type { MarqueeProps };
