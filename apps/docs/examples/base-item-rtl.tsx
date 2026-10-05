"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "../../../registry/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../../../registry/ui/item";

const translations: Translations<{
  basicItem: string;
  basicItemDesc: string;
  action: string;
  verifiedTitle: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      basicItem: "Basic Item",
      basicItemDesc: "A simple item with title and description.",
      action: "Action",
      verifiedTitle: "Your profile has been verified.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      basicItem: "عنصر أساسي",
      basicItemDesc: "عنصر بسيط يحتوي على عنوان ووصف.",
      action: "إجراء",
      verifiedTitle: "تم التحقق من ملفك الشخصي.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      basicItem: "פריט בסיסי",
      basicItemDesc: "פריט פשוט עם כותרת ותיאור.",
      action: "פעולה",
      verifiedTitle: "הפרופיל שלך אומת.",
    },
  },
};

function ItemRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div className="flex w-full max-w-md flex-col gap-6" dir={dir}>
      <Item variant="outline" dir={dir}>
        <ItemContent>
          <ItemTitle>{t.basicItem}</ItemTitle>
          <ItemDescription>{t.basicItemDesc}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            {t.action}
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" render={<a href="#" />} dir={dir}>
        <ItemMedia>
          <BadgeCheckIcon className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{t.verifiedTitle}</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Item>
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
          <ItemRtl />
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
