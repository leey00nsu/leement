"use client";
// Adapted from shadcn/ui commit 295a1f114a138f23b5dfee0e0c6812394dfeb90c (MIT).
import { AlertTriangleIcon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../registry/ui/status-notice";

function AlertColors() {
  return (
    <Alert className="max-w-md border-[var(--lm-color-status-warning-foreground)] bg-[var(--lm-color-status-warning)] text-[var(--lm-color-status-warning-foreground)]   ">
      <AlertTriangleIcon />
      <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
      <AlertDescription>
        Renew now to avoid service interruption or upgrade to a paid plan to
        continue using the service.
      </AlertDescription>
    </Alert>
  );
}

export default function Example() {
  return <AlertColors />;
}
