import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { items } from "./items";

type RegistryFile = { path: string; content: string };
type RegistryItem = { files: RegistryFile[] };

export async function getItemCode(name: keyof typeof items) {
  const [exampleCode, itemJson] = await Promise.all([
    readFile(path.join(process.cwd(), "examples", `${name}.tsx`), "utf8"),
    readFile(path.join(process.cwd(), "public", "r", `${name}.json`), "utf8"),
  ]);
  const registryItem = JSON.parse(itemJson) as RegistryItem;
  const sourceFile = registryItem.files.find((file) => file.path.endsWith(".tsx"));
  if (!sourceFile) throw new Error(`Missing registry source for ${name}`);

  const consumerExampleCode = exampleCode
    .replaceAll("../../../registry/ui/", "@/components/ui/")
    .replaceAll("../../../registry/patterns/", "@/components/patterns/")
    .replaceAll("../../../registry/blocks/", "@/components/blocks/");

  return { exampleCode: consumerExampleCode, sourceCode: sourceFile.content, sourceFile: sourceFile.path };
}
