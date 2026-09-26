import { Button } from "../../../registry/ui/button";
import { EmptyState } from "../../../registry/patterns/empty-state";

export default function EmptyStateExample() {
  return <EmptyState className="w-full" title="No projects yet" description="Create a project to start organizing your work." action={<Button>Create project</Button>} />;
}
