"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "../../../registry/ui/input";
import { PreviewFrame } from "./preview-frame";
import { chartRecipes, type ChartCategory } from "../lib/chart-catalog";

export function ChartsGallery({ category }: { category?: ChartCategory }) {
  const [search, setSearch] = useState("");
  const recipes = chartRecipes.filter(
    (recipe) =>
      (!category || recipe.category === category) &&
      `${recipe.title} ${recipe.description}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  return (
    <>
      <label className="mb-8 block max-w-md space-y-2 text-sm font-medium">
        <span>Search charts</span>
        <Input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Interactive, donut, stacked…"
        />
      </label>
      <p role="status" className="mb-5 text-sm text-muted-foreground">
        {recipes.length} recipes
      </p>
      <div className="grid min-w-0 gap-6 xl:grid-cols-2">
        {recipes.map((recipe) => (
          <section
            key={recipe.name}
            className="min-w-0 space-y-5 rounded-xl bg-muted/45 p-5 sm:p-6"
          >
            <div>
              <h2 className="text-lg font-semibold">
                <Link
                  href={recipe.route}
                  className="rounded-md hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {recipe.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {recipe.description}
              </p>
            </div>
            <PreviewFrame name={recipe.name} replayable gallery />
            <Link
              href={recipe.route}
              className="inline-flex rounded-md text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View source and install →
            </Link>
          </section>
        ))}
      </div>
      {!recipes.length && (
        <p className="rounded-xl bg-muted p-8">No chart matches your search.</p>
      )}
    </>
  );
}
