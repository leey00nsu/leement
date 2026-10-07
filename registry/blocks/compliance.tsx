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

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

export interface ComplianceBadge {
  image: string;
  alt: string;
}

export interface ComplianceFeature {
  title: string;
  description: string;
  badgeImage: string;
  badgeAlt: string;
}

export interface ComplianceProps {
  tagline?: string;
  heading?: string;
  description?: string;
  badges?: ComplianceBadge[];
  features?: ComplianceFeature[];
  className?: string;
}

export const Compliance = ({
  tagline = "Compliance",
  heading = "Security and compliance information",
  description = "Present your verified certifications and security practices. The content below is demonstration data, not a certification claim.",
  badges = [
    {
      image:
        "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Cpath%20d%3D%22M32%2010%2049%2017v14c0%2012-17%2023-17%2023S15%2043%2015%2031V17z%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20d%3D%22m23%2031%206%206%2013-13%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E",
      alt: "Demo shield and check mark",
    },
    {
      image:
        "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Cpath%20d%3D%22M32%2010%2049%2017v14c0%2012-17%2023-17%2023S15%2043%2015%2031V17z%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20d%3D%22m23%2031%206%206%2013-13%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E",
      alt: "Demo shield and check mark",
    },
  ],
  features = [
    {
      title: "Automated audit trails",
      description:
        "Every action is logged and timestamped with immutable audit trails for complete regulatory compliance.",
      badgeImage:
        "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Cpath%20d%3D%22M32%2010%2049%2017v14c0%2012-17%2023-17%2023S15%2043%2015%2031V17z%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20d%3D%22m23%2031%206%206%2013-13%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E",
      badgeAlt: "Demo shield and check mark",
    },
    {
      title: "Compliance monitoring",
      description:
        "Real-time monitoring ensures continuous compliance with industry standards and regulations.",
      badgeImage:
        "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Cpath%20d%3D%22M32%2010%2049%2017v14c0%2012-17%2023-17%2023S15%2043%2015%2031V17z%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20d%3D%22m23%2031%206%206%2013-13%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E",
      badgeAlt: "Demo shield and check mark",
    },
    {
      title: "Regulatory reporting",
      description:
        "Generate compliance reports automatically to meet regulatory requirements and audit demands.",
      badgeImage:
        "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Cpath%20d%3D%22M32%2010%2049%2017v14c0%2012-17%2023-17%2023S15%2043%2015%2031V17z%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20d%3D%22m23%2031%206%206%2013-13%22%20fill%3D%22none%22%20stroke%3D%22%23171717%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E",
      badgeAlt: "Demo shield and check mark",
    },
  ],
  className,
}: ComplianceProps) => {
  return (
    <section
      className={cn("w-full min-w-0 bg-muted/50 py-12 sm:py-20", className)}
    >
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-9 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Badge variant="outline" className="gap-1.5 bg-background">
              <span className="size-1.5 rounded-full bg-(--lm-color-status-success-foreground)" />
              {tagline}
            </Badge>
            <h1 className="text-4xl font-medium text-balance lg:text-5xl">
              {heading}
            </h1>
            <p className="text-lg text-muted-foreground">{description}</p>
            <div className="flex flex-wrap items-center gap-6">
              {badges.map((badge, index) => (
                <img
                  key={index}
                  src={badge.image}
                  alt={badge.alt}
                  className="h-16 max-w-full object-contain opacity-50 grayscale md:h-24"
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-background">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "relative overflow-hidden p-6 lg:px-8 lg:py-11",
                  index === 0 && "border-b border-border",
                  index === features.length - 1 && "border-t border-border",
                )}
              >
                <div>
                  <h2 className="text-xl font-medium lg:text-2xl">
                    {feature.title}
                  </h2>
                  <p className="mt-2 w-full pr-4 sm:w-3/4 sm:pr-10 text-sm text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
                <img
                  src={feature.badgeImage}
                  alt={feature.badgeAlt}
                  className="mt-4 size-16 object-contain opacity-80 grayscale sm:absolute sm:right-4 sm:-bottom-7 sm:size-24 lg:right-8 lg:size-32"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
