"use client";
import { useState } from "react";
import { ThemeSwitcher, type Theme } from "../../../registry/ui/theme-switcher";
export default function ThemeSwitcherExample() { const [theme, setTheme] = useState<Theme>("light"); return <div className="flex items-center gap-3"><ThemeSwitcher value={theme} onValueChange={setTheme} applyToDocument={false} /><span className="text-sm">Selected: {theme}</span></div>; }
