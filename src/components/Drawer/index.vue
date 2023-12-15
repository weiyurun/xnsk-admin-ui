<template>
  <n-drawer
    :close-on-esc="false"
    :mask-closable="false"
    :auto-focus="false"
    :trap-focus="false"
    :width="width"
    v-bind="attrs"
    @mask-click="maskClick"
  >
    <n-drawer-content :title="title" closable>
      <slot></slot>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import { onMounted, useAttrs } from "vue";
import { NDrawer, NDrawerContent } from "naive-ui";

const attrs = useAttrs();
const emits = defineEmits(["upload:show"]);
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  width: {
    type: [Number, String],
    default: 500,
  },
  outClosable: {
    type: Boolean,
    default: () => false,
  },
});
function maskClick() {
  if (props.outClosable) {
    emits("update:show", false);
  } else {
    $dialog.warning({
      title: "确定关闭",
      content: "",
      positiveText: "确定",
      negativeText: "取消",
      style: "z-index:999999",
      onPositiveClick: () => {
        emits("update:show", false);
      },
      onNegativeClick: () => {},
    });
  }
}
onMounted(() => {});
</script>

<style lang="scss" scoped>
:deep(.n-drawer-body-content-wrapper) {
  padding-bottom: 0 !important;
}
</style>
