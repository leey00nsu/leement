import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../registry/ui/avatar";
import { AvatarStack } from "../../../registry/ui/avatar-stack";
const people = [
  { name: "Alex Lee", initials: "AL", src: "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg" },
  { name: "Morgan Park", initials: "MP", src: "https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_640.jpg" },
  { name: "Casey Reed", initials: "CR", src: "https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_640.jpg" },
];
// Fictional sample profiles using stock portraits.
export default function Example() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {[28, 44].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <AvatarStack size={size} animate aria-label="Sample profiles: Alex Lee, Morgan Park and Casey Reed">
            {people.map((person) => (
              <Avatar key={person.name}>
                <AvatarImage src={person.src} alt={`Sample profile: ${person.name}`} />
                <AvatarFallback>{person.initials}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarStack>
          <p className="text-xs text-muted-foreground">
            {size}px · hover to expand
          </p>
        </div>
      ))}
    </div>
  );
}
