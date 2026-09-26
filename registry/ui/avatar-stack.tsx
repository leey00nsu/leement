// Adapted from Kibo UI (MIT); see THIRD_PARTY_NOTICES.md.
import { Children, type ReactNode, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type AvatarStackProps = ComponentProps<"div"> & {
  children: ReactNode;
  animate?: boolean;
  size?: number;
};

export const AvatarStack = ({
  children,
  className,
  animate = false,
  size = 40,
  ...props
}: AvatarStackProps) => (
  <div
    data-slot="avatar-stack"
    role="group"
    className={cn(
      "-space-x-1 flex items-center",
      animate && "hover:space-x-0 [&>*]:transition-all",
      className
    )}
    {...props}
  >
    {Children.map(children, (child, index) => {
      if (!child) {
        return null;
      }

      return (
        <div
          className={cn(
            "size-full shrink-0 overflow-hidden rounded-full border-2 border-background",
            '[&_[data-slot="avatar"]]:size-full',
          )}
          style={{
            width: size,
            height: size,
            maskImage: index
              ? `radial-gradient(circle ${size / 2}px at -${size / 4 + size / 10}px 50%, transparent 99%, white 100%)`
              : "",
          }}
        >
          {child}
        </div>
      );
    })}
  </div>
);
