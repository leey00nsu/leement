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
};

function CreditCard({ brand, holder, last4, expiry, backNote = "Your card details are managed securely by your payment provider.", className, ...props }: CreditCardProps) {
  const [flipped, setFlipped] = React.useState(false);
  const masked = last4.replace(/\D/g, "").slice(-4);
  return <div data-slot="credit-card" className={cn("w-full max-w-sm", className)} {...props}>
    <div role="group" aria-label={`${brand} card ending in ${masked}`} className="flex aspect-[1.6] flex-col justify-between rounded-xl border border-border bg-primary p-6 text-primary-foreground shadow-md">
      <div className="flex items-start justify-between gap-2"><strong className="text-lg">{brand}</strong><span aria-hidden="true" className="h-5 w-8 rounded-sm bg-primary-foreground/50" /></div>
      {flipped ? <p className="max-w-56 text-sm">{backNote}</p> : <div><p className="font-mono text-lg tracking-widest" aria-label={`Card ending in ${masked}`}>•••• •••• •••• {masked}</p><div className="mt-4 flex justify-between gap-3 text-xs"><span>{holder}</span><span>{expiry}</span></div></div>}
    </div>
    <button type="button" onClick={() => setFlipped((current) => !current)} aria-label={flipped ? "Show card front" : "Show card back"} className="mt-2 inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"><RotateCcw aria-hidden="true" className="size-4" />{flipped ? "Front" : "Back"}</button>
  </div>;
}

export { CreditCard };
export type { CreditCardProps };
