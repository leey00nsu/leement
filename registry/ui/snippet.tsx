"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type SnippetOption = { label: string; code: string };
type SnippetProps = React.ComponentProps<"div"> & { options: SnippetOption[]; label?: string };

function Snippet({ options, label = "Command", className, ...props }: SnippetProps) {
  const id = React.useId();
  const [index, setIndex] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const current = options[index] ?? options[0];
  async function copy() {
    if (!current) return;
    try { await navigator.clipboard.writeText(current.code); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); }
  }
  return <div data-slot="snippet" aria-label={label} className={cn("rounded-xl border border-border bg-card text-card-foreground", className)} {...props}>
    <div role="tablist" aria-label={`${label} formats`} className="flex gap-1 border-b border-border p-1">{options.map((option, optionIndex) => <button key={option.label} role="tab" type="button" id={`${id}-tab-${optionIndex}`} aria-controls={`${id}-panel`} aria-selected={index === optionIndex} tabIndex={index === optionIndex ? 0 : -1} onClick={() => { setIndex(optionIndex); setCopied(false); }} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); const next = (index + (event.key === "ArrowRight" ? 1 : options.length - 1)) % options.length; setIndex(next); event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus(); } }} className={cn("rounded-md px-3 py-1.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", index === optionIndex ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground")}>{option.label}</button>)}</div>
    <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${index}`} className="flex items-center gap-3 p-3"><code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-sm">{current?.code ?? ""}</code><button type="button" onClick={copy} disabled={!current} aria-label={copied ? "Copied snippet" : "Copy snippet"} className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40">{copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}</button></div>
  </div>;
}

export { Snippet };
export type { SnippetOption, SnippetProps };
