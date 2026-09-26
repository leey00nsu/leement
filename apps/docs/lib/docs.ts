export const navigation = [
  { title: "Getting Started", items: [{ label: "Overview", href: "/" }, { label: "Showcase", href: "/showcase" }, { label: "Installation", href: "/getting-started" }] },
  { title: "Foundations", items: ["Color", "Typography", "Spacing", "Radius", "Shadow", "Motion"].map(label => ({ label, href: `/foundations/${label.toLowerCase()}` })) },
  { title: "Components", items: ["Button", "Input", "Select", "Switch", "Tabs", "Label", "Textarea", "Badge", "Card", "Separator", "Dialog", "Dropdown Menu", "Popover", "Sheet", "Tooltip"].map(label => ({ label, href: `/components/${label.toLowerCase().replaceAll(" ", "-")}` })) },
  { title: "Patterns", items: ["PageHeader", "EmptyState", "FormSection", "SearchField", "StatCard"].map(label => ({ label, href: `/patterns/${label.replace(/[A-Z]/g, (match, offset) => `${offset ? "-" : ""}${match.toLowerCase()}`)}` })) },
  { title: "Blocks", items: [{ label: "SettingsSection", href: "/blocks/settings-section" }] },
  { title: "Project", items: [{ label: "Changelog", href: "/changelog" }] },
] as const;
export const registryCommand = (name: string) => `npx shadcn@latest add @leement/${name}`;
