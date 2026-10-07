"use client";
// Profiles are fictional; photographs do not depict actual Leement users.
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../../../registry/ui/avatar";

function AvatarGroupCountExample() {
  return (
    <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg" alt="Sample profile: Alex Lee" />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_640.jpg" alt="Sample profile: Morgan Park" />
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
  );
}

export default function Example() {
  return <AvatarGroupCountExample />;
}
