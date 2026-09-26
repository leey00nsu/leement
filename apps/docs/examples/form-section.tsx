import { Input } from "../../../registry/ui/input";
import { FormSection } from "../../../registry/patterns/form-section";

export default function FormSectionExample() {
  return <FormSection className="w-full" title="Profile" description="This information is visible to your team.">
    <label htmlFor="example-name" className="text-sm font-medium">Name</label>
    <Input id="example-name" placeholder="Your name" />
  </FormSection>;
}
