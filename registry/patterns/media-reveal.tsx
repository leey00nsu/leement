"use client";
import type { ComponentProps, ReactNode } from "react";
import { useStyleMotion } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type MediaRevealProps = ComponentProps<"div"> & { status: "loading" | "ready" | "error"; label?: string; loading?: ReactNode; error?: ReactNode };
function MediaLayer({ visible, children, decorative = false }: { visible: boolean; children: ReactNode; decorative?: boolean }) {
  const ref = useStyleMotion<HTMLDivElement>(undefined, ["opacity"], "media");
  return <div ref={ref} className="pointer-events-none invisible [grid-area:1/1] min-w-0 opacity-0 data-[visible=true]:pointer-events-auto data-[visible=true]:visible data-[visible=true]:opacity-100" data-visible={visible} aria-hidden={decorative || !visible} inert={decorative || !visible}>{children}</div>;
}
function MediaReveal({ status, label = "Media preview", loading, error, children, className, ...props }: MediaRevealProps) {
  return <div role="group" aria-label={label} aria-busy={status === "loading"} data-slot="media-reveal" data-status={status} className={cn("grid [&>[role=status]]:[grid-area:1/1]", className)} {...props}>
    <MediaLayer visible={status === "ready"}>{children}</MediaLayer>
    <MediaLayer visible={status === "loading"} decorative>{loading ?? <Skeleton className="h-full min-h-24 w-full" />}</MediaLayer>
    <MediaLayer visible={status === "error"}>{error ?? <p>Unable to load this media.</p>}</MediaLayer>
    <span role="status" className="sr-only">{label}: {status === "loading" ? "loading" : status === "ready" ? "ready" : "unavailable"}</span>
  </div>;
}
export { MediaReveal };
export type { MediaRevealProps };
