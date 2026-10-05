"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
function TypographyMuted() {
  return (
    <p className="text-sm text-muted-foreground">Enter your email address.</p>
  );
}

export default function Example() {
  return <TypographyMuted />;
}
