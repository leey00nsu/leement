import { hasPreviewMotion } from "../../../lib/preview-config";
import { notFound } from "next/navigation";
import { Preview } from "../../../components/previews";
import { AdditionalExamplePreview } from "../../../components/example-previews";
import { PreviewDocument } from "../../../components/preview-document";
import { items } from "../../../lib/items";
import { getAdditionalExamples } from "../../../lib/example-catalog";

export const metadata = { robots: { index: false, follow: false } };

export default async function PreviewPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const [name, mode, file] = slug;
  if (!name || !Object.hasOwn(items, name) || !["detail", "gallery"].includes(mode ?? "") || slug.length > 3) notFound();
  const itemName = name as keyof typeof items;
  if (file && !getAdditionalExamples(itemName).some((example) => example.file === file)) notFound();
  return <PreviewDocument gallery={mode === "gallery"} replayable={hasPreviewMotion(name)}>
    {file ? <AdditionalExamplePreview file={file} /> : <Preview name={itemName} />}
  </PreviewDocument>;
}
