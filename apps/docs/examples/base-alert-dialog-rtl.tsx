"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { BluetoothIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../registry/ui/alert-dialog";
import { Button } from "../../../registry/ui/button";

const translations: Translations<{
  showDialog: string;
  showDialogSm: string;
  title: string;
  description: string;
  cancel: string;
  continue: string;
  smallTitle: string;
  smallDescription: string;
  dontAllow: string;
  allow: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      showDialog: "Show Dialog",
      showDialogSm: "Show Dialog (sm)",
      title: "Are you absolutely sure?",
      description:
        "This action cannot be undone. This will permanently delete your account from our servers.",
      cancel: "Cancel",
      continue: "Continue",
      smallTitle: "Allow accessory to connect?",
      smallDescription:
        "Do you want to allow the USB accessory to connect to this device?",
      dontAllow: "Don't allow",
      allow: "Allow",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      showDialog: "إظهار الحوار",
      showDialogSm: "إظهار الحوار (صغير)",
      title: "هل أنت متأكد تمامًا؟",
      description:
        "لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف حسابك نهائيًا من خوادمنا.",
      cancel: "إلغاء",
      continue: "متابعة",
      smallTitle: "السماح للملحق بالاتصال؟",
      smallDescription: "هل تريد السماح لملحق USB بالاتصال بهذا الجهاز؟",
      dontAllow: "عدم السماح",
      allow: "السماح",
    },
  },
  he: {
    dir: "rtl",
    values: {
      showDialog: "הצג דיאלוג",
      showDialogSm: "הצג דיאלוג (קטן)",
      title: "האם אתה בטוח לחלוטין?",
      description:
        "פעולה זו לא ניתנת לביטול. זה ימחק לצמיתות את החשבון שלך מהשרתים שלנו.",
      cancel: "ביטול",
      continue: "המשך",
      smallTitle: "לאפשר להתקן להתחבר?",
      smallDescription: "האם אתה רוצה לאפשר להתקן USB להתחבר למכשיר זה?",
      dontAllow: "אל תאפשר",
      allow: "אפשר",
    },
  },
};

function AlertDialogRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");

  return (
    <div className="flex gap-4" dir={dir}>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          {t.showDialog}
        </AlertDialogTrigger>
        <AlertDialogContent
          dir={dir}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>{t.title}</AlertDialogTitle>
            <AlertDialogDescription>{t.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.cancel}</AlertDialogCancel>
            <AlertDialogAction>{t.continue}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          {t.showDialogSm}
        </AlertDialogTrigger>
        <AlertDialogContent
          size="sm"
          dir={dir}
          data-lang={dir === "rtl" ? language : undefined}
        >
          <AlertDialogHeader>
            <AlertDialogMedia>
              <BluetoothIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>{t.smallTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.smallDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.dontAllow}</AlertDialogCancel>
            <AlertDialogAction>{t.allow}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
          <AlertDialogRtl />
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
