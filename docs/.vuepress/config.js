import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  lang: "zh-CN",
  title: "xnsk-admin-ui",
  description: "先农数科平台项目组件",
  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: ["/"],
    sidebar: {
      "/": [
        {
          text: "列表",
          link: "/componentDocs/listPage.md",
        },
        {
          text: "表单",
          link: "/componentDocs/form.md",
        },
        {
          text: "详情",
          link: "/componentDocs/info.md",
        },
        {
          text: "抽屉",
          link: "/componentDocs/drawer.md",
        },
        {
          text: "弹窗",
          link: "/componentDocs/dialog.md",
        },
        {
          text: "上传",
          link: "/componentDocs/upload.md",
        },
        {
          text: "选择地区",
          link: "/componentDocs/areaSelect.md",
        },

        {
          text: "文本弹窗",
          link: "/componentDocs/dialogMsg.md",
        },
        {
          text: "标题",
          link: "/componentDocs/title.md",
        },
        {
          text: "日志图标",
          link: "/componentDocs/logIcon.md",
        },
        {
          text: "吸底按钮组",
          link: "/componentDocs/bottomBtns.md",
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
