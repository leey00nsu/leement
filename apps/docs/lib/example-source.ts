import { readFile } from "node:fs/promises";
import path from "node:path";
import type { items } from "./items";
import { getAdditionalExamples } from "./example-catalog";

export function toConsumerExampleCode(code: string) {
  return code.replace(
    /(["'])\.\.\/\.\.\/\.\.\/registry\/(ui|patterns|blocks|lib)\//g,
    (_, quote: string, layer: string) =>
      `${quote}${layer === "lib" ? "@/lib/" : `@/components/${layer}/`}`,
  );
}
export async function getAdditionalExampleCodes(name: keyof typeof items) {
  return Promise.all(
    getAdditionalExamples(name).map(async (example) => {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(example.file))
        throw new Error(`Invalid example file: ${example.file}`);
      const code = await readFile(
        path.join(process.cwd(), "examples", `${example.file}.tsx`),
        "utf8",
      );
      return { ...example, exampleCode: toConsumerExampleCode(code) };
    }),
  );
}
