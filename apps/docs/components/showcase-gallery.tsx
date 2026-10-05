"use client";
import { useStyleMotion } from "@/lib/leement-motion";


import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SearchField } from "../../../registry/patterns/search-field";
import { PreviewFrame } from "./preview-frame";
import { registryCommand } from "../lib/docs";
import { items } from "../lib/items";

type ItemName = keyof typeof items;
type Category = "All" | "Component" | "Pattern" | "Block";
const names = Object.keys(items) as ItemName[];
const categories: Category[] = ["All", "Component", "Pattern", "Block"];

const sections = [
  { type: "Component", title: "Components", id: "components", description: "The small, dependable pieces of an interface." },
  { type: "Pattern", title: "Patterns", id: "patterns", description: "Product structures assembled from those pieces." },
  { type: "Block", title: "Blocks", id: "blocks", description: "Larger compositions ready to shape a screen." },
] as const;

function displayName(name: string) {
  return name.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export function ShowcaseGallery({ replayableNames }: { replayableNames: string[] }) {
  const styleMotionRef1 = useStyleMotion<HTMLButtonElement>(undefined);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = names.filter((name) => {
    const item = items[name];
    return (category === "All" || item.type === category) &&
      (!normalizedQuery || `${displayName(name)} ${item.overview}`.toLowerCase().includes(normalizedQuery));
  });

  return <div>
    <div className="rounded-2xl bg-muted p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-sm">
          <label htmlFor="item-search" className="mb-2 block text-sm font-medium">Find an item</label>
          <SearchField id="item-search" aria-label="Search components, patterns, and blocks" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search components and patterns..." />
        </div>
        <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-1.5">
          {categories.map((option) => <button ref={styleMotionRef1} key={option} type="button" aria-pressed={category === option} onClick={() => setCategory(option)} className="rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-pressed:bg-primary aria-pressed:text-primary-foreground">
            {option === "All" ? "All" : `${option}s`}
          </button>)}
        </div>
      </div>
      <p role="status" className="mt-4 text-xs text-muted-foreground">Showing {filtered.length} of {names.length} items</p>
    </div>

    {filtered.length === 0 ? <div className="mt-7 rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-14 text-center">
      <h2 className="text-lg font-semibold">No matching items</h2>
      <p className="mt-2 text-sm text-muted-foreground">Try another name or clear the type filter.</p>
      <button type="button" onClick={() => { setQuery(""); setCategory("All"); }} className="mt-5 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Clear filters</button>
    </div> : sections.map((section) => {
      const sectionNames = filtered.filter((name) => items[name].type === section.type);
      if (!sectionNames.length) return null;
      return <section key={section.id} id={section.id} aria-labelledby={`showcase-${section.id}`} className="scroll-mt-24 pt-11">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id={`showcase-${section.id}`} className="text-2xl font-semibold tracking-tight sm:text-3xl">{section.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
          </div>
          <span className="text-xs text-muted-foreground">{sectionNames.length} items</span>
        </div>
        <div className="grid items-start gap-6 xl:grid-cols-2">
          {sectionNames.map((name) => {
            const item = items[name];
            return <article key={name} data-showcase-item={name} className="flex min-w-0 flex-col gap-5 rounded-2xl bg-muted p-5 sm:p-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">{displayName(name)}</h3>
                  <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">{item.maturity}</span>
                </div>
                <p className="max-w-lg text-sm leading-6 text-muted-foreground">{item.overview}</p>
              </div>
              <PreviewFrame gallery name={name} replayable={replayableNames.includes(name)} />
              <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
                <code className="min-w-0 overflow-x-auto text-xs text-muted-foreground">{registryCommand(name)}</code>
                <Link href={`/${section.id}/${name}`} className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  Explore <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </article>;
          })}
        </div>
      </section>;
    })}
  </div>;
}
