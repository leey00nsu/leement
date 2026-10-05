import { blockApiReferences } from "./api-blocks";
import { overlayDataApiReferences } from "./api-overlay-data";
import { coreApiReferences } from "./api-core";
import { complexApiReferences } from "./api-complex";
import { navigationApiReferences } from "./api-navigation";
import { contentApiReferences } from "./api-content";
import type { items } from "./items";

export type ApiProp = {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
};
export type ApiPart = {
  name: string;
  description: string;
  props: ApiProp[];
};
export type ApiReference = {
  usage?: string;
  parts: ApiPart[];
  links?: { label: string; href: string }[];
  notes?: string[];
};

/** Leement-owned API. Primitive documentation does not replace this contract. */
export const apiReferences: Partial<Record<keyof typeof items, ApiReference>> = {
  ...blockApiReferences,
  ...complexApiReferences,
  ...contentApiReferences,
  ...navigationApiReferences,
  ...coreApiReferences,
  ...overlayDataApiReferences,
};
