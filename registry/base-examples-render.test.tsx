import * as React from "react";
import { renderToString } from "react-dom/server";
import { describe, it, expect } from "vitest";

// Public example compositions must render against the installed API, including
// providers/labels/children that a typecheck alone cannot validate.
const examples = import.meta.glob<{ default: React.ComponentType }>(
  "../apps/docs/examples/base-*.tsx",
);
describe("fixed Base examples", () => {
  for (const [file, load] of Object.entries(examples)) {
    it(file.split("/").at(-1)!, async () => {
      const { default: Example } = await load();
      expect(() => renderToString(<Example />)).not.toThrow();
    });
  }
});
