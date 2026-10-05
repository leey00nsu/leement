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
import {
  Download as DownloadIcon,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type DownloadPlatform = {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  buttonText?: string;
};
export type DownloadPlatforms = {
  desktop?: DownloadPlatform;
  ios?: DownloadPlatform;
  android?: DownloadPlatform;
};
export type DownloadProps = {
  heading?: string;
  description?: string;
  platforms?: DownloadPlatforms;
  className?: string;
};
export function Download({
  heading = "Download",
  description = "Choose your platform and get started.",
  platforms = {
    desktop: {
      title: "Desktop",
      subtitle: "PC / Mac",
      description: "The complete desktop experience.",
      url: "https://example.com/download/desktop",
      buttonText: "Download desktop",
    },
    ios: {
      title: "Mobile",
      subtitle: "iOS",
      description: "An experience built for iOS.",
      url: "https://example.com/download/ios",
      buttonText: "Download for iOS",
    },
    android: {
      title: "Mobile / Tablet",
      subtitle: "Android",
      description: "An experience built for Android.",
      url: "https://example.com/download/android",
      buttonText: "Download for Android",
    },
  },
  className,
}: DownloadProps) {
  const options = [
    { platform: platforms.desktop, Icon: Monitor },
    { platform: platforms.ios, Icon: Smartphone },
    { platform: platforms.android, Icon: Tablet },
  ];
  return (
    <section
      className={cn("w-full min-w-0 bg-muted/50 py-12 sm:py-20", className)}
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
        <header className="mb-12 space-y-5 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {description}
          </p>
        </header>
        <div className="mx-auto grid min-w-0 max-w-4xl gap-10 md:grid-cols-3">
          {options
            .filter((option) => option.platform)
            .map(({ platform, Icon }) => (
              <article key={platform!.subtitle} className="min-w-0 text-center">
                <span className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full bg-background shadow-sm">
                  <Icon aria-hidden="true" className="size-10" />
                </span>
                <h3 className="text-xl font-semibold">{platform!.subtitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {platform!.title}
                </p>
                <p className="my-5 text-sm text-muted-foreground">
                  {platform!.description}
                </p>
                <Button asChild className="max-w-full whitespace-normal">
                  <a href={platform!.url}>
                    <DownloadIcon
                      aria-hidden="true"
                      className="size-4 shrink-0"
                    />
                    {platform!.buttonText ??
                      `Download for ${platform!.subtitle}`}
                  </a>
                </Button>
              </article>
            ))}
        </div>
        {!options.some((option) => option.platform) && (
          <p role="status" className="text-center text-muted-foreground">
            No downloads available.
          </p>
        )}
      </div>
    </section>
  );
}
