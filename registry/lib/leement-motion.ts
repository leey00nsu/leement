"use client";

import { animate, type DOMKeyframesDefinition } from "motion";
import { animate as animateStyles } from "motion/mini";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Ref,
  type RefObject,
} from "react";

// Read resolved values at the element so local consumer overrides work too.
export function motionMilliseconds(element: Element, name: string): number {
  const value = getComputedStyle(element)
    .getPropertyValue(`--lm-motion-${name}`)
    .trim();
  const match = /^((?:\d+(?:\.\d+)?|\.\d+))(ms|s)$/.exec(value);
  return match ? Number(match[1]) * (match[2] === "s" ? 1000 : 1) : 0;
}

export function motionEasing(
  element: Element,
  role = "reveal",
): [number, number, number, number] | "linear" {
  const value = getComputedStyle(element).getPropertyValue(
    `--lm-motion-easing-${role}`,
  );
  const named: Record<string, [number, number, number, number]> = {
    ease: [0.25, 0.1, 0.25, 1],
    "ease-in": [0.42, 0, 1, 1],
    "ease-out": [0, 0, 0.58, 1],
    "ease-in-out": [0.42, 0, 0.58, 1],
  };
  if (named[value.trim()]) return named[value.trim()]!;
  const match =
    /^\s*cubic-bezier\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)\s*$/.exec(
      value,
    );
  if (!match) return "linear";
  const numbers = match.slice(1).map(Number);
  return numbers.every(Number.isFinite)
    ? (numbers as [number, number, number, number])
    : "linear";
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

export function useMotionLoop(
  ref: RefObject<HTMLElement | SVGElement | null>,
  keyframes: DOMKeyframesDefinition,
  cycleRole: string,
  paused = false,
  seconds?: number,
  mirror = false,
  staggerIndex = 0,
) {
  const revision = useMotionRevision();
  const { active, reduced } = useMotionActivity(ref);
  const control = useRef<ReturnType<typeof animate> | null>(null);
  const definition = JSON.stringify(keyframes);
  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;
    const duration = seconds ?? motionSeconds(node, cycleRole);
    if (!Number.isFinite(duration) || duration <= 0) return;
    const frames = JSON.parse(definition) as DOMKeyframesDefinition;
    const properties = [
      ...new Set(
        Object.keys(frames).map((name) =>
          ["x", "y", "rotate", "scale"].includes(name)
            ? "transform"
            : name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
        ),
      ),
    ];
    const inline = properties.map(
      (name) =>
        [
          name,
          node.style.getPropertyValue(name),
          node.style.getPropertyPriority(name),
        ] as const,
    );
    const animation = animate(node, frames, {
      duration,
      delay: staggerIndex * motionSeconds(node, "delay-stagger"),
      ease: "linear",
      repeat: Infinity,
      repeatType: mirror ? "reverse" : "loop",
    });
    animation.pause();
    control.current = animation;
    return () => {
      animation.stop();
      control.current = null;
      for (const [name, value, priority] of inline) {
        if (value) node.style.setProperty(name, value, priority);
        else node.style.removeProperty(name);
      }
    };
  }, [
    ref,
    definition,
    cycleRole,
    seconds,
    mirror,
    staggerIndex,
    revision,
    reduced,
  ]);
  useEffect(() => {
    if (active && !paused) control.current?.play();
    else control.current?.pause();
  }, [
    active,
    paused,
    definition,
    cycleRole,
    seconds,
    mirror,
    staggerIndex,
    revision,
    reduced,
  ]);
  return { active: active && !paused, reduced };
}

// Base UI keeps the panel/popup mounted while its native animations are running.
export function usePresenceMotion<T extends HTMLElement>(
  forwardedRef?: Ref<T>,
  role = "fast",
  panel = false,
  onPresenceChange?: (present: boolean) => void,
) {
  return useCallback(
    (node: T | null) => {
      if (!node) return;
      const externalCleanup =
        typeof forwardedRef === "function" ? forwardedRef(node) : undefined;
      if (forwardedRef && typeof forwardedRef !== "function")
        forwardedRef.current = node;
      let control: ReturnType<typeof animate> | undefined;
      let lastOpen: boolean | undefined;
      let disposed = false;
      let animating = false;
      let hiddenValue = "";
      const originalInert = node.hasAttribute("inert");
      const update = () => {
        const open =
          !node.hasAttribute("data-closed") && node.dataset.state !== "closed";
        if (open === lastOpen) {
          if (panel && animating && node.hasAttribute("hidden"))
            node.removeAttribute("hidden");
          return;
        }
        const first = lastOpen === undefined;
        if (panel && node.hasAttribute("hidden")) {
          hiddenValue = node.getAttribute("hidden") ?? "";
          if (!first || open) node.removeAttribute("hidden");
        }
        const height = first ? 0 : node.getBoundingClientRect().height;
        control?.stop();
        lastOpen = open;
        if (panel && first && !open) {
          node.toggleAttribute("inert", true);
          return;
        }
        if (open) onPresenceChange?.(true);
        const reduced =
          typeof matchMedia !== "function" ||
          matchMedia("(prefers-reduced-motion: reduce)").matches;
        const duration = reduced ? 0 : motionSeconds(node, `duration-${role}`);
        const frames: DOMKeyframesDefinition = {
          opacity: open
            ? [first ? 0 : Number(getComputedStyle(node).opacity), 1]
            : [Number(getComputedStyle(node).opacity), 0],
        };
        const side = node.dataset.side;
        if (side && !panel && node.dataset.slot === "sheet-content") {
          const axis = side === "left" || side === "right" ? "x" : "y";
          const offset = side === "left" || side === "top" ? -40 : 40;
          frames[axis] = open ? [first ? offset : 0, 0] : [0, offset];
        }
        if (panel) {
          node.style.height = "auto";
          const natural = node.scrollHeight;
          frames.height = [height, open ? natural : 0];
          node.style.height = `${height}px`;
          node.toggleAttribute("inert", originalInert || !open);
        }
        animating = true;
        const next = animate(node, frames, {
          duration,
          ease: motionEasing(node, panel ? "reveal" : "standard"),
        });
        control = next;
        void next.then(() => {
          if (disposed || control !== next) return;
          animating = false;
          if (panel) {
            if (open) node.style.height = "auto";
            else node.setAttribute("hidden", hiddenValue);
          }
          onPresenceChange?.(open);
          node.style.opacity = open ? "1" : "0";
        });
      };
      const observer = new MutationObserver(update);
      observer.observe(node, {
        attributes: true,
        attributeFilter: ["data-open", "data-closed", "data-state", "hidden"],
      });
      update();
      return () => {
        disposed = true;
        observer.disconnect();
        control?.stop();
        if (typeof externalCleanup === "function") externalCleanup();
        else if (typeof forwardedRef === "function") forwardedRef(null);
        else if (forwardedRef) forwardedRef.current = null;
      };
    },
    [forwardedRef, role, panel, onPresenceChange],
  );
}

const controlProperties = [
  "backgroundColor",
  "color",
  "borderColor",
  "boxShadow",
] as const;
type StyleProperty =
  | (typeof controlProperties)[number]
  | "opacity"
  | "transform"
  | "translate"
  | "rotate"
  | "scale"
  | "filter"
  | "marginLeft"
  | "width"
  | "height"
  | "left"
  | "right";

// CSS still defines the primitive's semantic states. Motion interpolates their resolved values.
// This ref attaches to one real element, including render/asChild consumers; it adds no DOM.
export function useStyleMotion<T extends HTMLElement | SVGElement>(
  forwardedRef?: Ref<T>,
  properties: readonly StyleProperty[] = controlProperties,
  durationRole = "normal",
) {
  const key = properties.join(",");
  return useCallback(
    (node: T | null) => {
      if (!node) return;
      const externalCleanup =
        typeof forwardedRef === "function" ? forwardedRef(node) : undefined;
      if (forwardedRef && typeof forwardedRef !== "function")
        forwardedRef.current = node;
      const names = key.split(",") as StyleProperty[];
      const cssName = (name: string) => name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
      const inline = (name: StyleProperty) => ({
        value: node.style.getPropertyValue(cssName(name)),
        priority: node.style.getPropertyPriority(cssName(name)),
      });
      const originals = Object.fromEntries(names.map((name) => [name, inline(name)]));
      const read = () => {
        const style = getComputedStyle(node);
        return Object.fromEntries(names.map((name) => [name, style[name]]));
      };
      const restore = () => {
        for (const name of names) {
          const { value, priority } = originals[name]!;
          if (value) node.style.setProperty(cssName(name), value, priority);
          else node.style.removeProperty(cssName(name));
        }
      };
      let previous = read();
      let control: ReturnType<typeof animateStyles> | undefined;
      let disposed = false;
      let queued = false;
      const update = () => {
        if (queued || disposed) return;
        queued = true;
        queueMicrotask(() => {
          queued = false;
          if (disposed) return;
          if (node.hasAttribute("data-swiping")) {
            // Pointer-driven movement is direct; save its live position for the
            // Motion transition when the gesture ends.
            if (control) {
              control.cancel();
              restore();
              control = undefined;
            }
            previous = read();
            return;
          }
          if (!control)
            for (const name of names) originals[name] = inline(name);
          const from = control ? read() : previous;
          control?.cancel();
          restore();
          const target = read();
          previous = target;
          const reduced =
            typeof matchMedia !== "function" ||
            matchMedia("(prefers-reduced-motion: reduce)").matches;
          const duration = reduced
            ? 0
            : motionSeconds(node, `duration-${durationRole}`);
          const keyframes: DOMKeyframesDefinition = {};
          for (const name of names)
            if (from[name] !== target[name])
              keyframes[name] = [from[name]!, target[name]!];
          if (!Object.keys(keyframes).length || duration <= 0) {
            control = undefined;
            return;
          }
          const next = animateStyles(node, keyframes, {
            duration,
            ease: motionEasing(node, "standard"),
          });
          control = next;
          void next.then(() => {
            if (!disposed && control === next) {
              next.cancel();
              restore();
              control = undefined;
            }
          });
        });
      };
      const events = [
        "pointerenter",
        "pointerleave",
        "pointerdown",
        "pointerup",
        "focus",
        "blur",
        "focusin",
        "focusout",
      ];
      events.forEach((name) => node.addEventListener(name, update));
      // State attributes come from the accessible primitive, not a second state machine.
      const observer = new MutationObserver((records) => {
        // Native animations don't write inline values until finish. Keep caller
        // style edits made during playback, but never adopt Motion's final values.
        if (control && control.state !== "finished" && records.some((record) => record.target === node && record.attributeName === "style")) {
          for (const name of names) originals[name] = inline(name);
        }
        if (node.hasAttribute("data-swiping") || records.some((record) => record.attributeName !== "style"))
          update();
      });
      observer.observe(node, { attributes: true });
      const ancestors = [
        node.parentElement,
        node.parentElement?.parentElement,
      ].filter((element): element is HTMLElement => Boolean(element));
      ancestors.forEach((element) => {
        observer.observe(element, { attributes: true });
        element.addEventListener("pointerenter", update);
        element.addEventListener("pointerleave", update);
      });
      const preference =
        typeof matchMedia === "function"
          ? matchMedia("(prefers-reduced-motion: reduce)")
          : null;
      preference?.addEventListener("change", update);
      window.addEventListener("leement:motion-change", update);
      return () => {
        disposed = true;
        control?.cancel();
        restore();
        observer.disconnect();
        ancestors.forEach((element) => {
          element.removeEventListener("pointerenter", update);
          element.removeEventListener("pointerleave", update);
        });
        events.forEach((name) => node.removeEventListener(name, update));
        preference?.removeEventListener("change", update);
        window.removeEventListener("leement:motion-change", update);
        if (typeof externalCleanup === "function") externalCleanup();
        else if (typeof forwardedRef === "function") forwardedRef(null);
        else if (forwardedRef) forwardedRef.current = null;
      };
    },
    [forwardedRef, key, durationRole],
  );
}

// Scoped observer: no DOM scanning or required global provider.
export function useMotionActivity(
  ref: RefObject<HTMLElement | SVGElement | null>,
) {
  const [state, setState] = useState({ active: false, reduced: false });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof window.matchMedia !== "function") {
      setState({ active: false, reduced: true });
      return;
    }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = typeof IntersectionObserver === "undefined";
    const update = () =>
      setState({
        active:
          visible &&
          document.visibilityState !== "hidden" &&
          !preference.matches,
        reduced: preference.matches,
      });
    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(([entry]) => {
            visible = Boolean(entry?.isIntersecting);
            update();
          });
    observer?.observe(element);
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [ref]);
  return state;
}
