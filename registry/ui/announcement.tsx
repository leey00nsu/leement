"use client";

import * as React from "react";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

type AnnouncementProps = React.ComponentProps<"div"> & {
  label?: string;
  title: string;
  href?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
};

function Announcement({ label, title, href, dismissible = false, onDismiss, className, ...props }: AnnouncementProps) {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  return <div data-slot="announcement" role="status" className={cn("inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-foreground", className)} {...props}>{label && <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">{label}</span>}{href ? <a href={href} className="inline-flex min-w-0 items-center gap-1 font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{title}<ArrowRight aria-hidden="true" className="size-3.5 shrink-0" /></a> : <span className="font-medium">{title}</span>}{dismissible && <button type="button" aria-label="Dismiss announcement" onClick={() => { setVisible(false); onDismiss?.(); }} className="rounded-full p-0.5 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><X aria-hidden="true" className="size-3.5" /></button>}</div>;
}

export { Announcement };
export type { AnnouncementProps };
