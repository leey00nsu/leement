"use client";
import { useId, useState } from "react";
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "../../../registry/ui/native-select";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const id = useId();
  const [result, setResult] = useState("No selection submitted");
  return (
    <form
      className="w-full max-w-sm space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setResult(String(new FormData(e.currentTarget).get("destination")));
      }}
    >
      <label htmlFor={id} className="block text-sm font-medium">
        Destination
      </label>
      <NativeSelect
        id={id}
        name="destination"
        sizeVariant="sm"
        defaultValue="seoul"
      >
        <NativeSelectOptGroup label="Asia">
          <NativeSelectOption value="seoul">Seoul</NativeSelectOption>
          <NativeSelectOption value="tokyo">Tokyo</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Europe">
          <NativeSelectOption value="paris">Paris</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
      <label htmlFor={`${id}-invalid`} className="block text-sm font-medium">
        Required role
      </label>
      <NativeSelect
        id={`${id}-invalid`}
        aria-invalid="true"
        aria-describedby={`${id}-error`}
        defaultValue=""
      >
        <NativeSelectOption value="">Choose a role</NativeSelectOption>
        <NativeSelectOption value="editor">Editor</NativeSelectOption>
      </NativeSelect>
      <p id={`${id}-error`} className="text-sm text-destructive">
        Choose a workspace role.
      </p>
      <Button type="submit">Read selection</Button>
      <p role="status" className="text-sm">
        {result}
      </p>
    </form>
  );
}
