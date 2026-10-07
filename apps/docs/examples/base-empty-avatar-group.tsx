"use client";
// Profiles are fictional; photographs do not depict actual Leement users.
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { PlusIcon } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../../registry/patterns/empty-state";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../registry/ui/avatar";
import { Button } from "../../../registry/ui/button";

function EmptyAvatarGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg" alt="Sample profile: Alex Lee" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_640.jpg"
                alt="Sample profile: Morgan Park"
              />
              <AvatarFallback>MP</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg"
                alt="Sample profile: Avery Chen"
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>Sample team</EmptyTitle>
        <EmptyDescription>
          Invite your team to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  );
}

export default function Example() {
  return <EmptyAvatarGroup />;
}
