"use client";

import * as React from "react";
import { ChevronDown, ChevronUp, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type ReelItem = { id: string; src: string; title: string; author: string; poster?: string; caption?: string };
type ReelProps = Omit<React.ComponentProps<"div">, "children"> & { items: ReelItem[] };

function Reel({ items, className, ...props }: ReelProps) {
  const [index, setIndex] = React.useState(0);
  const [muted, setMuted] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const video = React.useRef<HTMLVideoElement>(null);
  const item = items[index];
  React.useEffect(() => { const current = video.current; if (!current) return; if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) current.pause(); else void current.play().catch(() => {}); return () => current.pause(); }, [index, paused]);
  function move(amount: number) { setIndex((current) => Math.max(0, Math.min(items.length - 1, current + amount))); }
  return <div data-slot="reel" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); move(event.key === "ArrowDown" ? 1 : -1); } }} aria-label="Video reel. Use up and down arrow keys to change video." className={cn("relative w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card text-card-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40", className)} {...props}>
    {item ? <><video key={item.id} ref={video} src={item.src} poster={item.poster} aria-label={item.title} muted={muted} loop playsInline preload="metadata" className="aspect-[9/12] w-full bg-muted object-cover" /><div className="flex items-end justify-between gap-3 p-3"><div><p className="text-xs text-muted-foreground">{item.author} · {index + 1}/{items.length}</p><p className="text-sm font-medium">{item.title}</p>{item.caption && <p className="text-xs text-muted-foreground">{item.caption}</p>}</div><div className="flex shrink-0 gap-1"><button type="button" aria-label={paused ? "Play reel" : "Pause reel"} onClick={() => setPaused((current) => !current)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{paused ? <Play className="size-4" /> : <Pause className="size-4" />}</button><button type="button" aria-label={muted ? "Unmute reel" : "Mute reel"} onClick={() => setMuted((current) => !current)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}</button><button type="button" aria-label="Previous reel" disabled={index === 0} onClick={() => move(-1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"><ChevronUp className="size-4" /></button><button type="button" aria-label="Next reel" disabled={index === items.length - 1} onClick={() => move(1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"><ChevronDown className="size-4" /></button></div></div></> : <p className="p-4 text-sm text-muted-foreground">No reels</p>}
  </div>;
}

export { Reel };
export type { ReelItem, ReelProps };
