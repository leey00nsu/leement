"use client";

import { animate } from "motion";
import { useEffect, useRef, type ReactNode } from "react";
import { motionEasing, motionSeconds, useMotionActivity } from "../../../registry/lib/leement-motion";

/** Keep server content readable; decorate its first visible client entry only. */
export function HomeReveal({ children, gallery = false, className }: {
  children: ReactNode;
  gallery?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const controls = useRef<ReturnType<typeof animate>[]>([]);
  const { active, reduced } = useMotionActivity(ref);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>(
      gallery ? ".home-example" : "[data-home-reveal]",
    ));
    const show = () => {
      controls.current.forEach(control => control.complete());
      items.forEach(item => {
        item.style.opacity = "1";
        item.style.transform = "none";
        item.style.filter = "none";
      });
    };
    if (reduced) {
      started.current = true;
      show();
      return;
    }
    if (active && !started.current) {
      started.current = true;
      const duration = motionSeconds(root, "duration-reveal");
      const stagger = motionSeconds(root, "delay-stagger");
      const ordered = gallery
        ? items.map(item => ({ item, rect: item.getBoundingClientRect() }))
          .sort((a, b) => a.rect.top - b.rect.top || a.rect.left - b.rect.left)
          .map(({ item }) => item)
        : items;
      controls.current = ordered.map((item, index) => {
        const logo = item.dataset.homeReveal === "logo";
        item.dataset.homeRevealOrder = String(index);
        return animate(item, {
          opacity: [0, 1],
          y: logo ? [0, 0] : [gallery ? 16 : 12, 0],
          ...(gallery || logo ? {} : { filter: ["blur(5px)", "blur(0px)"] }),
        }, {
          duration: logo ? 1.2 : duration,
          delay: gallery ? index * stagger : [0, 0.35, 0.55, 0.75][index],
          ease: motionEasing(root),
        });
      });
    }
    controls.current.forEach(control => {
      if (control.state !== "finished") {
        if (active) control.play();
        else control.pause();
      }
    });
    // Focus must expose the real navigation immediately, including mid-reveal.
    root.addEventListener("focusin", show);
    return () => root.removeEventListener("focusin", show);
  }, [active, reduced, gallery]);

  useEffect(() => () => controls.current.forEach(control => control.stop()), []);

  return <div ref={ref} className={className} data-home-motion={gallery ? "gallery" : "hero"}>
    {children}
  </div>;
}
