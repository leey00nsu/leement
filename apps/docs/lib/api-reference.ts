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
  ...contentApiReferences,
  button: {
    links: [{ label: "Native button attributes (MDN)", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button" }],
    usage: 'import { Button } from "@/components/ui/button";\n\n<Button variant="primary">Save changes</Button>',
    parts: [{ name: "Button", description: "A native button, or a composed child with asChild. Accepts native button attributes and a forwarded ref.", props: [
      { name: "variant", type: '"primary" | "secondary" | "outline" | "ghost" | "destructive"', default: '"primary"', description: "Visual role of the action." },
      { name: "size", type: '"xs" | "sm" | "default" | "lg" | "icon" | "icon-sm"', default: '"default"', description: "Control height and horizontal padding." },
      { name: "loading", type: "boolean", default: "false", description: "Marks the button busy and prevents activation. A native button displays a spinner before its children." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents activation. A composed child receives aria-disabled and leaves the tab order." },
      { name: "asChild", type: "boolean", default: "false", description: "Merge props into one React element. Loading and disabled still prevent activation." },
      { name: "className", type: "string", description: "Additional Tailwind classes." },
    ] }],
    notes: ["Give icon-only actions an accessible name. Use an anchor when the action navigates."],
  },
  input: {
    links: [{ label: "Native input attributes (MDN)", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input" }],
    usage: 'import { Input } from "@/components/ui/input";\nimport { Label } from "@/components/ui/label";\n\n<Label htmlFor="email">Email</Label>\n<Input id="email" name="email" type="email" autoComplete="email" />',
    parts: [{ name: "Input", description: "A native input with Leement focus, invalid and disabled styles. Accepts native input attributes and a forwarded ref.", props: [
      { name: "type", type: "React.HTMLInputTypeAttribute", default: '"text" (browser)', description: "Native input type, including file. File values are read from event.currentTarget.files." },
      { name: "value", type: "string | number | readonly string[]", description: "Controlled value; update it in onChange. A file input cannot have a programmatically supplied file value." },
      { name: "defaultValue", type: "string | number | readonly string[]", description: "Initial value of an uncontrolled input." },
      { name: "onChange", type: "React.ChangeEventHandler<HTMLInputElement>", description: "Receives the native change event." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables editing and participation in form submission." },
      { name: "aria-invalid", type: 'boolean | "true" | "false" | "grammar" | "spelling"', description: "Signals invalid content. Link the explanation with aria-describedby." },
      { name: "className", type: "string", description: "Additional Tailwind classes." },
    ] }],
  },
  card: {
    usage: 'import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";\n\n<Card>\n  <CardHeader>\n    <CardTitle>Workspace</CardTitle>\n    <CardDescription>Manage your workspace.</CardDescription>\n  </CardHeader>\n  <CardContent>Settings content</CardContent>\n  <CardFooter>Actions</CardFooter>\n</Card>',
    parts: [
      { name: "Card", description: "The surface container. Accepts native div attributes.", props: [{ name: "size", type: '"default" | "sm"', default: '"default"', description: "Sets the spacing of the surface and its parts." }, { name: "className", type: "string", description: "Additional classes on the container." }] },
      ...["CardHeader", "CardAction", "CardContent", "CardFooter"].map(name => ({ name, description: "Accepts native div attributes and children.", props: [{ name: "className", type: "string", description: "Additional classes on this part." }] })),
      { name: "CardTitle", description: "Renders an h3. Match the surrounding heading hierarchy.", props: [{ name: "className", type: "string", description: "Additional classes on the heading." }] },
      { name: "CardDescription", description: "Renders a paragraph for supporting text.", props: [{ name: "className", type: "string", description: "Additional classes on the paragraph." }] },
    ],
  },
};
