"use client";
import { ContributionGraph } from "../../../registry/ui/contribution-graph";
export default function ContributionGraphExample() { return <ContributionGraph startDate="2026-09-01" endDate="2026-09-28" data={[{ date: "2026-09-03", count: 2 }, { date: "2026-09-04", count: 7 }, { date: "2026-09-11", count: 4 }, { date: "2026-09-22", count: 9 }]} />; }
