"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { ArrowLeftIcon, ArrowRightIcon, RotateCwIcon } from "lucide-react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../../../registry/ui/context-menu";

const translations: Translations<{
  rightClick: string;
  longPress: string;
  navigation: string;
  back: string;
  forward: string;
  reload: string;
  moreTools: string;
  savePage: string;
  createShortcut: string;
  nameWindow: string;
  developerTools: string;
  delete: string;
  showBookmarks: string;
  showFullUrls: string;
  people: string;
  pedro: string;
  colm: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      rightClick: "Right click here",
      longPress: "Long press here",
      navigation: "Navigation",
      back: "Back",
      forward: "Forward",
      reload: "Reload",
      moreTools: "More Tools",
      savePage: "Save Page...",
      createShortcut: "Create Shortcut...",
      nameWindow: "Name Window...",
      developerTools: "Developer Tools",
      delete: "Delete",
      showBookmarks: "Show Bookmarks",
      showFullUrls: "Show Full URLs",
      people: "People",
      pedro: "Pedro Duarte",
      colm: "Colm Tuite",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      rightClick: "انقر بزر الماوس الأيمن هنا",
      longPress: "اضغط مطولاً هنا",
      navigation: "التنقل",
      back: "رجوع",
      forward: "تقدم",
      reload: "إعادة تحميل",
      moreTools: "المزيد من الأدوات",
      savePage: "حفظ الصفحة...",
      createShortcut: "إنشاء اختصار...",
      nameWindow: "تسمية النافذة...",
      developerTools: "أدوات المطور",
      delete: "حذف",
      showBookmarks: "إظهار الإشارات المرجعية",
      showFullUrls: "إظهار عناوين URL الكاملة",
      people: "الأشخاص",
      pedro: "Pedro Duarte",
      colm: "Colm Tuite",
    },
  },
  he: {
    dir: "rtl",
    values: {
      rightClick: "לחץ לחיצה ימנית כאן",
      longPress: "לחץ לחיצה ארוכה כאן",
      navigation: "ניווט",
      back: "חזור",
      forward: "קדימה",
      reload: "רענן",
      moreTools: "כלים נוספים",
      savePage: "שמור עמוד...",
      createShortcut: "צור קיצור דרך...",
      nameWindow: "שם חלון...",
      developerTools: "כלי מפתח",
      delete: "מחק",
      showBookmarks: "הצג סימניות",
      showFullUrls: "הצג כתובות URL מלאות",
      people: "אנשים",
      pedro: "Pedro Duarte",
      colm: "Colm Tuite",
    },
  },
};

function ContextMenuRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");
  const [people, setPeople] = React.useState("pedro");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">{t.rightClick}</span>
        <span className="hidden pointer-coarse:inline-block">
          {t.longPress}
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent
        className="w-48"
        dir={dir}
        data-lang={dir === "rtl" ? language : undefined}
      >
        <ContextMenuGroup>
          <ContextMenuSub>
            <ContextMenuSubTrigger>{t.navigation}</ContextMenuSubTrigger>
            <ContextMenuSubContent
              className="w-44"
              dir={dir}
              data-lang={dir === "rtl" ? language : undefined}
            >
              <ContextMenuGroup>
                <ContextMenuItem>
                  <ArrowLeftIcon />
                  {t.back}
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  <ArrowRightIcon />
                  {t.forward}
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <RotateCwIcon />
                  {t.reload}
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger>{t.moreTools}</ContextMenuSubTrigger>
            <ContextMenuSubContent
              className="w-44"
              dir={dir}
              data-lang={dir === "rtl" ? language : undefined}
            >
              <ContextMenuGroup>
                <ContextMenuItem>{t.savePage}</ContextMenuItem>
                <ContextMenuItem>{t.createShortcut}</ContextMenuItem>
                <ContextMenuItem>{t.nameWindow}</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>{t.developerTools}</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem variant="destructive">
                  {t.delete}
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked>
            {t.showBookmarks}
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>{t.showFullUrls}</ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuRadioGroup value={people} onValueChange={setPeople}>
            <ContextMenuLabel>{t.people}</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">{t.pedro}</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">{t.colm}</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
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
          <ContextMenuRtl />
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
