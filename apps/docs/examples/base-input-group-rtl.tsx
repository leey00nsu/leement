"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { Search } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../../registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "../../../registry/ui/input-group";
import { Spinner } from "../../../registry/ui/spinner";

const translations: Translations<{
  placeholder: string;
  results: string;
  searching: string;
  saving: string;
  savingChanges: string;
  textareaLabel: string;
  textareaPlaceholder: string;
  characterCount: string;
  post: string;
  textareaDescription: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      placeholder: "Search...",
      results: "12 results",
      searching: "Searching...",
      saving: "Saving...",
      savingChanges: "Saving changes...",
      textareaLabel: "Textarea",
      textareaPlaceholder: "Write a comment...",
      characterCount: "0/280",
      post: "Post",
      textareaDescription: "Footer positioned below the textarea.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      placeholder: "بحث...",
      results: "١٢ نتيجة",
      searching: "جاري البحث...",
      saving: "جاري الحفظ...",
      savingChanges: "جاري حفظ التغييرات...",
      textareaLabel: "منطقة النص",
      textareaPlaceholder: "اكتب تعليقًا...",
      characterCount: "٠/٢٨٠",
      post: "نشر",
      textareaDescription: "تذييل موضع أسفل منطقة النص.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      placeholder: "חפש...",
      results: "12 תוצאות",
      searching: "מחפש...",
      saving: "שומר...",
      savingChanges: "שומר שינויים...",
      textareaLabel: "אזור טקסט",
      textareaPlaceholder: "כתוב תגובה...",
      characterCount: "0/280",
      post: "פרסם",
      textareaDescription: "כותרת תחתונה ממוקמת מתחת לאזור הטקסט.",
    },
  },
};

function InputGroupRtl() {
  const { t } = useTranslation(translations, "ar");

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup className="max-w-xs">
        <InputGroupInput placeholder={t.placeholder} />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">{t.results}</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder={t.searching} />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder={t.savingChanges} />
        <InputGroupAddon align="inline-end">
          <InputGroupText>{t.saving}</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <FieldGroup className="max-w-sm">
        <Field>
          <FieldLabel htmlFor="rtl-textarea">{t.textareaLabel}</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              id="rtl-textarea"
              placeholder={t.textareaPlaceholder}
            />
            <InputGroupAddon align="block-end">
              <InputGroupText>{t.characterCount}</InputGroupText>
              <InputGroupButton variant="default" size="sm" className="ms-auto">
                {t.post}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>{t.textareaDescription}</FieldDescription>
        </Field>
      </FieldGroup>
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
          <InputGroupRtl />
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
