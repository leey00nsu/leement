import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import {
  chartCategories,
  chartRecipes,
  type ChartCategory,
  type ChartName,
} from "../lib/chart-catalog";
import { ItemWorkbench, CopyButton } from "./item-workbench";
import { ChartsGallery } from "./charts-gallery";

export function ChartsIndex({ category }: { category?: ChartCategory }) {
  const title = category
    ? category === "tooltip"
      ? "Tooltips"
      : category.charAt(0).toUpperCase() + category.slice(1)
    : "Charts";
  return (
    <article className="min-w-0 pb-16">
      <header className="mb-10 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-7 text-muted-foreground">
          Recharts recipes built with Leement tokens and editable source.
          Explore previews, resize the viewport, and install the recipe you
          need.
        </p>
        <nav aria-label="Chart categories" className="flex flex-wrap gap-2">
          {["all", ...chartCategories].map((value) => (
            <Link
              key={value}
              href={value === "all" ? "/charts" : `/charts/${value}`}
              aria-current={(category ?? "all") === value ? "page" : undefined}
              className="rounded-lg bg-muted px-3 py-2 text-sm capitalize aria-[current=page]:bg-brand-accent/10 aria-[current=page]:text-[var(--lm-color-brand-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {value === "tooltip" ? "Tooltips" : value}
            </Link>
          ))}
        </nav>
      </header>
      <ChartsGallery category={category} />
    </article>
  );
}

export async function ChartRecipePage({ name }: { name: ChartName }) {
  const recipe = chartRecipes.find((value) => value.name === name)!;
  const entry = JSON.parse(
    await readFile(
      path.join(process.cwd(), "public", "r", `${name}.json`),
      "utf8",
    ),
  ) as { files: { path: string; content: string }[] };
  const source = entry.files.find(
    (file) => file.path === recipe.registrySource,
  )!.content;
  const command = `npx shadcn@latest add @leement/${name}`;
  const usage = `import { ${recipe.export} } from "@/components/blocks/charts/${name}"\n\nexport default function Example() {\n  return <${recipe.export} />\n}`;
  return (
    <article className="min-w-0 max-w-6xl space-y-10 pb-16">
      <header className="space-y-4">
        <Link
          href={`/charts/${recipe.category}`}
          className="text-sm text-muted-foreground hover:underline"
        >
          ← {recipe.category === "tooltip" ? "Tooltips" : recipe.category}{" "}
          charts
        </Link>
        <div className="flex flex-wrap items-baseline gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {recipe.title}
          </h1>
          <span className="text-xs text-muted-foreground">experimental</span>
        </div>
        <p className="text-lg text-muted-foreground">{recipe.description}</p>
      </header>
      <ItemWorkbench
        name={name}
        replayable
        exampleCode={source}
        sourceCode={source}
        sourceFile={recipe.registrySource}
      />
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          Install the theme first. This command installs the recipe, Chart,
          Card, accessible data table, any required controls, and Recharts. The
          source belongs to your project.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-muted p-4">
          <code className="min-w-0 overflow-x-auto text-xs">{command}</code>
          <CopyButton
            value={command}
            label={`Copy install command for ${name}`}
          />
        </div>
        <Link href="/getting-started" className="text-sm underline">
          Theme and registry setup
        </Link>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <pre className="overflow-auto rounded-lg bg-muted p-5 text-xs leading-6">
          <code>{usage}</code>
        </pre>
        <CopyButton value={usage} label={`Copy usage for ${name}`} />
        <p className="text-sm leading-7 text-muted-foreground">
          Replace the local data and chartConfig with your application data.
          Keep the data table connected to the same filtered data. Chart colors
          follow Foundations, chart entrance uses Motion, and Recharts
          interpolation is disabled. Native table content remains available
          without JavaScript.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          <code>{recipe.export}()</code> is an editable recipe with local sample
          data, not a configurable library API. Customize the source and use
          ChartContainer / ChartConfig / ChartTooltipContent to compose your own
          chart.
        </p>
        <div className="flex flex-wrap gap-5 text-sm underline">
          <Link href="/components/chart">Leement Chart API</Link>
          <a
            href="https://recharts.github.io/en-US/api/"
            target="_blank"
            rel="noreferrer"
          >
            Recharts API
          </a>
        </div>
      </section>
    </article>
  );
}
