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

import { Download } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
  company: string;
  logo: string;
}

export interface ExperienceProps {
  heading?: string;
  buttonText?: string;
  buttonUrl?: string;
  experience?: ExperienceItem[];
  className?: string;
}

export const Experience = ({
  heading = "Sample experience",
  buttonText = "Download CV",
  buttonUrl = "#",
  experience = [
    {
      period: "Sep 2025 - Now",
      title: "Sr. Software Engineer",
      description:
        "Leading development of scalable web applications using React, TypeScript, and Node.js. Mentoring junior developers and implementing best practices.",
      company: "Example Studio",
      logo: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EES%3C%2Ftext%3E%3C%2Fsvg%3E",
    },
    {
      period: "Mar 2023 - Aug 2025",
      title: "Full Stack Developer",
      description:
        "Built and maintained multiple client websites and e-commerce platforms. Collaborated with design teams to implement pixel-perfect UI/UX designs.",
      company: "Example Company",
      logo: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EEC%3C%2Ftext%3E%3C%2Fsvg%3E",
    },
    {
      period: "Jan 2021 - Feb 2023",
      title: "Frontend Developer",
      description:
        "Developed responsive web applications using modern JavaScript frameworks. Optimized performance and accessibility across multiple projects.",
      company: "Design Team",
      logo: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EDT%3C%2Ftext%3E%3C%2Fsvg%3E",
    },
    {
      period: "Jun 2019 - Dec 2020",
      title: "Junior Developer",
      description:
        "Assisted in building web applications and learning modern development practices. Contributed to team projects and code reviews.",
      company: "Product Team",
      logo: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EPT%3C%2Ftext%3E%3C%2Fsvg%3E",
    },
  ],
  className,
}: ExperienceProps) => {
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6 space-y-10 lg:space-y-20">
        <div className="flex w-full flex-wrap items-end justify-between gap-4">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tighter lg:text-6xl">
            {heading}
          </h1>
          <Button asChild variant="ghost" size="lg" className="font-semibold">
            <a href={buttonUrl}>
              {buttonText} <Download className="size-4" />
            </a>
          </Button>
        </div>

        <ul>
          {!experience.length && (
            <li role="status" className="text-muted-foreground">
              No experience records.
            </li>
          )}
          {experience.map((exp, index) => (
            <li
              key={index}
              className="flex flex-col justify-between border-b py-10 md:flex-row"
            >
              <div className="max-w-lg text-xl tracking-tighter lg:w-1/3">
                {exp.period}
              </div>
              <div className="lg:w-1/3">
                <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
                  {exp.title}
                </h2>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
              <div className="flex items-start justify-end gap-3 text-right lg:w-1/4">
                <img src={exp.logo} alt="" className="size-6" />
                {exp.company}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
