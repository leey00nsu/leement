import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import styles from "./media-reveal.module.css";

type MediaRevealProps = ComponentProps<"div"> & { status: "loading" | "ready" | "error"; label?: string; loading?: ReactNode; error?: ReactNode };
function MediaReveal({ status, label = "Media preview", loading, error, children, className, ...props }: MediaRevealProps) {
  return <div role="group" aria-label={label} aria-busy={status === "loading"} data-slot="media-reveal" data-status={status} className={cn(styles.root, className)} {...props}>
    <div className={styles.layer} data-visible={status === "ready"} aria-hidden={status !== "ready"} inert={status !== "ready"}>{children}</div>
    <div className={styles.layer} data-visible={status === "loading"} aria-hidden="true" inert>{loading ?? <Skeleton className="h-full min-h-24 w-full" />}</div>
    <div className={styles.layer} data-visible={status === "error"} aria-hidden={status !== "error"} inert={status !== "error"}>{error ?? <p>Unable to load this media.</p>}</div>
    <span role="status" className="sr-only">{label}: {status === "loading" ? "loading" : status === "ready" ? "ready" : "unavailable"}</span>
  </div>;
}
export { MediaReveal };
export type { MediaRevealProps };
