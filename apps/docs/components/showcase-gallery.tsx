"use client";

import Link from "next/link";
import { useState } from "react";
import { Preview } from "./previews";
import { registryCommand } from "../lib/docs";
import { items } from "../lib/items";

type ItemName = keyof typeof items;
type Theme = "light" | "dark";

const sections = [
  { type: "Component", title: "Components", route: "components" },
  { type: "Pattern", title: "Patterns", route: "patterns" },
  { type: "Block", title: "Blocks", route: "blocks" },
] as const;

function displayName(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function ShowcaseGallery() {
  const [theme, setTheme] = useState<Theme>("light");
  const names = Object.keys(items) as ItemName[];

  return (
    <div data-lm-theme={theme} className="rounded-2xl border border-border bg-background p-4 text-foreground sm:p-6">
      <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">Preview theme</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Compare the same semantic roles on light and dark surfaces.
          </p>
        </div>
        <div role="group" aria-label="Preview theme" className="inline-flex self-start rounded-lg border border-border bg-muted p-1">
          {(["light", "dark"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              aria-pressed={theme === mode}
              onClick={() => setTheme(mode)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${theme === mode ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {sections.map((section) => {
        const sectionNames = names.filter((name) => items[name].type === section.type);
        return (
          <section key={section.type} aria-labelledby={`showcase-${section.route}`} className="pt-9">
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <h2 id={`showcase-${section.route}`} className="text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <span className="text-sm text-muted-foreground">{sectionNames.length} items</span>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {sectionNames.map((name) => {
                const item = items[name];
                return (
                  <article key={name} className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-card">
                    <div className="flex flex-wrap items-start justify-between gap-3 px-5 pt-5">
                      <div>
                        <h3 className="text-lg font-semibold">{displayName(name)}</h3>
                        <p className="mt-1 max-w-lg text-sm leading-6 text-muted-foreground">{item.overview}</p>
                      </div>
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                        {item.maturity}
                      </span>
                    </div>
                    <div className="m-5 min-h-44 rounded-lg border border-border bg-background [&>div]:border-0">
                      <Preview name={name} />
                    </div>
                    <div className="mt-auto flex min-w-0 flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <code className="min-w-0 overflow-x-auto text-xs text-muted-foreground">{registryCommand(name)}</code>
                      <Link
                        href={`/${section.route}/${name}`}
                        className="shrink-0 rounded-sm text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        View guidelines
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
