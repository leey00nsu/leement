"use client";
import { useStyleMotion } from "@/lib/leement-motion";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "@/lib/utils";
function Input({ ref: motionForwardedRef, className, type, ...props }: InputPrimitive.Props) {
  const styleMotionRef1 = useStyleMotion<HTMLElement>(motionForwardedRef);

  return <InputPrimitive ref={styleMotionRef1} data-slot="input" type={type} className={state => cn("h-10 w-full min-w-0 rounded-md border border-input bg-(--lm-color-surface-default) px-3 text-base text-foreground file:mr-2 file:inline-flex file:h-full file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/30 md:text-sm", typeof className === "function" ? className(state) : className)} {...props} />;
}
export { Input };

export type InputProps = InputPrimitive.Props;
