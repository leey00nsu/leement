"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

type StoryItem = { id: string; src: string; alt: string; author: string; type?: "image" | "video"; poster?: string };
type StoriesProps = Omit<React.ComponentProps<"div">, "children"> & {
  items: StoryItem[];
  autoAdvanceMs?: number;
  presentation?: "triggers" | "viewer";
};

function Stories({ items, autoAdvanceMs, presentation = "triggers", className, ...props }: StoriesProps) {
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const [manualPlay, setManualPlay] = React.useState(false);
  const video = React.useRef<HTMLVideoElement>(null);
  const triggers = React.useRef<Array<HTMLButtonElement | null>>([]);
  const openedFrom = React.useRef(0);
  const current = items[index];
  const active = presentation === "viewer" || open;

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);
  React.useEffect(() => {
    if (!active || !autoAdvanceMs || paused || items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setIndex((position) => (position + 1) % items.length), autoAdvanceMs);
    return () => window.clearTimeout(timer);
  }, [active, autoAdvanceMs, index, items.length, paused]);
  React.useEffect(() => {
    const element = video.current;
    if (!active || !element || current?.type !== "video") return;
    if (paused || (window.matchMedia("(prefers-reduced-motion: reduce)").matches && !manualPlay)) element.pause();
    else void element.play().catch(() => setPaused(true));
    return () => element.pause();
  }, [active, current, manualPlay, paused]);

  function move(amount: number) {
    setIndex((position) => Math.max(0, Math.min(items.length - 1, position + amount)));
    setManualPlay(false);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }
  function openAt(position: number) {
    openedFrom.current = position;
    setIndex(position);
    setManualPlay(false);
    setPaused(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setOpen(true);
  }
  function togglePause() {
    if (paused) setManualPlay(true);
    setPaused(!paused);
  }

  const viewer = current ? <div data-slot="stories-viewer" className="w-full max-w-xs overflow-hidden rounded-xl border border-border bg-card text-card-foreground">
    <div className="flex gap-1 p-2" aria-label={`Story ${index + 1} of ${items.length}`}>{items.map((item, position) => <span key={item.id} className={cn("h-1 flex-1 rounded-full", position <= index ? "bg-primary" : "bg-muted")} />)}</div>
    <div className="relative aspect-[9/12] bg-muted">{current.type === "video" ? <video key={current.id} ref={video} src={current.src} poster={current.poster} aria-label={current.alt} muted playsInline onEnded={() => { if (index < items.length - 1) move(1); else setPaused(true); }} className="size-full object-cover" /> : <img src={current.src} alt={current.alt} className="size-full object-cover" />}<span className="absolute right-3 top-3 rounded-full bg-card/90 px-2 py-1 text-xs font-medium text-card-foreground">{current.author}</span></div>
    <div className="flex items-center justify-between p-2"><button type="button" disabled={index === 0} onClick={() => move(-1)} aria-label="Previous story" className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"><ChevronLeft className="size-4" /></button><span className="text-xs text-muted-foreground">{index + 1} / {items.length}</span><div className="flex"><button type="button" onClick={togglePause} aria-label={paused ? "Play stories" : "Pause stories"} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{paused ? <Play className="size-4" /> : <Pause className="size-4" />}</button><button type="button" disabled={index === items.length - 1} onClick={() => move(1)} aria-label="Next story" className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"><ChevronRight className="size-4" /></button></div></div>
  </div> : <p className="p-4 text-sm text-muted-foreground">No stories</p>;

  if (presentation === "viewer") return <div data-slot="stories" className={cn("w-full max-w-xs", className)} {...props}>{viewer}</div>;
  return <div data-slot="stories" className={cn("flex flex-wrap items-start gap-4", className)} {...props}>
    {items.map((item, position) => <button key={item.id} ref={(node) => { triggers.current[position] = node; }} type="button" data-slot="story-trigger" aria-label={`Open story from ${item.author}`} onClick={() => openAt(position)} className="group flex max-w-20 flex-col items-center gap-1.5 rounded-md text-center focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">
      <span className="flex size-16 items-center justify-center rounded-full border-2 border-primary bg-muted p-1">{item.type === "video" && !item.poster ? <span className="text-lg font-medium">{item.author.slice(0, 1)}</span> : <img src={item.type === "video" ? item.poster : item.src} alt="" className="size-full rounded-full object-cover" />}</span>
      <span className="truncate text-xs text-foreground">{item.author}</span>
    </button>)}
    <DialogPrimitive.Root open={open} onOpenChange={(next) => { setOpen(next); if (!next) setPaused(true); }}>
      <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/85 backdrop-blur-sm" /><DialogPrimitive.Content onCloseAutoFocus={(event) => { event.preventDefault(); triggers.current[openedFrom.current]?.focus(); }} className="fixed inset-4 z-50 flex items-center justify-center outline-none"><DialogPrimitive.Title className="sr-only">{current?.author ?? "Story"} story</DialogPrimitive.Title><DialogPrimitive.Description className="sr-only">{current?.alt ?? "Story viewer"}</DialogPrimitive.Description>{viewer}<DialogPrimitive.Close type="button" aria-label="Close story" className="absolute right-2 top-2 rounded-md bg-card p-2 text-card-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring"><X aria-hidden="true" className="size-5" /></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  </div>;
}

export { Stories };
export type { StoriesProps, StoryItem };
