import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ItemWorkbench } from "./item-workbench";
import { Preview } from "./previews";
import { items } from "../lib/items";
import { getItemCode } from "../lib/registry-source";

function displayName(name: string) {
  return name.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export async function ItemPage({ name }: { name: keyof typeof items }) {
  const item = items[name];
  const { exampleCode, sourceCode, sourceFile } = await getItemCode(name);
  const sections = [
    { title: "When to use", body: item.use },
    { title: "When not to use", body: item.avoid },
    { title: "Anatomy", body: item.anatomy },
    { title: "Variants", body: item.variants },
    { title: "Sizes", body: item.sizes },
    { title: "Accessibility", body: item.accessibility },
    { title: "API", body: item.api },
  ];

  return <article className="space-y-10 pb-16">
    <header className="max-w-3xl">
      <Link href="/showcase" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <ArrowLeft aria-hidden="true" size={14} /> All items
      </Link>
      <div className="mt-7 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">
        <span>{item.type}</span>
        <span aria-hidden="true" className="size-1 rounded-full bg-border" />
        <span className="rounded-full border border-border px-2.5 py-1 normal-case tracking-normal">{item.maturity}</span>
      </div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{displayName(name)}</h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">{item.overview}</p>
    </header>

    <section aria-labelledby="workbench-heading">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Try it out</p>
          <h2 id="workbench-heading" className="mt-1 text-2xl font-semibold tracking-tight">Live example</h2>
        </div>
        <span className="text-xs text-muted-foreground">Preview · Example · Source</span>
      </div>
      <ItemWorkbench name={name} exampleCode={exampleCode} sourceCode={sourceCode} sourceFile={sourceFile}>
        <Preview name={name} />
      </ItemWorkbench>
    </section>

    <section aria-label="Design guidance" className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
      {sections.map((section) => <div key={section.title} className="bg-background p-6 sm:p-7">
        <h2 className="text-sm font-semibold">{section.title}</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.body}</p>
      </div>)}
      <div className="flex flex-col justify-between gap-5 bg-muted/40 p-6 sm:p-7">
        <div>
          <h2 className="text-sm font-semibold">Install and own the source</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">The registry adds editable files to your project. Add the theme first, then install this item.</p>
        </div>
        <Link href="/getting-started" className="inline-flex items-center gap-2 self-start text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Installation guide <ArrowUpRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </section>
  </article>;
}
