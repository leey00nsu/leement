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
import { useEffect, useMemo, useRef, useState } from "react";
import { animate } from "motion";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  motionEasing,
  motionSeconds,
  useMotionRevision,
} from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

export type PricingFrequency = "monthly" | "yearly";
export type PricingPlan = {
  id: string;
  name: string;
  price: Record<PricingFrequency, number | string>;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  disabled?: boolean;
  url?: string;
};
export type PricingProps = {
  title?: string;
  description?: string;
  plans: PricingPlan[];
  frequency?: PricingFrequency;
  defaultFrequency?: PricingFrequency;
  onFrequencyChange?: (frequency: PricingFrequency) => void;
  onPlanSelect?: (plan: PricingPlan, frequency: PricingFrequency) => void;
  currency?: string;
  locale?: string;
  yearlyBadge?: string;
  className?: string;
};

export function Pricing({
  title = "Simple, transparent pricing",
  description = "Choose the plan and billing period that work for your team.",
  plans,
  frequency,
  defaultFrequency = "monthly",
  onFrequencyChange,
  onPlanSelect,
  currency = "USD",
  locale = "en-US",
  yearlyBadge,
  className,
}: PricingProps) {
  const [internal, setInternal] = useState(defaultFrequency);
  const current = frequency ?? internal;
  return (
    <section
      className={cn(
        "mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 sm:py-20",
        className,
      )}
    >
      <header className="max-w-2xl space-y-5 text-center">
        <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </header>
      <Tabs
        value={current}
        onValueChange={(value) => {
          if (value !== "monthly" && value !== "yearly") return;
          if (frequency === undefined) setInternal(value);
          onFrequencyChange?.(value);
        }}
      >
        <TabsList
          aria-label="Billing period"
          className="h-auto max-w-full flex-wrap"
        >
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">
            Yearly
            {yearlyBadge && <Badge variant="secondary">{yearlyBadge}</Badge>}
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {!plans.length ? (
        <p role="status" className="text-muted-foreground">
          No plans available.
        </p>
      ) : (
        <div className="mt-4 grid w-full min-w-0 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={cn("min-w-0", plan.popular && "ring-2 ring-primary")}
            >
              <CardHeader className="min-w-0">
                <CardTitle className="flex flex-wrap items-center gap-2 text-xl">
                  {plan.name}
                  {plan.popular && <Badge>Popular</Badge>}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="mt-4 text-base font-medium text-foreground">
                  {typeof plan.price[current] === "number" ? (
                    <AnimatedPrice
                      value={plan.price[current] as number}
                      currency={currency}
                      locale={locale}
                    />
                  ) : (
                    plan.price[current]
                  )}
                  {typeof plan.price[current] === "number" && (
                    <span className="block text-sm font-normal text-muted-foreground">
                      / month, billed {current}
                    </span>
                  )}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <BadgeCheck
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {onPlanSelect ? (
                  <Button
                    className="h-auto min-h-10 w-full whitespace-normal"
                    variant={plan.popular ? "primary" : "secondary"}
                    disabled={plan.disabled}
                    onClick={() => onPlanSelect(plan, current)}
                  >
                    {plan.cta}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0"
                    />
                  </Button>
                ) : plan.url && !plan.disabled ? (
                  <Button
                    asChild
                    className="h-auto min-h-10 w-full whitespace-normal"
                    variant={plan.popular ? "primary" : "secondary"}
                  >
                    <a href={plan.url}>
                      {plan.cta}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 shrink-0"
                      />
                    </a>
                  </Button>
                ) : (
                  <Button
                    className="h-auto min-h-10 w-full whitespace-normal"
                    disabled
                  >
                    {plan.cta}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
function AnimatedPrice({
  value,
  currency,
  locale,
}: {
  value: number;
  currency: string;
  locale: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const amount = useMotionValue(value);
  const reduced = useReducedMotion();
  const revision = useMotionRevision();
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }),
    [currency, locale],
  );
  const display = useTransform(amount, (current) => formatter.format(current));
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const control = animate(amount, value, {
      duration: reduced ? 0 : motionSeconds(node, "duration-slow"),
      ease: motionEasing(node, "standard"),
    });
    return () => control.stop();
  }, [amount, value, reduced, revision]);
  return (
    <>
      <motion.span ref={ref} aria-hidden="true">
        {display}
      </motion.span>
      <span className="sr-only">{formatter.format(value)}</span>
    </>
  );
}
