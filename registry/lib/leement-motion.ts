"use client";

import { animate, type DOMKeyframesDefinition } from "motion";
import { useCallback, useEffect, useState, type Ref, type RefObject } from "react";

// Read resolved values at the element so local consumer overrides work too.
export function motionMilliseconds(element: Element, name: string): number {
  const value = getComputedStyle(element).getPropertyValue(`--lm-motion-${name}`).trim();
  const match = /^(\d+(?:\.\d+)?)(ms|s)$/.exec(value);
  return match ? Number(match[1]) * (match[2] === "s" ? 1000 : 1) : 0;
}

export function motionEasing(element: Element, role = "reveal"): [number, number, number, number] | "linear" {
  const value = getComputedStyle(element).getPropertyValue(`--lm-motion-easing-${role}`);
  const named: Record<string, [number, number, number, number]> = {
    ease: [0.25, 0.1, 0.25, 1],
    "ease-in": [0.42, 0, 1, 1],
    "ease-out": [0, 0, 0.58, 1],
    "ease-in-out": [0.42, 0, 0.58, 1],
  };
  if (named[value.trim()]) return named[value.trim()]!;
  const match = /^\s*cubic-bezier\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)\s*$/.exec(value);
  if (!match) return "linear";
  const numbers = match.slice(1).map(Number);
  return numbers.every(Number.isFinite) ? numbers as [number, number, number, number] : "linear";
}

export function motionSeconds(element: Element, name: string) {
  return motionMilliseconds(element, name) / 1000;
}

// The editor emits this after writing CSS. Consumers can emit it after local token changes.
export function useMotionRevision() {
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    const update = () => setRevision((value) => value + 1);
    window.addEventListener("leement:motion-change", update);
    return () => window.removeEventListener("leement:motion-change", update);
  }, []);
  return revision;
}

const controlProperties = ["backgroundColor", "color", "borderColor", "boxShadow"] as const;
type StyleProperty = (typeof controlProperties)[number] | "opacity" | "transform" | "translate" | "rotate" | "scale" | "filter" | "marginLeft";

// CSS still defines the primitive's semantic states. Motion interpolates their resolved values.
// This ref attaches to one real element, including render/asChild consumers; it adds no DOM.
export function useStyleMotion<T extends HTMLElement | SVGElement>(
  forwardedRef?: Ref<T>,
  properties: readonly StyleProperty[] = controlProperties,
  durationRole = "normal",
) {
  const key = properties.join(",");
  return useCallback((node: T | null) => {
    if (!node) return;
    const externalCleanup = typeof forwardedRef === "function" ? forwardedRef(node) : undefined;
    if (forwardedRef && typeof forwardedRef !== "function") forwardedRef.current = node;
    const names = key.split(",") as StyleProperty[];
    const originals = Object.fromEntries(names.map((name) => [name, node.style[name]]));
    const read = () => {
      const style = getComputedStyle(node);
      return Object.fromEntries(names.map((name) => [name, style[name]]));
    };
    const restore = () => { for (const name of names) node.style[name] = originals[name] ?? ""; };
    let previous = read();
    let control: ReturnType<typeof animate> | undefined;
    let disposed = false;
    let queued = false;
    const update = () => {
      if (queued || disposed) return;
      queued = true;
      queueMicrotask(() => {
        queued = false;
        if (disposed) return;
        const from = control ? read() : previous;
        control?.stop();
        restore();
        const target = read();
        previous = target;
        const reduced = typeof matchMedia !== "function" || matchMedia("(prefers-reduced-motion: reduce)").matches;
        const duration = reduced ? 0 : motionSeconds(node, `duration-${durationRole}`);
        const keyframes: DOMKeyframesDefinition = {};
        for (const name of names) if (from[name] !== target[name]) keyframes[name] = [from[name]!, target[name]!];
        if (!Object.keys(keyframes).length || duration <= 0) { control = undefined; return; }
        const next = animate(node, keyframes, { duration, ease: motionEasing(node, "standard") });
        control = next;
        void next.then(() => {
          if (!disposed && control === next) { restore(); control = undefined; }
        });
      });
    };
    const events = ["pointerenter", "pointerleave", "pointerdown", "pointerup", "focus", "blur"];
    events.forEach((name) => node.addEventListener(name, update));
    // State attributes come from the accessible primitive, not a second state machine.
    const observer = new MutationObserver((records) => {
      if (records.some((record) => record.attributeName !== "style")) update();
    });
    observer.observe(node, { attributes: true });
    const preference = typeof matchMedia === "function" ? matchMedia("(prefers-reduced-motion: reduce)") : null;
    preference?.addEventListener("change", update);
    window.addEventListener("leement:motion-change", update);
    return () => {
      disposed = true;
      control?.stop();
      restore();
      observer.disconnect();
      events.forEach((name) => node.removeEventListener(name, update));
      preference?.removeEventListener("change", update);
      window.removeEventListener("leement:motion-change", update);
      if (typeof externalCleanup === "function") externalCleanup();
      else if (typeof forwardedRef === "function") forwardedRef(null);
      else if (forwardedRef) forwardedRef.current = null;
    };
  }, [forwardedRef, key, durationRole]);
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
