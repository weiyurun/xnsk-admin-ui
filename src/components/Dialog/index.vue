<!-- 弹窗 -->
<template>
  <n-modal
    v-model:show="isShow"
    :trap-focus="false"
    preset="card"
    :close-on-esc="!lock"
    :mask-closable="!lock"
    class="dialog-templete"
    :style="{
      width: getWidth,
      height: height + 'px',
    }"
  >
    <template #header>
      <XnskBlueTitle v-if="title" :title="title" />
    </template>
    <template #default>
      <slot></slot>
    </template>
    <template #footer>
      <slot v-if="slot.footBtn" name="footBtn"></slot>
      <slot v-else-if="slot.btns" name="btns"></slot>
      <div v-else class="dialog-templete-btns">
        <n-button
          v-if="_btns.length > 0"
          type="info"
          :loading="loading"
          @click="submitClick"
        >
          {{ _btns[0] }}
        </n-button>
        <n-button
          v-if="_btns.length > 1"
          type="info"
          ghost
          @click="cancelClick"
        >
          {{ _btns[1] }}
        </n-button>
      </div>
    </template>
  </n-modal>
</template>
<script></script>
<script setup>
import { useDialog, NModal, NButton } from "naive-ui";
import {
  watch,
  ref,
  computed,
  reactive,
  useSlots,
  useAttrs,
  watchEffect,
  onMounted,
  onUnmounted,
} from "vue";
import { XnskBlueTitle } from "../index";
import { onUrlChange, offUrlChange } from "../../utils/events";

const emit = defineEmits(["update:show"]);
const attrs = useAttrs();
const slot = useSlots();

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  width: {
    type: [Number, String],
    default: "600",
  },
  height: {
    type: [Number, String],
    default: "auto",
  },
  footBtns: {
    type: Array,
    default: () => ["确定", "取消"],
  },
  //以后用btns
  btns: {
    type: Array,
    default: () => ["确定", "取消"],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  callback: {
    type: Array,
    default: () => [],
  },
  callbacks: {
    type: Array,
    default: () => [],
  },
  //是否锁定
  lock: {
    type: Boolean,
    defualt: false,
  },
});
/* 2024年6月4日 优化宽度 */
const getWidth = computed(() => {
  let _s = String(props.width);
  if (/^\d+$/.test(_s)) {
    return _s + "px";
  } else {
    return _s;
  }
});
//按钮数组
const _btns = computed(() => {
  if (props.btns === undefined && props.footBtns === undefined) {
    return props.btns;
  } else {
    return props.btns ?? props.footBtns;
  }
});

const callback = props.callbacks?.length > 0 ? props.callbacks : props.callback;
/* 是否显示弹窗 */
let isShow = computed({
  get() {
    return props.show;
  },
  set(val) {
    if (!val) {
      cancelClick();
    }
  },
});

/* 提交 */
function submitClick() {
  callback[0] && callback[0]();
}
/* 取消 */
function cancelClick() {
  if (attrs.onBeforeClose) {
    emit("beforeClose", () => {
      if (callback[1]) {
        emit("update:show", false);
        callback[1] && callback[1]();
      }
    });
  } else {
    emit("update:show", false);
    callback[1] && callback[1]();
  }
}

function urlChanged() {
  emit("update:show", false);
}
onMounted(() => onUrlChange(urlChanged));
onUnmounted(() => offUrlChange(urlChanged));
</script>

<style lang="scss" scoped>
.dialog-templete-btns {
  text-align: center;
  .n-button {
    margin: 10px 20px 0 20px;
  }
}
</style>
<style lang="scss">
.n-modal.dialog-templete {
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.11);
  max-height: 95vh;
  max-width: 95vw;
  // overflow: hidden;
  display: flex;
  flex-direction: column;
  .n-card__content {
    flex: 1;
    overflow: auto;
    padding-bottom: 0;
  }
}
</style>
