import { Input } from "../../../registry/ui/input";
import { FormSection } from "../../../registry/patterns/form-section";

export default function FormSectionExample() {
  return <FormSection className="w-full" title="Profile" description="This information is visible to your team.">
    <div className="space-y-2"><label htmlFor="example-name" className="text-sm font-medium">Name</label><Input id="example-name" defaultValue="Alex Morgan" /></div>
    <div className="space-y-2"><label htmlFor="example-role" className="text-sm font-medium">Role</label><Input id="example-role" defaultValue="Design lead" /></div>
  </FormSection>;
}
