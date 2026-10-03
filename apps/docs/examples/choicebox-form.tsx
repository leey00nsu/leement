"use client";
import { useState } from "react";
import { Choicebox } from "../../../registry/ui/choicebox";
import { Button } from "../../../registry/ui/button";
const choices = [
  { value: "personal", title: "Personal", description: "Individual projects" },
  { value: "team", title: "Team", description: "Shared projects" },
];
export default function Example() {
  const [value, setValue] = useState("personal");
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState("Not submitted");
  return (
    <form
      className="w-full max-w-sm space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setResult(
          String(
            new FormData(e.currentTarget).get("workspace") ??
              "No value; fieldset is disabled",
          ),
        );
      }}
    >
      <Choicebox
        legend="Workspace type"
        name="workspace"
        choices={choices}
        value={value}
        onValueChange={setValue}
        disabled={disabled}
      />
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          aria-pressed={disabled}
          onClick={() => setDisabled((v) => !v)}
        >
          {disabled ? "Unlock choices" : "Lock choices"}
        </Button>
        <Button type="submit" size="sm">
          Read form
        </Button>
      </div>
      <p role="status" className="text-sm">
        {result}
      </p>
    </form>
  );
}
