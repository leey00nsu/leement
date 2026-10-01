"use client";

import { useEffect, useState, type RefObject } from "react";

// Read resolved values at the element so local consumer overrides work too.
export function motionMilliseconds(element: Element, name: string): number {
  const value = getComputedStyle(element).getPropertyValue(`--lm-motion-${name}`).trim();
  const match = /^(\d+(?:\.\d+)?)(ms|s)$/.exec(value);
  return match ? Number(match[1]) * (match[2] === "s" ? 1000 : 1) : 0;
}

export function motionEasing(element: Element): [number, number, number, number] | "linear" {
  const value = getComputedStyle(element).getPropertyValue("--lm-motion-easing-reveal");
  const match = /^\s*cubic-bezier\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)\s*$/.exec(value);
  if (!match) return "linear";
  const numbers = match.slice(1).map(Number);
  return numbers.every(Number.isFinite) ? numbers as [number, number, number, number] : "linear";
}

// Scoped observer: no DOM scanning or required global provider.
export function useMotionActivity(ref: RefObject<HTMLElement | null>) {
  const [state, setState] = useState({ active: false, reduced: false });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof window.matchMedia !== "function") { setState({ active: false, reduced: true }); return; }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = typeof IntersectionObserver === "undefined";
    const update = () => setState({ active: visible && document.visibilityState !== "hidden" && !preference.matches, reduced: preference.matches });
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(([entry]) => { visible = Boolean(entry?.isIntersecting); update(); });
    observer?.observe(element);
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => { observer?.disconnect(); preference.removeEventListener("change", update); document.removeEventListener("visibilitychange", update); };
  }, [ref]);
  return state;
}
