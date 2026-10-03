import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../registry/ui/avatar";
import { AvatarStack } from "../../../registry/ui/avatar-stack";
export default function Example() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {[28, 44].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <AvatarStack size={size} animate aria-label="Alex, Blair and Casey">
            {["Alex", "Blair", "Casey"].map((name) => (
              <Avatar key={name}>
                <AvatarImage src="/demo-scene.svg" alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
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
