"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import { AspectRatio } from "../../../registry/ui/aspect-ratio";

function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted">
      <img
        src="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg"
        alt="Hintersee lake reflecting mountains and trees"
        className="size-full rounded-lg object-cover"
      />
    </AspectRatio>
  );
}

export default function Example() {
  return <AspectRatioDemo />;
}
