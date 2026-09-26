import { Input } from "../../../registry/ui/input";
import { SettingsSection } from "../../../registry/blocks/settings-section";

export default function SettingsSectionExample() {
  return <SettingsSection title="Notifications" description="Choose how we contact you.">
    <label htmlFor="example-notify" className="text-sm font-medium">Email address</label>
    <Input id="example-notify" placeholder="you@example.com" />
  </SettingsSection>;
}
