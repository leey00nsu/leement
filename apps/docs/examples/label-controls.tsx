"use client";
import { useId } from "react";
import { Label } from "../../../registry/ui/label";
import { Checkbox } from "../../../registry/ui/checkbox";
import { Switch } from "../../../registry/ui/switch";
export default function Example() {
  const id = useId();
  return (
    <div className="space-y-4">
      <div className="flex min-h-10 items-center gap-3">
        <Checkbox id={`${id}-terms`} />
        <Label htmlFor={`${id}-terms`}>Accept workspace terms</Label>
      </div>
      <div className="flex min-h-10 items-center gap-3">
        <Switch id={`${id}-updates`} />
        <Label htmlFor={`${id}-updates`}>Receive updates</Label>
      </div>
      <div className="flex min-h-10 items-center gap-3">
        <Checkbox disabled id={`${id}-locked`} />
        <Label htmlFor={`${id}-locked`} className="opacity-50">
          Organization policy (locked)
        </Label>
      </div>
    </div>
  );
}
