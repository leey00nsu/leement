"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../../../registry/ui/chart";

const data = [{ month: "Jan", visits: 42 }, { month: "Feb", visits: 56 }, { month: "Mar", visits: 49 }, { month: "Apr", visits: 68 }];
const config = { visits: { label: "Visits", color: "var(--lm-color-data-accent)" } } satisfies ChartConfig;

export default function ChartExample() {
  return <div className="w-full max-w-sm" role="img" aria-label="Visits by month: January 42, February 56, March 49, April 68">
    <ChartContainer config={config}>
      <BarChart data={data} accessibilityLayer><CartesianGrid vertical={false} /><XAxis dataKey="month" /><ChartTooltip content={<ChartTooltipContent />} /><Bar dataKey="visits" fill="var(--color-visits)" radius={4} /></BarChart>
    </ChartContainer>
  </div>;
}
