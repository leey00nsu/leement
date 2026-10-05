import { readFile } from "node:fs/promises";
import path from "node:path";
import type { items } from "./items";
import { getAdditionalExamples } from "./example-catalog";

export function toConsumerExampleCode(code: string) {
  return code.replace(
    /(["'])\.\.\/\.\.\/\.\.\/registry\/(ui|patterns|blocks|lib|hooks)\//g,
    (_, quote: string, layer: string) =>
      `${quote}${layer === "lib" ? "@/lib/" : layer === "hooks" ? "@/hooks/" : `@/components/${layer}/`}`,
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
      const registryImports = [
        ...code.matchAll(
          /from\s+["']\.\.\/\.\.\/\.\.\/registry\/(?:ui|patterns|blocks|lib|hooks)\/([a-z0-9-]+)["']/g,
        ),
      ];
      const installItems = [
        ...new Set(registryImports.map((match) => `@leement/${match[1]}`)),
      ];
      const packageVersions: Record<string, string> = {
        "@ai-sdk/react": "4.0.130",
        ai: "7.0.127",
        "@shadcn/helpers": "0.2.0",
        "chrono-node": "2.10.2",
        "react-textarea-autosize": "8.5.9",
        streamdown: "2.7.0",
        zod: "4.6.5",
        "@tanstack/react-table": "8.21.3",
        "date-fns": "4.1.0",
        "react-day-picker": "9.14.0",
        "embla-carousel-autoplay": "8.6.0",
        "input-otp": "1.4.2",
        motion: "13.1.0",
        recharts: "3.8.0",
      };
      const packages = [
        ...new Set(
          [...code.matchAll(/from\s+["']([^"']+)["']/g)].map(
            (match) => match[1]!,
          ),
        ),
      ]
        .filter(
          (specifier) =>
            !specifier.startsWith(".") &&
            !specifier.startsWith("@/") &&
            specifier !== "react" &&
            specifier !== "react-dom",
        )
        .map((specifier) =>
          specifier.startsWith("@")
            ? specifier.split("/").slice(0, 2).join("/")
            : specifier.split("/")[0]!,
        )
        .filter((name, index, list) => list.indexOf(name) === index)
        .map((name) =>
          packageVersions[name] ? `${name}@${packageVersions[name]}` : name,
        );
      return {
        ...example,
        exampleCode: toConsumerExampleCode(code),
        installCommand: installItems.length
          ? `npx shadcn@latest add ${installItems.join(" ")}`
          : "",
        packageCommand: packages.length
          ? `pnpm add ${packages.join(" ")}`
          : null,
      };
    }),
  );
}
