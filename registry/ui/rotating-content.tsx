"use client";

import { useEffect, useImperativeHandle, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { motionMilliseconds, useMotionActivity } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";
import styles from "./rotating-content.module.css";

type RotatingContentProps = ComponentProps<"span"> & { items: ReactNode[]; label: string; interval?: number; paused?: boolean; defaultPaused?: boolean; onPausedChange?: (paused: boolean) => void } & ({ controls?: true } | { controls: false; paused: boolean });
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
    <span className={styles.slot} aria-hidden="true" inert>{items.map((item, itemIndex) => <span key={itemIndex} className={styles.item} data-current={itemIndex === currentIndex}>{item}</span>)}</span>
    {controls && <Button type="button" size="sm" variant="ghost" disabled={reduced || items.length < 2} aria-pressed={isPaused || reduced} aria-label={`${isPaused ? "Resume" : "Pause"} ${label}`} onClick={() => { if (paused === undefined) setInternalPaused(!isPaused); onPausedChange?.(!isPaused); }}>{reduced ? "Motion off" : isPaused ? "Resume" : "Pause"}</Button>}
  </span>;
}
export { RotatingContent };
export type { RotatingContentProps };
