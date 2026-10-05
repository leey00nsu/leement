"use client";

import { useId } from "react";
import type { ChartConfig } from "@/components/ui/chart";

export type ChartDataTableProps = {
  /** Pass the same live, filtered data used by the chart. */
  data: readonly Record<string, unknown>[];
  config: ChartConfig;
  caption: string;
};

/** Native details/table remain readable during SSR and without JavaScript. */
export function ChartDataTable({ data, config, caption }: ChartDataTableProps) {
  const id = useId();
  const columns = [...new Set(data.flatMap((row) => Object.keys(row)))].filter(
    (key) => key !== "fill" && key !== "stroke",
  );
  return (
    <details className="mx-5 mb-5 min-w-0 rounded-md bg-muted/40">
      <summary className="cursor-pointer rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        View chart data
      </summary>
      <div
        role="region"
        aria-labelledby={id}
        tabIndex={0}
        className="max-h-64 overflow-auto rounded-md px-3 pb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <table className="w-full text-left text-xs tabular-nums">
          <caption id={id} className="pb-3 text-left font-medium">
            {caption}
          </caption>
          <thead>
            <tr>
              {columns.map((key) => (
                <th
                  key={key}
                  scope="col"
                  className="whitespace-nowrap border-b border-border p-2 font-medium"
                >
                  {config[key]?.label ?? key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((key) => (
                  <td
                    key={key}
                    className="whitespace-nowrap border-b border-border/50 p-2"
                  >
                    {typeof row[key] === "number"
                      ? row[key].toLocaleString("en-US")
                      : String(row[key] ?? "—")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {!data.length && (
          <p className="py-3 text-sm text-muted-foreground">
            No data in this range.
          </p>
        )}
      </div>
    </details>
  );
}
