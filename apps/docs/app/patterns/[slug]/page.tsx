import { notFound } from "next/navigation";
import { ItemPage } from "../../../components/item-page";
const names = ["page-header", "empty-state", "form-section", "search-field", "stat-card"] as const;
export function generateStaticParams() { return names.map(slug => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!names.includes(slug as typeof names[number])) notFound(); return <ItemPage name={slug as typeof names[number]} />; }
