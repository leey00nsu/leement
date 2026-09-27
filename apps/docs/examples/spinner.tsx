import { Spinner, type SpinnerVariant } from "../../../registry/ui/spinner";

const variants: SpinnerVariant[] = ["default", "throbber", "pinwheel", "circle-filled", "ellipsis", "ring", "bars", "infinite"];

export default function SpinnerExample() {
  return <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-4">
    {variants.map((variant) => <div key={variant} className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-md border border-border bg-card p-2 text-center">
      <Spinner variant={variant} size="lg" label={`Loading with ${variant} spinner`} />
      <span className="text-xs text-muted-foreground">{variant}</span>
    </div>)}
  </div>;
}
