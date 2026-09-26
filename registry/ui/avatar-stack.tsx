import { Children, type ReactNode, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

/*
 * Adapted from Kibo UI: https://github.com/shadcnblocks/kibo
 * Kibo UI MIT license follows. Keep this notice with the source.
 *
 * Copyright (c) 2023 — Present shadcnblocks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

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
