export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[\"/\"],\"sidebar\":{\"/\":[{\"text\":\"列表\",\"link\":\"/componentDocs/listPage.md\"},{\"text\":\"表单\",\"link\":\"/componentDocs/form.md\"},{\"text\":\"详情\",\"link\":\"/componentDocs/info.md\"},{\"text\":\"抽屉\",\"link\":\"/componentDocs/drawer.md\"},{\"text\":\"弹窗\",\"link\":\"/componentDocs/dialog.md\"},{\"text\":\"上传\",\"link\":\"/componentDocs/upload.md\"},{\"text\":\"选择地区\",\"link\":\"/componentDocs/areaSelect.md\"},{\"text\":\"文本弹窗\",\"link\":\"/componentDocs/dialogMsg.md\"},{\"text\":\"标题\",\"link\":\"/componentDocs/title.md\"},{\"text\":\"日志图标\",\"link\":\"/componentDocs/logIcon.md\"},{\"text\":\"吸底按钮组\",\"link\":\"/componentDocs/bottomBtns.md\"}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
