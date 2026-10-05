"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import { REGEXP_ONLY_DIGITS } from "input-otp";

import { Field, FieldLabel } from "../../../registry/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../registry/ui/input-otp";

function InputOTPPattern() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="digits-only">Digits Only</FieldLabel>
      <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  );
}

export default function Example() {
  return <InputOTPPattern />;
}
