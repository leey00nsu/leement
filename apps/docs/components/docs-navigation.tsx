"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../lib/docs";

export function DocsNavigation({ label }: { label: string }) {
  const pathname = usePathname();

  return <nav aria-label={label} className="space-y-7">
    {navigation.map((group) => <div key={group.title}>
      <h2 className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[.14em] text-muted-foreground">{group.title}</h2>
      <ul className="space-y-0.5">
        {group.items.map((item) => <li key={item.href}>
          <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:bg-muted aria-[current=page]:font-medium aria-[current=page]:text-foreground">
            {item.label}
          </Link>
        </li>)}
      </ul>
    </div>)}
  </nav>;
}
