"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";

import { Button } from "../../../registry/ui/button";
import { ButtonGroup } from "../../../registry/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../../registry/ui/dropdown-menu";

const translations: Translations<{
  archive: string;
  report: string;
  snooze: string;
  markAsRead: string;
  addToCalendar: string;
  addToList: string;
  labelAs: string;
  personal: string;
  work: string;
  other: string;
  trash: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      archive: "Archive",
      report: "Report",
      snooze: "Snooze",
      markAsRead: "Mark as Read",
      addToCalendar: "Add to Calendar",
      addToList: "Add to List",
      labelAs: "Label As...",
      personal: "Personal",
      work: "Work",
      other: "Other",
      trash: "Trash",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      archive: "أرشفة",
      report: "تقرير",
      snooze: "تأجيل",
      markAsRead: "وضع علامة كمقروء",
      addToCalendar: "إضافة إلى التقويم",
      addToList: "إضافة إلى القائمة",
      labelAs: "تصنيف كـ...",
      personal: "شخصي",
      work: "عمل",
      other: "آخر",
      trash: "سلة المهملات",
    },
  },
  he: {
    dir: "rtl",
    values: {
      archive: "ארכיון",
      report: "דוח",
      snooze: "דחה",
      markAsRead: "סמן כנקרא",
      addToCalendar: "הוסף ליומן",
      addToList: "הוסף לרשימה",
      labelAs: "תייג כ...",
      personal: "אישי",
      work: "עבודה",
      other: "אחר",
      trash: "פח",
    },
  },
};

function ButtonGroupRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");
  const [label, setLabel] = React.useState("personal");

  return (
    <div dir={dir}>
      <ButtonGroup>
        <ButtonGroup className="hidden sm:flex">
          <Button variant="outline" size="icon" aria-label="Go Back">
            <ArrowLeftIcon className="rtl:rotate-180" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">{t.archive}</Button>
          <Button variant="outline">{t.report}</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">{t.snooze}</Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="More Options"
                />
              }
            >
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align={dir === "rtl" ? "start" : "end"}
              data-lang={dir === "rtl" ? language : undefined}
              dir={dir}
              className="w-40"
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <MailCheckIcon />
                  {t.markAsRead}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArchiveIcon />
                  {t.archive}
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <ClockIcon />
                  {t.snooze}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CalendarPlusIcon />
                  {t.addToCalendar}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ListFilterIcon />
                  {t.addToList}
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <TagIcon />
                    {t.labelAs}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent
                    dir={dir}
                    data-lang={dir === "rtl" ? language : undefined}
                  >
                    <DropdownMenuRadioGroup
                      value={label}
                      onValueChange={setLabel}
                    >
                      <DropdownMenuRadioItem value="personal">
                        {t.personal}
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="work">
                        {t.work}
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="other">
                        {t.other}
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  {t.trash}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </ButtonGroup>
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
          <ButtonGroupRtl />
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
