"use client";
import { useState } from "react";
import { Tags } from "../../../registry/ui/tags";
export default function Example() {
  const [value, setValue] = useState(["Design"]);
  return (
    <div className="w-full max-w-md space-y-5">
      <Tags
        label="Editable disciplines"
        value={value}
        onValueChange={setValue}
        suggestions={["Research", "Engineering"]}
      />
      <p role="status" className="text-sm">
        Tags: {value.join(", ") || "none"}
      </p>
      <Tags
        label="Organization disciplines (locked)"
        defaultValue={["Internal", "Approved"]}
        disabled
      />
    </div>
  );
}
