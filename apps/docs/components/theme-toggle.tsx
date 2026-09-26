"use client";

import { useEffect, useState } from "react";
import { ThemeSwitcher, type Theme } from "../../../registry/ui/theme-switcher";


export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("leement-docs-theme");
    const next: Theme = saved === "dark" ? "dark" : "light";
    document.documentElement.dataset.lmTheme = next;
    setTheme(next);
  }, []);

  function toggle(next: Theme) {
    document.documentElement.dataset.lmTheme = next;
    window.localStorage.setItem("leement-docs-theme", next);
    setTheme(next);
  }

  return <ThemeSwitcher value={theme} onValueChange={toggle} />;
}
