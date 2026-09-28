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
  layout?: "inline" | "card";
};

function Ticker({ symbol, name, price, changePercent, currency = "USD", locale = "en-US", high, low, layout = "inline", className, ...props }: TickerProps) {
  const [expanded, setExpanded] = React.useState(false);
  const detailsId = React.useId();
  const format = new Intl.NumberFormat(locale, { style: "currency", currency });
  const positive = changePercent >= 0;
  return <div data-slot="ticker" data-layout={layout} className={cn("text-card-foreground", layout === "card" ? "w-full rounded-xl border border-border bg-card" : "inline-block max-w-full", className)} {...props}>
    <button type="button" onClick={() => setExpanded((current) => !current)} aria-expanded={expanded} aria-controls={expanded ? detailsId : undefined} aria-label={`${name} ${symbol}, ${format.format(price)}, ${positive ? "up" : "down"} ${Math.abs(changePercent)} percent. ${expanded ? "Hide" : "Show"} details`} className={cn("flex max-w-full items-center gap-2 rounded-lg text-left focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40", layout === "card" ? "w-full justify-between p-4" : "px-2 py-1.5 hover:bg-muted")}>
      <span className="flex min-w-0 items-center gap-2"><span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[10px] font-semibold">{symbol.slice(0, 2).toUpperCase()}</span><span><strong className="block text-sm">{symbol}</strong>{layout === "card" && <span className="block text-xs text-muted-foreground">{name}</span>}</span></span>
      <span className={cn("flex items-center gap-1.5 whitespace-nowrap", layout === "card" && "flex-col items-end gap-0")}><strong className="text-sm font-medium tabular-nums">{format.format(price)}</strong><span className={cn("inline-flex items-center gap-0.5 text-xs tabular-nums", positive ? "text-success-foreground" : "text-destructive")}>{positive ? <ArrowUpRight aria-hidden="true" className="size-3.5" /> : <ArrowDownRight aria-hidden="true" className="size-3.5" />}{positive ? "+" : ""}{changePercent.toFixed(2)}%</span></span>
    </button>
    {expanded && <div id={detailsId} className="grid grid-cols-2 gap-3 border-t border-border px-3 py-3 text-xs"><span className="text-muted-foreground">High <strong className="block text-foreground">{high === undefined ? "—" : format.format(high)}</strong></span><span className="text-muted-foreground">Low <strong className="block text-foreground">{low === undefined ? "—" : format.format(low)}</strong></span></div>}
  </div>;
}

export { Ticker };
export type { TickerProps };
