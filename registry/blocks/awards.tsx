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

export type Award = {
  name: string;
  description: string;
  year: string;
  url?: string;
};
export type AwardsProps = {
  title?: string;
  awards: Award[];
  className?: string;
};

/** Award/description/year table, adapted from Kibo's public Awards composition. */
export function Awards({ title = "Awards", awards, className }: AwardsProps) {
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="mx-auto w-full min-w-0 max-w-6xl space-y-10 px-4 sm:px-6">
        <h2 className="max-w-md text-4xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-96 border-collapse text-start">
            <caption className="sr-only">{title}</caption>
            <thead>
              <tr className="border-b border-border text-start text-sm">
                <th scope="col" className="py-3 pe-4 text-start font-medium">
                  Award
                </th>
                <th scope="col" className="py-3 pe-4 text-start font-medium">
                  Description
                </th>
                <th scope="col" className="py-3 text-end font-medium">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {awards.map((award, index) => (
                <tr
                  key={`${award.name}-${index}`}
                  className="border-b border-border text-sm"
                >
                  <td className="py-5 pe-4 text-lg font-medium">
                    {award.url ? (
                      <a
                        className="rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        href={award.url}
                      >
                        {award.name}
                      </a>
                    ) : (
                      award.name
                    )}
                  </td>
                  <td className="py-5 pe-4 text-muted-foreground">
                    {award.description}
                  </td>
                  <td className="py-5 text-end">{award.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!awards.length && (
          <p role="status" className="text-sm text-muted-foreground">
            No awards to display.
          </p>
        )}
      </div>
    </section>
  );
}
