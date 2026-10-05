"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { CircleFadingArrowUpIcon } from "lucide-react";

import { Button } from "../../../registry/ui/button";

function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  );
}

export default function Example() {
  return <ButtonIcon />;
}
