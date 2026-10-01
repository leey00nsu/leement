import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
export default defineConfig({
  resolve: { alias: {
    "@/lib/media-player": fileURLToPath(new URL("./registry/lib/media-player.tsx", import.meta.url)),
    "@/components/ui/popover": fileURLToPath(new URL("./registry/ui/popover.tsx", import.meta.url)),
    "@/components/ui/slider": fileURLToPath(new URL("./registry/ui/slider.tsx", import.meta.url)),
    "@/lib/utils": fileURLToPath(new URL("./registry/lib/utils.ts", import.meta.url)),
    "@/components/ui/button": fileURLToPath(new URL("./registry/ui/button.tsx", import.meta.url)),
    "@/components/ui/skeleton": fileURLToPath(new URL("./registry/ui/skeleton.tsx", import.meta.url)),
  } },
  test: { environment: "jsdom", include: ["registry/**/*.test.tsx", "apps/docs/lib/**/*.test.ts", "packages/theme/**/*.test.mjs"] },
});
