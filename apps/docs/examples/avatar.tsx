import { Avatar, AvatarFallback } from "../../../registry/ui/avatar";

export default function AvatarExample() {
  return <div className="flex items-center gap-3"><Avatar><AvatarFallback>LM</AvatarFallback></Avatar><span className="text-sm">Leement member</span></div>;
}
