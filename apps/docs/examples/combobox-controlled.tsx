"use client";
import { useState } from "react";
import { Combobox } from "../../../registry/ui/combobox";
const options = [
  { value: "alex", label: "Alex Kim" },
  { value: "blair", label: "Blair Lee" },
  { value: "casey", label: "Casey Park", disabled: true },
];
export default function Example() {
  const [value, setValue] = useState("alex");
  return (
    <div className="w-full max-w-sm space-y-5">
      <Combobox
        label="Project owner"
        options={options}
        value={value}
        onValueChange={setValue}
      />
      <p role="status" className="text-sm">
        Assigned to: {options.find((option) => option.value === value)?.label}
      </p>
      <Combobox
        label="Organization owner (locked)"
        options={options}
        defaultValue="blair"
        disabled
      />
    </div>
  );
}
