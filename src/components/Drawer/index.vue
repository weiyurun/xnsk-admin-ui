<template>
  <n-drawer
    :close-on-esc="false"
    :mask-closable="false"
    :auto-focus="false"
    :trap-focus="false"
    :default-width="width"
    v-bind="attrs"
    @mask-click="maskClick"
  >
    <n-drawer-content :title="title" closable>
      <slot></slot>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import { onMounted, useAttrs, onUnmounted } from "vue";
import { NDrawer, NDrawerContent } from "naive-ui";
import { onUrlChange, offUrlChange } from "../../utils/events";

const attrs = useAttrs();
const emits = defineEmits(["update:show"]);
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
      style: "z-index:999999;",
      onPositiveClick: () => {
        emits("update:show", false);
      },
      onNegativeClick: () => {},
    });
  }
}
function urlChanged() {
  emits("update:show", false);
}
onMounted(() => onUrlChange(urlChanged));
onUnmounted(() => offUrlChange(urlChanged));
</script>

<style lang="scss">
.n-drawer.n-drawer--right-placement .n-drawer__resize-trigger {
  width: 6px;
  height: 50px;
  top: 50%;
  left: 0;
  transform: translate(-10px, -50%);
  cursor: ew-resize;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  &:hover {
    background-color: #257ff7;
  }
}
</style>

<style lang="scss" scoped>
:deep(.n-drawer) {
  background-color: #f00;
}
:deep(.n-drawer-body-content-wrapper) {
  padding-bottom: 0 !important;
}
</style>
