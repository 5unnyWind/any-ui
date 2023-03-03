import { defineConfig } from "dumi";

export default defineConfig({
  outputPath: "docs-dist",
  themeConfig: {
    name: "ANY-UI",
    logo: "https://github.com/5unnyWind/any-ui/blob/main/public/logo2.png?raw=true",
    nav: {
      "zh-CN": [
        { title: "指南", link: "/guide" },
        { title: "组件", link: "/components/badge" },
      ],
      "en-US": [
        { title: "Guide", link: "/en-US/guide" },
        { title: "Components", link: "/en-US/components/badge" },
      ],
    },
    footer: false,
    prefersColor: { default: "auto" },
    socialLinks: {
      github: "https://github.com/5unnyWind/any-ui",
    },
  },
  locales: [
    { id: "zh-CN", name: "中文" },
    { id: "en-US", name: "English" },
  ],
  favicons: ["https://github.com/5unnyWind/any-ui/blob/main/public/logo2.png?raw=true"],
});
