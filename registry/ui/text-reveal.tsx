"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, useState, type ComponentProps, type CSSProperties } from "react";
import { useMotionActivity } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";
import styles from "./text-reveal.module.css";

type TextRevealProps = ComponentProps<"span"> & { duration?: number; stagger?: number };
type TextRevealItemProps = ComponentProps<"span"> & { index?: number };
function TextRevealItem({ index = 0, className, style, ...props }: TextRevealItemProps) {
  return <span className={cn(styles.item, className)} style={{ "--lm-text-index": index, ...style } as CSSProperties} {...props} />;
}
function TextRevealRoot({ children, className, duration, stagger, style, ...props }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { active } = useMotionActivity(ref);
  const [entered, setEntered] = useState(false);
  useEffect(() => { if (active) setEntered(true); }, [active]);
  let itemIndex = 0;
  return <span ref={ref} data-slot="text-reveal" data-entered={entered} data-motion-paused={!active} className={cn(styles.root, className)} style={{ ...(duration === undefined ? {} : { "--lm-text-duration": `${Math.max(0, duration)}ms` }), ...(stagger === undefined ? {} : { "--lm-text-stagger": `${Math.max(0, stagger)}ms` }), ...style } as CSSProperties} {...props}>
    {Children.map(children, (child) => isValidElement<TextRevealItemProps>(child) && child.type === TextRevealItem ? cloneElement(child, { index: child.props.index ?? itemIndex++ }) : child)}
  </span>;
}
const TextReveal = Object.assign(TextRevealRoot, { Item: TextRevealItem });
export { TextReveal, TextRevealItem };
export type { TextRevealProps, TextRevealItemProps };
