"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "../../../registry/ui/field";
import { Input } from "../../../registry/ui/input";

function InputInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
      <Input id="input-invalid" placeholder="Error" aria-invalid />
      <FieldDescription>
        This field contains validation errors.
      </FieldDescription>
    </Field>
  );
}

export default function Example() {
  return <InputInvalid />;
}
