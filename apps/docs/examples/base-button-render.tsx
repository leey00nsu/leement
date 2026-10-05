"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { buttonVariants } from "../../../registry/ui/button";

function ButtonRender() {
  return (
    <a
      href="#"
      className={buttonVariants({ variant: "secondary", size: "sm" })}
    >
      Login
    </a>
  );
}

export default function Example() {
  return <ButtonRender />;
}
