type NavItem = { label: string; href: string };
type NavSection = { title?: string; items: NavItem[] };
export type NavGroup = { title: string; sections: NavSection[] };

const componentSections = [
  { title: "Core", names: ["Aspect Ratio", "Kbd", "Button Group", "Command", "Pagination", "Breadcrumb", "Accordion", "Toggle Group", "Toggle", "Input Group", "Field", "Radio Group", "Checkbox", "Button", "Input", "Select", "Switch", "Tabs", "Label", "Textarea", "Badge", "Card", "Separator"] },
  { title: "Overlays", names: ["Hover Card", "Dialog", "Dropdown Menu", "Popover", "Sheet", "Tooltip", "Alert Dialog"] },
  { title: "Feedback", names: ["Skeleton", "Status Notice", "Progress", "Toast", "Spinner", "Status"] },
  { title: "Data", names: ["Chart", "Calendar", "List", "Table", "Contribution Graph"] },
  { title: "Collaboration", names: ["Avatar", "Avatar Stack", "Cursor"] },
  { title: "Forms", names: ["Slider", "Choicebox", "Combobox", "Dropzone", "Mini Calendar", "Tags", "Color Picker", "Rating"] },
  { title: "Images", names: ["Image Crop", "Image Zoom"] },
  { title: "Finance", names: ["Credit Card", "Ticker"] },
  { title: "Social", names: ["Stories"] },
  { title: "Media", names: ["Audio Player", "Video Player"] },
  { title: "Callouts", names: ["Announcement", "Banner"] },
  { title: "Styling", names: ["Typography"] },
  { title: "Animations", names: ["Brand Gradient Text", "Text Reveal", "Rotating Content", "Reveal Content", "Marquee"] },
  { title: "Other", names: ["Collapsible", "Code Block", "Snippet", "Editor", "Glimpse", "Pill", "QR Code", "Relative Time", "Theme Switcher", "Tree", "Comparison"] },
];

const componentItem = (label: string): NavItem => ({ label, href: `/components/${label.toLowerCase().replaceAll(" ", "-")}` });
const patternItem = (label: string): NavItem => ({ label, href: `/patterns/${label.replace(/[A-Z]/g, (letter, index) => `${index ? "-" : ""}${letter.toLowerCase()}`)}` });

export const navigation: NavGroup[] = [
  { title: "Getting Started", sections: [{ items: [
    { label: "Overview", href: "/" },
    { label: "Showcase", href: "/showcase" },
    { label: "Installation", href: "/getting-started" },
    { label: "Adoption", href: "/adoption" },
  ] }] },
  { title: "Foundations", sections: [{ items: ["Color", "Typography", "Spacing", "Radius", "Shadow", "Motion"].map(label => ({ label, href: `/foundations/${label.toLowerCase()}` })) }] },
  { title: "Components", sections: componentSections.map(({ title, names }) => ({ title, items: names.map(componentItem) })) },
  { title: "Patterns", sections: [{ items: ["DatePicker", "DataTable", "BrandLogo", "MediaReveal", "BrandAction", "PageHeader", "EmptyState", "FormSection", "SearchField", "StatCard", "StatePanel", "ProductPageIntro", "ResourceRowLink", "PageSkeleton", "FilterToolbar"].map(patternItem) }] },
  { title: "Blocks", sections: [{ items: ["Settings Section", "Bento Grid", "Gantt", "Kanban", "Sandbox", "Reel", "Deck", "Dialog Stack"].map(label => ({ label, href: `/blocks/${label.toLowerCase().replaceAll(" ", "-")}` })) }] },
  { title: "Project", sections: [{ items: [{ label: "Changelog", href: "/changelog" }] }] },
];

export const registryCommand = (name: string) => `npx shadcn@latest add @leement/${name}`;
