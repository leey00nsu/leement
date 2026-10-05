"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import { Button } from "../../../registry/ui/button";
import { toast } from "../../../registry/ui/toast";

function ToastDemo() {
  function showToast() {
    const id = toast.add({
      title: "Event created",
      description: "Sunday, December 3 at 9:00 AM",
      actionProps: {
        children: "Undo",
        onClick() {
          toast.close(id);
        },
      },
    });
  }

  return (
    <Button variant="outline" onClick={showToast}>
      Show Toast
    </Button>
  );
}

import { Toaster as ExampleToaster } from "../../../registry/ui/toast";

export default function Example() {
  return (
    <>
      <ExampleToaster />
      <ToastDemo />
    </>
  );
}
