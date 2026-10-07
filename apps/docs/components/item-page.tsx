import { GuideText, UsageGuide } from "./usage-guide";
import { usageGuides } from "../lib/usage-guides";
import { hasPreviewMotion } from "../lib/preview-config";
import Link from "next/link";
import { CopyButton, ItemWorkbench } from "./item-workbench";
import { items } from "../lib/items";
import { apiReferences } from "../lib/api-reference";
import { ApiReference } from "./api-reference";
import { getAdditionalExampleCodes, getItemCode } from "../lib/registry-source";
import { publishedVersion, repositoryVersion } from "../lib/releases";
import demoMedia from "../lib/demo-media.json";

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
  const reference = apiReferences[name];
  const usageCode = reference?.usage ?? exampleCode;
  const mediaSources = [sourceCode, exampleCode, usageCode, ...examples.map((example) => example.exampleCode)].join("\n");
  const mediaCredits = demoMedia.assets.filter((asset) =>
    [asset.src, asset.pageUrl, asset.poster?.src, asset.thumbnail?.src].some(
      (url) => url && mediaSources.includes(url),
    ),
  );
  const outline = [
    { title: "Preview", id: "preview" },
    { title: "Installation", id: "installation" },
    { title: "Usage", id: "usage" },
    ...(examples.length
      ? [
          { title: "Examples", id: "examples" },
          ...examples.map((example) => ({
            title: example.title,
            id: `example-${example.id}`,
          })),
        ]
      : []),
    { title: "API Reference", id: "api-reference" },
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
          />
          {mediaCredits.length > 0 && (
            <details className="mt-4 text-sm leading-6 text-muted-foreground">
              <summary className="w-fit cursor-pointer rounded-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Demo media credits
              </summary>
              <p className="mt-3">
                Photos, footage and music are from Pixabay. Profile names,
                company relationships and editorial stories are fictional sample
                data. Replace the demo sources with media licensed for your app.
                Media licenses are separate from the code license.
              </p>
              <ul className="mt-3 space-y-2">
                {mediaCredits.map((asset) => (
                  <li key={asset.id}>
                    <a href={asset.pageUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      {asset.title}
                    </a>{" "}
                    by {asset.author} ·{" "}
                    <a href={asset.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      {asset.license}
                    </a>
                    {asset.type === "music" && (
                      <span>
                        {asset.contentId === "registered"
                          ? ". Content ID registered; retain your license evidence for reuse."
                          : ". Content ID status is unconfirmed; retain your license evidence for reuse."}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </section>

        <section id="installation" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Install the theme once, then add this editable registry source to
            your project using the public namespace in Getting Started. The
            current public release is {publishedVersion}. See Changelog for
            release notes and migration guidance.
          </p>
          {repositoryVersion !== publishedVersion && (
            <p className="mt-2 text-sm text-muted-foreground">
              This repository targets {repositoryVersion}, which has not been
              published yet.
            </p>
          )}
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

        <section id="usage" className="mt-12 scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
          <div className="min-w-0 overflow-hidden rounded-xl border border-border">
            <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-2.5">
              <span className="font-mono text-xs text-muted-foreground">
                Basic usage
              </span>
              <CopyButton value={usageCode} label={`Copy usage for ${name}`} />
            </div>
            <pre className="max-h-[28rem] overflow-auto p-5 text-[13px] leading-6">
              <code>{usageCode}</code>
            </pre>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">
            {item.accessibility}
          </p>
          <UsageGuide sections={usageGuides[name]} />
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
                  {example.description && (
                    <div className="mt-2">
                      <GuideText value={example.description} />
                    </div>
                  )}
                </div>
                <ItemWorkbench
                  name={name}
                  replayable={hasPreviewMotion(name)}
                  exampleFile={example.file}
                  exampleCode={example.exampleCode}
                  sourceCode={sourceCode}
                  sourceFile={sourceFile}
                />
                <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 rounded-md bg-muted p-3">
                  <code className="min-w-0 overflow-x-auto text-xs">
                    {example.installCommand ||
                      "No registry components required: native elements and theme utility classes."}
                  </code>
                  {example.installCommand && (
                    <CopyButton
                      value={example.installCommand}
                      label={`Copy dependencies for ${example.title}`}
                    />
                  )}
                </div>
                {example.packageCommand && (
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-muted p-3">
                    <code className="overflow-x-auto text-xs">
                      {example.packageCommand}
                    </code>
                    <CopyButton
                      value={example.packageCommand}
                      label={`Copy packages for ${example.title}`}
                    />
                  </div>
                )}
              </section>
            ))}
          </section>
        )}

        <ApiReference reference={reference} summary={item.api} />
      </article>

      <aside aria-label="On this page" className="hidden xl:block">
        <div className="sticky top-24 max-h-[calc(100svh-7rem)] overflow-y-auto border-l border-border pl-4 pe-2">
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
