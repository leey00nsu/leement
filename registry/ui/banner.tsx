"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type BannerProps = React.ComponentProps<"section"> & {
  title: string;
  description: string;
  action?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
};

function Banner({ title, description, action, dismissible = false, onDismiss, className, ...props }: BannerProps) {
  const [visible, setVisible] = React.useState(true);
  const id = React.useId();
  if (!visible) return null;
  return <section data-slot="banner" aria-labelledby={id} className={cn("relative flex w-full flex-col gap-4 rounded-xl border border-border bg-primary/10 p-5 text-foreground sm:flex-row sm:items-center sm:justify-between", className)} {...props}><div><h2 id={id} className="text-base font-semibold">{title}</h2><p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p></div>{action && <div className="shrink-0">{action}</div>}{dismissible && <button type="button" aria-label="Dismiss banner" onClick={() => { setVisible(false); onDismiss?.(); }} className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><X aria-hidden="true" className="size-4" /></button>}</section>;
}

export { Banner };
export type { BannerProps };
