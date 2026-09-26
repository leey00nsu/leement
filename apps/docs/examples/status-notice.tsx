import { StatusNotice } from "../../../registry/ui/status-notice";

export default function StatusNoticeExample() {
  return <div className="w-full max-w-md space-y-3">
    <StatusNotice tone="success" title="Changes saved" description="Your workspace settings are up to date." />
    <StatusNotice tone="warning" title="Storage is nearly full" description="Review large files before uploading more." />
  </div>;
}
