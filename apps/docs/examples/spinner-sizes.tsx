import { Spinner } from "../../../registry/ui/spinner";
export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-3">
          <Spinner size={size} label={`Loading ${size} content`} />
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  );
}
