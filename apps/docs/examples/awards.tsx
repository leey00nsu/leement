"use client";

import { Awards } from "../../../registry/blocks/awards";

export default function AwardsExample() {
  return (
    <Awards
      awards={[
        {
          name: "Design excellence",
          description: "Recognized for accessible product design.",
          year: "2026",
          url: "https://example.com/awards/design",
        },
        {
          name: "Community choice",
          description: "Selected by our contributors.",
          year: "2025",
        },
      ]}
    />
  );
}
