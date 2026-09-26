"use client";

import * as React from "react";
import { QRCodeSVG } from "qrcode.react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type QRCodeProps = Omit<React.ComponentProps<"div">, "children"> & { value: string; label: string; size?: number; showCopy?: boolean };

function QRCode({ value, label, size = 160, showCopy = true, className, ...props }: QRCodeProps) {
  const [copied, setCopied] = React.useState(false);
  async function copy() { try { await navigator.clipboard.writeText(value); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); } }
  return <div data-slot="qr-code" className={cn("inline-flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 text-card-foreground", className)} {...props}><div role="img" aria-label={`${label} QR code`} className="rounded-md border border-border bg-background p-2"><QRCodeSVG value={value} size={size} level="M" bgColor="var(--lm-color-background-default)" fgColor="var(--lm-color-foreground-default)" aria-hidden="true" /></div><p className="max-w-52 break-all text-center text-xs text-muted-foreground">{label}</p>{showCopy && <button type="button" onClick={copy} aria-label={copied ? "QR value copied" : "Copy QR value"} className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}{copied ? "Copied" : "Copy value"}</button>}</div>;
}

export { QRCode };
export type { QRCodeProps };
