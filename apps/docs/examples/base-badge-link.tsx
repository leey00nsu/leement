"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "../../../registry/ui/badge";

function BadgeAsLink() {
  return (
    <Badge render={<a href="#link" />}>
      Open Link <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  );
}

export default function Example() {
  return <BadgeAsLink />;
}
