"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type StoryItem = { id: string; src: string; alt: string; author: string; type?: "image" | "video" };
type StoriesProps = Omit<React.ComponentProps<"div">, "children"> & { items: StoryItem[]; autoAdvanceMs?: number };

function Stories({ items, autoAdvanceMs, className, ...props }: StoriesProps) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const video = React.useRef<HTMLVideoElement>(null);
  const current = items[index];
  React.useEffect(() => {
    if (!autoAdvanceMs || paused || items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % items.length), autoAdvanceMs);
    return () => window.clearTimeout(timer);
  }, [autoAdvanceMs, index, items.length, paused]);
  React.useEffect(() => {
    if (!video.current || current?.type !== "video") return;
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) video.current.pause();
    else void video.current.play().catch(() => {});
  }, [current, paused]);
  function move(amount: number) { setIndex((current) => Math.max(0, Math.min(items.length - 1, current + amount))); }
  return <div data-slot="stories" className={cn("w-full max-w-xs overflow-hidden rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    {current ? <><div className="flex gap-1 p-2" aria-label={`Story ${index + 1} of ${items.length}`}>{items.map((item, position) => <span key={item.id} className={cn("h-1 flex-1 rounded-full", position <= index ? "bg-primary" : "bg-muted")} />)}</div><div className="relative aspect-[9/12] bg-muted">{current.type === "video" ? <video key={current.id} ref={video} src={current.src} aria-label={current.alt} muted playsInline onEnded={() => move(1)} className="size-full object-cover" /> : <img src={current.src} alt={current.alt} className="size-full object-cover" />}<span className="absolute left-3 top-3 rounded-full bg-card/90 px-2 py-1 text-xs font-medium text-card-foreground">{current.author}</span></div><div className="flex items-center justify-between p-2"><button type="button" disabled={index === 0} onClick={() => move(-1)} aria-label="Previous story" className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"><ChevronLeft className="size-4" /></button><span className="text-xs text-muted-foreground">{index + 1} / {items.length}</span><div className="flex"><button type="button" onClick={() => setPaused((current) => !current)} aria-label={paused ? "Play stories" : "Pause stories"} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{paused ? <Play className="size-4" /> : <Pause className="size-4" />}</button><button type="button" disabled={index === items.length - 1} onClick={() => move(1)} aria-label="Next story" className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"><ChevronRight className="size-4" /></button></div></div></> : <p className="p-4 text-sm text-muted-foreground">No stories</p>}
  </div>;
}

export { Stories };
export type { StoryItem, StoriesProps };
