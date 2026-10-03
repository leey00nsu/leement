import { Banner } from "../../../registry/ui/banner";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  return (
    <Banner
      tone="subtle"
      title="Configure your product theme"
      description="Set semantic roles before composing product screens."
      action={
        <Button asChild variant="outline" size="sm">
          <a href="/foundations/color">Explore color</a>
        </Button>
      }
    />
  );
}
