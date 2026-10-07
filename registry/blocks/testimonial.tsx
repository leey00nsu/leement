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

// Demo photos: Pixabay CC0 items published before 2019-01-09.
// Replace stock media and fictional sample content with your own licensed content.
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialProps {
  className?: string;
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

export const Testimonial = ({
  className,
  quote = "Sample testimonial: our fictional team keeps shared work clear and easy to follow. Replace this copy with a verified customer quote.",
  author = {
    name: "Alex Lee",
    role: "Fictional design engineer · stock portrait",
    avatar: {
      src: "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg",
      alt: "Sample profile: Alex Lee",
    },
  },
}: TestimonialProps) => {
  return (
    <section className={cn("w-full min-w-0 py-16", className)}>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <blockquote className="mb-12 max-w-4xl px-2 sm:px-8 font-medium text-lg lg:text-3xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />
              <AvatarFallback>
                {author.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium md:text-base">{author.name}</p>
              <p className="text-sm text-muted-foreground md:text-base">
                {author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
