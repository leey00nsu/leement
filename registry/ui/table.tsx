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
  return <div data-slot="data-table" className={cn("relative w-full overflow-x-auto rounded-xl border border-border", className)}>
    <table className="w-full border-collapse text-left text-sm">
      <caption className="sr-only">{caption}</caption>
      <thead className="bg-muted/50"><tr>{columns.map((column) => <th key={column.id} scope="col" aria-sort={sort?.id === column.id ? sort.descending ? "descending" : "ascending" : undefined} className="border-b border-border px-4 py-3 font-medium text-foreground">{column.sortValue ? <button type="button" onClick={() => toggle(column.id)} className="inline-flex items-center gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40">{column.header}{sort?.id === column.id ? sort.descending ? <ArrowDown aria-hidden="true" className="size-3.5" /> : <ArrowUp aria-hidden="true" className="size-3.5" /> : <ChevronsUpDown aria-hidden="true" className="size-3.5 text-muted-foreground" />}</button> : column.header}</th>)}</tr></thead>
      <tbody>{sorted.length ? sorted.map((row) => <tr key={rowId(row)} className="border-b border-border last:border-0 hover:bg-muted/30">{columns.map((column) => <td key={column.id} className="px-4 py-3 text-foreground">{column.cell(row)}</td>)}</tr>) : <tr><td colSpan={columns.length} className="px-4 py-8 text-center text-muted-foreground">{emptyMessage}</td></tr>}</tbody>
    </table>
  </div>;
}

function Table({ className, ...props }: React.ComponentProps<"table">) { return <div data-slot="table-container" className="relative w-full overflow-x-auto"><table data-slot="table" className={cn("w-full border-collapse text-left text-sm", className)} {...props} /></div>; }
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) { return <thead className={cn("bg-muted/50 [&_tr]:border-b", className)} {...props} />; }
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) { return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />; }
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) { return <tfoot className={cn("border-t border-border bg-muted/50 font-medium", className)} {...props} />; }
function TableRow({ className, ...props }: React.ComponentProps<"tr">) { return <tr className={cn("border-b border-border hover:bg-muted/30 data-[selected=true]:bg-accent", className)} {...props} />; }
function TableHead({ className, scope = "col", ...props }: React.ComponentProps<"th">) { return <th scope={scope} className={cn("px-4 py-3 font-medium text-foreground", className)} {...props} />; }
function TableCell({ className, ...props }: React.ComponentProps<"td">) { return <td className={cn("px-4 py-3 text-foreground", className)} {...props} />; }
function TableCaption({ className, ...props }: React.ComponentProps<"caption">) { return <caption className={cn("mt-3 caption-bottom text-sm text-muted-foreground", className)} {...props} />; }

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption, DataTable };
export type { DataTableProps, TableColumn };
