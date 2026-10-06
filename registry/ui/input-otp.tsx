// Adapted from shadcn/ui (MIT), commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c.
// Copyright (c) 2023 shadcn. Full license is distributed with this registry item.
"use client";

import * as React from "react"
import { useMotionLoop, useStyleMotion } from "@/lib/leement-motion"
import { cn } from "@/lib/utils"
import { OTPInput, OTPInputContext } from "input-otp"

import { MinusIcon } from "lucide-react"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "gap-2 flex items-center has-disabled:opacity-50",
        containerClassName
      )}
      spellCheck={false}
      className={cn(
        " disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("has-aria-invalid:ring-destructive/30 has-aria-invalid:border-destructive rounded-md has-aria-invalid:ring-3 flex items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  ref: forwardedRef,
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const styleRef = useStyleMotion<HTMLDivElement>(forwardedRef);
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      ref={styleRef}
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "bg-(--lm-color-surface-default) border-input data-[active=true]:border-ring data-[active=true]:ring-ring/40 data-[active=true]:aria-invalid:ring-destructive/30 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive size-10 border-y border-e text-sm  outline-none first:rounded-s-md first:border-s last:rounded-e-md data-[active=true]:ring-3 relative flex items-center justify-center data-[active=true]:z-10",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className=" pointer-events-none absolute inset-0 flex items-center justify-center">
          <InputOTPCaret />
        </div>
      )}
    </div>
  )
}

function InputOTPCaret() {
  const ref = React.useRef<HTMLDivElement>(null);
  useMotionLoop(ref, { opacity: [1, 0, 1] }, "cycle-spin");
  return <div ref={ref} aria-hidden="true" className="h-4 w-px bg-foreground" />;
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="[&_svg:not([class*='size-'])]:size-4 flex items-center"
      role="separator"
      {...props}
    >
      <MinusIcon aria-hidden="true" />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
