"use client";

import { CaseStudies } from "../../../registry/blocks/case-studies";

export default function CaseStudiesExample() {
  return (
    <CaseStudies
      title="Sample customer story"
      tagline="Fictional people, quotes and metrics · stock portrait"
      studies={[
        {
          id: "studio",
          image: "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_640.jpg",
          quote:
            "Our team ships consistent interfaces with less repeated work.",
          person: "Alex Lee",
          role: "Design engineer",
          companyName: "Example Studio",
          url: "https://example.com/stories/studio",
          metrics: [
            {
              value: "2×",
              label: "Faster delivery",
              description: "Across three product teams",
            },
            { value: "95%", label: "Shared components" },
          ],
        },
      ]}
    />
  );
}
