import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../../registry/ui/card";
import { Button } from "../../../registry/ui/button";
export default function Example() {
  return (
    <div className="grid w-full max-w-xl gap-5 sm:grid-cols-2">
      {(["sm", "default"] as const).map((size) => (
        <Card key={size} size={size}>
          <img
            src="/demo-scene.svg"
            alt="Illustrated landscape"
            className="aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle>Landscape · {size}</CardTitle>
            <CardDescription>A shared visual study.</CardDescription>
          </CardHeader>
          <CardContent>Built with editable source.</CardContent>
          <CardFooter>
            <Button asChild size="sm" variant="outline">
              <a href="/showcase">Explore examples</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
