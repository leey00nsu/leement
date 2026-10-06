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

import React from "react";

import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface CompareRow {
  feature: string;
  primary: string;
  secondary: string;
  secondaryTooltip?: {
    title: string;
    description: string;
  };
}

export interface CompareProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  rows?: CompareRow[];
  className?: string;
}

export const Compare = ({
  heading = "Compare",
  description = "A modern framework for building websites that is better than the competition.",
  primaryLabel = "Primary product",
  secondaryLabel = "Alternative",
  rows = [
    {
      feature: "Source ownership",
      primary: "Editable source",
      secondary: "Package import",
    },
    {
      feature: "Theme",
      primary: "App-owned tokens",
      secondary: "Preset",
      secondaryTooltip: {
        title: "Theme customization",
        description: "Check the product’s actual theme configuration.",
      },
    },
    { feature: "License", primary: "MIT", secondary: "See product license" },
  ],
  className,
}: CompareProps) => {
  return (
    <TooltipProvider>
      <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
        <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="mb-4 text-center text-4xl font-semibold">{heading}</h2>
          <p className="mb-8 text-center text-muted-foreground">
            {description}
          </p>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border">
            <Table className="text-left">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6 py-4 font-semibold">
                    Feature
                  </TableHead>
                  <TableHead className="bg-muted px-6 py-4 font-semibold">
                    {primaryLabel}
                  </TableHead>
                  <TableHead className="px-6 py-4 font-semibold">
                    {secondaryLabel}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-foreground">
                {!rows.length && (
                  <TableRow>
                    <TableCell colSpan={3}>No features to compare.</TableCell>
                  </TableRow>
                )}
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-6 py-4">{row.feature}</TableCell>
                    <TableCell className="bg-muted px-6 py-4">
                      {row.primary}
                    </TableCell>
                    <TableCell className="relative px-6 py-4">
                      {row.secondaryTooltip ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              type="button"
                              aria-label={`Details for ${row.feature}`}
                              className="cursor-pointer rounded-sm text-start underline decoration-dotted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                            >
                              {row.secondary}
                            </button>
                          </TooltipTrigger>
                          <TooltipContent sideOffset={8} className="max-w-xs">
                            <span className="mb-1 block font-semibold">
                              {row.secondaryTooltip.title}
                            </span>
                            {row.secondaryTooltip.description}
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        row.secondary
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};
