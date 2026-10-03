"use client";
import { useState } from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, type ColumnDef, type SortingState, type VisibilityState, type RowSelectionState, type OnChangeFn } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown, ChevronDown } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type AdvancedDataTableProps<T, TValue = unknown> = {
  data: T[];
  columns: ColumnDef<T, TValue>[];
  getRowId: (row: T) => string;
  caption: string;
  searchColumn?: string;
  searchLabel?: string;
  pageSize?: number;
  enableRowSelection?: boolean;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  emptyMessage?: string;
  className?: string;
};
function AdvancedDataTable<T, TValue = unknown>({
  data, columns, getRowId, caption, searchColumn, searchLabel = "Filter rows", pageSize = 10,
  enableRowSelection = true, rowSelection: controlledSelection, onRowSelectionChange,
  emptyMessage = "No results.", className,
}: AdvancedDataTableProps<T, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [visibility, setVisibility] = useState<VisibilityState>({});
  const [selection, setSelection] = useState<RowSelectionState>({});
  const [filters, setFilters] = useState<import("@tanstack/react-table").ColumnFiltersState>([]);
  const table = useReactTable({
    data, columns, getRowId, enableRowSelection,
    state: { sorting, columnVisibility: visibility, rowSelection: controlledSelection ?? selection, columnFilters: filters },
    initialState: { pagination: { pageSize: Math.max(1, Math.floor(pageSize) || 10) } },
    onSortingChange: setSorting, onColumnVisibilityChange: setVisibility,
    onRowSelectionChange: updater => { setSelection(updater); onRowSelectionChange?.(updater); },
    onColumnFiltersChange: setFilters,
    getCoreRowModel: getCoreRowModel(), getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(), getPaginationRowModel: getPaginationRowModel(),
  });
  const filterColumn = searchColumn ? table.getColumn(searchColumn) : undefined;
  return <div data-slot="advanced-data-table" className={cn("w-full min-w-0 space-y-3", className)}>
    <div className="flex flex-wrap items-center gap-2">
      {filterColumn && <Input aria-label={searchLabel} placeholder={searchLabel} className="w-full sm:max-w-xs" value={String(filterColumn.getFilterValue() ?? "")} onChange={event => { filterColumn.setFilterValue(event.target.value); table.setPageIndex(0); }} />}
      <DropdownMenu><DropdownMenuTrigger render={<Button variant="outline" className="ml-auto" />}>Columns<ChevronDown aria-hidden="true" /></DropdownMenuTrigger><DropdownMenuContent align="end" className="min-w-40">{table.getAllLeafColumns().filter(column => column.getCanHide()).map(column => <DropdownMenuCheckboxItem key={column.id} checked={column.getIsVisible()} disabled={column.getIsVisible() && table.getVisibleLeafColumns().length === 1} onCheckedChange={checked => column.toggleVisibility(checked)}>{typeof column.columnDef.header === "string" ? column.columnDef.header : column.id}</DropdownMenuCheckboxItem>)}</DropdownMenuContent></DropdownMenu>
    </div>
    <div className="overflow-hidden rounded-xl border border-border">
      <Table><TableCaption className="sr-only">{caption}</TableCaption><TableHeader>{table.getHeaderGroups().map((group, groupIndex) => <TableRow key={group.id}>
        {enableRowSelection && groupIndex === 0 && <TableHead className="w-12" rowSpan={table.getHeaderGroups().length}><Checkbox aria-label="Select rows on this page" disabled={!table.getRowModel().rows.length} checked={table.getIsAllPageRowsSelected()} indeterminate={table.getIsSomePageRowsSelected()} onCheckedChange={checked => table.toggleAllPageRowsSelected(checked)} /></TableHead>}
        {group.headers.map(header => <TableHead key={header.id} colSpan={header.colSpan} aria-sort={header.column.getIsSorted() === "asc" ? "ascending" : header.column.getIsSorted() === "desc" ? "descending" : undefined}>
          {header.isPlaceholder ? null : header.column.getCanSort() ? <button type="button" className="inline-flex items-center gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40" onClick={header.column.getToggleSortingHandler()}>{flexRender(header.column.columnDef.header, header.getContext())}{header.column.getIsSorted() === "asc" ? <ArrowUp aria-hidden="true" className="size-3.5" /> : header.column.getIsSorted() === "desc" ? <ArrowDown aria-hidden="true" className="size-3.5" /> : <ChevronsUpDown aria-hidden="true" className="size-3.5" />}</button> : flexRender(header.column.columnDef.header, header.getContext())}
        </TableHead>)}
      </TableRow>)}</TableHeader><TableBody>{table.getRowModel().rows.length ? table.getRowModel().rows.map(row => <TableRow key={row.id} data-selected={row.getIsSelected()}>
        {enableRowSelection && <TableCell><Checkbox aria-label={`Select row ${row.id}`} checked={row.getIsSelected()} disabled={!row.getCanSelect()} onCheckedChange={checked => row.toggleSelected(checked)} /></TableCell>}
        {row.getVisibleCells().map(cell => <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>)}
      </TableRow>) : <TableRow><TableCell colSpan={table.getVisibleLeafColumns().length + (enableRowSelection ? 1 : 0)} className="py-8 text-center text-muted-foreground">{emptyMessage}</TableCell></TableRow>}</TableBody></Table>
    </div>
    <div className="flex flex-wrap items-center justify-between gap-2">
      <p role="status" className="text-xs text-muted-foreground">{enableRowSelection ? `${table.getFilteredSelectedRowModel().rows.length} of ${table.getFilteredRowModel().rows.length} rows selected · ` : ""}Page {table.getState().pagination.pageIndex + 1} of {Math.max(1, table.getPageCount())}</p>
      <div className="flex gap-2"><Button type="button" variant="outline" size="sm" disabled={!table.getCanPreviousPage()} onClick={()=>table.previousPage()}>Previous</Button><Button type="button" variant="outline" size="sm" disabled={!table.getCanNextPage()} onClick={()=>table.nextPage()}>Next</Button></div>
    </div>
  </div>;
}
export { AdvancedDataTable };
export type { AdvancedDataTableProps };
