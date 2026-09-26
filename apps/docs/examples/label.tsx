import { Input } from "../../../registry/ui/input";
import { Label } from "../../../registry/ui/label";

export default function LabelExample() {
  return <div className="w-full max-w-xs space-y-2"><Label htmlFor="example-label-input">Display name</Label><Input id="example-label-input" placeholder="Your name" /></div>;
}
