"use client";
import { useStyleMotion } from "@/lib/leement-motion";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../lib/docs";

const count = (title: string) => navigation.find(group => group.title === title)?.sections.reduce((sum, section) => sum + section.items.length, 0) ?? 0;
const tabs = [
  { label: "Docs", href: "/getting-started", prefix: "docs" },
  { label: "Components", href: "/components/button", prefix: "/components/", count: count("Components") },
  { label: "Blocks", href: "/blocks/settings-section", prefix: "/blocks/", count: count("Blocks") },
  { label: "Patterns", href: "/patterns/page-header", prefix: "/patterns/", count: count("Patterns") },
];

export function DocsTopNavigation() {
  const styleMotionRef1 = useStyleMotion<HTMLAnchorElement>(undefined);

  const pathname = usePathname();
  return <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
    {tabs.map(tab => {
      const active = tab.prefix === "docs" ? !["/components/", "/blocks/", "/patterns/"].some(prefix => pathname.startsWith(prefix)) : pathname.startsWith(tab.prefix);
      return <Link ref={styleMotionRef1} key={tab.label} href={tab.href} aria-current={active ? "page" : undefined} className="inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:bg-brand-accent/10 aria-[current=page]:text-[var(--lm-color-brand-text)]">
        {tab.label}{tab.count && <span className="rounded-full bg-muted px-1.5 py-0.5 text-[11px] leading-none text-muted-foreground">{tab.count}</span>}
      </Link>;
    })}
  </nav>;
}
