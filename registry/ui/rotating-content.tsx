"use client";

import { useEffect, useImperativeHandle, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { motionMilliseconds, useMotionActivity, useStyleMotion } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

type RotatingContentProps = ComponentProps<"span"> & { items: ReactNode[]; label: string; interval?: number; paused?: boolean; defaultPaused?: boolean; onPausedChange?: (paused: boolean) => void } & ({ controls?: true } | { controls: false; paused: boolean });
function RotationItem({ current, children }: { current: boolean; children: ReactNode }) {
  const ref = useStyleMotion<HTMLSpanElement>(undefined, ["opacity", "transform", "filter"]);
  return <span ref={ref} className="[grid-area:1/1] opacity-0 [transform:translateY(6px)] [filter:blur(4px)] data-[current=true]:opacity-100 data-[current=true]:transform-none data-[current=true]:filter-none motion-reduce:filter-none! motion-reduce:transform-none! [@media(scripting:none)]:filter-none! [@media(scripting:none)]:transform-none!" data-current={current}>{children}</span>;
}
function RotatingContent({ items, label, interval, paused, defaultPaused = false, onPausedChange, controls = true, className, ref: forwardedRef, ...props }: RotatingContentProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useImperativeHandle(forwardedRef, () => ref.current!);
  const { active, reduced } = useMotionActivity(ref);
  const [index, setIndex] = useState(0);
  const [internalPaused, setInternalPaused] = useState(defaultPaused);
  const [revision, setRevision] = useState(0);
  const isPaused = paused ?? internalPaused;
  useEffect(() => {
    const refresh = () => setRevision((value) => value + 1);
    window.addEventListener("leement:motion-change", refresh);
    return () => window.removeEventListener("leement:motion-change", refresh);
  }, []);
  useEffect(() => {
    if (!active || isPaused || items.length < 2 || !ref.current) return;
    const duration = interval ?? motionMilliseconds(ref.current, "cycle-rotate");
    if (!Number.isFinite(duration) || duration <= 0) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % items.length), duration);
    return () => window.clearTimeout(timer);
  }, [active, index, interval, isPaused, items.length, revision]);
  const currentIndex = reduced ? 0 : index % Math.max(1, items.length);
  return <span ref={ref} role="group" aria-label={label} data-slot="rotating-content" data-index={currentIndex} data-motion-paused={isPaused || !active} className={cn("inline-flex max-w-full items-center gap-3", className)} {...props}>
    <span className="inline-grid min-w-0" aria-hidden="true" inert>{items.map((item, itemIndex) => <RotationItem key={itemIndex} current={itemIndex === currentIndex}>{item}</RotationItem>)}</span>
    {controls && <Button type="button" size="sm" variant="ghost" disabled={reduced || items.length < 2} aria-pressed={isPaused || reduced} aria-label={`${isPaused ? "Resume" : "Pause"} ${label}`} onClick={() => { if (paused === undefined) setInternalPaused(!isPaused); onPausedChange?.(!isPaused); }}>{reduced ? "Motion off" : isPaused ? "Resume" : "Pause"}</Button>}
  </span>;
}
export { RotatingContent };
export type { RotatingContentProps };
