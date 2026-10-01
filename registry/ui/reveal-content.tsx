"use client";

import type { HTMLMotionProps } from "motion/react";
import { motion, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import { motionEasing, motionMilliseconds, useMotionActivity } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";
import styles from "./reveal-content.module.css";

type RevealContentProps = HTMLMotionProps<"div"> & {
  delay?: number;
  distance?: number;
  duration?: number;
  fromOpacity?: number;
  variant?: "default" | "fade" | "group" | "line" | "section" | "stagger";
};
const defaults = {
  default: { distance: 8, ratio: 1, opacity: 0.94 },
  fade: { distance: 0, ratio: 8 / 7, opacity: 0 },
  group: { distance: 6, ratio: 8 / 7, opacity: 0 },
  line: { distance: 0, ratio: 1, opacity: 1 },
  section: { distance: 16, ratio: 1, opacity: 0 },
  stagger: { distance: 0, ratio: 6.5 / 7, opacity: 1 },
} as const;

// Motion-backed one-shot reveal adapted from the React Bits Fade/Animated Content pattern.
function RevealContent({ className, delay = 0, distance, duration, fromOpacity, variant = "default", ...props }: RevealContentProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { amount: 0.08, margin: "0px 0px -10% 0px", once: true });
  const { reduced } = useMotionActivity(scope);
  useEffect(() => {
    const root = scope.current;
    if (!root || (!inView && !reduced)) return;
    const base = motionMilliseconds(root, "duration-reveal");
    const seconds = reduced ? 0 : Math.max(0, duration ?? base * defaults[variant].ratio) / 1000;
    const wait = reduced ? 0 : Math.max(0, delay) / 1000;
    const gap = reduced ? 0 : motionMilliseconds(root, "delay-stagger") / 1000;
    const ease = motionEasing(root);
    const controls: Array<{ stop: () => void }> = [];
    const sequence = variant === "line" || variant === "stagger";
    if (!sequence) controls.push(animate(root, { opacity: reduced ? 1 : [fromOpacity ?? defaults[variant].opacity, 1], y: reduced ? 0 : [distance ?? defaults[variant].distance, 0] }, { delay: wait, duration: seconds, ease }));
    else {
      root.querySelectorAll<HTMLElement>("[data-reveal-item]").forEach((element, index) => {
        controls.push(animate(element, { opacity: reduced ? 1 : [0, 1], y: reduced || variant === "line" ? 0 : [6, 0] }, { delay: wait + index * gap + (variant === "line" && !reduced ? gap * 16 / 7 : 0), duration: seconds, ease }));
      });
      root.querySelectorAll<HTMLElement>("[data-reveal-media]").forEach((element, index) => controls.push(animate(element, { scale: reduced ? 1 : [1.025, 1] }, { delay: wait + index * gap, duration: reduced ? 0 : seconds * 9 / 6.5, ease })));
      root.querySelectorAll<HTMLElement>("[data-reveal-line]").forEach((element) => controls.push(animate(element, { scaleX: reduced ? 1 : [0, 1] }, { delay: wait, duration: reduced ? 0 : seconds * 7.5 / 7, ease })));
    }
    return () => controls.forEach((control) => control.stop());
  }, [animate, delay, distance, duration, fromOpacity, inView, reduced, scope, variant]);
  return <motion.div initial={false} ref={scope} data-slot="reveal-content" data-reveal-variant={variant} className={cn(styles.root, className)} {...props} />;
}
export { RevealContent };
export type { RevealContentProps };
