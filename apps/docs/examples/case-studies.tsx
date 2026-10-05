"use client";

import { CaseStudies } from "../../../registry/blocks/case-studies";

export default function CaseStudiesExample() {
  return (
    <CaseStudies
      tagline="Customer stories"
      studies={[
        {
          id: "studio",
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
