"use client";

import { Typography } from "../../../registry/ui/typography";

export default function TypographyExample() {
  return <article className="w-full max-w-2xl space-y-4">
    <Typography as="h1" variant="display">Design that travels with your source</Typography>
    <Typography variant="body">Leement gives interface decisions a clear order. Each project can keep its own content while sharing the same visual rules.</Typography>
    <Typography as="h2" variant="heading" className="border-b border-border pb-2">Foundations first</Typography>
    <Typography variant="body">Use semantic roles for color, type and spacing. A brand accent belongs to the product; the action hierarchy stays predictable.</Typography>
    <Typography as="h3" variant="subheading">A short checklist</Typography>
    <Typography as="ul" variant="body" className="list-disc space-y-1 pl-5">
      <li>Choose the right HTML element for the meaning.</li>
      <li>Keep headings in document order.</li>
      <li>Use <Typography as="code" variant="code">--lm-color-foreground-default</Typography> for shared text color.</li>
    </Typography>
    <Typography variant="muted">Supporting notes remain quieter than the main content in both themes.</Typography>
  </article>;
}
