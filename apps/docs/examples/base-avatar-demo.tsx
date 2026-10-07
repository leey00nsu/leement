"use client";
// Profiles are fictional; photographs do not depict actual Leement users.
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../../../registry/ui/avatar";

function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
      <Avatar>
        <AvatarImage
          src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg"
          alt="Sample profile: Alex Lee"
          className="grayscale"
        />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg"
          alt="Sample profile: Avery Chen"
        />
        <AvatarFallback>AC</AvatarFallback>
        <AvatarBadge className="bg-[var(--lm-color-status-success-foreground)] " />
      </Avatar>
      <AvatarGroup className="grayscale">
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
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}

export default function Example() {
  return <AvatarDemo />;
}
