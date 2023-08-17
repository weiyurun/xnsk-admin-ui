<!--
  .md文件解析
  value 值
  type 解析类型。url: 地址解析，组件加载资源并解析。value: 内容解析，组件只解析内容
-->
<template>
  <div class="markdown-view overflow-hidden html-default-css">
    <n-spin class="loading" v-show="!done" size="large" />
    <div
      v-if="value"
      v-html="valueResult"
      style="padding: 20px; border-radius: 6px"
    ></div>
    <n-empty v-else description="无数据" style="margin-top: 60px"></n-empty>
  </div>
</template>
<!-- <script>
export default {
  name: "XnskMdPreview",
};
</script> -->
<script setup>
import { getFileContentByUrl } from "../../utils";
import { ref, watchEffect } from "vue";
import { NSpin, NEmpty } from "naive-ui";
/* md解析器 */
// const MarkdownIt = require("markdown-it");
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
/* 参数 */
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "url",
  },
});
/* 是否解析完 */
let done = ref(true);
/* md文档解析结果 */
let valueResult = ref("");
/* 根据地址获取md文档内容，并解析 */
async function getFilel() {
  done.value = false;
  valueResult.value = "";
  let data = await getFileContentByUrl(props.value);
  data && (valueResult.value = md.render(data));
  done.value = true;
}

/* 判断type是否为url */
watchEffect(() => {
  if (props.value) {
    if (props?.type === "url") {
      getFilel();
    } else {
      valueResult.value = md.render(props.value);
    }
  } else {
    valueResult.value = "";
  }
});
</script>

<style lang="scss" scoped>
@import "../../css/htmlDefault.scss";

.markdown-view {
  min-height: 200px;
  background: #fafafa;
  border-radius: 6px;
  position: relative;
  word-break: break-all;

  .loading {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  :deep(*) {
    white-space: pre-wrap !important;
  }
}
</style>
