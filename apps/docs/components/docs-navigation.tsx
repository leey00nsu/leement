"use client";
import { useStyleMotion } from "@/lib/leement-motion";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigation } from "../lib/docs";

export function DocsNavigation({ label }: { label: string }) {
  const styleMotionRef1 = useStyleMotion<HTMLAnchorElement>(undefined);

  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const activeGroup = pathname.startsWith("/components/")
    ? "Components"
    : pathname.startsWith("/patterns/")
      ? "Patterns"
      : pathname.startsWith("/blocks/")
        ? "Blocks"
        : pathname.startsWith("/charts")
          ? "Charts"
          : null;
  const groups = activeGroup
    ? navigation.filter((group) => group.title === activeGroup)
    : navigation.filter((group) =>
        ["Getting Started", "Foundations", "Project"].includes(group.title),
      );
  useEffect(() => {
    navRef.current?.closest("details")?.removeAttribute("open");
    if (window.innerWidth < 768) return;
    const sidebar = navRef.current?.closest<HTMLElement>(".docs-sidebar");
    const active = navRef.current?.querySelector<HTMLElement>(
      '[aria-current="page"]',
    );
    if (!sidebar || !active) return;
    sidebar.scrollTop +=
      active.getBoundingClientRect().top -
      sidebar.getBoundingClientRect().top -
      sidebar.clientHeight / 2;
  }, [pathname]);

  return (
    <nav ref={navRef} aria-label={label} className="space-y-7">
      {groups.map((group) => (
        <div key={group.title}>
          {activeGroup ? (
            <h2 className="sr-only">{group.title}</h2>
          ) : (
            <h2 className="mb-3 px-3 text-xs font-medium text-foreground">
              {group.title}
            </h2>
          )}
          {group.sections.map((section, index) => (
            <div key={section.title ?? index} className={index ? "mt-6" : ""}>
              {section.title && (
                <h3 className="mb-2 px-3 text-xs font-medium text-foreground">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      ref={styleMotionRef1}
                      href={item.href}
                      aria-current={
                        pathname === item.href
                          ? "page"
                          : activeGroup === "Charts" &&
                              item.href !== "/charts" &&
                              pathname.startsWith(`${item.href}/`)
                            ? "location"
                            : undefined
                      }
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[current=location]:bg-brand-accent/10 aria-[current=location]:text-[var(--lm-color-brand-text)] aria-[current=page]:bg-brand-accent/10 aria-[current=page]:font-medium aria-[current=page]:text-[var(--lm-color-brand-text)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
}
