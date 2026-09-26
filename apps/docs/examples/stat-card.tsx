import { StatCard } from "../../../registry/patterns/stat-card";

export default function StatCardExample() {
  return <StatCard className="w-full max-w-xs" label="Active members" value="1,248" detail="Up 12% this month" />;
}
