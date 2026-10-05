"use client";

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

import { format } from "date-fns";
import { Lightbulb } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/status-notice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface BlogPostProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  author?: {
    name: string;
    website: string;
    websiteName: string;
    image: string;
  };
  image?: string;
  pubDate?: Date;
  description?: string;
}

export const BlogPost = ({
  className,
  children,
  title = "Designing websites faster with Leement",
  author = {
    name: "John Doe",
    website: "https://example.com",
    websiteName: "Example Company",
    image:
      "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
  },
  image = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
  pubDate = new Date(2026, 9, 5, 12),
  description = "A step-by-step guide to building a modern, responsive blog using React and Tailwind CSS.",
}: BlogPostProps) => {
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="max-w-3xl text-3xl sm:text-5xl font-semibold text-pretty md:text-6xl">
            {title}
          </h1>
          <h3 className="max-w-3xl text-lg text-muted-foreground md:text-xl">
            {description}
          </h3>
          <div className="flex flex-col items-center gap-1 text-sm md:flex-row md:gap-2 md:text-base">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src={author.image} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-semibold">{author.name}</span>
            </div>
            <span className="text-muted-foreground">
              Owner of{" "}
              <a
                href={author.website}
                className="font-semibold text-foreground hover:underline"
              >
                {author.websiteName}
              </a>
            </span>
            <span className="text-muted-foreground">
              Published on{" "}
              <time dateTime={pubDate.toISOString()}>
                {format(pubDate, "MMMM d, yyyy")}
              </time>
            </span>
          </div>
          <img
            src={image}
            alt="placeholder"
            className="mt-4 mb-8 aspect-video w-full rounded-lg border object-cover"
          />
        </div>
      </div>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto w-full min-w-0 space-y-4 text-foreground [&_h1]:text-4xl [&_h1]:font-semibold [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-medium [&_p]:leading-7 [&_blockquote]:border-s-2 [&_blockquote]:border-border [&_blockquote]:ps-4 [&_blockquote]:text-muted-foreground [&_ul]:list-disc [&_ul]:ps-5 [&_ol]:list-decimal [&_ol]:ps-5 [&_a]:text-primary [&_a]:underline [&_table]:w-full [&_th]:p-2 [&_td]:p-2 [&_tr]:border-b [&_tr]:border-border [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-muted [&_pre]:p-4 [&_code]:font-mono max-w-3xl ">
          {children ?? (
            <>
              <h2 className="text-3xl font-extrabold">The Great Joke Tax</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                In a kingdom far away, where laughter once flowed freely, a
                peculiar tale unfolded about a king who decided to tax the very
                essence of joy itself - jokes and jest.
              </p>

              <h2>How the Tax System Works</h2>
              <p>
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax. Jokester was
                declared a hero, and the kingdom lived happily ever after.
              </p>
              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Royal Decree!</AlertTitle>
                <AlertDescription>
                  Remember, all jokes must be registered at the Royal Jest
                  Office before telling them
                </AlertDescription>
              </Alert>
              <h2>The People&apos;s Rebellion</h2>
              <p>
                The people of the kingdom, feeling uplifted by the laughter,
                started to tell jokes and puns again, and soon the entire
                kingdom was in on the joke.
              </p>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>King&apos;s Treasury</th>
                      <th>People&apos;s happiness</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Empty</td>
                      <td>Overflowing</td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td>Modest</td>
                      <td>Satisfied</td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td>Full</td>
                      <td>Ecstatic</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax. Jokester was
                declared a hero, and the kingdom lived happily ever after.
              </p>

              <h2>The King&apos;s Plan</h2>

              <img
                src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E"
                alt="placeholder"
                className="my-8 aspect-video w-full rounded-md object-cover"
              />
              <p>
                The king thought long and hard, and finally came up with{" "}
                <a href="#">a brilliant plan</a>: he would tax the jokes in the
                kingdom.
              </p>
              <blockquote>
                &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
                joke, so it&apos;s only fair that they should pay for the
                privilege.&rdquo;
              </blockquote>
              <p>
                The king&apos;s subjects were not amused. They grumbled and
                complained, but the king was firm:
              </p>
              <ul>
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
              </ul>
              <p>
                As a result, people stopped telling jokes, and the kingdom fell
                into a gloom. But there was one person who refused to let the
                king&apos;s foolishness get him down: a court jester named
                Jokester.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
