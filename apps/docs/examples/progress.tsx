import { Progress, ProgressLabel, ProgressValue } from "../../../registry/ui/progress";

export default function ProgressExample() {
  return <Progress value={64} className="w-full max-w-sm"><ProgressLabel>Upload progress</ProgressLabel><ProgressValue /></Progress>;
}
