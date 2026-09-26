import { Textarea } from "../../../registry/ui/textarea";

export default function TextareaExample() {
  return <div className="w-full max-w-md space-y-3">
    <label htmlFor="example-textarea" className="text-sm font-medium">Description</label>
    <Textarea id="example-textarea" placeholder="Tell us more..." />
  </div>;
}
