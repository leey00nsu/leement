import { notFound } from "next/navigation";
import { ItemPage } from "../../../components/item-page";
const names = ["button", "input", "textarea", "badge", "card", "separator", "dialog", "tooltip"] as const;
export function generateStaticParams() { return names.map(slug => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!names.includes(slug as typeof names[number])) notFound(); return <ItemPage name={slug as typeof names[number]} />; }
