"use client";
// Profiles are fictional; photographs do not depict actual Leement users.
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../registry/ui/avatar";

function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg"
        alt="Sample profile: Alex Lee"
        className="grayscale"
      />
      <AvatarFallback>AL</AvatarFallback>
    </Avatar>
  );
}

export default function Example() {
  return <AvatarDemo />;
}
