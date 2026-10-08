import { notFound, permanentRedirect } from "next/navigation";
import { items } from "../../../lib/items";

const names = ["date-picker", "data-table", "brand-action", "media-reveal", "brand-logo", "page-header", "empty-state", "form-section", "search-field", "stat-card", "state-panel", "product-page-intro", "resource-row-link", "page-skeleton", "filter-toolbar"] as const;
type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return names.map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!names.includes(slug as typeof names[number])) notFound();
  const name = slug as typeof names[number];
  const category = items[name].type === "Block" ? "blocks" : "components";
  permanentRedirect(`/${category}/${name}`);
}
