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
    date: "15 November 2024",
    title: "Enhanced Analytics Dashboard",
    description:
      "We've completely redesigned our analytics dashboard to provide deeper insights and improved visualizations of your data.",
    items: [
      "Interactive data visualizations with real-time updates",
      "Customizable dashboard widgets",
      "Export analytics in multiple formats (CSV, PDF, Excel)",
      "New reporting templates for common use cases",
      "Improved data filtering and segmentation options",
    ],
    image:
      "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
    button: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
  {
    version: "Version 1.2.5",
    date: "7 October 2024",
    title: "Mobile App Launch",
    description:
      "We're excited to announce the launch of our mobile application, available now on iOS and Android platforms.",
    items: [
      "Native mobile experience for on-the-go productivity",
      "Offline mode support for working without internet connection",
      "Push notifications for important updates",
      "Biometric authentication for enhanced security",
    ],
  },
  {
    version: "Version 1.2.1",
    date: "23 September 2024",
    title: "New features and improvements",
    description:
      "Here are the latest updates and improvements to our platform. We are always working to improve our platform and your experience.",
    items: [
      "Added new feature to export data",
      "Improved performance and speed",
      "Fixed minor bugs and issues",
      "Added new feature to import data",
    ],
    image:
      "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
  },
  {
    version: "Version 1.0.0",
    date: "31 August 2024",
    title: "First version of our platform",
    description:
      "Introducing a new platform to help you manage your projects and tasks. We are excited to launch our platform and help you get started. We are always working to improve our platform and your experience.",
    image:
      "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
    button: {
      url: "https://example.com",
      text: "Learn more",
    },
  },
];

export const Changelog = ({
  title = "Changelog",
  description = "Get the latest updates and improvements to our platform.",
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
                    alt={`${entry.version} visual`}
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
