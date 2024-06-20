**抽屉**  
<n-dialog-provider>

<div>
    <n-button type="primary" @click="show=true">打开抽屉</n-button>
    <xnsk-drawer v-model:show="show" title="标题">
        <div>抽屉内容</div>
    </xnsk-drawer>
</div>

</n-dialog-provider>

<script setup>
    import { ref } from 'vue'
    const show = ref(false)
</script>

```vue
<template>
  <n-button type="primary" @click="show = true">打开抽屉</n-button>
  <xnsk-drawer v-model:show="show" title="标题">
    <div>抽屉内容</div>
  </xnsk-drawer>
</template>
<script setup>
import { ref } from "vue";
const show = ref(false);
</script>
```

---

<span style="color: #3eaf7c;">【支持原属性】</span>

**属性**

> `title`：**[String]** 标题  
> `width`：**[Number]** 抽屉宽度，固定 px 单位不用写，默认 500  
> `outClosable`：**[Boolean]** 点击蒙层是否直接关闭，默认 false，回弹窗提醒
