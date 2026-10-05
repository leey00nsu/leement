"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type VisibilityState,
  type SortingState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "../../../registry/ui/button";
import { Checkbox } from "../../../registry/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../registry/ui/dropdown-menu";
import { Input } from "../../../registry/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../registry/ui/table";

const translations: Translations<{
  filterEmails: string;
  columns: string;
  status: string;
  email: string;
  amount: string;
  actions: string;
  copyPaymentId: string;
  viewCustomer: string;
  viewPaymentDetails: string;
  selectAll: string;
  selectRow: string;
  openMenu: string;
  noResults: string;
  rowsSelected: string;
  rowsSelectedSuffix: string;
  previous: string;
  next: string;
  success: string;
  processing: string;
  failed: string;
  pending: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      filterEmails: "Filter emails...",
      columns: "Columns",
      status: "Status",
      email: "Email",
      amount: "Amount",
      actions: "Actions",
      copyPaymentId: "Copy payment ID",
      viewCustomer: "View customer",
      viewPaymentDetails: "View payment details",
      selectAll: "Select all",
      selectRow: "Select row",
      openMenu: "Open menu",
      noResults: "No results.",
      rowsSelected: "of",
      rowsSelectedSuffix: "row(s) selected.",
      previous: "Previous",
      next: "Next",
      success: "Success",
      processing: "Processing",
      failed: "Failed",
      pending: "Pending",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      filterEmails: "تصفية البريد الإلكتروني...",
      columns: "الأعمدة",
      status: "الحالة",
      email: "البريد الإلكتروني",
      amount: "المبلغ",
      actions: "الإجراءات",
      copyPaymentId: "نسخ معرف الدفع",
      viewCustomer: "عرض العميل",
      viewPaymentDetails: "عرض تفاصيل الدفع",
      selectAll: "تحديد الكل",
      selectRow: "تحديد الصف",
      openMenu: "فتح القائمة",
      noResults: "لا توجد نتائج.",
      rowsSelected: "من",
      rowsSelectedSuffix: "صف(وف) محدد.",
      previous: "السابق",
      next: "التالي",
      success: "ناجح",
      processing: "قيد المعالجة",
      failed: "فشل",
      pending: "قيد الانتظار",
    },
  },
  he: {
    dir: "rtl",
    values: {
      filterEmails: "סנן אימיילים...",
      columns: "עמודות",
      status: "סטטוס",
      email: "אימייל",
      amount: "סכום",
      actions: "פעולות",
      copyPaymentId: "העתק מזהה תשלום",
      viewCustomer: "צפה בלקוח",
      viewPaymentDetails: "צפה בפרטי תשלום",
      selectAll: "בחר הכל",
      selectRow: "בחר שורה",
      openMenu: "פתח תפריט",
      noResults: "אין תוצאות.",
      rowsSelected: "מתוך",
      rowsSelectedSuffix: "שורות נבחרו.",
      previous: "הקודם",
      next: "הבא",
      success: "הצליח",
      processing: "מעבד",
      failed: "נכשל",
      pending: "ממתין",
    },
  },
};

const columnHelper = createColumnHelper<Payment>();

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
];

function DataTableRtl() {
  const { t, dir, language } = useTranslation(translations, "ar");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns = React.useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={
              table.getIsSomePageRowsSelected() &&
              !table.getIsAllPageRowsSelected()
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label={t.selectAll}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label={t.selectRow}
          />
        ),
        enableSorting: false,
        enableHiding: false,
      }),
      columnHelper.accessor("status", {
        header: t.status,
        cell: ({ row }) => {
          const status = row.getValue("status") as string;
          const statusMap: Record<string, string> = {
            success: t.success,
            processing: t.processing,
            failed: t.failed,
            pending: t.pending,
          };
          return <div className="capitalize">{statusMap[status]}</div>;
        },
      }),
      columnHelper.accessor("email", {
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              {t.email}
              <ArrowUpDown />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div className="lowercase">{row.getValue("email")}</div>
        ),
      }),
      columnHelper.accessor("amount", {
        header: () => <div className="text-start">{t.amount}</div>,
        cell: ({ row }) => {
          const amount = Number(row.getValue("amount"));
          const formatted = new Intl.NumberFormat(
            dir === "rtl" ? "ar-SA" : "en-US",
            {
              style: "currency",
              currency: "USD",
            },
          ).format(amount);

          return <div className="text-start font-medium">{formatted}</div>;
        },
      }),
      columnHelper.display({
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const payment = row.original;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon-xs" />}
              >
                <span className="sr-only">{t.openMenu}</span>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={dir === "rtl" ? "start" : "end"}
                data-lang={dir === "rtl" ? language : undefined}
                className="w-40"
              >
                <DropdownMenuGroup>
                  <DropdownMenuLabel>{t.actions}</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(payment.id)}
                  >
                    {t.copyPaymentId}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>{t.viewCustomer}</DropdownMenuItem>
                  <DropdownMenuItem>{t.viewPaymentDetails}</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      }),
    ],
    [t, dir, language],
  );

  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <Input
          placeholder={t.filterEmails}
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline" className="ms-auto" />}
          >
            {t.columns} <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align={dir === "rtl" ? "start" : "end"}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <DropdownMenuGroup>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {t.noResults}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end gap-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} {t.rowsSelected}{" "}
          {table.getFilteredRowModel().rows.length} {t.rowsSelectedSuffix}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {t.previous}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {t.next}
          </Button>
        </div>
      </div>
    </div>
  );
}

import { cn } from "../../../registry/lib/utils";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../registry/ui/select";

export type Language = "en" | "ar" | "he";

export type Direction = "ltr" | "rtl";

export type Translations<
  T extends Record<string, string> = Record<string, string>,
> = Record<
  Language,
  {
    dir: Direction;
    locale?: string;
    values: T;
  }
>;

export const languageOptions = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic (العربية)" },
  { value: "he", label: "Hebrew (עברית)" },
] as const;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  defaultLanguage = "ar",
}: {
  children: React.ReactNode;
  defaultLanguage?: Language;
}) {
  const [language, setLanguage] = React.useState<Language>(defaultLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = React.useContext(LanguageContext);
  return context;
}

export function useTranslation<T extends Record<string, string>>(
  translations: Translations<T>,
  defaultLanguage: Language = "ar",
) {
  const context = useLanguageContext();
  const [localLanguage, setLocalLanguage] =
    React.useState<Language>(defaultLanguage);

  const language = context?.language ?? localLanguage;
  const setLanguage = context?.setLanguage ?? setLocalLanguage;

  const { dir, locale, values: t } = translations[language];
  return { language, setLanguage, dir, locale, t };
}

export interface LanguageSelectorProps {
  value: Language;
  onValueChange: (value: Language) => void;
}

export function LanguageSelector({
  value,
  onValueChange,
  className,
  languages = ["en", "ar", "he"],
}: LanguageSelectorProps & {
  className?: string;
  languages?: Language[];
}) {
  return (
    <Select
      items={languageOptions}
      value={value}
      onValueChange={(value) => onValueChange(value as Language)}
    >
      <SelectTrigger
        size="sm"
        className={cn("w-36", className)}
        dir="ltr"
        data-name="language-selector"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent dir="ltr" className="">
        <SelectGroup>
          {languageOptions
            .filter((option) => languages.includes(option.value as Language))
            .map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

import { DirectionProvider as LeementDirectionProvider } from "../../../registry/ui/direction";

function LocaleExample() {
  const locale = useLanguageContext()!;
  return (
    <div className="w-full min-w-0 space-y-4">
      <LanguageSelector
        value={locale.language}
        onValueChange={locale.setLanguage}
      />
      <LeementDirectionProvider
        direction={locale.language === "en" ? "ltr" : "rtl"}
      >
        <div dir={locale.language === "en" ? "ltr" : "rtl"}>
          <DataTableRtl />
        </div>
      </LeementDirectionProvider>
    </div>
  );
}

export default function Example() {
  return (
    <LanguageProvider>
      <LocaleExample />
    </LanguageProvider>
  );
}
