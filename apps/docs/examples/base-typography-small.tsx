"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
function TypographySmall() {
  return (
    <small className="text-sm leading-none font-medium">Email address</small>
  );
}

export default function Example() {
  return <TypographySmall />;
}
