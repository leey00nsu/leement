import { Separator } from "../../../registry/ui/separator";
export default function Example() {
  return (
    <div className="w-full max-w-sm space-y-5">
      <div className="flex h-10 items-center gap-4 text-sm">
        <span>Profile</span>
        <Separator orientation="vertical" />
        <span>Preferences</span>
      </div>
      <p className="text-sm">End of account details</p>
      <Separator decorative={false} />
      <p className="text-sm">Billing details begin here.</p>
    </div>
  );
}
