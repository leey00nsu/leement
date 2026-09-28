"use client";

import { useEffect, useState } from "react";
import { ThemeSwitcher, type Theme } from "../../../registry/ui/theme-switcher";


export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    let saved: string | null = null;
    try { saved = window.localStorage.getItem("leement-docs-theme"); } catch { /* Theme defaults to light when storage is unavailable. */ }
    const next: Theme = saved === "dark" ? "dark" : "light";
    document.documentElement.dataset.lmTheme = next;
    setTheme(next);
    const observer = new MutationObserver(() => setTheme(document.documentElement.dataset.lmTheme === "dark" ? "dark" : "light"));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-lm-theme"] });
    return () => observer.disconnect();
  }, []);

  function toggle(next: Theme) {
    document.documentElement.dataset.lmTheme = next;
    try { window.localStorage.setItem("leement-docs-theme", next); } catch { /* Current page can still switch theme. */ }
    setTheme(next);
  }

  return <ThemeSwitcher value={theme} onValueChange={toggle} />;
}
