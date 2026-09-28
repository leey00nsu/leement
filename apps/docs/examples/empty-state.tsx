import { FolderPlus } from "lucide-react";
import { Button } from "../../../registry/ui/button";
import { EmptyState } from "../../../registry/patterns/empty-state";

export default function EmptyStateExample() {
  return <EmptyState className="w-full" icon={<FolderPlus className="size-8" />} title="No projects yet" description="Create a project to give your team a place for tasks, files and decisions." action={<Button>Create project</Button>} />;
}
