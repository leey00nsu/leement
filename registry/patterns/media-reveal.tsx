"use client";
import type { ComponentProps, ReactNode } from "react";
import { useStyleMotion } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import styles from "./media-reveal.module.css";

type MediaRevealProps = ComponentProps<"div"> & { status: "loading" | "ready" | "error"; label?: string; loading?: ReactNode; error?: ReactNode };
function MediaLayer({ visible, children, decorative = false }: { visible: boolean; children: ReactNode; decorative?: boolean }) {
  const ref = useStyleMotion<HTMLDivElement>(undefined, ["opacity"], "media");
  return <div ref={ref} className={styles.layer} data-visible={visible} aria-hidden={decorative || !visible} inert={decorative || !visible}>{children}</div>;
}
function MediaReveal({ status, label = "Media preview", loading, error, children, className, ...props }: MediaRevealProps) {
  return <div role="group" aria-label={label} aria-busy={status === "loading"} data-slot="media-reveal" data-status={status} className={cn(styles.root, className)} {...props}>
    <MediaLayer visible={status === "ready"}>{children}</MediaLayer>
    <MediaLayer visible={status === "loading"} decorative>{loading ?? <Skeleton className="h-full min-h-24 w-full" />}</MediaLayer>
    <MediaLayer visible={status === "error"}>{error ?? <p>Unable to load this media.</p>}</MediaLayer>
    <span role="status" className="sr-only">{label}: {status === "loading" ? "loading" : status === "ready" ? "ready" : "unavailable"}</span>
  </div>;
}
export { MediaReveal };
export type { MediaRevealProps };
