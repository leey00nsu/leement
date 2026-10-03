import { AspectRatio } from "../../../registry/ui/aspect-ratio";
export default function Example() {
  return (
    <div className="grid w-full max-w-lg gap-5 sm:grid-cols-2">
      {[1, 16 / 9].map((ratio) => (
        <figure key={ratio} className="space-y-2">
          <AspectRatio ratio={ratio} className="overflow-hidden rounded-lg">
            <img
              src="/demo-scene.svg"
              alt="Illustrated landscape"
              className="size-full object-cover"
            />
          </AspectRatio>
          <figcaption className="text-sm text-muted-foreground">
            {ratio === 1 ? "1 : 1" : "16 : 9"}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
