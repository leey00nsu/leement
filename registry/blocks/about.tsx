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

// Demo photos: Pixabay CC0 items published before 2019-01-09.
// Replace stock media and fictional sample content with your own licensed content.
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

export interface AboutProps {
  className?: string;
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src?: string;
    alt?: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }> | null;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  contentSections?: Array<{
    title: string;
    content: string;
  }>;
}

export const About = ({ className, ...props }: AboutProps = {}) => {
  const {
    title = defaultProps.title,
    description = defaultProps.description,
    mainImage = defaultProps.mainImage,
    secondaryImage = defaultProps.secondaryImage,
    breakout = defaultProps.breakout,
    companiesTitle = defaultProps.companiesTitle,
    companies = defaultProps.companies,
    achievementsTitle = defaultProps.achievementsTitle,
    achievementsDescription = defaultProps.achievementsDescription,
    achievements = defaultProps.achievements,
    contentSections = defaultProps.contentSections,
  } = props;
  return (
    <section className={cn("w-full min-w-0 py-16", className)}>
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14 flex flex-col gap-5 lg:w-2/3">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-5 md:w-1/2 lg:w-auto">
              {breakout.src && (
                <img
                  src={breakout.src}
                  alt={breakout.alt}
                  className="mr-auto h-12 max-w-full object-contain"
                />
              )}
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              {breakout.buttonUrl && breakout.buttonText && (
                <Button
                  variant="outline"
                  className="mr-auto max-w-full whitespace-normal"
                  asChild
                >
                  <a href={breakout.buttonUrl} target="_blank" rel="noreferrer">
                    {breakout.buttonText}
                  </a>
                </Button>
              )}
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        {companies && (
          <div className="py-16">
            <Marquee
              label={companiesTitle}
              items={companies.map((company, index) => (
                <span key={index} className="flex items-center gap-3 px-6">
                  <img
                    src={company.src}
                    alt=""
                    className="h-8 w-12 object-contain"
                  />
                  <span className="text-sm font-medium">{company.alt}</span>
                </span>
              ))}
              className="border-0 bg-transparent"
            />
          </div>
        )}
        <div className="relative overflow-hidden rounded-xl bg-muted p-5 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl font-medium md:text-4xl">
              {achievementsTitle}
            </h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-between">
            {achievements?.map((item, idx) => (
              <div
                className="flex flex-col gap-2 text-center md:text-left"
                key={item.label + String(idx)}
              >
                <span className="tabular-nums text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
                <p className="text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        {contentSections && contentSections.length > 0 && (
          <div className="mx-auto grid max-w-5xl gap-12 py-16 md:grid-cols-2 md:gap-20">
            {contentSections.map((section, idx) => (
              <div key={section.title + String(idx)}>
                <h2 className="mb-5 text-4xl font-medium">{section.title}</h2>
                <p className="whitespace-pre-line text-lg leading-7 text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const defaultCompanies = [
  {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EES%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Example partner mark 1",
  },
  {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EAC%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Example partner mark 2",
  },
  {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EDT%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Example partner mark 3",
  },
  {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EPT%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Example partner mark 4",
  },
  {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EWS%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Example partner mark 5",
  },
  {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3ECT%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Example partner mark 6",
  },
];

const defaultAchievements = [
  { label: "Companies ", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

const defaultProps = {
  title: "About Example Studio",
  description:
    "A fictional studio page showing stock workshop and boardroom photographs. The company, partners and statistics are sample content; the people pictured are not claimed as employees or customers.",
  mainImage: {
    src: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg",
    alt: "People collaborating around laptops at a workshop",
  },
  secondaryImage: {
    src: "https://cdn.pixabay.com/photo/2016/07/14/08/25/office-1516329_1280.jpg",
    alt: "An empty boardroom with a long meeting table",
  },
  breakout: {
    src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2064%22%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2292%22%20height%3D%2260%22%20rx%3D%2212%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2243%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2230%22%20font-weight%3D%22700%22%20fill%3D%22%23171717%22%3EES%3C%2Ftext%3E%3C%2Fsvg%3E",
    alt: "Example Studio demo monogram",
    title: "Built around our customers",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "https://example.com",
  },
  companiesTitle: "Example partner marks",
  companies: defaultCompanies,
  achievementsTitle: "Sample studio statistics",
  achievementsDescription:
    "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements: defaultAchievements,
  contentSections: [
    {
      title: "A place to collaborate",
      content: "This fictional studio brings design and engineering together around shared workspaces. Workshop and boardroom photographs illustrate the layout rather than documenting an actual office.",
    },
    {
      title: "Built for shared work",
      content: "Use this section for your own mission, team and company history. Replace the example marks, photographs and sample figures with content your organization can verify.",
    },
  ],
};
