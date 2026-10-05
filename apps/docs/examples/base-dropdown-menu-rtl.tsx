"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import * as React from "react";

import { CreditCardIcon, SettingsIcon, UserIcon } from "lucide-react";

import { Button } from "../../../registry/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../../registry/ui/dropdown-menu";

const translations: Translations<{
  open: string;
  account: string;
  profile: string;
  billing: string;
  settings: string;
  logout: string;
  team: string;
  inviteUsers: string;
  email: string;
  message: string;
  more: string;
  calendar: string;
  chat: string;
  webhook: string;
  advanced: string;
  newTeam: string;
  view: string;
  statusBar: string;
  activityBar: string;
  panel: string;
  position: string;
  top: string;
  bottom: string;
  right: string;
  left: string;
}> = {
  en: {
    dir: "ltr",
    values: {
      open: "Open",
      account: "Account",
      profile: "Profile",
      billing: "Billing",
      settings: "Settings",
      logout: "Log out",
      team: "Team",
      inviteUsers: "Invite users",
      email: "Email",
      message: "Message",
      more: "More",
      calendar: "Calendar",
      chat: "Chat",
      webhook: "Webhook",
      advanced: "Advanced...",
      newTeam: "New Team",
      view: "View",
      statusBar: "Status Bar",
      activityBar: "Activity Bar",
      panel: "Panel",
      position: "Position",
      top: "Top",
      bottom: "Bottom",
      right: "Right",
      left: "Left",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      open: "افتح القائمة",
      account: "الحساب",
      profile: "الملف الشخصي",
      billing: "الفوترة",
      settings: "الإعدادات",
      logout: "تسجيل الخروج",
      team: "الفريق",
      inviteUsers: "دعوة المستخدمين",
      email: "البريد الإلكتروني",
      message: "رسالة",
      more: "المزيد",
      calendar: "تقويم",
      chat: "دردشة",
      webhook: "خطاف ويب",
      advanced: "متقدم...",
      newTeam: "فريق جديد",
      view: "عرض",
      statusBar: "شريط الحالة",
      activityBar: "شريط النشاط",
      panel: "اللوحة",
      position: "الموضع",
      top: "أعلى",
      bottom: "أسفل",
      right: "يمين",
      left: "يسار",
    },
  },
  he: {
    dir: "rtl",
    values: {
      open: "פתח תפריט",
      account: "חשבון",
      profile: "פרופיל",
      billing: "חיוב",
      settings: "הגדרות",
      logout: "התנתק",
      team: "הצוות",
      inviteUsers: "הזמן משתמשים",
      email: "אימייל",
      message: "הודעה",
      more: "עוד",
      calendar: "יומן",
      chat: "צ'אט",
      webhook: "Webhook",
      advanced: "מתקדם...",
      newTeam: "צוות חדש",
      view: "תצוגה",
      statusBar: "שורת סטטוס",
      activityBar: "שורת פעילות",
      panel: "לוח",
      position: "מיקום",
      top: "למעלה",
      bottom: "למטה",
      right: "ימין",
      left: "שמאל",
    },
  },
};

function DropdownMenuRtl() {
  const { dir, language, t } = useTranslation(translations, "ar");
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {t.open}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={dir === "rtl" ? "end" : "start"}
        dir={dir}
        className="w-36"
        data-lang={dir === "rtl" ? language : undefined}
      >
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>{t.account}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
                dir={dir}
                data-lang={dir === "rtl" ? language : undefined}
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <UserIcon />
                    {t.profile}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCardIcon />
                    {t.billing}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SettingsIcon />
                    {t.settings}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t.team}</DropdownMenuLabel>
          <DropdownMenuItem>{t.team}</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>{t.inviteUsers}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
                dir={dir}
                data-lang={dir === "rtl" ? language : undefined}
              >
                <DropdownMenuItem>{t.email}</DropdownMenuItem>
                <DropdownMenuItem>{t.message}</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>{t.more}</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent
                      dir={dir}
                      data-lang={dir === "rtl" ? language : undefined}
                    >
                      <DropdownMenuItem>{t.calendar}</DropdownMenuItem>
                      <DropdownMenuItem>{t.chat}</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>{t.webhook}</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{t.advanced}</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            {t.newTeam}
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t.view}</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            {t.statusBar}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            {t.activityBar}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            {t.panel}
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t.position}</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">{t.top}</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">
              {t.bottom}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">
              {t.right}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="left">{t.left}</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">{t.logout}</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
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
          <DropdownMenuRtl />
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
