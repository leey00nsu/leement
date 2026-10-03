"use client";
import { useId, useState } from "react";
import { Label } from "../../../registry/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../../../registry/ui/select";
const items = {
  apple: "Apple",
  banana: "Banana",
  carrot: "Carrot",
  potato: "Potato",
};
export default function SelectGroupsExample() {
  const id = useId();
  const [value, setValue] = useState<string | null>(null);
  return (
    <div className="w-full max-w-xs space-y-3">
      <Label htmlFor={id}>Produce</Label>
      <Select items={items} value={value} onValueChange={setValue}>
        <SelectTrigger id={id} className="w-full">
          <SelectValue placeholder="Choose produce" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="potato">Potato</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p role="status" className="text-sm text-muted-foreground">
        Selected: {value ? items[value as keyof typeof items] : "None"}
      </p>
    </div>
  );
}
