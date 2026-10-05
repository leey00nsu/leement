"use client";

import { CaseStudy } from "../../../registry/blocks/case-study";

export default function CaseStudyExample() {
  return (
    <CaseStudy
      title="A shared language for a growing product"
      company={{
        name: "Example Studio",
        industry: "Software",
        location: "Seoul",
        size: "12 people",
        website: "https://example.com",
        topics: ["Design systems", "Accessibility"],
      }}
    >
      <h2>The challenge</h2>
      <p>
        Three teams needed consistent interfaces while keeping ownership of
        their source.
      </p>
      <h2>The solution</h2>
      <p>
        Shared tokens and editable components made collaboration predictable.
      </p>
      <blockquote>
        We can now improve one design rule across our products.
      </blockquote>
      <h2>Results</h2>
      <ul>
        <li>Faster delivery</li>
        <li>Clear keyboard interactions</li>
      </ul>
    </CaseStudy>
  );
}
