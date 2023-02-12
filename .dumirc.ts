import { locales } from ".dumi/tmp/dumi/locales/config";
import { defineConfig } from "dumi";

export default defineConfig({
  outputPath: "docs-dist",
  themeConfig: {
    name: "any-ui",
  },
  locales: [
    { id: "zh-CN", name: "中文" },
    { id: "en-US", name: "English" },
  ],
});
