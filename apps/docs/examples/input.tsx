import { Input } from "../../../registry/ui/input";

export default function InputExample() {
  return <div className="w-full max-w-sm space-y-3">
    <label htmlFor="example-input" className="text-sm font-medium">Email</label>
    <Input id="example-input" type="email" placeholder="you@example.com" />
    <Input aria-label="Choose an attachment" type="file" />
    <Input aria-label="Disabled input" disabled placeholder="Unavailable" />
  </div>;
}
