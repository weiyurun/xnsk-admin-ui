<template>
  <n-drawer
    :close-on-esc="outClosable"
    :mask-closable="outClosable"
    :auto-focus="false"
    v-bind="attrs"
  >
    <n-drawer-content :title="attrs.title" closable>
      <slot></slot>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import { onMounted, useAttrs } from 'vue'
import { NDrawer, NDrawerContent } from 'naive-ui'

const attrs = useAttrs()
const props = defineProps({
  outClosable: {
    type: Boolean,
    default: () => false,
  },
})
onMounted(() => {})
</script>

<style lang="scss" scoped></style>
