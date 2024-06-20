**基础用法**
<n-button type="primary" @click="show = true">打开弹窗</n-button>
<xnsk-dialog title="标题" v-model:show="show" :callbacks="[confirmHandler]" :loading="loading">
弹窗内容
</xnsk-dialog>

<script setup>
  import {ref} from "vue"
  const show = ref(false);
  const loading = ref(false);
  function confirmHandler () {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      show.value = false;
    },1000)
  }
</script>

```vue
<template>
  <n-button type="primary" @click="show = true">打开弹窗</n-button>
  <xnsk-dialog
    title="标题"
    v-model:show="show"
    :callbacks="[confirmHandler]"
    :loading="loading"
  >
    弹窗内容
  </xnsk-dialog>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
const loading = ref(false);
function confirmHandler() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    show.value = false;
  }, 1000);
}
</script>
```

**参数**

`title`：**[String]** 弹窗标题  
`width`：**[Number]** 弹窗宽度  
`btns`：**[Array]** 按钮组，只传文案，默认为['确定', '取消'] 。第一个按钮为提交样式，第二个为取消样式，特殊情况可以 slot = btns 自定义按钮组  
`callbacks`：**[Number]** 回调函数数组，对应 btns 数组。第二个内置为取消操作  
`beforeClose`：**[Function]** 关闭前置守卫，使用案例：

```js
function beforeClose(done) {
  dialog.warning({
    title: "警告",
    content: "确定关闭？",
    positiveText: "确定",
    negativeText: "取消",
    onPositiveClick: () => {
      /* 判断…… */
      done(); //判断后手动执行关闭动作
    },
    onNegativeClick: () => {},
  });
}
```
