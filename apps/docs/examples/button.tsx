import { Button } from "../../../registry/ui/button";

export default function ButtonExample() {
  return <div className="flex max-w-lg flex-wrap items-center gap-3">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
    <Button disabled>Disabled</Button>
    <Button loading>Saving</Button>
  </div>;
}
