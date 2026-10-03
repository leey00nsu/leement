"use client";
import { useState } from "react";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "../../../registry/ui/chart";
const data = [
  { month: "Jan", active: 42, new: 12 },
  { month: "Feb", active: 56, new: 19 },
  { month: "Mar", active: 49, new: 14 },
  { month: "Apr", active: 68, new: 22 },
];
const config = {
  active: { label: "Active members", color: "var(--lm-color-data-accent)" },
  new: { label: "New members", color: "var(--lm-color-foreground-muted)" },
} satisfies ChartConfig;
export default function Example() {
  const [indicator, setIndicator] = useState<"dot" | "line" | "dashed">("dot");
  return (
    <div className="w-full max-w-xl space-y-4">
      <label className="flex flex-wrap items-center gap-2 text-sm">
        Tooltip indicator
        <select
          className="rounded-md border border-input bg-background p-2"
          value={indicator}
          onChange={(e) => setIndicator(e.target.value as typeof indicator)}
        >
          {["dot", "line", "dashed"].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </label>
      <p className="text-sm">April: 68 active members, 22 new members.</p>
      <ChartContainer config={config} className="h-64 w-full">
        <LineChart
          data={data}
          accessibilityLayer
          margin={{ left: 0, right: 12 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis width={30} tickLine={false} axisLine={false} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                indicator={indicator}
                labelFormatter={(label) => `Month: ${label}`}
              />
            }
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            isAnimationActive={false}
            dataKey="active"
            stroke="var(--color-active)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            isAnimationActive={false}
            dataKey="new"
            stroke="var(--color-new)"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
