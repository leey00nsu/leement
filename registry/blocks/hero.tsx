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
import type { ReactNode } from "react";
import {
  Announcement,
  type AnnouncementProps,
} from "@/components/ui/announcement";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import {
  VideoPlayer,
  type VideoPlayerProps,
} from "@/components/ui/video-player";
import { cn } from "@/lib/utils";

export type HeroLogo = { name: string; icon?: ReactNode; url: string };
export type HeroAction = { text: string; url: string };
export type HeroProps = {
  heading?: string;
  description?: string;
  announcement?: Pick<AnnouncementProps, "label" | "title" | "href">;
  primaryAction?: HeroAction | null;
  secondaryAction?: HeroAction | null;
  logos?: HeroLogo[];
  trustedLabel?: string;
  video?: VideoPlayerProps;
  children?: ReactNode;
  className?: string;
};

export function Hero({
  heading = "A shared language for your next product",
  description = "Build consistent interfaces with tokens and editable component source.",
  announcement,
  primaryAction = { text: "Get started", url: "https://example.com/docs" },
  secondaryAction = { text: "Learn more", url: "https://example.com/about" },
  logos = [],
  trustedLabel = "Trusted by teams building thoughtful products",
  video,
  children,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-12 px-4 py-12 text-center sm:px-6 sm:py-20",
        className,
      )}
    >
      <header className="flex min-w-0 flex-col items-center gap-6">
        {announcement && <Announcement {...announcement} />}
        <h1 className="text-balance text-3xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground">
          {description}
        </p>
        <div className="flex max-w-full flex-wrap justify-center gap-3">
          {primaryAction && (
            <Button asChild className="max-w-full whitespace-normal">
              <a href={primaryAction.url}>{primaryAction.text}</a>
            </Button>
          )}
          {secondaryAction && (
            <Button
              asChild
              variant="outline"
              className="max-w-full whitespace-normal"
            >
              <a href={secondaryAction.url}>{secondaryAction.text}</a>
            </Button>
          )}
        </div>
      </header>
      {logos.length > 0 && (
        <div className="min-w-0 space-y-6 rounded-xl bg-secondary px-4 py-8">
          <p className="text-sm font-medium text-muted-foreground">
            {trustedLabel}
          </p>
          <Marquee
            label={trustedLabel}
            items={logos.map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                className="flex min-w-24 items-center justify-center gap-3 px-5 font-brand text-lg font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span aria-hidden="true">{logo.icon}</span>
                {logo.name}
              </a>
            ))}
            className="border-0 bg-secondary"
          />
        </div>
      )}
      {children ?? (video && <VideoPlayer {...video} />)}
    </section>
  );
}
