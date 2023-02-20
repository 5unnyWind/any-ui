import { defineConfig } from "dumi";

export default defineConfig({
  outputPath: "docs-dist",
  themeConfig: {
    name: "ANY-UI",
    logo: "https://any-ui.oss-cn-hangzhou.aliyuncs.com/logo2.png",
    nav: {
      "zh-CN": [
        { title: "指北", link: "/guide" },
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
  favicons: ["https://any-ui.oss-cn-hangzhou.aliyuncs.com/logo2.png"],
});
