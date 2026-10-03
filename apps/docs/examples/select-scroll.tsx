"use client";
import { useId, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../registry/ui/select";
const items = Object.fromEntries(
  Array.from({ length: 40 }, (_, i) => [String(i + 1), `Workspace ${i + 1}`]),
);
export default function Example() {
  const id = useId();
  const [value, setValue] = useState<string | null>("1");
  return (
    <div className="w-full max-w-xs space-y-3">
      <label htmlFor={id} className="text-sm">
        Workspace
      </label>
      <Select items={items} value={value} onValueChange={setValue}>
        <SelectTrigger id={id} className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false} className="max-h-64">
          {Object.entries(items).map(([key, label]) => (
            <SelectItem value={key} key={key}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p role="status" className="text-sm">
        Selected: {value}
      </p>
    </div>
  );
}
