"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { CheckCircle2Icon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../registry/ui/status-notice";

function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected
        immediately.
      </AlertDescription>
    </Alert>
  );
}

export default function Example() {
  return <AlertBasic />;
}
