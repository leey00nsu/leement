"use client";
import { chartRecipes } from "../lib/chart-catalog";
import { useStyleMotion } from "@/lib/leement-motion";

import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { navigation } from "../lib/docs";

const allLinks = [
  ...chartRecipes.map((recipe) => ({
    label: recipe.title,
    href: recipe.route,
    group: `Charts · ${recipe.category}`,
  })),
  ...navigation.flatMap((group) =>
    group.sections.flatMap((section) =>
      section.items.map((item) => ({
        ...item,
        group: section.title ?? group.title,
      })),
    ),
  ),
];

export function DocsSearch() {
  const styleMotionRef1 = useStyleMotion<HTMLButtonElement>(undefined);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);
  const results = useMemo(
    () =>
      allLinks
        .filter((item) =>
          `${item.label} ${item.group}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
        .slice(0, 20),
    [query],
  );

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value) setQuery("");
      }}
    >
      <Dialog.Trigger
        ref={styleMotionRef1}
        className="inline-flex h-9 min-w-9 items-center gap-2 rounded-lg border border-border bg-muted/50 px-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-w-40 sm:justify-between"
        aria-label="Search documentation"
      >
        <span className="inline-flex items-center gap-2">
          <Search aria-hidden="true" size={15} />
          <span className="hidden sm:inline">Search...</span>
        </span>
        <kbd className="hidden rounded border border-border px-1 text-[11px] sm:inline">
          ⌘ K
        </kbd>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45" />
        <Dialog.Content className="fixed left-1/2 top-[15vh] z-50 w-[min(92vw,34rem)] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-background shadow-2xl focus:outline-none">
          <Dialog.Title className="sr-only">Search documentation</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Search
              aria-hidden="true"
              size={18}
              className="text-muted-foreground"
            />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search components and guides..."
              aria-label="Search components and guides"
              className="h-14 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <Dialog.Close
              aria-label="Close search"
              className="rounded-md p-1 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X aria-hidden="true" size={17} />
            </Dialog.Close>
          </div>
          <nav
            className="max-h-[min(60vh,28rem)] overflow-y-auto p-2"
            aria-label="Search results"
          >
            {results.length ? (
              results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.group}
                  </span>
                </Link>
              ))
            ) : (
              <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                No matching pages.
              </p>
            )}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
