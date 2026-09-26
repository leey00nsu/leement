import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import "./globals.css";
import { DocsNavigation } from "../components/docs-navigation";
import { ThemeToggle } from "../components/theme-toggle";

export const metadata: Metadata = {
  title: { default: "Leement", template: "%s · Leement" },
  description: "Design rules, tokens, components, patterns, and blocks for products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-7">
          <div className="flex min-w-0 items-center gap-7">
            <Link href="/" className="inline-flex shrink-0 items-center gap-2.5 text-[17px] font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">L</span>
              Leement
            </Link>
            <span className="hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
            <span className="hidden text-sm text-muted-foreground sm:block">A design language for products</span>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <Link href="/showcase" className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Search aria-hidden="true" size={16} /><span className="hidden sm:inline">Explore</span>
            </Link>
            <Link href="/getting-started" className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex">
              Get started <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="docs-shell md:grid md:grid-cols-[252px_minmax(0,1fr)]">
        <aside className="docs-sidebar border-b border-border bg-background px-5 py-5 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto md:border-b-0 md:border-r md:px-5 md:py-8">
          <details className="md:hidden">
            <summary className="cursor-pointer rounded-lg border border-border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Browse documentation</summary>
            <div className="mt-6"><DocsNavigation label="Mobile documentation" /></div>
          </details>
          <div className="hidden md:block"><DocsNavigation label="Documentation" /></div>
        </aside>
        <main className="min-w-0 px-5 py-10 sm:px-8 md:px-12 md:py-14">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
      </div>
    </body>
  </html>;
}
