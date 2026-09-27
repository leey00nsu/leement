import { Avatar, AvatarFallback } from "../../../registry/ui/avatar";

export default function AvatarExample() {
  return <div className="flex items-center gap-3"><Avatar><AvatarFallback>AL</AvatarFallback></Avatar><div><p className="text-sm font-medium">Alex Lee</p><p className="text-xs text-muted-foreground">Design lead · online</p></div></div>;
}
