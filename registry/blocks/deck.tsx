"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type DeckSlide = { id: string; title: string; content: React.ReactNode };
type DeckProps = Omit<React.ComponentProps<"section">, "children"> & { slides: DeckSlide[]; onSlideChange?: (index: number) => void };

function Deck({ slides, onSlideChange, className, ...props }: DeckProps) {
  const [index, setIndex] = React.useState(0);
  const slide = slides[index];
  function move(amount: number) { const next = Math.max(0, Math.min(slides.length - 1, index + amount)); if (next !== index) { setIndex(next); onSlideChange?.(next); } }
  return <section data-slot="deck" aria-label="Presentation deck" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }} className={cn("w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40", className)} {...props}>
    {slide ? <><div className="flex min-h-64 flex-col justify-center p-8"><p className="mb-3 text-xs font-medium text-muted-foreground">Slide {index + 1} of {slides.length}</p><h2 className="text-2xl font-semibold">{slide.title}</h2><div className="mt-4 text-sm leading-relaxed text-muted-foreground">{slide.content}</div></div><div className="flex items-center justify-between border-t border-border p-3"><button type="button" aria-label="Previous slide" disabled={index === 0} onClick={() => move(-1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"><ChevronLeft className="size-4" /></button><span role="status" className="text-xs text-muted-foreground">{index + 1} / {slides.length}</span><button type="button" aria-label="Next slide" disabled={index === slides.length - 1} onClick={() => move(1)} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"><ChevronRight className="size-4" /></button></div></> : <p className="p-8 text-sm text-muted-foreground">No slides</p>}
  </section>;
}

export { Deck };
export type { DeckProps, DeckSlide };
