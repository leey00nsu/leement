"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type CreditCardProps = Omit<React.ComponentProps<"div">, "children"> & {
  brand: string;
  holder: string;
  last4: string;
  expiry: string;
  backNote?: string;
  network?: string;
};

function CreditCard({ brand, holder, last4, expiry, network = "CARD", backNote = "Your card details are managed securely by your payment provider.", className, ...props }: CreditCardProps) {
  const [flipped, setFlipped] = React.useState(false);
  const masked = last4.replace(/\D/g, "").slice(-4);
  return <div data-slot="credit-card" className={cn("w-full max-w-sm", className)} {...props}>
    <div role="group" aria-label={`${brand} card ending in ${masked}`} className="relative flex aspect-[1.6] flex-col justify-between overflow-hidden rounded-xl border border-border bg-primary p-5 text-primary-foreground shadow-md sm:p-6">
      <div aria-hidden="true" className="absolute -right-12 -top-20 size-48 rounded-full border border-primary-foreground/15" />
      <div className="relative flex items-start justify-between gap-2"><strong className="text-base tracking-tight">{brand}</strong><span className="text-xs font-semibold tracking-[0.18em]">{network}</span></div>
      {flipped ? <div className="relative space-y-4"><div aria-hidden="true" className="h-9 w-full bg-primary-foreground/20" /><p className="max-w-64 text-sm">{backNote}</p></div> : <div className="relative">
        <span aria-hidden="true" className="relative mb-5 block h-8 w-11 overflow-hidden rounded-md border border-primary-foreground/70 bg-primary-foreground/60"><span className="absolute inset-y-0 left-1/3 border-l border-primary" /><span className="absolute inset-y-0 right-1/3 border-r border-primary" /><span className="absolute inset-x-0 top-1/2 border-t border-primary" /></span>
        <p className="font-mono text-base tracking-[0.16em] sm:text-lg" aria-label={`Card ending in ${masked}`}>•••• •••• •••• {masked}</p><div className="mt-4 flex justify-between gap-3 text-xs"><span className="truncate uppercase tracking-wide">{holder}</span><span className="shrink-0 tabular-nums">{expiry}</span></div>
      </div>}
    </div>
    <button type="button" onClick={() => setFlipped((current) => !current)} aria-label={flipped ? "Show card front" : "Show card back"} className="mt-2 inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"><RotateCcw aria-hidden="true" className="size-4" />{flipped ? "Front" : "Back"}</button>
  </div>;
}

export { CreditCard };
export type { CreditCardProps };
