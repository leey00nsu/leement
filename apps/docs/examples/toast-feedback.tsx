"use client";
import { useState } from "react";
import { Button } from "../../../registry/ui/button";
import { toast } from "../../../registry/ui/toast";
export default function Example() {
  const [result, setResult] = useState("No action yet");
  return (
    <div className="w-full max-w-lg space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast.info("Your export is ready")}
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning("Storage is nearly full")}
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Could not save changes")}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(
              new Promise<string>((resolve) =>
                setTimeout(() => resolve("Export prepared"), 1200),
              ),
              {
                loading: "Preparing export…",
                success: (value) => value,
                error: "Export failed",
              },
            )
          }
        >
          Promise
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Member removed", {
              action: {
                label: "Undo",
                onClick: () => setResult("Member restored"),
              },
            })
          }
        >
          Undo action
        </Button>
        <Button variant="ghost" onClick={() => toast.dismiss()}>
          Dismiss all
        </Button>
      </div>
      <p role="status" className="text-sm">
        {result}
      </p>
    </div>
  );
}
