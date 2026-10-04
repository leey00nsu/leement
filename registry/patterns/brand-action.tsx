"use client";

import { useImperativeHandle, useRef } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useMotionLoop } from "@/lib/leement-motion";
import { cn } from "@/lib/utils";

type BrandActionProps = ButtonProps & { animated?: boolean; paused?: boolean };
function BrandAction({ animated = true, paused = false, className, ref: forwardedRef, disabled, loading, ...props }: BrandActionProps) {
  const ref = useRef<HTMLButtonElement>(null);
  useImperativeHandle(forwardedRef, () => ref.current!);
  const { active } = useMotionLoop(ref, { backgroundPosition: ["0% 50%", "100% 50%"] }, "cycle-brand-surface", paused || !animated || Boolean(disabled || loading), undefined, true);
  return <Button ref={ref} disabled={disabled} loading={loading} data-slot="brand-action" data-animated={animated} data-motion-paused={paused || !active || Boolean(disabled || loading)} className={cn("lm-brand-action", className)} {...props} />;
}
export { BrandAction };
export type { BrandActionProps };
