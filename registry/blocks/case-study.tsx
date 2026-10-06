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
import { cn } from "@/lib/utils";

export type CaseStudyCompany = {
  name: string;
  description?: string;
  logo?: string;
  industry?: string;
  location?: string;
  size?: string;
  website?: string;
  topics?: string[];
};
export type CaseStudyProps = {
  title: string;
  image?: { src: string; alt: string };
  company: CaseStudyCompany;
  children: ReactNode;
  className?: string;
};

export function CaseStudy({
  title,
  image,
  company,
  children,
  className,
}: CaseStudyProps) {
  const details = [
    { label: "Company", content: company.description },
    { label: "Industry", content: company.industry },
    { label: "Location", content: company.location },
    { label: "Company size", content: company.size },
    {
      label: "Website",
      content: company.website && (
        <a
          className="break-all text-primary underline underline-offset-4"
          href={company.website}
        >
          {company.website}
        </a>
      ),
    },
    { label: "Topics", content: company.topics?.join(", ") },
  ];
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16">
        <article className="min-w-0 flex-1">
          {image && (
            <img
              src={image.src}
              alt={image.alt}
              className="mb-8 aspect-video w-full rounded-lg border border-border object-cover"
            />
          )}
          <h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <div className="space-y-4 text-foreground [&_p]:leading-7 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:text-xl [&_blockquote]:border-s-2 [&_blockquote]:border-border [&_blockquote]:ps-4 [&_blockquote]:text-muted-foreground [&_ul]:list-disc [&_ul]:ps-5 [&_a]:text-primary [&_a]:underline [&_table]:w-full [&_table]:text-sm [&_td]:p-2 [&_th]:p-2 [&_tr]:border-b [&_tr]:border-border [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-muted [&_pre]:p-4 [&_code]:font-mono">
            {children}
          </div>
        </article>
        <aside
          aria-label={`${company.name} company details`}
          className="h-fit min-w-0 rounded-xl border border-border bg-muted/50 p-5 lg:sticky lg:top-8 lg:w-72 lg:shrink-0"
        >
          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              className="mb-6 max-h-10 max-w-full object-contain"
            />
          ) : (
            <h2 className="mb-6 text-lg font-semibold">{company.name}</h2>
          )}
          <dl className="space-y-5">
            {details
              .filter((detail) => Boolean(detail.content))
              .map((detail) => (
                <div key={detail.label}>
                  <dt className="mb-1 text-xs font-semibold">{detail.label}</dt>
                  <dd className="text-sm text-muted-foreground">
                    {detail.content}
                  </dd>
                </div>
              ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
