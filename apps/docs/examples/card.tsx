import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../registry/ui/card";
import { Button } from "../../../registry/ui/button";

export default function CardExample() {
  return <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Workspace</CardTitle>
      <CardDescription>A contained group of related information.</CardDescription>
      <CardAction><Button variant="ghost" size="sm">Manage</Button></CardAction>
    </CardHeader>
    <CardContent><p className="text-sm">12 active members</p></CardContent>
    <CardFooter className="justify-between"><span className="text-muted-foreground">Updated today</span><Button variant="outline" size="sm">View details</Button></CardFooter>
  </Card>;
}
