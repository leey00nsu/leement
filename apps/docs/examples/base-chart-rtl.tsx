"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../../registry/ui/chart";

const translations: Translations<{
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  desktop: string;
  mobile: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      desktop: "Desktop",
      mobile: "Mobile",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      january: "يناير",
      february: "فبراير",
      march: "مارس",
      april: "أبريل",
      may: "مايو",
      june: "يونيو",
      desktop: "سطح المكتب",
      mobile: "الجوال",
    },
  },
  he: {
    dir: "rtl",
    values: {
      january: "ינואר",
      february: "פברואר",
      march: "מרץ",
      april: "אפריל",
      may: "מאי",
      june: "יוני",
      desktop: "מחשב",
      mobile: "נייד",
    },
  },
};

const chartData = [
  { month: "january", desktop: 186, mobile: 80 },
  { month: "february", desktop: 305, mobile: 200 },
  { month: "march", desktop: 237, mobile: 120 },
  { month: "april", desktop: 73, mobile: 190 },
  { month: "may", desktop: 209, mobile: 130 },
  { month: "june", desktop: 214, mobile: 140 },
];

function ChartRtl() {
  const { t, dir } = useTranslation(translations, "ar");

  const chartConfig = {
    desktop: {
      label: t.desktop,
      color: "var(--chart-2)",
    },
    mobile: {
      label: t.mobile,
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid
          vertical={false}
          orientation={dir === "rtl" ? "right" : "left"}
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            (t[value as keyof typeof t] as string).slice(0, 3)
          }
          reversed={dir === "rtl"}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelFormatter={(value) => t[value as keyof typeof t] as string}
            />
          }
          labelClassName="w-32"
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          isAnimationActive={false}
          dataKey="desktop"
          fill="var(--color-desktop)"
          radius={4}
        />
        <Bar
          isAnimationActive={false}
          dataKey="mobile"
          fill="var(--color-mobile)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
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
          <ChartRtl />
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
