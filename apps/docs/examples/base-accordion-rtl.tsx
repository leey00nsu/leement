"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../registry/ui/accordion";

const translations: Translations<{
  question1: string;
  answer1: string;
  question2: string;
  answer2: string;
  question3: string;
  answer3: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      question1: "How do I reset my password?",
      answer1:
        "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password.",
      question2: "Can I change my subscription plan?",
      answer2:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
      question3: "What payment methods do you accept?",
      answer3:
        "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      question1: "كيف يمكنني إعادة تعيين كلمة المرور؟",
      answer1:
        "انقر على 'نسيت كلمة المرور' في صفحة تسجيل الدخول، أدخل عنوان بريدك الإلكتروني، وسنرسل لك رابطًا لإعادة تعيين كلمة المرور. سينتهي صلاحية الرابط خلال 24 ساعة.",
      question2: "هل يمكنني تغيير خطة الاشتراك الخاصة بي؟",
      answer2:
        "نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت من إعدادات حسابك. ستظهر التغييرات في دورة الفوترة التالية.",
      question3: "ما هي طرق الدفع التي تقبلونها؟",
      answer3:
        "نقبل جميع بطاقات الائتمان الرئيسية و PayPal والتحويلات المصرفية. تتم معالجة جميع المدفوعات بأمان من خلال شركاء الدفع لدينا.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      question1: "איך אני מאפס את הסיסמה שלי?",
      answer1:
        "לחץ על 'שכחתי סיסמה' בעמוד ההתחברות, הזן את כתובת האימייל שלך, ונשלח לך קישור לאיפוס הסיסמה. הקישור יפוג תוך 24 שעות.",
      question2: "האם אני יכול לשנות את תוכנית המנוי שלי?",
      answer2:
        "כן, אתה יכול לשדרג או להוריד את התוכנית שלך בכל עת מההגדרות של החשבון שלך. השינויים יבואו לידי ביטוי במחזור החיוב הבא.",
      question3: "אילו אמצעי תשלום אתם מקבלים?",
      answer3: "אנו מקבלים כרטיסי אשראי, PayPal והעברות בנקאיות.",
    },
  },
};

const items = [
  {
    value: "item-1",
    questionKey: "question1" as const,
    answerKey: "answer1" as const,
  },
  {
    value: "item-2",
    questionKey: "question2" as const,
    answerKey: "answer2" as const,
  },
  {
    value: "item-3",
    questionKey: "question3" as const,
    answerKey: "answer3" as const,
  },
] as const;

function AccordionRtl() {
  const { t } = useTranslation(translations, "ar");

  return (
    <Accordion defaultValue={["item-1"]} className="max-w-md">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{t[item.questionKey]}</AccordionTrigger>
          <AccordionContent>{t[item.answerKey]}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
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
          <AccordionRtl />
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
