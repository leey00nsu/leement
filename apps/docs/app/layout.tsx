import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "../../../registry/patterns/brand-logo";
import { Github } from "lucide-react";
import "./globals.css";
import { DocsNavigation } from "../components/docs-navigation";
import { DocsSearch } from "../components/docs-search";
import { DocsTopNavigation, DocsMobileNavigation } from "../components/docs-top-navigation";
import { FoundationPreviewProvider } from "../components/foundation-preview-provider";
import { DocsShell } from "../components/docs-shell";
import { ThemeToggle } from "../components/theme-toggle";

export const metadata: Metadata = {
  title: { default: "Leement", template: "%s · Leement" },
  description: "Design rules, tokens, components, patterns, and blocks for products.",
  icons: { icon: { url: "/leement-mark.svg", type: "image/svg+xml" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body><FoundationPreviewProvider><DocsShell header={<header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-6 lg:gap-9">
            <Link href="/" className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <BrandLogo name="Leement" size="sm" mark={<Image src="/leement-mark.svg" alt="" width={128} height={128} priority />} />
            </Link>
            <DocsTopNavigation />
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <DocsSearch />
            <a href="https://github.com/leey00nsu/leement" target="_blank" rel="noreferrer" aria-label="Leement on GitHub" className="hidden size-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"><Github aria-hidden="true" size={16} /></a>
            <ThemeToggle />
          </div>
        </div>
      </header>} sidebar={<aside className="docs-sidebar border-b border-border bg-background px-5 py-5 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto md:border-b-0 md:border-r md:px-4 md:py-7">
          <details className="md:hidden">
            <summary className="cursor-pointer rounded-lg border border-border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Browse documentation</summary>
            <div className="mt-5"><DocsMobileNavigation /><div className="max-h-[55vh] overflow-y-auto"><DocsNavigation label="Mobile documentation" /></div></div>
          </details>
          <div className="hidden md:block"><DocsNavigation label="Documentation" /></div>
        </aside>}>
      {children}
    </DocsShell></FoundationPreviewProvider></body>
  </html>;
}
