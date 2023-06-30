import * as inherit from "./inherit.js";
import * as extend from "./src/components";
import "./src/css/main.css";

/* 非组件 */
import { useMessage } from "naive-ui";

const install = function (Vue, opts = {}) {
  /* 转发naive部分 */
  for (let key in inherit) {
    const name = "Xnsk" + inherit[key].name;
    Vue.component(name, inherit[key]);
  }
  /* 自定义部分 */
  for (let key in extend) {
    Vue.component(key, extend[key]);
  }
};
export { useMessage };
export default { install, ...extend };
