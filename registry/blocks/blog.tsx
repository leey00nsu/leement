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

import { ArrowRight } from "lucide-react";

// Demo photos: Pixabay CC0 items published before 2019-01-09.
// Replace stock media and fictional sample content with your own licensed content.
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export interface BlogPostSummary {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

export interface BlogProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: BlogPostSummary[];
  className?: string;
}

export const Blog = ({
  tagline = "Sample journal",
  heading = "Blog",
  description = "Fictional editorial stories illustrated with stock photographs of collaboration, coding and meeting spaces.",
  buttonText = "View all posts",
  buttonUrl,
  posts = [
  {
    id: "post-1",
    title: "Making space for collaboration",
    summary: "A sample story about sharing ideas around a workshop table.",
    label: "Workspaces",
    author: "Alex Lee",
    published: "5 Oct 2026",
    url: "https://example.com/articles/collaboration",
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg"
  },
  {
    id: "post-2",
    title: "A quiet desk for focused work",
    summary: "A sample story about notebooks, code and a comfortable place to think.",
    label: "Engineering",
    author: "Morgan Park",
    published: "5 Oct 2026",
    url: "https://example.com/articles/focused-work",
    image: "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_1280.jpg"
  },
  {
    id: "post-3",
    title: "Preparing a room for shared decisions",
    summary: "A sample story about meeting spaces that support a clear conversation.",
    label: "Studio",
    author: "Avery Chen",
    published: "5 Oct 2026",
    url: "https://example.com/articles/meeting-spaces",
    image: "https://cdn.pixabay.com/photo/2016/07/14/08/25/office-1516329_1280.jpg"
  }
],
  className,
}: BlogProps) => {
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-3xl sm:text-5xl tracking-tighter text-pretty md:mb-4 lg:mb-6 lg:max-w-3xl lg:text-7xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        {buttonUrl && (
          <Button asChild>
            <a href={buttonUrl}>{buttonText}</a>
          </Button>
        )}
        {!posts.length && <p role="status">No posts to display.</p>}
        <div className="grid w-full min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0"
            >
              <div className="aspect-video w-full">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="   hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-xl hover:underline md:text-xl">
                  <a href={post.url} target="_blank" rel="noreferrer">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm font-semibold text-foreground/80">
                  {post.author} · {post.published}
                </p>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {post.summary}
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-muted-foreground hover:underline"
                >
                  <span className="sr-only">Read </span>
                  <span>{post.title}</span>
                  <ArrowRight className="ml-1 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
