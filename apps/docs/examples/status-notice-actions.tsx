"use client";
import { useState } from "react";
import { StatusNotice } from "../../../registry/ui/status-notice";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  const [retried, setRetried] = useState(false);
  return (
    <div className="w-full max-w-md space-y-4">
      <StatusNotice
        tone={retried ? "success" : "destructive"}
        title={retried ? "Local retry requested" : "Upload interrupted"}
        description={
          retried
            ? "Connect this callback to your upload service."
            : "Check your connection and retry."
        }
        action={
          !retried && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setRetried(true)}
            >
              Retry upload
            </Button>
          )
        }
      />
      <StatusNotice
        tone="neutral"
        title="New to the workspace?"
        description="Learn how shared components are installed."
        action={
          <Button asChild size="sm" variant="outline">
            <a href="/getting-started">Read guide</a>
          </Button>
        }
      />
    </div>
  );
}
