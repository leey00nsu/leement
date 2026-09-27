import type { Metadata } from "next";
import Link from "next/link";
import { Github } from "lucide-react";
import "./globals.css";
import { DocsNavigation } from "../components/docs-navigation";
import { DocsSearch } from "../components/docs-search";
import { DocsTopNavigation } from "../components/docs-top-navigation";
import { ThemeToggle } from "../components/theme-toggle";

export const metadata: Metadata = {
  title: { default: "Leement", template: "%s · Leement" },
  description: "Design rules, tokens, components, patterns, and blocks for products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-6 lg:gap-9">
            <Link href="/" className="inline-flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">L</span>
              Leement
            </Link>
            <DocsTopNavigation />
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <DocsSearch />
            <a href="https://github.com/leey00nsu/leement" target="_blank" rel="noreferrer" aria-label="Leement on GitHub" className="hidden size-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"><Github aria-hidden="true" size={16} /></a>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="docs-shell md:grid md:grid-cols-[256px_minmax(0,1fr)]">
        <aside className="docs-sidebar border-b border-border bg-background px-5 py-5 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto md:border-b-0 md:border-r md:px-4 md:py-7">
          <details className="md:hidden">
            <summary className="cursor-pointer rounded-lg border border-border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Browse documentation</summary>
            <div className="mt-5"><nav aria-label="Mobile sections" className="mb-5 grid grid-cols-2 gap-2 text-sm"><Link href="/getting-started" className="rounded-lg border border-border p-2">Docs</Link><Link href="/components/button" className="rounded-lg border border-border p-2">Components</Link><Link href="/blocks/settings-section" className="rounded-lg border border-border p-2">Blocks</Link><Link href="/patterns/page-header" className="rounded-lg border border-border p-2">Patterns</Link></nav><div className="max-h-[55vh] overflow-y-auto"><DocsNavigation label="Mobile documentation" /></div></div>
          </details>
          <div className="hidden md:block"><DocsNavigation label="Documentation" /></div>
        </aside>
        <main className="min-w-0 px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-[1540px]">{children}</div>
        </main>
      </div>
    </body>
  </html>;
}
