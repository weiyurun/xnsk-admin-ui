**基础用法**
<n-message-provider>
<n-button type="primary" @click="show = true">点击打开</n-button>
<xnsk-dialog-msg v-model:show="show" data="日志文本内容" title="查看日志" buttonText="复制" @success="show = false" />
</n-message-provider>

<script setup>
  import { ref } from 'vue'
  const show = ref(false)
</script>

```vue
<tempalte>
  <n-button type="primary" @click="show = true">点击打开</n-button>
  <xnsk-dialog-msg v-model:show="show" data="日志文本内容" title="查看日志" buttonText="复制" @success="show = false" />
</tempalte>
<script setup>
import { ref } from "vue";
const show = ref(false);
</script>
```
