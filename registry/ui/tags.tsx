"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type TagsProps = Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  label: string;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (tags: string[]) => void;
  suggestions?: string[];
  max?: number;
  disabled?: boolean;
};

function Tags({ label, value, defaultValue = [], onValueChange, suggestions = [], max, disabled, className, ...props }: TagsProps) {
  const id = React.useId();
  const [internal, setInternal] = React.useState(defaultValue);
  const [query, setQuery] = React.useState("");
  const tags = value ?? internal;
  const available = suggestions.filter((tag) => !tags.includes(tag) && tag.toLowerCase().includes(query.toLowerCase()));
  function update(next: string[]) { if (value === undefined) setInternal(next); onValueChange?.(next); }
  function add(raw: string) { const tag = raw.trim(); if (!tag || tags.includes(tag) || (max !== undefined && tags.length >= max)) return; update([...tags, tag]); setQuery(""); }
  return <div data-slot="tags" className={cn("w-full max-w-md", className)} {...props}>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
    <div className="flex min-h-10 flex-wrap items-center gap-1.5 rounded-md border border-input bg-background p-1.5 focus-within:ring-3 focus-within:ring-ring/40">{tags.map((tag) => <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs text-foreground">{tag}<button type="button" disabled={disabled} aria-label={`Remove ${tag}`} onClick={() => update(tags.filter((entry) => entry !== tag))} className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"><X aria-hidden="true" className="size-3" /></button></span>)}<input id={id} disabled={disabled || (max !== undefined && tags.length >= max)} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === ",") { event.preventDefault(); add(query); } if (event.key === "Backspace" && !query && tags.length) update(tags.slice(0, -1)); }} placeholder={tags.length ? "Add another" : "Add a tag"} className="min-w-24 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50" /></div>
    {query && available.length > 0 && <div role="group" aria-label="Suggested tags" className="mt-2 flex flex-wrap gap-1">{available.map((tag) => <button key={tag} type="button" onClick={() => add(tag)} className="rounded-full border border-border px-2 py-1 text-xs hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{tag}</button>)}</div>}
    <p className="sr-only" role="status">{tags.length} tags selected</p>
  </div>;
}

export { Tags };
export type { TagsProps };
