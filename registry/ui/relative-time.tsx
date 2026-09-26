"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RelativeTimeProps = Omit<React.ComponentProps<"time">, "dateTime"> & { date: Date | string; now?: Date; locale?: string };

function formatRelative(date: Date, now: Date, locale: string) {
  const seconds = Math.round((date.getTime() - now.getTime()) / 1000);
  const absolute = Math.abs(seconds);
  const [amount, unit] = absolute < 60 ? [seconds, "second"] : absolute < 3600 ? [Math.round(seconds / 60), "minute"] : absolute < 86400 ? [Math.round(seconds / 3600), "hour"] : absolute < 2592000 ? [Math.round(seconds / 86400), "day"] : absolute < 31536000 ? [Math.round(seconds / 2592000), "month"] : [Math.round(seconds / 31536000), "year"];
  return new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(amount as number, unit as Intl.RelativeTimeFormatUnit);
}

function RelativeTime({ date, now, locale = "en-US", className, ...props }: RelativeTimeProps) {
  const [current, setCurrent] = React.useState(() => new Date());
  React.useEffect(() => { if (now) return; const timer = window.setInterval(() => setCurrent(new Date()), 60000); return () => window.clearInterval(timer); }, [now]);
  const target = typeof date === "string" ? new Date(date) : date;
  if (Number.isNaN(target.getTime())) return null;
  const full = new Intl.DateTimeFormat(locale, { dateStyle: "full", timeStyle: "short" }).format(target);
  const relative = formatRelative(target, now ?? current, locale);
  return <time data-slot="relative-time" dateTime={target.toISOString()} title={full} aria-label={`${relative}, ${full}`} suppressHydrationWarning className={cn("text-sm text-muted-foreground", className)} {...props}>{relative}</time>;
}

export { RelativeTime };
export type { RelativeTimeProps };
