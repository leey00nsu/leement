"use client";

import { Label } from "../../../registry/ui/label";
import { Switch } from "../../../registry/ui/switch";

export default function SwitchExample() {
  return <div className="flex items-center gap-3">
    <Switch id="example-switch" defaultChecked />
    <Label htmlFor="example-switch">Email notifications</Label>
  </div>;
}
