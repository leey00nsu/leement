"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function DocsShell({ header, sidebar, children }: { header: ReactNode; sidebar: ReactNode; children: ReactNode }) {
  // Standalone previews need their own viewport, without navigation or page padding.
  if (usePathname().startsWith("/preview/")) return children;
  return <>
    {header}
    <div className="docs-shell md:grid md:grid-cols-[256px_minmax(0,1fr)]">
      {sidebar}
      <main className="min-w-0 px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-[1540px]">{children}</div>
      </main>
    </div>
  </>;
}
