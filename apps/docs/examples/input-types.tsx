"use client";
import { useId } from "react";
import { Input } from "../../../registry/ui/input";
export default function Example() {
  const id = useId();
  return (
    <div className="w-full max-w-sm space-y-4">
      <label className="grid gap-2 text-sm">
        Password
        <Input
          type="password"
          autoComplete="new-password"
          defaultValue="source-owned"
        />
      </label>
      <label className="grid gap-2 text-sm">
        Seats
        <Input type="number" min={1} max={100} defaultValue={12} />
      </label>
      <div className="space-y-2">
        <label htmlFor={id} className="text-sm">
          Email
        </label>
        <Input
          id={id}
          type="email"
          defaultValue="invalid-email"
          aria-invalid="true"
          aria-describedby={`${id}-error`}
        />
        <p id={`${id}-error`} className="text-sm text-destructive">
          Enter a complete email address.
        </p>
      </div>
    </div>
  );
}
