"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("leement-docs-theme");
    const next: Theme = saved === "dark" ? "dark" : "light";
    document.documentElement.dataset.lmTheme = next;
    setTheme(next);
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.lmTheme = next;
    window.localStorage.setItem("leement-docs-theme", next);
    setTheme(next);
  }

  return <button type="button" onClick={toggle} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} aria-pressed={theme === "dark"} className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    {theme === "light" ? <Moon aria-hidden="true" size={17} /> : <Sun aria-hidden="true" size={17} />}
  </button>;
}
