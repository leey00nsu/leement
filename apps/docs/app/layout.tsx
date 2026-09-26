import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { navigation } from "../lib/docs";

export const metadata: Metadata = {
  title: { default: "Leement", template: "%s · Leement" },
  description: "Design rules, tokens, components, patterns, and blocks for products.",
};

function DocumentationNav({ label }: { label: string }) {
  return (
    <nav aria-label={label} className="space-y-6">
      {navigation.map((group) => (
        <div key={group.title}>
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">
            {group.title}
          </h2>
          <ul className="space-y-1">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="docs-shell md:grid md:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="docs-sidebar border-b border-border bg-background px-6 py-5 md:sticky md:top-0 md:h-screen md:overflow-y-auto md:border-b-0 md:border-r md:py-6">
            <Link href="/" className="flex items-center gap-3 text-xl font-semibold tracking-tight">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">L</span>
              Leement
            </Link>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">A small design language for products.</p>
            <details className="mt-5 md:hidden">
              <summary className="cursor-pointer rounded-md border border-border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Browse documentation
              </summary>
              <div className="mt-5">
                <DocumentationNav label="Mobile documentation" />
              </div>
            </details>
            <div className="mt-8 hidden md:block">
              <DocumentationNav label="Documentation" />
            </div>
          </aside>
          <main className="min-w-0 px-6 py-10 md:px-12 md:py-14">
            <div className="mx-auto max-w-5xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
