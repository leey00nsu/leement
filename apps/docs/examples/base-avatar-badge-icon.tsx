"use client";
// Profiles are fictional; photographs do not depict actual Leement users.
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { PlusIcon } from "lucide-react";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "../../../registry/ui/avatar";

function AvatarBadgeIconExample() {
  return (
    <Avatar className="grayscale">
      <AvatarImage src="https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_640.jpg" alt="Sample profile: Casey Reed" />
      <AvatarFallback>CR</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  );
}

export default function Example() {
  return <AvatarBadgeIconExample />;
}
