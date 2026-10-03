"use client";
import { useState } from "react";
import { Checkbox } from "../../../registry/ui/checkbox";
import { Button } from "../../../registry/ui/button";
const choices = ["Design", "Research", "Development"];
export default function Example() {
  const [selected, setSelected] = useState(["Design"]);
  const [result, setResult] = useState("Not submitted");
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setResult(
          new FormData(e.currentTarget).getAll("discipline").join(", ") ||
            "None",
        );
      }}
    >
      <label className="flex min-h-10 items-center gap-2 text-sm font-medium">
        <Checkbox
          checked={selected.length === choices.length}
          indeterminate={
            selected.length > 0 && selected.length < choices.length
          }
          onCheckedChange={(checked) => setSelected(checked ? choices : [])}
        />
        Select all disciplines
      </label>
      <fieldset className="space-y-2 pl-6">
        <legend className="sr-only">Disciplines</legend>
        {choices.map((value) => (
          <label
            key={value}
            className="flex min-h-10 items-center gap-2 text-sm"
          >
            <Checkbox
              name="discipline"
              value={value}
              checked={selected.includes(value)}
              onCheckedChange={(checked) =>
                setSelected((current) =>
                  checked
                    ? [...current, value]
                    : current.filter((item) => item !== value),
                )
              }
            />
            {value}
          </label>
        ))}
      </fieldset>
      <Button type="submit">Read selection</Button>
      <p role="status" className="text-sm">
        {result}
      </p>
    </form>
  );
}
