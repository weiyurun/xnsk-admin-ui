<!--
  左侧带蓝条的title bar
-->
<template>
  <div class="flex justify-between items-center">
    <div class="flex justify-start items-center gap-3">
      <div
        class="blue-bar"
        v-if="showTitleBar"
        style="width: 3px; border-radius: 2px"
        :style="{ height: fontSize }"
      ></div>
      <b :style="{ fontSize: fontSize }">{{ title }}</b>
    </div>
    <div class="flex justify-center items-center">
      <slot></slot>
    </div>
     
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  size: {
    type: String,
    default: 'small',
  },
  showTitleBar: {
    type: Boolean,
    default: true,
  },
})
const fontSize = computed(() => {
  switch (props.size) {
    case 'small':
      return '14px'
    case 'big':
      return '18px'
    default:
      return props.size
  }
})
</script>

<style lang="scss" scoped>
.blue-bar {
  background-color: rgba(37, 127, 247, 1);
}
</style>
