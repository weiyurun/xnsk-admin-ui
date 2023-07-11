//import * as inherit from "./inherit.js"
import * as extend from "./src/components"
import "./src/css/main.css"

const install = function (Vue, opts = {}) {
  /* 转发naive部分 */
  // for (let key in inherit) {
  //   const name = "Xnsk" + inherit[key].name
  //   Vue.component(name, inherit[key])
  // }
  /* 自定义部分 */
  for (let key in extend) {
    if (key.startsWith('Xnsk')) {
      Vue.component(key, extend[key])
    } else {
      Vue.component('Xnsk' + key, extend[key])
    }
  }
}
export default { install, ...extend }
