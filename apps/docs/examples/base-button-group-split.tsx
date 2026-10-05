"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { PlusIcon as IconPlus } from "lucide-react";

import { Button } from "../../../registry/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "../../../registry/ui/button-group";

function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  );
}

export default function Example() {
  return <ButtonGroupSplit />;
}
