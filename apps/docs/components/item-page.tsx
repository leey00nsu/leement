import { hasPreviewMotion } from "../lib/preview-config";
import Link from "next/link";
import { CopyButton, ItemWorkbench } from "./item-workbench";
import { AdditionalExamplePreview } from "./example-previews";
import { Preview } from "./previews";
import { items, motionRule } from "../lib/items";
import { itemStates } from "../lib/item-states";
import { getAdditionalExampleCodes, getItemCode } from "../lib/registry-source";

function displayName(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function ItemPage({ name }: { name: keyof typeof items }) {
  const item = items[name];
  const { exampleCode, sourceCode, sourceFile } = await getItemCode(name);
  const examples = await getAdditionalExampleCodes(name);
  const command = `npx shadcn@latest add @leement/${name}`;
  const sections = [
    { title: "When to use", id: "when-to-use", body: item.use },
    { title: "When not to use", id: "when-not-to-use", body: item.avoid },
    { title: "Anatomy", id: "anatomy", body: item.anatomy },
    { title: "Variants", id: "variants", body: item.variants },
    { title: "Sizes", id: "sizes", body: item.sizes },
    {
      title: "States",
      id: "states",
      body:
        itemStates[name] +
        (examples.length
          ? " Explore the preview and examples to see supported states."
          : " Explore the preview to see supported states."),
    },
    { title: "Accessibility", id: "accessibility", body: item.accessibility },
    { title: "Motion", id: "motion", body: motionRule },
    { title: "API", id: "api", body: item.api },
  ];
  const outline = [
    { title: "Preview", id: "preview" },
    { title: "Installation", id: "installation" },
    ...(examples.length
      ? [
          { title: "Examples", id: "examples" },
          ...examples.map((example) => ({
            title: example.title,
            id: `example-${example.id}`,
          })),
        ]
      : []),
    ...sections.map(({ title, id }) => ({ title, id })),
  ];

  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_190px] xl:gap-12">
      <article className="min-w-0 pb-16">
        <header>
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {displayName(name)}
            </h1>
            <span
              className="text-xs text-muted-foreground"
              title={`${item.type} maturity`}
            >
              {item.maturity}
            </span>
          </div>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {item.overview}
          </p>
          {name === "stories" && (
            <p className="mt-3 text-sm text-muted-foreground">
              Looking for a continuous short-video feed?{" "}
              <Link
                href="/blocks/reel"
                className="font-medium text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                See Reel (Block)
              </Link>
              .
            </p>
          )}
          {name === "reel" && (
            <p className="mt-3 text-sm text-muted-foreground">
              Looking for thumbnail-triggered image and video updates?{" "}
              <Link
                href="/components/stories"
                className="font-medium text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                See Stories (Component)
              </Link>
              .
            </p>
          )}
        </header>

        <section
          id="preview"
          aria-label={`${displayName(name)} preview`}
          className="mt-10 scroll-mt-24"
        >
          <ItemWorkbench
            name={name}
            replayable={hasPreviewMotion(name)}
            exampleCode={exampleCode}
            sourceCode={sourceCode}
            sourceFile={sourceFile}
          >
            <Preview name={name} />
          </ItemWorkbench>
        </section>

        <section id="installation" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Install the theme once, then add this editable registry source to
            your project using the public namespace in Getting Started. The current
            public release is 0.1.0; see Changelog for pending 0.2.0 changes.
          </p>
          <div className="mt-5 overflow-hidden rounded-xl border border-border bg-muted/30">
            <div className="border-b border-border px-4 py-2 text-xs font-medium">
              shadcn CLI
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
              <code className="min-w-0 overflow-x-auto text-xs">{command}</code>
              <CopyButton
                value={command}
                label={`Copy install command for ${name}`}
              />
            </div>
          </div>
          <Link
            href="/getting-started"
            className="mt-3 inline-block text-sm text-[var(--lm-color-brand-text)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Theme setup and installation guide
          </Link>
        </section>

        {examples.length > 0 && (
          <section id="examples" className="mt-12 scroll-mt-24 space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
            {examples.map((example) => (
              <section
                key={example.id}
                id={`example-${example.id}`}
                className="scroll-mt-24 space-y-4"
              >
                <div>
                  <h3 className="text-xl font-semibold">{example.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {example.description}
                  </p>
                </div>
                <ItemWorkbench
                  name={name}
                  replayable={hasPreviewMotion(name)}
                  exampleFile={example.file}
                  exampleCode={example.exampleCode}
                  sourceCode={sourceCode}
                  sourceFile={sourceFile}
                >
                  <AdditionalExamplePreview file={example.file} />
                </ItemWorkbench>
                <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 rounded-md bg-muted p-3">
                  <code className="min-w-0 overflow-x-auto text-xs">
                    {example.installCommand}
                  </code>
                  <CopyButton
                    value={example.installCommand}
                    label={`Copy dependencies for ${example.title}`}
                  />
                </div>
              </section>
            ))}
          </section>
        )}

        <div className="mt-12 space-y-9 border-t border-border pt-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-3 break-words text-sm leading-7 text-muted-foreground">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>

      <aside aria-label="On this page" className="hidden xl:block">
        <div className="sticky top-24 border-l border-border pl-4">
          <h2 className="text-sm font-medium text-foreground">On this page</h2>
          <nav aria-label="Page sections" className="mt-4 space-y-2">
            {outline.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-sm text-muted-foreground hover:text-[var(--lm-color-brand-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {section.title}
              </a>
            ))}
          </nav>
          <div className="mt-8 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">
            Built from Leement tokens and editable registry source.
          </div>
        </div>
      </aside>
    </div>
  );
}
