"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../../../registry/ui/menubar";

const translations: Translations<{
  file: string;
  newTab: string;
  newWindow: string;
  newIncognitoWindow: string;
  share: string;
  emailLink: string;
  messages: string;
  notes: string;
  print: string;
  edit: string;
  undo: string;
  redo: string;
  find: string;
  searchTheWeb: string;
  findItem: string;
  findNext: string;
  findPrevious: string;
  cut: string;
  copy: string;
  paste: string;
  view: string;
  bookmarksBar: string;
  fullUrls: string;
  reload: string;
  forceReload: string;
  toggleFullscreen: string;
  hideSidebar: string;
  profiles: string;
  andy: string;
  benoit: string;
  luis: string;
  editProfile: string;
  addProfile: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      file: "File",
      newTab: "New Tab",
      newWindow: "New Window",
      newIncognitoWindow: "New Incognito Window",
      share: "Share",
      emailLink: "Email link",
      messages: "Messages",
      notes: "Notes",
      print: "Print...",
      edit: "Edit",
      undo: "Undo",
      redo: "Redo",
      find: "Find",
      searchTheWeb: "Search the web",
      findItem: "Find...",
      findNext: "Find Next",
      findPrevious: "Find Previous",
      cut: "Cut",
      copy: "Copy",
      paste: "Paste",
      view: "View",
      bookmarksBar: "Bookmarks Bar",
      fullUrls: "Full URLs",
      reload: "Reload",
      forceReload: "Force Reload",
      toggleFullscreen: "Toggle Fullscreen",
      hideSidebar: "Hide Sidebar",
      profiles: "Profiles",
      andy: "Andy",
      benoit: "Benoit",
      luis: "Luis",
      editProfile: "Edit...",
      addProfile: "Add Profile...",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      file: "ملف",
      newTab: "علامة تبويب جديدة",
      newWindow: "نافذة جديدة",
      newIncognitoWindow: "نافذة التصفح المتخفي الجديدة",
      share: "مشاركة",
      emailLink: "رابط البريد الإلكتروني",
      messages: "الرسائل",
      notes: "الملاحظات",
      print: "طباعة...",
      edit: "تعديل",
      undo: "تراجع",
      redo: "إعادة",
      find: "بحث",
      searchTheWeb: "البحث على الويب",
      findItem: "بحث...",
      findNext: "البحث التالي",
      findPrevious: "البحث السابق",
      cut: "قص",
      copy: "نسخ",
      paste: "لصق",
      view: "عرض",
      bookmarksBar: "شريط الإشارات المرجعية",
      fullUrls: "عناوين URL الكاملة",
      reload: "إعادة تحميل",
      forceReload: "إعادة تحميل قسري",
      toggleFullscreen: "تبديل وضع ملء الشاشة",
      hideSidebar: "إخفاء الشريط الجانبي",
      profiles: "الملفات الشخصية",
      andy: "Andy",
      benoit: "Benoit",
      luis: "Luis",
      editProfile: "تعديل...",
      addProfile: "إضافة ملف شخصي...",
    },
  },
  he: {
    dir: "rtl",
    values: {
      file: "קובץ",
      newTab: "כרטיסייה חדשה",
      newWindow: "חלון חדש",
      newIncognitoWindow: "חלון גלישה בסתר חדש",
      share: "שתף",
      emailLink: "קישור אימייל",
      messages: "הודעות",
      notes: "הערות",
      print: "הדפס...",
      edit: "ערוך",
      undo: "בטל",
      redo: "בצע שוב",
      find: "מצא",
      searchTheWeb: "חפש באינטרנט",
      findItem: "מצא...",
      findNext: "מצא הבא",
      findPrevious: "מצא הקודם",
      cut: "גזור",
      copy: "העתק",
      paste: "הדבק",
      view: "תצוגה",
      bookmarksBar: "סרגל סימניות",
      fullUrls: "כתובות URL מלאות",
      reload: "רענן",
      forceReload: "רענן בכוח",
      toggleFullscreen: "החלף מסך מלא",
      hideSidebar: "הסתר סרגל צד",
      profiles: "פרופילים",
      andy: "Andy",
      benoit: "Benoit",
      luis: "Luis",
      editProfile: "ערוך...",
      addProfile: "הוסף פרופיל...",
    },
  },
};

function MenubarRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");
  const [profile, setProfile] = React.useState("benoit");

  return (
    <Menubar className="w-72" dir={dir}>
      <MenubarMenu>
        <MenubarTrigger>{t.file}</MenubarTrigger>
        <MenubarContent dir={dir} align={dir === "rtl" ? "end" : "start"}>
          <MenubarGroup>
            <MenubarItem>
              {t.newTab} <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              {t.newWindow} <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>{t.newIncognitoWindow}</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>{t.share}</MenubarSubTrigger>
              <MenubarSubContent
                dir={dir}
                data-lang={dir === "rtl" ? language : undefined}
              >
                <MenubarGroup>
                  <MenubarItem>{t.emailLink}</MenubarItem>
                  <MenubarItem>{t.messages}</MenubarItem>
                  <MenubarItem>{t.notes}</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              {t.print} <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>{t.edit}</MenubarTrigger>
        <MenubarContent
          dir={dir}
          align={dir === "rtl" ? "end" : "start"}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <MenubarGroup>
            <MenubarItem>
              {t.undo} <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              {t.redo} <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>{t.find}</MenubarSubTrigger>
              <MenubarSubContent
                dir={dir}
                data-lang={dir === "rtl" ? language : undefined}
              >
                <MenubarGroup>
                  <MenubarItem>{t.searchTheWeb}</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarItem>{t.findItem}</MenubarItem>
                  <MenubarItem>{t.findNext}</MenubarItem>
                  <MenubarItem>{t.findPrevious}</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>{t.cut}</MenubarItem>
            <MenubarItem>{t.copy}</MenubarItem>
            <MenubarItem>{t.paste}</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>{t.view}</MenubarTrigger>
        <MenubarContent
          className="w-44"
          dir={dir}
          align={dir === "rtl" ? "end" : "start"}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <MenubarGroup>
            <MenubarCheckboxItem>{t.bookmarksBar}</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>{t.fullUrls}</MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>
              {t.reload} <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              {t.forceReload} <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>{t.toggleFullscreen}</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>{t.hideSidebar}</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>{t.profiles}</MenubarTrigger>
        <MenubarContent
          dir={dir}
          align={dir === "rtl" ? "end" : "start"}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <MenubarRadioGroup value={profile} onValueChange={setProfile}>
            <MenubarRadioItem value="andy">{t.andy}</MenubarRadioItem>
            <MenubarRadioItem value="benoit">{t.benoit}</MenubarRadioItem>
            <MenubarRadioItem value="Luis">{t.luis}</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>{t.editProfile}</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>{t.addProfile}</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
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
          <MenubarRtl />
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
