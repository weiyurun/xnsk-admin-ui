import { createApp } from "vue";
import "./css/main.css";
import App from "./App.vue";
import naive from "naive-ui";
console.log("[ ...naive ] >", ...naive);

let app = createApp(App);
/* app.use(naive); */
app.mount("#app");

console.log("[ app._context ] >", app._context.components);
