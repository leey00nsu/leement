"use client";
// Profiles are fictional; photographs do not depict actual Leement users.
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../../../registry/ui/avatar";

const translations: Translations<{ moreUsers: string }> = {
  en: {
    dir: "ltr",
    values: {
      moreUsers: "+3",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      moreUsers: "+٣",
    },
  },
  he: {
    dir: "rtl",
    values: {
      moreUsers: "+3",
    },
  },
};

function AvatarRtl() {
  const { dir, t } = useTranslation(translations, "ar");

  return (
    <div
      className="flex flex-row flex-wrap items-center gap-6 md:gap-12"
      dir={dir}
    >
      <Avatar>
        <AvatarImage
          src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg"
          alt="Sample profile: Alex Lee"
          className="grayscale"
        />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg"
          alt="Sample profile: Avery Chen"
        />
        <AvatarFallback>AC</AvatarFallback>
        <AvatarBadge className="bg-[var(--lm-color-status-success-foreground)] " />
      </Avatar>
      <AvatarGroup className="grayscale">
        <Avatar>
          <AvatarImage src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg" alt="Sample profile: Alex Lee" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_640.jpg"
            alt="Sample profile: Morgan Park"
          />
          <AvatarFallback>MP</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg"
            alt="Sample profile: Avery Chen"
          />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>{t.moreUsers}</AvatarGroupCount>
      </AvatarGroup>
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
          <AvatarRtl />
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
