import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
export default defineConfig({
  resolve: { alias: { "@/lib/utils": fileURLToPath(new URL("./registry/lib/utils.ts", import.meta.url)) } },
  test: { environment: "jsdom", include: ["registry/**/*.test.tsx", "packages/theme/**/*.test.mjs"] },
});
