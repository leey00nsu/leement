"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import { AspectRatio } from "../../../registry/ui/aspect-ratio";

function AspectRatioPortrait() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="w-full max-w-[10rem] rounded-lg bg-muted"
    >
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  );
}

export default function Example() {
  return <AspectRatioPortrait />;
}
