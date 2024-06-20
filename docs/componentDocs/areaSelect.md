**基础用法**
<xnsk-area-select v-model:value="value" />
选择结果：{{ value }}

<script setup>
    import { ref } from 'vue'
    const value = ref('')
</script>

```vue
<template>
  <xnsk-area-select v-model:value="value" />
</template>
<script setup>
import { ref } from "vue";
const value = ref("");
</script>
```
