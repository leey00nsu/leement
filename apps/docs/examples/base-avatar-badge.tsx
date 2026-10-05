"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "../../../registry/ui/avatar";

function AvatarWithBadge() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-[var(--lm-color-status-success-foreground)] " />
    </Avatar>
  );
}

export default function Example() {
  return <AvatarWithBadge />;
}
