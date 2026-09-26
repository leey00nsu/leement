import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../registry/ui/card";

export default function CardExample() {
  return <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Workspace</CardTitle>
      <CardDescription>A contained group of related information.</CardDescription>
    </CardHeader>
    <CardContent><p className="text-sm">12 active members</p></CardContent>
  </Card>;
}
