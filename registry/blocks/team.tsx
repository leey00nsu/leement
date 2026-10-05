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

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TeamProps {
  heading?: string;
  description?: string;
  members?: TeamMember[];
  className?: string;
}

export const Team = ({
  heading = "Team",
  description = "Our diverse team of experts brings together decades of experience in design, engineering, and product development.",
  members = [
    {
      id: "member-1",
      name: "Sarah Chen",
      role: "CEO & Founder",
      avatar:
        "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
    },
    {
      id: "member-2",
      name: "Marcus Rodriguez",
      role: "CTO",
      avatar:
        "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
    },
    {
      id: "member-3",
      name: "Emily Watson",
      role: "Head of Design",
      avatar:
        "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
    },
    {
      id: "member-4",
      name: "David Kim",
      role: "Lead Engineer",
      avatar:
        "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
    },
    {
      id: "member-5",
      name: "Lisa Thompson",
      role: "Product Manager",
      avatar:
        "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
    },
    {
      id: "member-6",
      name: "Alex Johnson",
      role: "UX Designer",
      avatar:
        "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
    },
  ],
  className,
}: TeamProps) => {
  return (
    <section className={cn("w-full min-w-0 py-16", className)}>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          {description}
        </p>
      </div>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6 mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {!members.length && (
          <p role="status" className="text-muted-foreground">
            No team members to display.
          </p>
        )}
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 shrink-0 border md:mb-5 lg:size-24">
              <AvatarImage src={member.avatar} />
              <AvatarFallback>
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{member.name}</p>
            <p className="text-center text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
