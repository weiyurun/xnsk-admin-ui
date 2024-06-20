import { defineClientConfig } from "@vuepress/client";

// 导入组件
import * as components from "../../src/components";
import naiveUI from "naive-ui";
import "../../src/css/main.css";

export default defineClientConfig({
  enhance({ app }) {
    // 注册naive ui
    app.use(naiveUI);
    // 注册二次分装组件
    for (let key in components) {
      if (key.startsWith("Xnsk")) {
        app.component(key, components[key]);
      } else {
        app.component("Xnsk" + key, components[key]);
      }
    }
    // 注册demo样例
    // for (let key in demo) {
    //   console.log("[ key,demo[key] ] >", key, demo[key]);
    //   app.component("Xn" + key, demo[key]);
    // }
  },
});
