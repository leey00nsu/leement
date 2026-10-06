import type { UsageSection } from "../components/usage-guide";

// Setup and recipes that are not already explained by an executable example.
export const usageGuides: Record<string, UsageSection[]> = {
  button: [
    {
      id: "guide-cursor-2",
      title: "Cursor",
      blocks: [
        {
          kind: "text",
          value:
            "Tailwind v4 uses the default cursor for buttons. For a pointer cursor, add cursor-pointer to a Button or apply the following app-level CSS."
        },
        {
          kind: "code",
          language: "css",
          value:
            "@layer base {\n  button:not(:disabled),\n  [role=\"button\"]:not(:disabled) {\n    cursor: pointer;\n  }\n}"
        }
      ]
    }
  ],
  calendar: [
    {
      id: "guide-selected-date-with-timezone-5",
      title: "Selected Date (With TimeZone)",
      blocks: [
        {
          kind: "text",
          value:
            "The Calendar component accepts a `timeZone` prop to ensure dates are displayed and selected in the user's local timezone."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "export function CalendarWithTimezone() {\n  const [date, setDate] = React.useState<Date | undefined>(undefined)\n  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined)\n\n  React.useEffect(() => {\n    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)\n  }, [])\n\n  return (\n    <Calendar\n      mode=\"single\"\n      selected={date}\n      onSelect={setDate}\n      timeZone={timeZone}\n    />\n  )\n}"
        },
        {
          kind: "text",
          value:
            "**Note:** If you notice a selected date offset (for example, selecting the 20th highlights the 19th), make sure the `timeZone` prop is set to the user's local timezone.\n\n**Why client-side?** The timezone is detected using `Intl.DateTimeFormat().resolvedOptions().timeZone` inside a `useEffect` to ensure compatibility with server-side rendering. Detecting the timezone during render would cause hydration mismatches, as the server and client may be in different timezones."
        }
      ]
    }
  ],
  chart: [
    {
      id: "guide-updating-to-recharts-v3-3",
      title: "Updating to Recharts v3",
      blocks: [
        {
          kind: "text",
          value:
            "If you're updating older chart code to Recharts v3:\n\n- Use `var(--chart-1)` instead of `hsl(var(--chart-1))` when you reference chart tokens from your CSS variables.\n- Use `ChartTooltip.defaultIndex` for initial tooltip state only. Keep persistent active shapes in your own chart state.\n- Remove `layout` from `<Bar>` when the parent `<BarChart>` already defines it.\n- Keep a height, `min-h-*`, or `aspect-*` on `ChartContainer` so `ResponsiveContainer` can measure on first render."
        }
      ]
    },
    {
      id: "guide-chart-config-5",
      title: "Chart Config",
      blocks: [
        {
          kind: "text",
          value:
            "ChartConfig maps series keys to readable labels, optional icons and semantic colors. Each series uses either color or a light/dark theme object; use Leement token aliases so theme edits propagate."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "import { Monitor } from \"lucide-react\"\nimport { type ChartConfig } from \"@/components/ui/chart\"\n\nconst chartConfig = {\n  desktop: { label: \"Desktop\", icon: Monitor, color: \"var(--chart-1)\" },\n  mobile: {\n    label: \"Mobile\",\n    theme: { light: \"var(--chart-2)\", dark: \"var(--chart-2)\" },\n  },\n} satisfies ChartConfig"
        }
      ]
    },
    {
      id: "guide-legend-8",
      title: "Legend",
      blocks: [
        {
          kind: "text",
          value:
            "You can use the custom `<ChartLegend>` and `<ChartLegendContent>` components to add a legend to your chart."
        },
        {
          kind: "code",
          language: "tsx",
          value: "import { ChartLegend, ChartLegendContent } from \"@/components/ui/chart\""
        },
        {
          kind: "code",
          language: "tsx",
          value: "<ChartLegend content={<ChartLegendContent />} />"
        },
        {
          kind: "text",
          value:
            "### Colors\n\nColors are automatically referenced from the chart config.\n\n### Custom\n\nTo use a custom key for legend names, use the `nameKey` prop."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "const chartData = [\n  { browser: \"chrome\", visitors: 187, fill: \"var(--color-chrome)\" },\n  { browser: \"safari\", visitors: 200, fill: \"var(--color-safari)\" },\n]\n\nconst chartConfig = {\n  chrome: {\n    label: \"Chrome\",\n    color: \"var(--chart-1)\",\n  },\n  safari: {\n    label: \"Safari\",\n    color: \"var(--chart-2)\",\n  },\n} satisfies ChartConfig"
        },
        {
          kind: "code",
          language: "tsx",
          value: "<ChartLegend content={<ChartLegendContent nameKey=\"browser\" />} />"
        },
        {
          kind: "text",
          value: "This will use `Chrome` and `Safari` for the legend names."
        }
      ]
    },
    {
      id: "guide-theme-and-data",
      title: "Theme and data",
      blocks: [
        {
          kind: "text",
          value:
            "Import @leement/theme before rendering a chart. Use var(--chart-1) through var(--chart-5) in ChartConfig; these aliases read Leement semantic data-series tokens and follow light/dark and Foundations edits. Match dataKey to your data and config key, set a minimum ChartContainer height, and retain accessibilityLayer and a same-data text/table fallback."
        }
      ]
    }
  ],
  checkbox: [
    {
      id: "guide-checked-state-2",
      title: "Checked State",
      blocks: [
        {
          kind: "text",
          value:
            "Use `defaultChecked` for uncontrolled checkboxes, or `checked` and\n`onCheckedChange` to control the state."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "import * as React from \"react\"\n\nexport function Example() {\n  const [checked, setChecked] = React.useState(false)\n\n  return <Checkbox checked={checked} onCheckedChange={setChecked} />\n}"
        }
      ]
    }
  ],
  collapsible: [
    {
      id: "guide-controlled-state-3",
      title: "Controlled State",
      blocks: [
        {
          kind: "text",
          value: "Use the `open` and `onOpenChange` props to control the state."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "import * as React from \"react\"\n\nexport function Example() {\n  const [open, setOpen] = React.useState(false)\n\n  return (\n    <Collapsible open={open} onOpenChange={setOpen}>\n      <CollapsibleTrigger>Toggle</CollapsibleTrigger>\n      <CollapsibleContent>Content</CollapsibleContent>\n    </Collapsible>\n  )\n}"
        }
      ]
    }
  ],
  "data-table": [
    {
      id: "guide-table-version",
      title: "Build your own data table",
      blocks: [
        {
          kind: "text",
          value:
            "This guide adapts the pinned upstream v9 recipe to the v8 version used by Leement. The runtime example is the full Table composition. AdvancedDataTable is an optional convenience pattern. DataTableColumnHeader, DataTablePagination and DataTableViewOptions are editable parts of @leement/data-table."
        }
      ]
    },
    {
      id: "guide-prerequisites-1",
      title: "Prerequisites",
      blocks: [
        {
          kind: "text",
          value:
            "We are going to build a table to show recent payments. Here's what our data looks like:"
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "type Payment = {\n  id: string\n  amount: number\n  status: \"pending\" | \"processing\" | \"success\" | \"failed\"\n  email: string\n}\n\nexport const payments: Payment[] = [\n  {\n    id: \"728ed52f\",\n    amount: 100,\n    status: \"pending\",\n    email: \"m@example.com\",\n  },\n  {\n    id: \"489e1d42\",\n    amount: 125,\n    status: \"processing\",\n    email: \"example@gmail.com\",\n  },\n  // ...\n]"
        }
      ]
    },
    {
      id: "guide-project-structure-2",
      title: "Project Structure",
      blocks: [
        {
          kind: "text",
          value: "Start by creating the following file structure:"
        },
        {
          kind: "code",
          language: "txt",
          value:
            "app\n└── payments\n    ├── columns.tsx\n    ├── data-table-features.ts\n    ├── data-table.tsx\n    └── page.tsx"
        },
        {
          kind: "text",
          value:
            "The recipe uses plain React; the app supplies routing and data.\n\n- `columns.tsx` (client component) will contain our column definitions.\n- `data-table-models.ts` will contain the shared `features` object that tells TanStack Table which behavior to enable.\n- `data-table.tsx` (client component) will contain our `<DataTable />` component.\n- `page.tsx` (server component) is where we'll fetch data and render our table."
        }
      ]
    },
    {
      id: "guide-basic-table-4",
      title: "Basic Table",
      blocks: [
        {
          kind: "text",
          value:
            "Let's start by building a basic table.\n\n### Column Definitions\n\nFirst, we'll define our columns."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "\"use client\"\n\nimport { createColumnHelper } from \"@tanstack/react-table\"\n\nimport { type DataTableFeatures } from \"./data-table-features\"\n\n// This type is used to define the shape of our data.\n// You can use a Zod schema here if you want.\nexport type Payment = {\n  id: string\n  amount: number\n  status: \"pending\" | \"processing\" | \"success\" | \"failed\"\n  email: string\n}\n\n// Use `accessor` for data columns and `display` for columns without one.\nconst columnHelper = createColumnHelper<Payment>()\n\nexport const columns = [\n  columnHelper.accessor(\"status\", {\n    header: \"Status\",\n  }),\n  columnHelper.accessor(\"email\", {\n    header: \"Email\",\n  }),\n  columnHelper.accessor(\"amount\", {\n    header: \"Amount\",\n  }),\n]"
        },
        {
          kind: "text",
          value:
            "**Note:** Columns are where you define the core of what your table\nwill look like. They define the data that will be displayed, how it will be\nformatted, sorted and filtered.\n\n### `<DataTable />` component\n\nNext, we'll create a `<DataTable />` component to render our table."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "\"use client\"\n\nimport { useReactTable, flexRender, type ColumnDef, type RowData } from \"@tanstack/react-table\"\n\nimport {\n  Table,\n  TableBody,\n  TableCell,\n  TableHead,\n  TableHeader,\n  TableRow,\n} from \"@/components/ui/table\"\n\nimport { features, type DataTableFeatures } from \"./data-table-features\"\n\ninterface DataTableProps<TData extends RowData> {\n  columns: ColumnDef<TData>[]\n  data: TData[]\n}\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n  })\n\n  return (\n    <div className=\"overflow-hidden rounded-md border\">\n      <Table>\n        <TableHeader>\n          {table.getHeaderGroups().map((headerGroup) => (\n            <TableRow key={headerGroup.id}>\n              {headerGroup.headers.map((header) => {\n                return (\n                  <TableHead key={header.id}>\n                    {header.isPlaceholder ? null : (\n                      flexRender(header.column.columnDef.header, header.getContext())\n                    )}\n                  </TableHead>\n                )\n              })}\n            </TableRow>\n          ))}\n        </TableHeader>\n        <TableBody>\n          {table.getRowModel().rows?.length ? (\n            table.getRowModel().rows.map((row) => (\n              <TableRow\n                key={row.id}\n                data-state={row.getIsSelected() && \"selected\"}\n              >\n                {row.getVisibleCells().map((cell) => (\n                  <TableCell key={cell.id}>\n                    flexRender(cell.column.columnDef.cell, cell.getContext())\n                  </TableCell>\n                ))}\n              </TableRow>\n            ))\n          ) : (\n            <TableRow>\n              <TableCell colSpan={columns.length} className=\"h-24 text-center\">\n                No results.\n              </TableCell>\n            </TableRow>\n          )}\n        </TableBody>\n      </Table>\n    </div>\n  )\n}"
        },
        {
          kind: "text",
          value: ""
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "import { columns, Payment } from \"./columns\"\nimport { DataTable } from \"./data-table\"\n\nasync function getData(): Promise<Payment[]> {\n  // Fetch data from your API here.\n  return [\n    {\n      id: \"728ed52f\",\n      amount: 100,\n      status: \"pending\",\n      email: \"m@example.com\",\n    },\n    // ...\n  ]\n}\n\nexport default async function DemoPage() {\n  const data = await getData()\n\n  return (\n    <div className=\"container mx-auto py-10\">\n      <DataTable columns={columns} data={data} />\n    </div>\n  )\n}"
        }
      ]
    },
    {
      id: "guide-cell-formatting-5",
      title: "Cell Formatting",
      blocks: [
        {
          kind: "text",
          value:
            "Let's format the amount cell to display the dollar amount. We'll also align the cell to the right.\n\n### Update columns definition\n\nUpdate the `header` and `cell` definitions for amount as follows:"
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "export const columns = [\n  columnHelper.accessor(\"amount\", {\n    header: () => <div className=\"text-right\">Amount</div>,\n    cell: ({ row }) => {\n      const amount = parseFloat(row.getValue(\"amount\"))\n      const formatted = new Intl.NumberFormat(\"en-US\", {\n        style: \"currency\",\n        currency: \"USD\",\n      }).format(amount)\n\n      return <div className=\"text-right font-medium\">{formatted}</div>\n    },\n  }),\n]"
        },
        {
          kind: "text",
          value: "You can use the same approach to format other cells and headers."
        }
      ]
    },
    {
      id: "guide-row-actions-6",
      title: "Row Actions",
      blocks: [
        {
          kind: "text",
          value:
            "Let's add row actions to our table. We'll use a `<DropdownMenu />` component for this.\n\n### Update columns definition\n\nUpdate our columns definition to add a new `actions` column. The `actions` cell returns a `<DropdownMenu />` component."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "\"use client\"\n\nimport { createColumnHelper } from \"@tanstack/react-table\"\nimport { MoreHorizontal } from \"lucide-react\"\n\nimport { Button } from \"@/components/ui/button\"\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuLabel,\n  DropdownMenuSeparator,\n  DropdownMenuTrigger,\n} from \"@/components/ui/dropdown-menu\"\n\nexport const columns = [\n  // ...\n  columnHelper.display({\n    id: \"actions\",\n    cell: ({ row }) => {\n      const payment = row.original\n\n      return (\n        <DropdownMenu>\n          <DropdownMenuTrigger\n            render={<Button variant=\"ghost\" className=\"h-8 w-8 p-0\" />}\n          >\n            <span className=\"sr-only\">Open menu</span>\n            <MoreHorizontal className=\"h-4 w-4\" />\n          </DropdownMenuTrigger>\n          <DropdownMenuContent align=\"end\">\n            <DropdownMenuLabel>Actions</DropdownMenuLabel>\n            <DropdownMenuItem\n              onClick={() => navigator.clipboard.writeText(payment.id)}\n            >\n              Copy payment ID\n            </DropdownMenuItem>\n            <DropdownMenuSeparator />\n            <DropdownMenuItem>View customer</DropdownMenuItem>\n            <DropdownMenuItem>View payment details</DropdownMenuItem>\n          </DropdownMenuContent>\n        </DropdownMenu>\n      )\n    },\n  }),\n  // ...\n]"
        },
        {
          kind: "text",
          value:
            "You can access the row data using `row.original` in the `cell` function. Use this to handle actions for your row eg. use the `id` to make a DELETE call to your API."
        }
      ]
    },
    {
      id: "guide-pagination-7",
      title: "Pagination",
      blocks: [
        {
          kind: "text",
          value: ""
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "import { Button } from \"@/components/ui/button\"\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n  })\n\n  return (\n    <div>\n      <div className=\"overflow-hidden rounded-md border\">\n        <Table>\n          { // .... }\n        </Table>\n      </div>\n      <div className=\"flex items-center justify-end space-x-2 py-4\">\n        <Button\n          variant=\"outline\"\n          size=\"sm\"\n          onClick={() => table.previousPage()}\n          disabled={!table.getCanPreviousPage()}\n        >\n          Previous\n        </Button>\n        <Button\n          variant=\"outline\"\n          size=\"sm\"\n          onClick={() => table.nextPage()}\n          disabled={!table.getCanNextPage()}\n        >\n          Next\n        </Button>\n      </div>\n    </div>\n  )\n}"
        },
        {
          kind: "text",
          value:
            "See [Reusable Components](#guide-reusable-components-12) section for a more advanced pagination component."
        }
      ]
    },
    {
      id: "guide-sorting-8",
      title: "Sorting",
      blocks: [
        {
          kind: "text",
          value: ""
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "\"use client\"\n\nimport * as React from \"react\"\nimport {\n  useReactTable, flexRender,\n  type ColumnDef,\n  type RowData,\n  type SortingState,\n} from \"@tanstack/react-table\"\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const [sorting, setSorting] = React.useState<SortingState>([])\n\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n    onSortingChange: setSorting,\n    state: {\n      sorting,\n    },\n  })\n\n  return (\n    <div>\n      <div className=\"overflow-hidden rounded-md border\">\n        <Table>{ ... }</Table>\n      </div>\n    </div>\n  )\n}"
        },
        {
          kind: "text",
          value:
            "### Make header cell sortable\n\nWe can now update the `email` header cell to add sorting controls."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "\"use client\"\n\nimport { createColumnHelper } from \"@tanstack/react-table\"\nimport { ArrowUpDown } from \"lucide-react\"\n\nexport const columns = [\n  columnHelper.accessor(\"email\", {\n    header: ({ column }) => {\n      return (\n        <Button\n          variant=\"ghost\"\n          onClick={() => column.toggleSorting(column.getIsSorted() === \"asc\")}\n        >\n          Email\n          <ArrowUpDown className=\"ml-2 h-4 w-4\" />\n        </Button>\n      )\n    },\n  }),\n]"
        },
        {
          kind: "text",
          value:
            "This will automatically sort the table (asc and desc) when the user toggles on the header cell."
        }
      ]
    },
    {
      id: "guide-filtering-9",
      title: "Filtering",
      blocks: [
        {
          kind: "text",
          value: ""
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "\"use client\"\n\nimport * as React from \"react\"\nimport {\n  useReactTable, flexRender,\n  type ColumnDef,\n  type ColumnFiltersState,\n  type RowData,\n  type SortingState,\n} from \"@tanstack/react-table\"\n\nimport { Button } from \"@/components/ui/button\"\nimport { Input } from \"@/components/ui/input\"\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const [sorting, setSorting] = React.useState<SortingState>([])\n  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(\n    []\n  )\n\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n    onSortingChange: setSorting,\n    onColumnFiltersChange: setColumnFilters,\n    state: {\n      sorting,\n      columnFilters,\n    },\n  })\n\n  return (\n    <div>\n      <div className=\"flex items-center py-4\">\n        <Input\n          placeholder=\"Filter emails...\"\n          value={(table.getColumn(\"email\")?.getFilterValue() as string) ?? \"\"}\n          onChange={(event) =>\n            table.getColumn(\"email\")?.setFilterValue(event.target.value)\n          }\n          className=\"max-w-sm\"\n        />\n      </div>\n      <div className=\"overflow-hidden rounded-md border\">\n        <Table>{ ... }</Table>\n      </div>\n    </div>\n  )\n}"
        },
        {
          kind: "text",
          value:
            "Filtering is now enabled for the `email` column. You can add filters to other columns as well. See the [filtering docs](https://tanstack.com/table/latest/docs/framework/react/guide/column-filtering) for more information on customizing filters."
        }
      ]
    },
    {
      id: "guide-visibility-10",
      title: "Visibility",
      blocks: [
        {
          kind: "text",
          value:
            "Adding column visibility is fairly simple using `@tanstack/react-table` visibility API.\n\n### Update `<DataTable>`"
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "\"use client\"\n\nimport * as React from \"react\"\nimport {\n  useReactTable, flexRender,\n  type ColumnDef,\n  type ColumnFiltersState,\n  type ColumnVisibilityState,\n  type RowData,\n  type SortingState,\n} from \"@tanstack/react-table\"\n\nimport { Button } from \"@/components/ui/button\"\nimport {\n  DropdownMenu,\n  DropdownMenuCheckboxItem,\n  DropdownMenuContent,\n  DropdownMenuTrigger,\n} from \"@/components/ui/dropdown-menu\"\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const [sorting, setSorting] = React.useState<SortingState>([])\n  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(\n    []\n  )\n  const [columnVisibility, setColumnVisibility] =\n    React.useState<ColumnVisibilityState>({})\n\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n    onSortingChange: setSorting,\n    onColumnFiltersChange: setColumnFilters,\n    onColumnVisibilityChange: setColumnVisibility,\n    state: {\n      sorting,\n      columnFilters,\n      columnVisibility,\n    },\n  })\n\n  return (\n    <div>\n      <div className=\"flex items-center py-4\">\n        <Input\n          placeholder=\"Filter emails...\"\n          value={table.getColumn(\"email\")?.getFilterValue() as string}\n          onChange={(event) =>\n            table.getColumn(\"email\")?.setFilterValue(event.target.value)\n          }\n          className=\"max-w-sm\"\n        />\n        <DropdownMenu>\n          <DropdownMenuTrigger render={<Button variant=\"outline\" className=\"ml-auto\" />}>\n            Columns\n          </DropdownMenuTrigger>\n          <DropdownMenuContent align=\"end\">\n            {table\n              .getAllColumns()\n              .filter(\n                (column) => column.getCanHide()\n              )\n              .map((column) => {\n                return (\n                  <DropdownMenuCheckboxItem\n                    key={column.id}\n                    className=\"capitalize\"\n                    checked={column.getIsVisible()}\n                    onCheckedChange={(value) =>\n                      column.toggleVisibility(!!value)\n                    }\n                  >\n                    {column.id}\n                  </DropdownMenuCheckboxItem>\n                )\n              })}\n          </DropdownMenuContent>\n        </DropdownMenu>\n      </div>\n      <div className=\"overflow-hidden rounded-md border\">\n        <Table>{ ... }</Table>\n      </div>\n    </div>\n  )\n}"
        },
        {
          kind: "text",
          value: "This adds a dropdown menu that you can use to toggle column visibility."
        }
      ]
    },
    {
      id: "guide-row-selection-11",
      title: "Row Selection",
      blocks: [
        {
          kind: "text",
          value:
            "Next, we're going to add row selection to our table.\n\n### Update column definitions"
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "\"use client\"\n\nimport { createColumnHelper } from \"@tanstack/react-table\"\n\nimport { Badge } from \"@/components/ui/badge\"\nimport { Checkbox } from \"@/components/ui/checkbox\"\n\nexport const columns = [\n  columnHelper.display({\n    id: \"select\",\n    header: ({ table }) => (\n      <Checkbox\n        checked={table.getIsAllPageRowsSelected()}\n        indeterminate={\n          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()\n        }\n        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}\n        aria-label=\"Select all\"\n      />\n    ),\n    cell: ({ row }) => (\n      <Checkbox\n        checked={row.getIsSelected()}\n        onCheckedChange={(value) => row.toggleSelected(!!value)}\n        aria-label=\"Select row\"\n      />\n    ),\n    enableSorting: false,\n    enableHiding: false,\n  }),\n]"
        },
        {
          kind: "text",
          value: "### Update `<DataTable>`"
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "export function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const [sorting, setSorting] = React.useState<SortingState>([])\n  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(\n    []\n  )\n  const [columnVisibility, setColumnVisibility] =\n    React.useState<ColumnVisibilityState>({})\n  const [rowSelection, setRowSelection] = React.useState({})\n\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n    onSortingChange: setSorting,\n    onColumnFiltersChange: setColumnFilters,\n    onColumnVisibilityChange: setColumnVisibility,\n    onRowSelectionChange: setRowSelection,\n    state: {\n      sorting,\n      columnFilters,\n      columnVisibility,\n      rowSelection,\n    },\n  })\n\n  return (\n    <div>\n      <div className=\"overflow-hidden rounded-md border\">\n        <Table />\n      </div>\n    </div>\n  )\n}"
        },
        {
          kind: "text",
          value:
            "This adds a checkbox to each row and a checkbox in the header to select all rows.\n\n### Show selected rows\n\nYou can show the number of selected rows using the `table.getFilteredSelectedRowModel()` API."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<div className=\"flex-1 text-sm text-muted-foreground\">\n  {table.getFilteredSelectedRowModel().rows.length} of{\" \"}\n  {table.getFilteredRowModel().rows.length} row(s) selected.\n</div>"
        }
      ]
    },
    {
      id: "guide-reusable-components-12",
      title: "Reusable Components",
      blocks: [
        {
          kind: "text",
          value: ""
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "export const columns = [\n  columnHelper.accessor(\"email\", {\n    header: ({ column }) => (\n      <DataTableColumnHeader column={column} title=\"Email\" />\n    ),\n  }),\n]"
        },
        {
          kind: "text",
          value:
            "### Pagination\n\nAdd pagination controls to your table including page size and selection count."
        },
        {
          kind: "code",
          language: "tsx",
          value: "<DataTablePagination table={table} />"
        },
        {
          kind: "text",
          value: "### Column toggle\n\nA component to toggle column visibility."
        },
        {
          kind: "code",
          language: "tsx",
          value: "<DataTableViewOptions table={table} />"
        }
      ]
    }
  ],
  direction: [
    {
      id: "guide-usedirection-3",
      title: "useDirection",
      blocks: [
        {
          kind: "text",
          value:
            "The `useDirection` hook is used to get the current direction of the application."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "import { useDirection } from \"@/components/ui/direction\"\n\nfunction MyComponent() {\n  const direction = useDirection()\n  return <div>Current direction: {direction}</div>\n}"
        }
      ]
    },
    {
      id: "guide-document-direction",
      title: "Document direction",
      blocks: [
        {
          kind: "text",
          value:
            "Match the document dir attribute to DirectionProvider direction so native text and portaled controls share the same direction. Set direction at the app boundary; the RTL examples demonstrate both the provider and language changes."
        }
      ]
    }
  ],
  drawer: [
    {
      id: "guide-custom-sizes-4",
      title: "Custom Sizes",
      blocks: [
        {
          kind: "text",
          value:
            "A vertical drawer sizes itself to its content and is capped at `calc(100dvh - 6rem)` by default. A side drawer spans `75%` of the viewport width, or `24rem` on larger screens.\n\nTo customize the height of a vertical drawer, use the `h-*` and `max-h-*` utilities on `DrawerContent`."
        },
        {
          kind: "code",
          language: "tsx",
          value: "<DrawerContent className=\"h-[50vh]\">"
        },
        {
          kind: "text",
          value:
            "To customize the width of a side drawer, use the `w-*` and `max-w-*` utilities on `DrawerContent`."
        },
        {
          kind: "code",
          language: "tsx",
          value: "<DrawerContent className=\"w-96\">"
        },
        {
          kind: "text",
          value:
            "When the same component renders in multiple directions, scope an override to one axis using the `data-[swipe-axis=*]` variants."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<DrawerContent className=\"data-[swipe-axis=y]:max-h-[50vh] data-[swipe-axis=x]:w-96\">"
        },
        {
          kind: "text",
          value:
            "To make a region of the drawer scrollable, make the scroll container a flex item. Avoid `h-full`, which does not resolve inside a content-sized drawer."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<DrawerContent>\n  <DrawerHeader>...</DrawerHeader>\n  <div className=\"flex-1 overflow-y-auto p-4\">{/* Scrollable content */}</div>\n  <DrawerFooter>...</DrawerFooter>\n</DrawerContent>"
        }
      ]
    },
    {
      id: "guide-styling-5",
      title: "Styling",
      blocks: [
        {
          kind: "text",
          value:
            "The drawer exposes CSS variables for style-level customization. Set the sizing variables on `DrawerContent`. Set the overlay variable on `[data-slot=drawer-overlay]` in your CSS.\n\n| Variable                       | Default                | Description                                                             |\n| ------------------------------ | ---------------------- | ----------------------------------------------------------------------- |\n| `--drawer-inset`               | `0px`                  | Floats the drawer from the viewport edges.                              |\n| `--drawer-bleed-background`    | `var(--color-popover)` | Fills the gap behind the drawer on swipe overshoot.                     |\n| `--drawer-overlay-min-opacity` | `0`                    | Minimum overlay opacity. Defaults to `0.5` when snap points are active. |\n\nThe drawer also sets data attributes you can target with variants such as `data-[swipe-direction=down]:` on `DrawerContent`, or `group-data-[swipe-axis=y]/drawer-popup:` on its descendants.\n\n| Attribute                 | Values                        | Set when                              |\n| ------------------------- | ----------------------------- | ------------------------------------- |\n| `data-swipe-direction`    | `up`, `right`, `down`, `left` | Always.                               |\n| `data-swipe-axis`         | `x`, `y`                      | Always.                               |\n| `data-snap-points`        | Present                       | The drawer has snap points.           |\n| `data-expanded`           | Present                       | The drawer is at the full snap point. |\n| `data-swiping`            | Present                       | A swipe is in progress.               |\n| `data-nested-drawer-open` | Present                       | A nested drawer is open on top.       |"
        }
      ]
    }
  ],
  "hover-card": [
    {
      id: "guide-trigger-delays-3",
      title: "Trigger Delays",
      blocks: [
        {
          kind: "text",
          value:
            "Use `delay` and `closeDelay` on the trigger to control when the card opens and\ncloses."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<HoverCard>\n  <HoverCardTrigger delay={100} closeDelay={200}>\n    Hover\n  </HoverCardTrigger>\n  <HoverCardContent>Content</HoverCardContent>\n</HoverCard>"
        }
      ]
    }
  ],
  "navigation-menu": [
    {
      id: "guide-link-component-3",
      title: "Link Component",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `render` prop to compose a custom link component such as Next.js `Link`."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "import Link from \"next/link\"\n\nimport {\n  NavigationMenuItem,\n  NavigationMenuLink,\n  navigationMenuTriggerStyle,\n} from \"@/components/ui/navigation-menu\"\n\nexport function NavigationMenuDemo() {\n  return (\n    <NavigationMenuItem>\n      <NavigationMenuLink\n        render={<Link href=\"/docs\" />}\n        className={navigationMenuTriggerStyle()}\n      >\n        Documentation\n      </NavigationMenuLink>\n    </NavigationMenuItem>\n  )\n}"
        }
      ]
    }
  ],
  attachment: [
    {
      id: "guide-action-labels",
      title: "Action labels",
      blocks: [
        {
          kind: "text",
          value:
            "Give icon-only AttachmentAction buttons an aria-label. Keep the full-card AttachmentTrigger separate from other actions so each control remains keyboard reachable."
        }
      ]
    }
  ],
  bubble: [
    {
      id: "guide-conversation-semantics",
      title: "Conversation semantics",
      blocks: [
        {
          kind: "text",
          value:
            "Place conversation roles and live-region semantics on the surrounding transcript. Label each reaction button and leave vertical space for the overlapping reactions row. BubbleContent can render a native link or button; keep its role and accessible name."
        }
      ]
    }
  ],
  "button-group": [
    {
      id: "guide-group-semantics",
      title: "Group semantics",
      blocks: [
        {
          kind: "text",
          value:
            "Label the group with aria-label or aria-labelledby. Tab moves between action buttons; use ToggleGroup when the controls select a persistent state."
        }
      ]
    }
  ],
  field: [
    {
      id: "guide-validation-and-grouping",
      title: "Validation and grouping",
      blocks: [
        {
          kind: "text",
          value:
            "Use FieldSet with FieldLegend for related controls. Place FieldDescription and FieldError with the labelled control. Mark the control aria-invalid and the Field wrapper data-invalid together. FieldContent groups a label and description for horizontal layouts."
        }
      ]
    }
  ],
  item: [
    {
      id: "guide-content-and-controls",
      title: "Content and controls",
      blocks: [
        {
          kind: "text",
          value:
            "Use Item for content with optional actions. Use Field for a labelled form control, helper text and validation."
        }
      ]
    }
  ],
  marker: [
    {
      id: "guide-roles-and-labels",
      title: "Roles and labels",
      blocks: [
        {
          kind: "text",
          value:
            "Marker is presentational by default. Use role=\"status\" for progress updates and role=\"separator\" for a meaningful divider. MarkerIcon is decorative; give interactive links or buttons their own accessible names."
        }
      ]
    }
  ],
  message: [
    {
      id: "guide-transcript-and-actions",
      title: "Transcript and actions",
      blocks: [
        {
          kind: "text",
          value:
            "Message supplies row layout; Bubble supplies the visible message surface. The surrounding transcript owns live announcements. Label icon-only footer actions and keep links or buttons keyboard reachable."
        }
      ]
    }
  ],
  questionnaire: [
    {
      id: "guide-items-and-submission",
      title: "Items and submission",
      blocks: [
        {
          kind: "text",
          value:
            "Pass the item collection to Questionnaire and render parts from the same data so server-rendered progress, answers and shortcuts agree. QuestionnaireItem is a fieldset and QuestionnaireTitle its legend. The app owns cancellation, branching, persistence and submission; onSubmit receives a native form event and FormData."
        }
      ]
    }
  ],
  "message-scroller": [
    {
      id: "guide-provider-and-rows",
      title: "Provider and rows",
      blocks: [
        {
          kind: "text",
          value:
            "Wrap the viewport, content, every direct row and scroll controls in MessageScrollerProvider. Give the scroller a height-constrained parent and stable messageId values; mark turn starts with scrollAnchor. The transcript is a named keyboard-focusable region. The app supplies transport and any virtualization."
        }
      ]
    }
  ],
  pagination: [
    {
      id: "guide-routing",
      title: "Routing",
      blocks: [
        {
          kind: "text",
          value:
            "PaginationLink renders a native anchor. Use render with your router’s link component to preserve navigation semantics; provide text labels for previous and next controls in the current language."
        }
      ]
    }
  ],
  table: [
    {
      id: "guide-data-tables",
      title: "Data tables",
      blocks: [
        {
          kind: "text",
          value:
            "For sorting, filtering, selection and pagination, compose Table with TanStack Table. See the [Data Table recipe](/patterns/data-table); the app owns fetching and mutations."
        }
      ]
    }
  ],
  typography: [
    {
      id: "guide-native-elements",
      title: "Native elements",
      blocks: [
        {
          kind: "text",
          value:
            "Examples use native headings, paragraphs, blockquotes, lists and tables with semantic utilities. Typography is optional; the theme supplies Pretendard and the monospace font."
        }
      ]
    }
  ],
  toast: [
    {
      id: "guide-provider-and-actions",
      title: "Provider and actions",
      blocks: [
        {
          kind: "text",
          value:
            "Mount one ToastProvider and ToastViewport for the toast manager used by your controls. Pass native button props through actionProps for actions. Promise work and side effects belong to the app; the Promise example shows one toast progressing through loading, success and error."
        }
      ]
    }
  ],
  sidebar: [
    {
      id: "guide-provider-and-width",
      title: "Provider and width",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarProvider` component is used to provide the sidebar context to the `Sidebar` component. You should always wrap your application in a `SidebarProvider` component.\n\n\n\n### Width\n\nIf you have a single sidebar in your application, you can use the `SIDEBAR_WIDTH` and `SIDEBAR_WIDTH_MOBILE` variables in `sidebar.tsx` to set the width of the sidebar."
        },
        {
          kind: "code",
          language: "tsx",
          value: "const SIDEBAR_WIDTH = \"16rem\"\nconst SIDEBAR_WIDTH_MOBILE = \"18rem\""
        },
        {
          kind: "text",
          value:
            "For multiple sidebars in your application, you can use the `--sidebar-width` and `--sidebar-width-mobile` CSS variables in the `style` prop."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarProvider\n  style={\n    {\n      \"--sidebar-width\": \"20rem\",\n      \"--sidebar-width-mobile\": \"20rem\",\n    } as React.CSSProperties\n  }\n>\n  <Sidebar />\n</SidebarProvider>"
        },
        {
          kind: "text",
          value:
            "### Keyboard Shortcut\n\nTo trigger the sidebar, you use the `cmd+b` keyboard shortcut on Mac and `ctrl+b` on Windows."
        },
        {
          kind: "code",
          language: "tsx",
          value: "const SIDEBAR_KEYBOARD_SHORTCUT = \"b\""
        }
      ]
    },
    {
      id: "guide-state-and-controls",
      title: "State and controls",
      blocks: [
        {
          kind: "text",
          value: "The `useSidebar` hook is used to control the sidebar."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "import { useSidebar } from \"@/components/ui/sidebar\"\n\nexport function AppSidebar() {\n  const {\n    state,\n    open,\n    setOpen,\n    openMobile,\n    setOpenMobile,\n    isMobile,\n    toggleSidebar,\n  } = useSidebar()\n}"
        },
        {
          kind: "text",
          value: "Use the `open` and `onOpenChange` props to control the sidebar."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "export function AppSidebar() {\n  const [open, setOpen] = React.useState(false)\n\n  return (\n    <SidebarProvider open={open} onOpenChange={setOpen}>\n      <Sidebar />\n    </SidebarProvider>\n  )\n}"
        },
        {
          kind: "text",
          value:
            "Use the `SidebarTrigger` component to render a button that toggles the sidebar."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "import { useSidebar } from \"@/components/ui/sidebar\"\n\nexport function CustomTrigger() {\n  const { toggleSidebar } = useSidebar()\n\n  return <button onClick={toggleSidebar}>Toggle Sidebar</button>\n}"
        },
        {
          kind: "text",
          value:
            "The `SidebarRail` component is used to render a rail within a `Sidebar`. This rail can be used to toggle the sidebar."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Sidebar>\n  <SidebarHeader />\n  <SidebarContent>\n    <SidebarGroup />\n  </SidebarContent>\n  <SidebarFooter />\n  <SidebarRail />\n</Sidebar>"
        }
      ]
    },
    {
      id: "guide-layout-and-groups",
      title: "Layout and groups",
      blocks: [
        {
          kind: "text",
          value: "The main `Sidebar` component used to render a collapsible sidebar.\n\n"
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarProvider>\n  <Sidebar variant=\"inset\" />\n  <SidebarInset>\n    <main>{children}</main>\n  </SidebarInset>\n</SidebarProvider>"
        },
        {
          kind: "text",
          value: "Use the `SidebarHeader` component to add a sticky header to the sidebar."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Sidebar>\n  <SidebarHeader>\n    <SidebarMenu>\n      <SidebarMenuItem>\n        <DropdownMenu>\n          <DropdownMenuTrigger render={<SidebarMenuButton />}>\n            Select Workspace\n            <ChevronDown className=\"ml-auto\" />\n          </DropdownMenuTrigger>\n          <DropdownMenuContent>\n            <DropdownMenuItem>\n              <span>Acme Inc</span>\n            </DropdownMenuItem>\n          </DropdownMenuContent>\n        </DropdownMenu>\n      </SidebarMenuItem>\n    </SidebarMenu>\n  </SidebarHeader>\n</Sidebar>"
        },
        {
          kind: "text",
          value: "Use the `SidebarFooter` component to add a sticky footer to the sidebar."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Sidebar>\n  <SidebarFooter>\n    <SidebarMenu>\n      <SidebarMenuItem>\n        <SidebarMenuButton>\n          <User2 /> Username\n        </SidebarMenuButton>\n      </SidebarMenuItem>\n    </SidebarMenu>\n  </SidebarFooter>\n</Sidebar>"
        },
        {
          kind: "text",
          value:
            "The `SidebarContent` component is used to wrap the content of the sidebar. This is where you add your `SidebarGroup` components. It is scrollable."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Sidebar>\n  <SidebarContent>\n    <SidebarGroup />\n    <SidebarGroup />\n  </SidebarContent>\n</Sidebar>"
        },
        {
          kind: "text",
          value:
            "Use the `SidebarGroup` component to create a section within the sidebar.\n\nA `SidebarGroup` has a `SidebarGroupLabel`, a `SidebarGroupContent` and an optional `SidebarGroupAction`."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarGroup>\n  <SidebarGroupLabel>Application</SidebarGroupLabel>\n  <SidebarGroupAction>\n    <Plus /> <span className=\"sr-only\">Add Project</span>\n  </SidebarGroupAction>\n  <SidebarGroupContent></SidebarGroupContent>\n</SidebarGroup>"
        },
        {
          kind: "text",
          value: "To make a `SidebarGroup` collapsible, wrap it in a `Collapsible`."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Collapsible defaultOpen className=\"group/collapsible\">\n  <SidebarGroup>\n    <SidebarGroupLabel render={<CollapsibleTrigger />}>\n      Help\n      <ChevronDown className=\"ml-auto  group-data-open/collapsible:rotate-180\" />\n    </SidebarGroupLabel>\n    <CollapsibleContent>\n      <SidebarGroupContent />\n    </CollapsibleContent>\n  </SidebarGroup>\n</Collapsible>"
        }
      ]
    },
    {
      id: "guide-menu-composition",
      title: "Menu composition",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarMenu` component is used for building a menu within a `SidebarGroup`."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenu>\n  {projects.map((project) => (\n    <SidebarMenuItem key={project.name}>\n      <SidebarMenuButton render={<a href={project.url} />}>\n        <project.icon />\n        <span>{project.name}</span>\n      </SidebarMenuButton>\n    </SidebarMenuItem>\n  ))}\n</SidebarMenu>"
        },
        {
          kind: "text",
          value:
            "The `SidebarMenuButton` component is used to render a menu button within a `SidebarMenuItem`.\n\nBy default, the `SidebarMenuButton` renders a button but you can use the `render` prop to render a different component such as a `Link` or an `a` tag.\n\nUse the `isActive` prop to mark a menu item as active."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenuButton render={<a href=\"#\" />} isActive>\n  Home\n</SidebarMenuButton>"
        },
        {
          kind: "text",
          value:
            "The `SidebarMenuAction` component is used to render a menu action within a `SidebarMenuItem`."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenuItem>\n  <SidebarMenuButton render={<a href=\"#\" />}>\n    <Home />\n    <span>Home</span>\n  </SidebarMenuButton>\n  <SidebarMenuAction>\n    <Plus /> <span className=\"sr-only\">Add Project</span>\n  </SidebarMenuAction>\n</SidebarMenuItem>"
        },
        {
          kind: "text",
          value:
            "The `SidebarMenuSub` component is used to render a submenu within a `SidebarMenu`."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenuItem>\n  <SidebarMenuButton />\n  <SidebarMenuSub>\n    <SidebarMenuSubItem>\n      <SidebarMenuSubButton />\n    </SidebarMenuSubItem>\n  </SidebarMenuSub>\n</SidebarMenuItem>"
        },
        {
          kind: "text",
          value:
            "The `SidebarMenuBadge` component is used to render a badge within a `SidebarMenuItem`."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenuItem>\n  <SidebarMenuButton />\n  <SidebarMenuBadge>24</SidebarMenuBadge>\n</SidebarMenuItem>"
        },
        {
          kind: "text",
          value:
            "The `SidebarMenuSkeleton` component is used to render a skeleton for a `SidebarMenu`."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenu>\n  {Array.from({ length: 5 }).map((_, index) => (\n    <SidebarMenuItem key={index}>\n      <SidebarMenuSkeleton />\n    </SidebarMenuItem>\n  ))}\n</SidebarMenu>"
        }
      ]
    },
    {
      id: "guide-state-styling",
      title: "State styling",
      blocks: [
        {
          kind: "text",
          value: "Here are some tips for styling the sidebar based on different states."
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Sidebar collapsible=\"icon\">\n  <SidebarContent>\n    <SidebarGroup className=\"group-data-[collapsible=icon]:hidden\" />\n  </SidebarContent>\n</Sidebar>"
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenuItem>\n  <SidebarMenuButton />\n  <SidebarMenuAction className=\"peer-data-[active=true]/menu-button:opacity-100\" />\n</SidebarMenuItem>"
        }
      ]
    }
  ]
};
