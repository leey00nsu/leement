import { chartRecipes } from "../../../lib/chart-catalog";
import { ChartPreview } from "../../../components/chart-previews";
import { hasPreviewMotion } from "../../../lib/preview-config";
import { notFound } from "next/navigation";
import { Preview } from "../../../components/previews";
import { AdditionalExamplePreview } from "../../../components/example-previews";
import { PreviewDocument } from "../../../components/preview-document";
import { items } from "../../../lib/items";
import { getAdditionalExamples } from "../../../lib/example-catalog";

export const metadata = { robots: { index: false, follow: false } };

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const [name, mode, file] = slug;
  const chart = chartRecipes.find((recipe) => recipe.name === name);
  if (chart) {
    if (
      file ||
      slug.length !== 2 ||
      !["detail", "gallery"].includes(mode ?? "")
    )
      notFound();
    return (
      <PreviewDocument
        gallery={mode === "gallery"}
        replayable={hasPreviewMotion(chart.name)}
      >
        <ChartPreview name={chart.name} />
      </PreviewDocument>
    );
  }
  if (
    !name ||
    !Object.hasOwn(items, name) ||
    !["detail", "gallery"].includes(mode ?? "") ||
    slug.length > 3
  )
    notFound();
  const itemName = name as keyof typeof items;
  if (
    file &&
    !getAdditionalExamples(itemName).some((example) => example.file === file)
  )
    notFound();
  return (
    <PreviewDocument
      gallery={mode === "gallery"}
      replayable={hasPreviewMotion(name)}
    >
      {file ? (
        <AdditionalExamplePreview file={file} />
      ) : (
        <Preview name={itemName} />
      )}
    </PreviewDocument>
  );
}
