import { Avatar, AvatarFallback } from "../../../registry/ui/avatar";
import { AvatarStack } from "../../../registry/ui/avatar-stack";

export default function AvatarStackExample() {
  return <div className="flex items-center gap-3"><AvatarStack aria-label="Alex, Blair, Casey, Dana and Eli" size={36}><Avatar><AvatarFallback>AL</AvatarFallback></Avatar><Avatar><AvatarFallback>BM</AvatarFallback></Avatar><Avatar><AvatarFallback>CY</AvatarFallback></Avatar><Avatar><AvatarFallback>DN</AvatarFallback></Avatar><Avatar><AvatarFallback>EL</AvatarFallback></Avatar></AvatarStack><span className="text-sm">5 collaborators</span></div>;
}
