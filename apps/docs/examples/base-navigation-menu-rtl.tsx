"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../../registry/ui/navigation-menu";

const translations: Translations<{
  gettingStarted: string;
  introduction: string;
  introductionDesc: string;
  installation: string;
  installationDesc: string;
  typography: string;
  typographyDesc: string;
  components: string;
  alertDialog: string;
  alertDialogDesc: string;
  hoverCard: string;
  hoverCardDesc: string;
  progress: string;
  progressDesc: string;
  scrollArea: string;
  scrollAreaDesc: string;
  tabs: string;
  tabsDesc: string;
  tooltip: string;
  tooltipDesc: string;
  withIcon: string;
  backlog: string;
  toDo: string;
  done: string;
  docs: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      gettingStarted: "Getting started",
      introduction: "Introduction",
      introductionDesc: "Re-usable components built with Tailwind CSS.",
      installation: "Installation",
      installationDesc: "How to install dependencies and structure your app.",
      typography: "Typography",
      typographyDesc: "Styles for headings, paragraphs, lists...etc",
      components: "Components",
      alertDialog: "Alert Dialog",
      alertDialogDesc:
        "A modal dialog that interrupts the user with important content and expects a response.",
      hoverCard: "Hover Card",
      hoverCardDesc:
        "For sighted users to preview content available behind a link.",
      progress: "Progress",
      progressDesc:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      scrollArea: "Scroll-area",
      scrollAreaDesc: "Visually or semantically separates content.",
      tabs: "Tabs",
      tabsDesc:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      tooltip: "Tooltip",
      tooltipDesc:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      withIcon: "With Icon",
      backlog: "Backlog",
      toDo: "To Do",
      done: "Done",
      docs: "Docs",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      gettingStarted: "البدء",
      introduction: "مقدمة",
      introductionDesc:
        "مكونات قابلة لإعادة الاستخدام مبنية باستخدام Tailwind CSS.",
      installation: "التثبيت",
      installationDesc: "كيفية تثبيت التبعيات وتنظيم تطبيقك.",
      typography: "الطباعة",
      typographyDesc: "أنماط للعناوين والفقرات والقوائم...إلخ",
      components: "المكونات",
      alertDialog: "حوار التنبيه",
      alertDialogDesc: "حوار نافذة يقطع المستخدم بمحتوى مهم ويتوقع استجابة.",
      hoverCard: "بطاقة التحويم",
      hoverCardDesc: "للمستخدمين المبصرين لمعاينة المحتوى المتاح خلف الرابط.",
      progress: "التقدم",
      progressDesc:
        "يعرض مؤشرًا يوضح تقدم إتمام المهمة، عادةً يتم عرضه كشريط تقدم.",
      scrollArea: "منطقة التمرير",
      scrollAreaDesc: "يفصل المحتوى بصريًا أو دلاليًا.",
      tabs: "التبويبات",
      tabsDesc:
        "مجموعة من أقسام المحتوى المتعددة الطبقات—المعروفة بألواح التبويب—التي يتم عرضها واحدة في كل مرة.",
      tooltip: "تلميح",
      tooltipDesc:
        "نافذة منبثقة تعرض معلومات متعلقة بعنصر عندما يتلقى العنصر التركيز على لوحة المفاتيح أو عند تحويم الماوس فوقه.",
      withIcon: "مع أيقونة",
      backlog: "قائمة الانتظار",
      toDo: "المهام",
      done: "منجز",
      docs: "الوثائق",
    },
  },
  he: {
    dir: "rtl",
    values: {
      gettingStarted: "התחלה",
      introduction: "הקדמה",
      introductionDesc: "רכיבים לשימוש חוזר שנבנו עם Tailwind CSS.",
      installation: "התקנה",
      installationDesc: "כיצד להתקין תלויות ולבנות את האפליקציה שלך.",
      typography: "טיפוגרפיה",
      typographyDesc: "סגנונות לכותרות, פסקאות, רשימות...וכו'",
      components: "רכיבים",
      alertDialog: "דיאלוג התראה",
      alertDialogDesc: "דיאלוג מודאלי שמפריע למשתמש עם תוכן חשוב ומצפה לתגובה.",
      hoverCard: "כרטיס ריחוף",
      hoverCardDesc:
        "למשתמשים רואים כדי להציג תצוגה מקדימה של תוכן זמין מאחורי קישור.",
      progress: "התקדמות",
      progressDesc:
        "מציג אינדיקטור המציג את התקדמות ההשלמה של משימה, בדרך כלל מוצג כסרגל התקדמות.",
      scrollArea: "אזור גלילה",
      scrollAreaDesc: "מפריד תוכן חזותית או סמנטית.",
      tabs: "כרטיסיות",
      tabsDesc:
        "קבוצה של חלקי תוכן מרובדים—המכונים לוחות כרטיסיות—המוצגים אחד בכל פעם.",
      tooltip: "טולטיפ",
      tooltipDesc:
        "חלון קופץ המציג מידע הקשור לאלמנט כאשר האלמנט מקבל מיקוד מקלדת או כאשר העכבר מרחף מעליו.",
      withIcon: "עם אייקון",
      backlog: "רשימת המתנה",
      toDo: "לעשות",
      done: "הושלם",
      docs: "תיעוד",
    },
  },
};

const components = [
  {
    titleKey: "alertDialog" as const,
    descriptionKey: "alertDialogDesc" as const,
    href: "/docs/primitives/alert-dialog",
  },
  {
    titleKey: "hoverCard" as const,
    descriptionKey: "hoverCardDesc" as const,
    href: "/docs/primitives/hover-card",
  },
  {
    titleKey: "progress" as const,
    descriptionKey: "progressDesc" as const,
    href: "/docs/primitives/progress",
  },
  {
    titleKey: "scrollArea" as const,
    descriptionKey: "scrollAreaDesc" as const,
    href: "/docs/primitives/scroll-area",
  },
  {
    titleKey: "tabs" as const,
    descriptionKey: "tabsDesc" as const,
    href: "/docs/primitives/tabs",
  },
  {
    titleKey: "tooltip" as const,
    descriptionKey: "tooltipDesc" as const,
    href: "/docs/primitives/tooltip",
  },
] as const;

function NavigationMenuRtl() {
  const { dir, t, language } = useTranslation(translations, "ar");

  return (
    <NavigationMenu dir={dir} align={dir === "rtl" ? "end" : "start"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t.gettingStarted}</NavigationMenuTrigger>
          <NavigationMenuContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <ul className="w-96">
              <ListItem href="/getting-started" title={t.introduction}>
                {t.introductionDesc}
              </ListItem>
              <ListItem href="/getting-started" title={t.installation}>
                {t.installationDesc}
              </ListItem>
              <ListItem href="/foundations/typography" title={t.typography}>
                {t.typographyDesc}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>{t.components}</NavigationMenuTrigger>
          <NavigationMenuContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.titleKey}
                  title={t[component.titleKey]}
                  href={component.href}
                >
                  {t[component.descriptionKey]}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t.withIcon}</NavigationMenuTrigger>
          <NavigationMenuContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink
                  render={
                    <a href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleAlertIcon />
                  {t.backlog}
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <a href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleDashedIcon />
                  {t.toDo}
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <a href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleCheckIcon />
                  {t.done}
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<a href="/getting-started" />}
            className={navigationMenuTriggerStyle()}
            data-lang={dir === "rtl" ? language : undefined}
          >
            {t.docs}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<a href={href} />}>
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
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
          <NavigationMenuRtl />
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
