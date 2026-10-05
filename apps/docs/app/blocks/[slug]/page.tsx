import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ItemPage } from "../../../components/item-page";
import { items } from "../../../lib/items";

const names = ["about", "awards", "blog", "blog-post", "careers", "case-studies", "case-study", "changelog", "code-example", "community", "codebase", "collaborative-canvas", "roadmap", "settings-section", "bento-grid", "gantt", "kanban", "sandbox", "reel", "deck", "dialog-stack"] as const;
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
