"use client";

import * as React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TickerProps = Omit<React.ComponentProps<"div">, "children"> & {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  currency?: string;
  locale?: string;
  high?: number;
  low?: number;
};

function Ticker({ symbol, name, price, changePercent, currency = "USD", locale = "en-US", high, low, className, ...props }: TickerProps) {
  const [expanded, setExpanded] = React.useState(false);
  const format = new Intl.NumberFormat(locale, { style: "currency", currency });
  const positive = changePercent >= 0;
  return <div data-slot="ticker" className={cn("rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <button type="button" onClick={() => setExpanded((current) => !current)} aria-expanded={expanded} aria-label={`${name} ${symbol}, ${format.format(price)}, ${positive ? "up" : "down"} ${Math.abs(changePercent)} percent. ${expanded ? "Hide" : "Show"} details`} className="flex w-full items-center justify-between gap-6 rounded-xl p-4 text-left focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"><span><strong className="block text-sm">{symbol}</strong><span className="text-xs text-muted-foreground">{name}</span></span><span className="text-right"><strong className="block tabular-nums">{format.format(price)}</strong><span className={cn("inline-flex items-center gap-0.5 text-xs tabular-nums", positive ? "text-success" : "text-destructive")}>{positive ? <ArrowUpRight aria-hidden="true" className="size-3.5" /> : <ArrowDownRight aria-hidden="true" className="size-3.5" />}{positive ? "+" : ""}{changePercent.toFixed(2)}%</span></span></button>
    {expanded && <div className="grid grid-cols-2 gap-3 border-t border-border px-4 py-3 text-xs"><span className="text-muted-foreground">High <strong className="block text-foreground">{high === undefined ? "—" : format.format(high)}</strong></span><span className="text-muted-foreground">Low <strong className="block text-foreground">{low === undefined ? "—" : format.format(low)}</strong></span></div>}
  </div>;
}

export { Ticker };
export type { TickerProps };
