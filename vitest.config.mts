import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
export default defineConfig({
  resolve: { alias: {
    "@/lib/utils": fileURLToPath(new URL("./registry/lib/utils.ts", import.meta.url)),
    "@/components/ui/button": fileURLToPath(new URL("./registry/ui/button.tsx", import.meta.url)),
    "@/components/ui/skeleton": fileURLToPath(new URL("./registry/ui/skeleton.tsx", import.meta.url)),
  } },
  test: { environment: "jsdom", include: ["registry/**/*.test.tsx", "packages/theme/**/*.test.mjs"] },
});
