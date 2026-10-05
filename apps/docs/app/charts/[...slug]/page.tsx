import { notFound } from "next/navigation";
import { ChartRecipePage, ChartsIndex } from "../../../components/chart-page";
import {
  chartCategories,
  chartRecipes,
  type ChartCategory,
} from "../../../lib/chart-catalog";
type PageProps = { params: Promise<{ slug: string[] }> };
export function generateStaticParams() {
  return [
    ...chartCategories.map((category) => ({ slug: [category] })),
    ...chartRecipes.map((recipe) => ({ slug: [recipe.category, recipe.name] })),
  ];
}
function resolve(slug: string[]) {
  const category = slug[0] as ChartCategory;
  if (!chartCategories.includes(category) || slug.length > 2) notFound();
  const recipe = slug[1]
    ? chartRecipes.find(
        (value) => value.category === category && value.name === slug[1],
      )
    : undefined;
  if (slug[1] && !recipe) notFound();
  return { category, recipe };
}
export async function generateMetadata({ params }: PageProps) {
  const { category, recipe } = resolve((await params).slug);
  return {
    title: recipe?.title ?? `${category} charts`,
    description: recipe?.description,
  };
}
export default async function Page({ params }: PageProps) {
  const { category, recipe } = resolve((await params).slug);
  return recipe ? (
    <ChartRecipePage name={recipe.name} />
  ) : (
    <ChartsIndex category={category} />
  );
}
