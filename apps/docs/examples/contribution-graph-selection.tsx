"use client";
import { useState } from "react";
import { ContributionGraph } from "../../../registry/ui/contribution-graph";
const data = Array.from({ length: 31 }, (_, i) => ({
  date: `2026-10-${String(i + 1).padStart(2, "0")}`,
  count: i % 6,
}));
export default function Example() {
  const [result, setResult] = useState("Select a day");
  return (
    <div className="w-full max-w-md space-y-4">
      <ContributionGraph
        startDate="2026-10-01"
        endDate="2026-10-31"
        locale="ko-KR"
        data={data}
        onSelect={(day) => setResult(`${day.date}: ${day.count} contributions`)}
      />
      <p role="status" className="text-sm">
        {result}
      </p>
    </div>
  );
}
