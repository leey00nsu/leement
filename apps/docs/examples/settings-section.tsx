"use client";

import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import { Input } from "../../../registry/ui/input";
import { Switch } from "../../../registry/ui/switch";
import { SettingsSection } from "../../../registry/blocks/settings-section";

export default function SettingsSectionExample() {
  const [saved, setSaved] = useState(false);
  return <div className="w-full min-w-0"><SettingsSection title="Notifications" description="Choose how we contact you.">
    <div className="space-y-2"><label htmlFor="example-notify" className="text-sm font-medium">Email address</label><Input id="example-notify" type="email" defaultValue="alex@example.com" onChange={() => setSaved(false)} /></div>
    <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-3"><label htmlFor="example-summary" className="space-y-1 text-sm"><span className="block font-medium">Weekly summary</span><span className="block text-muted-foreground">A short digest of your team activity.</span></label><Switch id="example-summary" defaultChecked onCheckedChange={() => setSaved(false)} /></div>
    <div className="flex flex-wrap items-center gap-3"><Button size="sm" onClick={() => setSaved(true)}>Save preferences</Button><span role="status" className="text-xs text-muted-foreground">{saved ? "Preferences saved in this demo." : "Changes are local to this example."}</span></div>
  </SettingsSection></div>;
}
