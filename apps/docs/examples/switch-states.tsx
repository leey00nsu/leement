"use client";
import { useId, useState } from "react";
import { Switch } from "../../../registry/ui/switch";
import { Label } from "../../../registry/ui/label";
export default function Example() {
  const id = useId();
  const [checked, setChecked] = useState(true);
  return (
    <div className="space-y-5">
      {(["sm", "default"] as const).map((size) => (
        <div key={size} className="flex items-center gap-3">
          <Switch
            id={`${id}-${size}`}
            size={size}
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label htmlFor={`${id}-${size}`}>{size} notifications</Label>
        </div>
      ))}
      <div className="flex items-center gap-3">
        <Switch id={`${id}-locked`} disabled defaultChecked />
        <Label htmlFor={`${id}-locked`}>Managed by organization</Label>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Switch
            id={`${id}-invalid`}
            aria-invalid="true"
            aria-describedby={`${id}-error`}
          />
          <Label htmlFor={`${id}-invalid`}>Required consent</Label>
        </div>
        <p id={`${id}-error`} className="text-sm text-destructive">
          Consent is required to enable this service.
        </p>
      </div>
      <p role="status" className="text-sm">
        Notifications: {checked ? "on" : "off"}
      </p>
    </div>
  );
}
