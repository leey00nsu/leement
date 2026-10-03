import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ItemPage } from "../../../components/item-page";
import { items } from "../../../lib/items";

const names = ["toggle-group", "toggle", "native-select", "input-group", "field", "radio-group", "checkbox", "rotating-content", "text-reveal", "button", "input", "select", "switch", "tabs", "label", "textarea", "badge", "card", "separator", "dialog", "dropdown-menu", "popover", "sheet", "tooltip", "chart", "skeleton", "brand-gradient-text", "status-notice", "reveal-content", "collapsible", "progress", "slider", "toast", "avatar", "alert-dialog", "avatar-stack", "cursor", "calendar", "list", "table", "code-block", "contribution-graph", "snippet", "choicebox", "combobox", "dropzone", "mini-calendar", "tags", "image-crop", "image-zoom", "credit-card", "ticker", "stories", "audio-player", "video-player", "announcement", "banner", "typography", "color-picker", "comparison", "editor", "glimpse", "marquee", "pill", "qr-code", "rating", "relative-time", "spinner", "status", "theme-switcher", "tree"] as const;
type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return names.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!names.includes(slug as typeof names[number])) notFound();
  const name = slug as typeof names[number];
  return {
    title: slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" "),
    description: items[name].overview,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!names.includes(slug as typeof names[number])) notFound();
  return <ItemPage name={slug as typeof names[number]} />;
}
