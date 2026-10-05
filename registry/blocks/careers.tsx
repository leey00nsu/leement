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

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CareerOpening {
  title: string;
  location: string;
  url: string;
}

export interface CareerCategory {
  category: string;
  openings: CareerOpening[];
}

export interface CareersProps {
  heading?: string;
  jobs?: CareerCategory[];
  className?: string;
}

export const Careers = ({
  heading = "Careers",
  jobs = [
    {
      category: "Engineering",
      openings: [
        {
          title: "Senior Frontend Developer",
          location: "Remote",
          url: "#",
        },
        {
          title: "UI/UX Designer",
          location: "San Francisco",
          url: "#",
        },
        {
          title: "React Developer",
          location: "Remote",
          url: "#",
        },
        {
          title: "Technical Lead",
          location: "London",
          url: "#",
        },
      ],
    },
    {
      category: "Design",
      openings: [
        {
          title: "Product Designer",
          location: "Remote",
          url: "#",
        },
        {
          title: "Visual Designer",
          location: "Berlin",
          url: "#",
        },
      ],
    },
  ],
  className,
}: CareersProps) => {
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-medium md:text-4xl">{heading}</h2>
        <div className="mt-6 flex flex-col gap-16 md:mt-14">
          {!jobs.some((group) => group.openings.length) && (
            <p role="status" className="text-muted-foreground">
              No open positions.
            </p>
          )}
          {jobs.map((jobCategory) => (
            <div key={jobCategory.category} className="grid">
              <h2 className="border-b pb-4 text-xl font-bold">
                {jobCategory.category}
              </h2>
              {jobCategory.openings.map((job) => (
                <div
                  key={job.title}
                  className="flex min-w-0 items-center justify-between gap-4 border-b border-border py-4"
                >
                  <div>
                    <a href={job.url} className="font-semibold hover:underline">
                      {job.title}
                    </a>
                    <p className="text-sm text-muted-foreground">
                      {job.location}
                    </p>
                  </div>
                  <a
                    href={job.url}
                    className="rounded-sm hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`View ${job.title}`}
                  >
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
