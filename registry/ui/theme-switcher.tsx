"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";
type ThemeSwitcherProps = Omit<React.ComponentProps<"button">, "value" | "defaultValue" | "onChange"> & { value?: Theme; defaultValue?: Theme; onValueChange?: (theme: Theme) => void; applyToDocument?: boolean };

function ThemeSwitcher({ value, defaultValue = "light", onValueChange, applyToDocument = true, className, ...props }: ThemeSwitcherProps) {
  const [internal, setInternal] = React.useState<Theme>(defaultValue);
  const theme = value ?? internal;
  React.useEffect(() => { if (applyToDocument) document.documentElement.dataset.lmTheme = theme; }, [applyToDocument, theme]);
  function toggle() { const next = theme === "light" ? "dark" : "light"; if (value === undefined) setInternal(next); onValueChange?.(next); }
  return <button {...props} data-slot="theme-switcher" type="button" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} aria-pressed={theme === "dark"} onClick={toggle} className={cn("inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}>{theme === "light" ? <Moon aria-hidden="true" className="size-4" /> : <Sun aria-hidden="true" className="size-4" />}</button>;
}

export { ThemeSwitcher };
export type { Theme, ThemeSwitcherProps };
