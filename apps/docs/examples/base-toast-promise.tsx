"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).

import { Button } from "../../../registry/ui/button";
import { toast } from "../../../registry/ui/toast";

function ToastPromise() {
  function showToast() {
    toast.promise(
      new Promise<{ name: string }>((resolve) => {
        window.setTimeout(() => resolve({ name: "Event" }), 2000);
      }),
      {
        loading: "Creating event…",
        success: (data) => `${data.name} created.`,
        error: "Could not create event.",
      },
    );
  }

  return (
    <Button variant="outline" onClick={showToast}>
      Create Event
    </Button>
  );
}

import { Toaster as ExampleToaster } from "../../../registry/ui/toast";

export default function Example() {
  return (
    <>
      <ExampleToaster />
      <ToastPromise />
    </>
  );
}
