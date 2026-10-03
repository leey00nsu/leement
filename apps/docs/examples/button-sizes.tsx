import { Plus } from "lucide-react";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  return (
    <div className="flex max-w-lg flex-wrap items-center justify-center gap-3">
      {(["xs", "sm", "default", "lg"] as const).map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
      <Button size="icon" aria-label="Add member">
        <Plus aria-hidden="true" />
      </Button>
      <Button size="icon-sm" variant="outline" aria-label="Add project">
        <Plus aria-hidden="true" />
      </Button>
      <Button asChild variant="outline">
        <a href="/getting-started">Installation guide</a>
      </Button>
    </div>
  );
}
