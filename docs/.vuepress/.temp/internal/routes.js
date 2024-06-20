export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/componentDocs/areaSelect.html", { loader: () => import(/* webpackChunkName: "componentDocs_areaSelect.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/areaSelect.html.js"), meta: {"title":""} }],
  ["/componentDocs/bottomBtns.html", { loader: () => import(/* webpackChunkName: "componentDocs_bottomBtns.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/bottomBtns.html.js"), meta: {"title":""} }],
  ["/componentDocs/dialog.html", { loader: () => import(/* webpackChunkName: "componentDocs_dialog.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/dialog.html.js"), meta: {"title":""} }],
  ["/componentDocs/dialogMsg.html", { loader: () => import(/* webpackChunkName: "componentDocs_dialogMsg.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/dialogMsg.html.js"), meta: {"title":""} }],
  ["/componentDocs/drawer.html", { loader: () => import(/* webpackChunkName: "componentDocs_drawer.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/drawer.html.js"), meta: {"title":""} }],
  ["/componentDocs/form.html", { loader: () => import(/* webpackChunkName: "componentDocs_form.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/form.html.js"), meta: {"title":""} }],
  ["/componentDocs/info.html", { loader: () => import(/* webpackChunkName: "componentDocs_info.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/info.html.js"), meta: {"title":""} }],
  ["/componentDocs/listPage.html", { loader: () => import(/* webpackChunkName: "componentDocs_listPage.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/listPage.html.js"), meta: {"title":""} }],
  ["/componentDocs/logIcon.html", { loader: () => import(/* webpackChunkName: "componentDocs_logIcon.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/logIcon.html.js"), meta: {"title":""} }],
  ["/componentDocs/title.html", { loader: () => import(/* webpackChunkName: "componentDocs_title.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/title.html.js"), meta: {"title":""} }],
  ["/componentDocs/upload.html", { loader: () => import(/* webpackChunkName: "componentDocs_upload.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/upload.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
