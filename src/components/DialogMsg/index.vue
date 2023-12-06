<!--
  案例：
  <xnsk-dialog-msg
      v-model:show=""
      data="我是日志的内容"
    />
-->
<template>
  <XnskDialog :title="title" v-model:show="isShow" width="800" :callback="[]">
    <div class="break-all whitespace-pre">
      {{ data }}
    </div>
    <template #footBtn>
      <div class="text-center" style="padding-top: 4px">
        <n-button type="primary" @click="copyLog">
          <template #icon>
            <img
              class="mt-px"
              src="../../assets/img/copy.png"
              style="width: 16px; height: 16px"
            />
          </template>
          {{ buttonText }}
        </n-button>
      </div>
    </template>
  </XnskDialog>
</template>

<script setup>
import { XnskDialog } from "../index";
import { computed, useSlots } from "vue";
import { writeToClipBoard } from "../../utils";
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
  buttonText: {
    type: String,
    default: "复制日志",
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
      emit("success");
    } catch (err) {
      console.log("$message未定义");
      emit("success");
    }
  });
}
</script>

<style lang="scss" scoped></style>
