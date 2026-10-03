import { Status, StatusIndicator, StatusLabel } from "../../../registry/ui/status";

export default function StatusExample() {
  return <div className="flex flex-wrap justify-center gap-2">
    <Status label="Draft" />
    <Status tone="success"><StatusIndicator pulse /><StatusLabel>Online</StatusLabel></Status>
    <Status tone="warning" label="Needs review" />
    <Status tone="danger" label="Blocked" />
  </div>;
}
