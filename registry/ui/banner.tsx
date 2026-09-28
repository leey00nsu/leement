"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type BannerProps = React.ComponentProps<"section"> & {
  title: string;
  description: string;
  action?: React.ReactNode;
  tone?: "prominent" | "subtle";
  dismissible?: boolean;
  onDismiss?: () => void;
};

function Banner({ title, description, action, tone = "prominent", dismissible = false, onDismiss, className, ...props }: BannerProps) {
  const [visible, setVisible] = React.useState(true);
  const id = React.useId();
  if (!visible) return null;
  return <section data-slot="banner" data-tone={tone} aria-labelledby={id} className={cn("relative flex w-full flex-col gap-4 rounded-xl border p-5 sm:flex-row sm:items-center sm:justify-between", tone === "prominent" ? "border-foreground bg-foreground text-background" : "border-border bg-muted text-foreground", className)} {...props}><div className={cn("min-w-0", dismissible && "pr-7")}><h2 id={id} className="text-base font-semibold">{title}</h2><p className={cn("mt-1 max-w-2xl text-sm", tone === "prominent" ? "text-background/75" : "text-muted-foreground")}>{description}</p></div>{action && <div className="shrink-0">{action}</div>}{dismissible && <button type="button" aria-label="Dismiss banner" onClick={() => { setVisible(false); onDismiss?.(); }} className={cn("absolute right-2 top-2 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2", tone === "prominent" ? "hover:bg-background/15 focus-visible:ring-background" : "hover:bg-background focus-visible:ring-ring")}><X aria-hidden="true" className="size-4" /></button>}</section>;
}

export { Banner };
export type { BannerProps };
