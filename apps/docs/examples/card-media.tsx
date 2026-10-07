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
            src="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg"
            alt="Hintersee lake reflecting mountains and trees"
            className="aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle>Landscape · {size}</CardTitle>
            <CardDescription>Hintersee lake · photo by jplenio.</CardDescription>
          </CardHeader>
          <CardContent>Mountains and trees reflected in the lake.</CardContent>
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
