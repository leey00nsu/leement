"use client";

import * as React from "react";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

type TableColumn<T> = {
  id: string;
  header: string;
  cell: (row: T) => React.ReactNode;
  sortValue?: (row: T) => string | number | Date | null | undefined;
};
type DataTableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  rowId: (row: T) => string;
  caption: string;
  emptyMessage?: string;
  className?: string;
};

function DataTable<T>({ data, columns, rowId, caption, emptyMessage = "No results", className }: DataTableProps<T>) {
  const [sort, setSort] = React.useState<{ id: string; descending: boolean } | null>(null);
  const sorted = React.useMemo(() => {
    const column = columns.find((entry) => entry.id === sort?.id);
    if (!sort || !column?.sortValue) return data;
    return [...data].sort((a, b) => {
      const first = column.sortValue?.(a);
      const second = column.sortValue?.(b);
      if (first == null) return second == null ? 0 : 1;
      if (second == null) return -1;
      const result = typeof first === "number" && typeof second === "number" ? first - second : String(first instanceof Date ? first.toISOString() : first).localeCompare(String(second instanceof Date ? second.toISOString() : second));
      return sort.descending ? -result : result;
    });
  }, [columns, data, sort]);
  function toggle(id: string) { setSort((current) => current?.id === id ? { id, descending: !current.descending } : { id, descending: false }); }
  return <div data-slot="data-table" className={cn("w-full overflow-x-auto rounded-xl border border-border", className)}>
    <table className="w-full border-collapse text-left text-sm">
      <caption className="sr-only">{caption}</caption>
      <thead className="bg-muted/50"><tr>{columns.map((column) => <th key={column.id} scope="col" aria-sort={sort?.id === column.id ? sort.descending ? "descending" : "ascending" : undefined} className="border-b border-border px-4 py-3 font-medium text-foreground">{column.sortValue ? <button type="button" onClick={() => toggle(column.id)} className="inline-flex items-center gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">{column.header}{sort?.id === column.id ? sort.descending ? <ArrowDown aria-hidden="true" className="size-3.5" /> : <ArrowUp aria-hidden="true" className="size-3.5" /> : <ChevronsUpDown aria-hidden="true" className="size-3.5 text-muted-foreground" />}</button> : column.header}</th>)}</tr></thead>
      <tbody>{sorted.length ? sorted.map((row) => <tr key={rowId(row)} className="border-b border-border last:border-0 hover:bg-muted/30">{columns.map((column) => <td key={column.id} className="px-4 py-3 text-foreground">{column.cell(row)}</td>)}</tr>) : <tr><td colSpan={columns.length} className="px-4 py-8 text-center text-muted-foreground">{emptyMessage}</td></tr>}</tbody>
    </table>
  </div>;
}

export { DataTable };
export type { DataTableProps, TableColumn };
