"use client";

import { CaseStudy } from "../../../registry/blocks/case-study";

export default function CaseStudyExample() {
  return (
    <CaseStudy
      title="Sample story: a shared language for a growing product"
      image={{ src: "https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg", alt: "Stock workshop photograph illustrating the fictional studio story" }}
      company={{
        name: "Example Studio",
        industry: "Software",
        location: "Seoul",
        size: "12 people",
        website: "https://example.com",
        topics: ["Design systems", "Accessibility"],
      }}
    >
      <p>This studio, story and outcomes are fictional sample content. The stock photograph does not depict its employees.</p>
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
