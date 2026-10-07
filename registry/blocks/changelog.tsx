"use client";

/*
 * Adapted from Kibo UI: https://github.com/shadcnblocks/kibo
 * Kibo UI MIT license follows. Keep this notice with the source.
 *
 * Copyright (c) 2023 — Present shadcnblocks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { ArrowUpRight } from "lucide-react";

// Demo photos: Pixabay CC0 items published before 2019-01-09.
// Replace stock media and fictional sample content with your own licensed content.
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface ChangelogProps {
  className?: string;
  title?: string;
  description?: string;
  entries?: ChangelogEntry[];
}

const defaultEntries: ChangelogEntry[] = [
  {
    version: "Version 1.3.0",
    date: "5 October 2026",
    title: "Workshop photo collection",
    description: "Sample release notes for a fictional stock-photo journal. New workshop photographs illustrate collaboration.",
    items: [
      "Workshop cover added",
      "Creator credits included",
      "Photo layouts available in light and dark themes"
    ],
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
    button: {
      url: "https://pixabay.com/photos/meeting-brainstorming-business-594091/",
      text: "View photograph"
    }
  },
  {
    version: "Version 1.2.5",
    date: "20 September 2026",
    title: "Journal navigation improvements",
    description: "A sample text-only update showing that release notes do not require a cover image.",
    items: [
      "Clearer article navigation",
      "Improved keyboard focus"
    ]
  },
  {
    version: "Version 1.2.1",
    date: "10 September 2026",
    title: "Coding desk collection",
    description: "Sample release notes introducing a notebook and coding desk photograph.",
    items: [
      "Coding desk cover added",
      "Source information recorded"
    ],
    image: "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_1280.jpg"
  },
  {
    version: "Version 1.0.0",
    date: "1 September 2026",
    title: "Meeting room collection",
    description: "The fictional journal opens with a boardroom photograph for workspace articles.",
    image: "https://cdn.pixabay.com/photo/2016/07/14/08/25/office-1516329_1280.jpg",
    button: {
      url: "https://pixabay.com/photos/office-boardroom-meeting-table-1516329/",
      text: "View photograph"
    }
  }
];

export const Changelog = ({
  title = "Changelog",
  description = "Sample release notes for a fictional photography journal.",
  entries = defaultEntries,
  className,
}: ChangelogProps) => {
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-6 text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-24 md:space-y-24">
          {!entries.length && (
            <p role="status" className="text-muted-foreground">
              No updates to display.
            </p>
          )}
          {entries.map((entry, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 md:flex-row md:gap-16"
            >
              <div className="top-8 flex h-min w-full min-w-0 flex-wrap shrink-0 md:w-40 items-center gap-4 md:sticky">
                <Badge variant="secondary" className="text-xs">
                  {entry.version}
                </Badge>
                <span className="text-xs font-medium text-muted-foreground">
                  {entry.date}
                </span>
              </div>
              <div className="flex min-w-0 flex-col">
                <h2 className="mb-3 text-lg leading-tight font-bold text-foreground/90 md:text-2xl">
                  {entry.title}
                </h2>
                <p className="text-sm text-muted-foreground md:text-base">
                  {entry.description}
                </p>
                {entry.items && entry.items.length > 0 && (
                  <ul className="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground md:text-base">
                    {entry.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.image && (
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="mt-8 w-full rounded-lg object-cover"
                  />
                )}
                {entry.button && (
                  <Button variant="link" className="mt-4 self-end" asChild>
                    <a href={entry.button.url} target="_blank" rel="noreferrer">
                      {entry.button.text} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
