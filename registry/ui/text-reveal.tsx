"use client";

import { Children, cloneElement, isValidElement, useEffect, useImperativeHandle, useRef, useState, type ComponentProps, type CSSProperties } from "react";
import { animate } from "motion";
import { motionEasing, motionMilliseconds, useMotionActivity } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

type TextRevealProps = ComponentProps<"span"> & { duration?: number; stagger?: number };
type TextRevealItemProps = ComponentProps<"span"> & { index?: number };
function TextRevealItem({ index = 0, className, style, ...props }: TextRevealItemProps) {
  return <span data-text-reveal-item={index} className={cn("inline-block", className)} style={{ "--lm-text-index": index, ...style } as CSSProperties} {...props} />;
}
function TextRevealRoot({ children, className, duration, stagger, style, ref: forwardedRef, ...props }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useImperativeHandle(forwardedRef, () => ref.current!);
  const { active, reduced } = useMotionActivity(ref);
  const [entered, setEntered] = useState(false);
  const controlsRef = useRef<ReturnType<typeof animate>[]>([]);
  useEffect(() => { if (active || reduced) setEntered(true); }, [active, reduced]);
  useEffect(() => {
    const root = ref.current;
    if (!root || !entered || reduced) return;
    const durationSeconds = Math.max(0, duration ?? motionMilliseconds(root, "duration-reveal")) / 1000;
    const staggerSeconds = Math.max(0, stagger ?? motionMilliseconds(root, "delay-stagger")) / 1000;
    const controls = Array.from(root.querySelectorAll<HTMLElement>("[data-text-reveal-item]")).map((item, position) => animate(item, { opacity: [0, 1], y: ["0.32em", "0em"], filter: ["blur(5px)", "blur(0px)"] }, { duration: durationSeconds, delay: Number(item.dataset.textRevealItem ?? position) * staggerSeconds, ease: motionEasing(root) }));
    controlsRef.current = controls;
    return () => controls.forEach((control) => control.stop());
  }, [entered, reduced, duration, stagger]);
  useEffect(() => {
    controlsRef.current.forEach((control) => { if (active) control.play(); else control.pause(); });
  }, [active, entered, reduced, duration, stagger]);
  let itemIndex = 0;
  return <span ref={ref} data-slot="text-reveal" data-entered={entered} data-motion-paused={!active} className={cn(
    "inline",
    "motion-reduce:[&_[data-text-reveal-item]]:opacity-100! motion-reduce:[&_[data-text-reveal-item]]:filter-none! motion-reduce:[&_[data-text-reveal-item]]:transform-none!",
    "[@media(scripting:none)]:[&_[data-text-reveal-item]]:opacity-100! [@media(scripting:none)]:[&_[data-text-reveal-item]]:filter-none! [@media(scripting:none)]:[&_[data-text-reveal-item]]:transform-none!",
    className,
  )} style={{ ...(duration === undefined ? {} : { "--lm-text-duration": `${Math.max(0, duration)}ms` }), ...(stagger === undefined ? {} : { "--lm-text-stagger": `${Math.max(0, stagger)}ms` }), ...style } as CSSProperties} {...props}>
    {Children.map(children, (child) => { if (!isValidElement<TextRevealItemProps>(child) || child.type !== TextRevealItem) return child; const index = itemIndex++; return cloneElement(child, { index: child.props.index ?? index }); })}
  </span>;
}
const TextReveal = Object.assign(TextRevealRoot, { Item: TextRevealItem });
export { TextReveal, TextRevealItem };
export type { TextRevealProps, TextRevealItemProps };
