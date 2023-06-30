<!--
  案例：
  <XnskLogDialog
      v-model:show=""
      data="我是日志的内容"
    />
-->
<template>
  <DefaultDialog
    :title="title"
    v-model:show="isShow"
    width="800"
    :callback="[]"
  >
    <div class="break-all">
      {{ data }}
    </div>
    <template #footBtn>
      <div class="text-center">
        <n-button type="primary" @click="copyLog">
          <template #icon>
            <img
              class="mt-px"
              src="../assets/img/copy.png"
              style="width: 16px; height: 16px"
            /> </template
          >复制日志
        </n-button>
      </div>
    </template>
  </DefaultDialog>
</template>

<script setup>
import DefaultDialog from "./DefaultDialog.vue";
import { computed, useSlots } from "vue";
import { writeToClipBoard } from "../utils";
import { NButton } from "naive-ui";
const emit = defineEmits(["update:show"]);

const slot = useSlots();
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "日志",
  },
  data: {
    type: String,
    default: "",
  },
});
/* 是否显示弹窗 */
let isShow = computed({
  get() {
    return props.show;
  },
  set(val) {
    if (!val) {
      emit("update:show", false);
    }
  },
});
/* 点击复制 */
function copyLog() {
  writeToClipBoard(props.data).then(() => {
    try {
      $message.success("复制成功");
    } catch (err) {
      console.log("$message未定义");
      emit("success");
    }
  });
}
</script>

<style lang="scss" scoped></style>
