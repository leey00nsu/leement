"use client";

import { ContributionGraph } from "../../../registry/ui/contribution-graph";

const data = Array.from({ length: 365 }, (_, index) => {
  const date = new Date(2026, 0, index + 1, 12);
  return {
    date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
    count: date.getDay() === 0 ? 0 : (index * 17 + Math.floor(index / 7)) % 9,
  };
});

export default function ContributionGraphExample() {
  return <ContributionGraph className="w-full" startDate="2026-01-01" endDate="2026-12-31" data={data} />;
}
