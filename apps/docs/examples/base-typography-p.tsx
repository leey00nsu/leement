"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
function TypographyP() {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
  );
}

export default function Example() {
  return <TypographyP />;
}
