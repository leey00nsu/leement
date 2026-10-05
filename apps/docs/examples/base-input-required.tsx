"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "../../../registry/ui/field";
import { Input } from "../../../registry/ui/input";

function InputRequired() {
  return (
    <Field>
      <FieldLabel htmlFor="input-required">
        Required Field <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="This field is required"
        required
      />
      <FieldDescription>This field must be filled out.</FieldDescription>
    </Field>
  );
}

export default function Example() {
  return <InputRequired />;
}
