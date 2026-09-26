import { CircleCheck } from "lucide-react";
import { StatePanel } from "../../../registry/patterns/state-panel";

export default function StatePanelExample() {
  return <StatePanel className="w-full" title="All caught up" description="You have reviewed every pending request." tone="success" icon={<CircleCheck />} />;
}
