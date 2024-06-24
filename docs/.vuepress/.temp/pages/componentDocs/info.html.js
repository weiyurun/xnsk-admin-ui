import comp from "D:/codes/xnsk_admin_ui/docs/.vuepress/.temp/pages/componentDocs/info.html.vue"
const data = JSON.parse("{\"path\":\"/componentDocs/info.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1718871663000,\"contributors\":[{\"name\":\"weiyurun\",\"email\":\"weiyurun\",\"commits\":1}]},\"filePathRelative\":\"componentDocs/info.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
