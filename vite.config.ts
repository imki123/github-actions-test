import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // default
    include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
  },
});
