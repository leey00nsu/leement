import { AspectRatio } from "../../../registry/ui/aspect-ratio";
export default function Example() {
  return (
    <div className="grid w-full max-w-lg gap-5 sm:grid-cols-2">
      {[1, 16 / 9].map((ratio) => (
        <figure key={ratio} className="space-y-2">
          <AspectRatio ratio={ratio} className="overflow-hidden rounded-lg">
            <img
              src="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg"
              alt="Hintersee lake reflecting mountains and trees"
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
