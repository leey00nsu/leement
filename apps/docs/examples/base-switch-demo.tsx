"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { Label } from "../../../registry/ui/label";
import { Switch } from "../../../registry/ui/switch";

function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export default function Example() {
  return <SwitchDemo />;
}
