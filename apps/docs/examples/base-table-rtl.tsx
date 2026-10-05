"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../registry/ui/table";

const translations: Translations<{
  caption: string;
  invoice: string;
  status: string;
  method: string;
  amount: string;
  paid: string;
  pending: string;
  unpaid: string;
  creditCard: string;
  paypal: string;
  bankTransfer: string;
  total: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      caption: "A list of your recent invoices.",
      invoice: "Invoice",
      status: "Status",
      method: "Method",
      amount: "Amount",
      paid: "Paid",
      pending: "Pending",
      unpaid: "Unpaid",
      creditCard: "Credit Card",
      paypal: "PayPal",
      bankTransfer: "Bank Transfer",
      total: "Total",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      caption: "قائمة بفواتيرك الأخيرة.",
      invoice: "الفاتورة",
      status: "الحالة",
      method: "الطريقة",
      amount: "المبلغ",
      paid: "مدفوع",
      pending: "قيد الانتظار",
      unpaid: "غير مدفوع",
      creditCard: "بطاقة ائتمانية",
      paypal: "PayPal",
      bankTransfer: "تحويل بنكي",
      total: "المجموع",
    },
  },
  he: {
    dir: "rtl",
    values: {
      caption: "רשימת החשבוניות האחרונות שלך.",
      invoice: "חשבונית",
      status: "סטטוס",
      method: "שיטה",
      amount: "סכום",
      paid: "שולם",
      pending: "ממתין",
      unpaid: "לא שולם",
      creditCard: "כרטיס אשראי",
      paypal: "PayPal",
      bankTransfer: "העברה בנקאית",
      total: 'סה"כ',
    },
  },
};

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "paid" as const,
    totalAmount: "$250.00",
    paymentMethod: "creditCard" as const,
  },
  {
    invoice: "INV002",
    paymentStatus: "pending" as const,
    totalAmount: "$150.00",
    paymentMethod: "paypal" as const,
  },
  {
    invoice: "INV003",
    paymentStatus: "unpaid" as const,
    totalAmount: "$350.00",
    paymentMethod: "bankTransfer" as const,
  },
  {
    invoice: "INV004",
    paymentStatus: "paid" as const,
    totalAmount: "$450.00",
    paymentMethod: "creditCard" as const,
  },
  {
    invoice: "INV005",
    paymentStatus: "paid" as const,
    totalAmount: "$550.00",
    paymentMethod: "paypal" as const,
  },
  {
    invoice: "INV006",
    paymentStatus: "pending" as const,
    totalAmount: "$200.00",
    paymentMethod: "bankTransfer" as const,
  },
  {
    invoice: "INV007",
    paymentStatus: "unpaid" as const,
    totalAmount: "$300.00",
    paymentMethod: "creditCard" as const,
  },
];

function TableRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <Table dir={dir}>
      <TableCaption>{t.caption}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">{t.invoice}</TableHead>
          <TableHead>{t.status}</TableHead>
          <TableHead>{t.method}</TableHead>
          <TableHead className="text-right">{t.amount}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{t[invoice.paymentStatus]}</TableCell>
            <TableCell>{t[invoice.paymentMethod]}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>{t.total}</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
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
          <TableRtl />
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
