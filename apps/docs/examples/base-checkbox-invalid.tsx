"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Checkbox } from "../../../registry/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "../../../registry/ui/field";

function CheckboxInvalid() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-invalid>
        <Checkbox
          id="terms-checkbox-invalid"
          name="terms-checkbox-invalid"
          aria-invalid
        />
        <FieldLabel htmlFor="terms-checkbox-invalid">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  );
}

export default function Example() {
  return <CheckboxInvalid />;
}
