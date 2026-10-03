import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ItemPage } from "../../../components/item-page";
import { items } from "../../../lib/items";

const names = ["date-picker", "data-table", "brand-action", "media-reveal", "brand-logo", "page-header", "empty-state", "form-section", "search-field", "stat-card", "state-panel", "product-page-intro", "resource-row-link", "page-skeleton", "filter-toolbar"] as const;
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
