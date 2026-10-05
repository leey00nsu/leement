"use client";
import { Feature } from "../../../registry/blocks/feature";
export default function FeatureExample() {
  return (
    <Feature
      features={[
        {
          id: "source",
          title: "Editable source",
          description:
            "Keep components in your project and shape them around your product.",
          image:
            "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
        },
        {
          id: "theme",
          title: "Shared design tokens",
          description:
            "Change a design rule across your product without replacing components.",
          image:
            "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
        },
        {
          id: "accessibility",
          title: "Keyboard interactions",
          description: "Preserve predictable native and primitive behavior.",
          image:
            "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 500%22%3E%3Crect width=%22800%22 height=%22500%22 fill=%22%23ececec%22/%3E%3Ccircle cx=%22400%22 cy=%22250%22 r=%2290%22 fill=%22%23d6d6d6%22/%3E%3C/svg%3E",
        },
      ]}
    />
  );
}
