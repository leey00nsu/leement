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
        src="https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_640.jpg"
        alt="Stock portrait of a woman in a white blouse"
        className="size-full rounded-lg object-cover"
      />
    </AspectRatio>
  );
}

export default function Example() {
  return <AspectRatioPortrait />;
}
