"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  GitBranchIcon as IconGitBranch,
  GitForkIcon as IconGitFork,
} from "lucide-react";

import { Button } from "../../../registry/ui/button";

function ButtonWithIcon() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <IconGitBranch data-icon="inline-start" /> New Branch
      </Button>
      <Button variant="outline">
        Fork
        <IconGitFork data-icon="inline-end" />
      </Button>
    </div>
  );
}

export default function Example() {
  return <ButtonWithIcon />;
}
