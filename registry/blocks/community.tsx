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

import { ArrowUpRight } from "lucide-react";
import { MessageCircle, Code2, Users, Newspaper } from "lucide-react";
import { useStyleMotion } from "@/lib/leement-motion";

import { cn } from "@/lib/utils";

export interface CommunitySocialLink {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

export interface CommunityProps {
  heading?: string;
  description?: string;
  socialLinks?: CommunitySocialLink[];
  className?: string;
}

export const Community = ({
  heading = "Join our community",
  description = "Connect with others, share experiences, and stay in the loop.",
  socialLinks = [
    {
      icon: <Newspaper className="size-5" />,
      title: "Updates",
      description: "Follow our latest updates and announcements.",
      url: "https://example.com/updates",
    },
    {
      icon: <Users className="size-5" />,
      title: "Careers",
      description: "Connect with us and explore career opportunities.",
      url: "https://example.com/careers",
    },
    {
      icon: <Code2 className="size-5" />,
      title: "Source",
      description: "Contribute to our open-source projects.",
      url: "https://example.com/community",
    },
    {
      icon: <MessageCircle className="size-5" />,
      title: "Discussion",
      description:
        "Join our discussion space and connect with other developers.",
      url: "#",
    },
  ],
  className,
}: CommunityProps) => {
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl">{heading}</h2>
        <p className="font-medium text-muted-foreground md:text-xl">
          {description}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {!socialLinks.length && (
            <p role="status" className="text-muted-foreground">
              No community links.
            </p>
          )}
          {socialLinks.map((link, index) => (
            <CommunityLink key={index} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
};

function CommunityLink({ link }: { link: CommunitySocialLink }) {
  const motionRef = useStyleMotion<SVGSVGElement>(undefined, [
    "transform",
    "opacity",
  ]);
  return (
    <a
      className="group rounded-md border border-border p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      href={link.url}
    >
      <div className="flex items-center justify-between gap-4">
        {link.icon}
        <ArrowUpRight
          ref={motionRef}
          aria-hidden="true"
          className="size-4 -translate-x-2 translate-y-2 opacity-0  group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
        />
      </div>
      <div className="mt-4">
        <h3 className="mb-1 font-semibold">{link.title}</h3>
        <p className="text-sm text-muted-foreground">{link.description}</p>
      </div>
    </a>
  );
}
