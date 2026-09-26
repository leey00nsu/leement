import { Separator } from "../../../registry/ui/separator";

export default function SeparatorExample() {
  return <div className="w-full max-w-sm space-y-4">
    <p>Profile</p>
    <Separator />
    <p>Preferences</p>
  </div>;
}
