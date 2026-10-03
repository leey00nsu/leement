import { Glimpse } from "../../../registry/ui/glimpse";
export default function Example() {
  return (
    <p className="max-w-md text-sm leading-7">
      Read the{" "}
      <Glimpse
        href="/getting-started"
        label="installation guide"
        title="Getting started"
        description="Install the theme, configure the registry and own your component source."
      />{" "}
      to prepare your project.
    </p>
  );
}
