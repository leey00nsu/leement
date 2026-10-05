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
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useStyleMotion } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  id: string;
  title: string;
  image: string;
  description: string;
};
export type FeatureProps = {
  title?: string;
  features: FeatureItem[];
  value?: string | null;
  defaultValue?: string;
  onValueChange?: (id: string | null) => void;
  className?: string;
};

export function Feature({
  title = "Features",
  features,
  value,
  defaultValue,
  onValueChange,
  className,
}: FeatureProps) {
  const [internal, setInternal] = useState<string | null>(
    defaultValue ?? features[0]?.id ?? null,
  );
  const selected = value === undefined ? internal : value;
  const [lastId, setLastId] = useState(selected);
  const image =
    features.find((feature) => feature.id === (selected ?? lastId)) ??
    features[0];
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-3xl font-semibold sm:text-4xl">{title}</h2>
        {!features.length ? (
          <p role="status" className="text-muted-foreground">
            No features to display.
          </p>
        ) : (
          <div className="grid min-w-0 gap-10 md:grid-cols-2">
            <Accordion
              value={
                selected && features.some((feature) => feature.id === selected)
                  ? [selected]
                  : []
              }
              onValueChange={(next) => {
                const id = typeof next[0] === "string" ? next[0] : null;
                if (value === undefined) setInternal(id);
                if (id) setLastId(id);
                onValueChange?.(id);
              }}
              className="min-w-0"
            >
              {features.map((feature) => (
                <AccordionItem key={feature.id} value={feature.id}>
                  <AccordionTrigger className="py-5">
                    <span
                      className={cn(
                        "text-xl",
                        selected !== feature.id && "text-muted-foreground",
                      )}
                    >
                      {feature.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      {feature.description}
                    </p>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="mt-4 max-h-80 w-full rounded-lg object-cover md:hidden"
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="relative hidden aspect-[4/3] min-w-0 overflow-hidden rounded-xl bg-muted md:block">
              {features.map((feature) => (
                <FeatureImage
                  key={feature.id}
                  feature={feature}
                  selected={image?.id === feature.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
function FeatureImage({
  feature,
  selected,
}: {
  feature: FeatureItem;
  selected: boolean;
}) {
  const ref = useStyleMotion<HTMLImageElement>(undefined, ["opacity"], "slow");
  return (
    <img
      ref={ref}
      src={feature.image}
      alt={feature.title}
      aria-hidden={!selected}
      className={cn(
        "absolute inset-0 size-full object-cover",
        selected ? "opacity-100" : "opacity-0",
      )}
    />
  );
}
