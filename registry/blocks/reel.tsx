"use client";

import * as React from "react";
import { ChevronDown, ChevronUp, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type ReelItem = { id: string; src: string; title: string; author: string; poster?: string; caption?: string };
type ReelProps = Omit<React.ComponentProps<"div">, "children"> & { items: ReelItem[] };

function Reel({ items, className, ref: forwardedRef, ...props }: ReelProps) {
  const root = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(forwardedRef, () => root.current!);
  const [visible, setVisible] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const [muted, setMuted] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const [manualPlay, setManualPlay] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const video = React.useRef<HTMLVideoElement>(null);
  const item = items[index];

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);
  React.useEffect(() => {
    if (!root.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setVisible(entry.isIntersecting && entry.intersectionRatio > 0);
    }, { threshold: 0.01 });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (!visible || paused || (window.matchMedia("(prefers-reduced-motion: reduce)").matches && !manualPlay)) element.pause();
    else void element.play().catch(() => setPaused(true));
    return () => element.pause();
  }, [index, manualPlay, paused, visible]);
  function move(amount: number) {
    setIndex((current) => Math.max(0, Math.min(items.length - 1, current + amount)));
    setProgress(0);
    setManualPlay(false);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }
  function togglePause() {
    if (paused) setManualPlay(true);
    setPaused(!paused);
  }

  return <div ref={root} data-slot="reel" role="region" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); move(event.key === "ArrowDown" ? 1 : -1); } }} aria-label="Video reel. Use up and down arrow keys to change video." className={cn("relative aspect-[9/16] w-full max-w-xs overflow-hidden rounded-xl border border-border bg-card focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40", className)} {...props}>
    {item ? <>
      <video key={item.id} ref={video} src={item.src} poster={item.poster} aria-label={item.title} muted={muted} playsInline preload="metadata" onTimeUpdate={(event) => { const element = event.currentTarget; if (Number.isFinite(element.duration) && element.duration > 0) setProgress(element.currentTime / element.duration * 100); }} onEnded={() => { if (index < items.length - 1) move(1); else setPaused(true); }} className="absolute inset-0 size-full object-cover" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to top, var(--lm-color-media-scrim), transparent 75%)" }} />
      <div role="progressbar" aria-label={`${item.title} playback progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)} className="absolute inset-x-0 top-0 flex gap-1 p-3">{items.map((entry, position) => <span key={entry.id} className="h-1 flex-1 overflow-hidden rounded-full bg-(--lm-color-media-foreground)/40"><span className="block h-full bg-(--lm-color-media-foreground)" style={{ width: position < index ? "100%" : position === index ? progress + "%" : "0%" }} /></span>)}</div>
      <div className="absolute inset-x-0 bottom-0 p-3 text-(--lm-color-media-foreground)"><div aria-live="polite"><p className="text-xs opacity-85">{item.author} · {index + 1}/{items.length}</p><p className="mt-1 text-base font-semibold">{item.title}</p>{item.caption && <p className="mt-1 text-xs opacity-85">{item.caption}</p>}</div>
        <div className="mt-4 flex items-center justify-between gap-1"><button type="button" aria-label="Previous reel" disabled={index === 0} onClick={() => move(-1)} className="rounded-md p-2 hover:bg-(--lm-color-media-foreground)/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--lm-color-media-foreground) disabled:opacity-40"><ChevronUp className="size-4" /></button><div className="flex gap-1"><button type="button" aria-label={paused ? "Play reel" : "Pause reel"} onClick={togglePause} className="rounded-md p-2 hover:bg-(--lm-color-media-foreground)/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--lm-color-media-foreground)">{paused ? <Play className="size-4" /> : <Pause className="size-4" />}</button><button type="button" aria-label={muted ? "Unmute reel" : "Mute reel"} onClick={() => setMuted((current) => !current)} className="rounded-md p-2 hover:bg-(--lm-color-media-foreground)/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--lm-color-media-foreground)">{muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}</button></div><button type="button" aria-label="Next reel" disabled={index === items.length - 1} onClick={() => move(1)} className="rounded-md p-2 hover:bg-(--lm-color-media-foreground)/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--lm-color-media-foreground) disabled:opacity-40"><ChevronDown className="size-4" /></button></div>
      </div>
    </> : <p className="p-4 text-sm text-muted-foreground">No reels</p>}
  </div>;
}

export { Reel };
export type { ReelItem, ReelProps };
