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

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export type CaseStudySummary = {
  id: string;
  quote: string;
  person: string;
  role: string;
  image?: string;
  companyLogo?: string;
  companyName?: string;
  url?: string;
  metrics: { value: string; label: string; description?: string }[];
};
export type CaseStudiesProps = {
  title?: string;
  tagline?: string;
  studies: CaseStudySummary[];
  className?: string;
};

export function CaseStudies({
  title = "Real results from real users",
  tagline,
  studies,
  className,
}: CaseStudiesProps) {
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 text-center">
          {tagline && (
            <p className="text-sm font-medium text-muted-foreground">
              {tagline}
            </p>
          )}
          <h2 className="text-3xl font-medium sm:text-5xl">{title}</h2>
        </div>
        <div className="mt-12">
          {studies.map((study, index) => (
            <div key={study.id}>
              {index > 0 && <Separator className="my-12" />}
              <article className="grid min-w-0 gap-10 lg:grid-cols-3 lg:gap-16">
                <div className="flex min-w-0 flex-col gap-8 sm:flex-row lg:col-span-2 lg:border-e lg:border-border lg:pe-12">
                  {study.image && (
                    <img
                      src={study.image}
                      alt={study.person}
                      className="aspect-[29/35] w-full max-w-60 rounded-2xl object-cover"
                    />
                  )}
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-8">
                    <blockquote className="text-lg leading-relaxed">
                      {study.quote}
                    </blockquote>
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold">{study.person}</p>
                        <p className="text-sm text-muted-foreground">
                          {study.role}
                        </p>
                      </div>
                      {study.companyLogo && (
                        <img
                          src={study.companyLogo}
                          alt={study.companyName ?? ""}
                          className="h-8 max-w-32 object-contain"
                        />
                      )}
                    </div>
                    {study.url && (
                      <a
                        href={study.url}
                        className="w-fit rounded-sm text-sm font-medium text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                      >
                        Read the case study
                        <span className="sr-only">
                          {" "}
                          for {study.companyName ?? study.person}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
                <dl className="flex flex-wrap gap-8 self-center lg:flex-col">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="min-w-0">
                      <dd className="text-4xl font-medium tabular-nums">
                        {metric.value}
                      </dd>
                      <dt className="mt-2 text-sm font-semibold">
                        {metric.label}
                      </dt>
                      {metric.description && (
                        <dd className="mt-1 text-sm text-muted-foreground">
                          {metric.description}
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              </article>
            </div>
          ))}
        </div>
        {!studies.length && (
          <p role="status" className="mt-8 text-center text-muted-foreground">
            No case studies to display.
          </p>
        )}
      </div>
    </section>
  );
}
