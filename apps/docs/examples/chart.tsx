"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../../../registry/ui/chart";

const data = [
  { month: "Jan", visits: 42 }, { month: "Feb", visits: 56 }, { month: "Mar", visits: 49 },
  { month: "Apr", visits: 68 }, { month: "May", visits: 74 }, { month: "Jun", visits: 83 },
];
const config = { visits: { label: "Visits", color: "var(--lm-color-data-accent)" } } satisfies ChartConfig;

export default function ChartExample() {
  return <div className="w-full space-y-3" role="img" aria-label="Monthly visits from January to June: 42, 56, 49, 68, 74, 83">
    <div><p className="text-sm text-muted-foreground">Monthly visits</p><p className="text-2xl font-semibold tabular-nums">83k <span className="text-sm font-normal text-muted-foreground">in June</span></p></div>
    <ChartContainer config={config} className="h-64 w-full">
      <BarChart data={data} accessibilityLayer margin={{ left: 4, right: 4 }}><CartesianGrid vertical={false} /><XAxis dataKey="month" tickLine={false} axisLine={false} /><YAxis tickLine={false} axisLine={false} width={28} /><ChartTooltip content={<ChartTooltipContent />} /><Bar dataKey="visits" fill="var(--color-visits)" radius={[4, 4, 0, 0]} /></BarChart>
    </ChartContainer>
  </div>;
}
