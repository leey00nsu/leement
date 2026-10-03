"use client";
import { useState } from "react";
import { Pill } from "../../../registry/ui/pill";
export default function Example() {
  const [removed, setRemoved] = useState(false);
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Pill label="Design" trailing={<span className="font-mono">12</span>} />
        <Pill label="Required" disabled onRemove={() => setRemoved(true)} />
      </div>
      <p role="status" className="text-sm">
        {removed ? "Removed" : "Required value remains locked"}
      </p>
    </div>
  );
}
