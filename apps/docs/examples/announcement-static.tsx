import { Announcement } from "../../../registry/ui/announcement";
export default function Example() {
  return (
    <div className="w-full max-w-xl space-y-4">
      <Announcement
        label="Maintenance"
        title="Scheduled maintenance on Sunday, 02:00–03:00"
        dismissible={false}
      />
      <Announcement
        label="Guide"
        title="Learn to install editable components"
        href="/getting-started"
        dismissible={false}
      />
    </div>
  );
}
