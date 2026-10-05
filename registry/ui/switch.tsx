"use client";
import { useStyleMotion } from "@/lib/leement-motion";


import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

function Switch({ ref: motionForwardedRef,
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default";
}) {
  const styleMotionRef1 = useStyleMotion<HTMLSpanElement>(motionForwardedRef);
  const styleMotionRef2 = useStyleMotion<HTMLDivElement>(undefined, ["translate", "backgroundColor"]);

  return (
    <SwitchPrimitive.Root ref={styleMotionRef1}
      data-slot="switch"
      data-size={size}
      className={(state) => cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive data-[size=default]:h-5 data-[size=default]:w-9 data-[size=sm]:h-4 data-[size=sm]:w-7 data-checked:bg-primary data-unchecked:border-border data-unchecked:bg-muted data-disabled:cursor-not-allowed data-disabled:opacity-50",
        (typeof className === "function" ? className(state) : className),
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb ref={styleMotionRef2}
        data-slot="switch-thumb"
        className="pointer-events-none block rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-checked/switch:bg-primary-foreground group-data-unchecked/switch:bg-primary group-data-[size=default]/switch:data-checked:translate-x-4 group-data-[size=sm]/switch:data-checked:translate-x-3 group-data-[size=default]/switch:data-unchecked:translate-x-0.5 group-data-[size=sm]/switch:data-unchecked:translate-x-0.5 rtl:group-data-[size=default]/switch:data-checked:-translate-x-4 rtl:group-data-[size=sm]/switch:data-checked:-translate-x-3 rtl:data-unchecked:-translate-x-0.5"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
