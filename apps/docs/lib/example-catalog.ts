import type { items } from "./items";
export type AdditionalExample = { id: string; title: string; description: string; file: string };
export const additionalExamples: Partial<Record<keyof typeof items, AdditionalExample[]>> = {
  select: [{ id: "groups", title: "Groups", description: "Organize choices with group labels and separators. Labels describe the options; the field label names the input.", file: "select-groups" }],
};
export function getAdditionalExamples(name: keyof typeof items) { return additionalExamples[name] ?? []; }
