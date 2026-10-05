"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  ArrowUpRightIcon,
  FolderCodeIcon as IconFolderCode,
} from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../../registry/patterns/empty-state";
import { Button } from "../../../registry/ui/button";

function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
      <Button
        variant="link"
        render={<a href="#" />}
        className="text-muted-foreground"
        size="sm"
        nativeButton={false}
      >
        Learn More <ArrowUpRightIcon />
      </Button>
    </Empty>
  );
}

export default function Example() {
  return <EmptyDemo />;
}
