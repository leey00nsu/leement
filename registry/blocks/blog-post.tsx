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

// Demo photos: Pixabay CC0 items published before 2019-01-09.
// Replace stock media and fictional sample content with your own licensed content.
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
  title = "Making space for collaboration",
  author = {
    name: "Alex Lee",
    website: "https://example.com",
    websiteName: "Example Studio",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg",
  },
  image = "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
  pubDate = new Date(2026, 9, 5, 12),
  description = "A fictional studio journal entry illustrated with stock photographs. The author is a sample profile, not the person photographed.",
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
                <AvatarImage src={author.image} alt={author.name} />
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
            alt={title}
            className="mt-4 mb-8 aspect-video w-full rounded-lg border object-cover"
          />
        </div>
      </div>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto w-full min-w-0 space-y-4 text-foreground [&_h1]:text-4xl [&_h1]:font-semibold [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-medium [&_p]:leading-7 [&_blockquote]:border-s-2 [&_blockquote]:border-border [&_blockquote]:ps-4 [&_blockquote]:text-muted-foreground [&_ul]:list-disc [&_ul]:ps-5 [&_ol]:list-decimal [&_ol]:ps-5 [&_a]:text-primary [&_a]:underline [&_table]:w-full [&_th]:p-2 [&_td]:p-2 [&_tr]:border-b [&_tr]:border-border [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-muted [&_pre]:p-4 [&_code]:font-mono max-w-3xl ">
          {children ?? (
            <>
              <h2 className="text-3xl font-extrabold">Working around a shared table</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                A good workspace gives people room to exchange ideas and time to focus.
                This sample article uses a workshop photograph to show an editorial cover,
                followed by a coding desk photograph inside the body.
              </p>
              <h2>Keep the conversation clear</h2>
              <p>Bring a short agenda, leave space for questions, and write down decisions before the meeting ends.</p>
              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Sample journal</AlertTitle>
                <AlertDescription>The studio, author and story are fictional. Photographs are credited to their Pixabay creators.</AlertDescription>
              </Alert>
              <h2>Balance collaboration and focus</h2>
              <p>Choose the right space for the work rather than asking every activity to fit the same room.</p>
              <div>
                <table>
                  <thead><tr><th>Activity</th><th>Workspace</th></tr></thead>
                  <tbody>
                    <tr><td>Sharing ideas</td><td>Workshop table</td></tr>
                    <tr className="m-0 border-t p-0 even:bg-muted"><td>Focused coding</td><td>Quiet desk</td></tr>
                    <tr className="m-0 border-t p-0 even:bg-muted"><td>Making decisions</td><td>Meeting room</td></tr>
                  </tbody>
                </table>
              </div>
              <h2>A desk for focused work</h2>
              <img
                src="https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_1280.jpg"
                alt="A notebook computer with code on its screen"
                loading="lazy"
                className="my-8 aspect-video w-full rounded-md object-cover"
              />
              <p>After a group session, a quiet desk makes it easier to turn notes into a first draft.</p>
              <blockquote>Leave the table with a shared decision and return to the desk with a clear next step.</blockquote>
              <ul><li>Prepare a short agenda.</li><li>Record questions and decisions.</li><li>Reserve time for focused work.</li></ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
