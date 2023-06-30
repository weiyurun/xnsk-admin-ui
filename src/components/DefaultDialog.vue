<!--
  弹窗模板 
  v-model:show 是否显示
  title 标题（如果不传，头部左侧蓝色竖条也不显示）
  width 宽
  height 高 （默认auto，如果内容太多需要需要滚动条，请设置具体高度）
  footBtns 底部按钮（默认确定+取消，不需要按钮时传空数组），默认第一个按钮实心，第二个空心。特殊情况直接使用#footBtn的slot自定义
  callback 按钮点击事件（参数function,和footBtns顺序一一对应） 
  loading 提交按钮的loading
  @beforeClose 关闭拦截 参数：function，执行该function即执行关闭。不监听则点击取消或叉号直接关闭
  lock 是否锁定？默认为true，不支持点击蒙层和ESC关闭
  其他参数参考n-modal（部分参数已固定，不支持定制，如：preset、close-on-esc、mask-closable、trap-focus）

  ……其他参数/功能持续维护

  样例：
  <xnsk-dialog
    title="标题"
    v-model:show="true"
    width="600"
    height="auto"
    :footBtns="['确定', '取消']"
    :callback="[submitHandler,cancelHandler]"
    @beforeClose="beforeClose"
  >
    /* 弹窗主体内容 */
  </xnsk-dialog>
<script setup>
  import { useDialog } from 'naive-ui'
  const dialog = useDialog()
  /* 关闭拦截 */
  function beforeClose(done){
      dialog.warning({
          title: '警告',
          content: '确定关闭？',
          positiveText: '确定',
          negativeText: '取消',
          onPositiveClick: () => {
            done()
          },
          onNegativeClick: () => {
          }
        })
  }
</script>
 
-->
<template>
  <n-modal
    v-model:show="isShow"
    :trap-focus="false"
    preset="card"
    :close-on-esc="!lock"
    :mask-closable="!lock"
    class="dialog-templete"
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  >
    <template #header>
      <BlueTitle v-if="title" :title="title" />
    </template>
    <template #default>
      <slot></slot>
    </template>
    <template #footer>
      <slot v-if="slot.footBtn" name="footBtn"></slot>
      <div v-else class="dialog-templete-btns">
        <n-button v-if="footBtns.length > 0" type="info" @click="submitClick">
          {{ footBtns[0] }}
        </n-button>
        <n-button
          v-if="footBtns.length > 1"
          type="info"
          ghost
          @click="cancelClick"
        >
          {{ footBtns[1] }}
        </n-button>
      </div>
    </template>
  </n-modal>
</template>
<script>
/* import { defineComponent } from "vue";
export default defineComponent({
  name: "XnskDialog",
}); */
</script>
<script setup>
import { useDialog, NModal, NButton } from "naive-ui";
import { watch, ref, computed, reactive, useSlots, useAttrs } from "vue";
import BlueTitle from "./BlueTitle.vue";

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
    default: ["确定", "取消"],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  callback: {
    type: Array,
    default: [],
  },
  //是否锁定
  lock: {
    type: Boolean,
    defualt: false,
  },
});
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
  props.callback[0] && props.callback[0]();
}
/* 取消 */
function cancelClick() {
  if (attrs.onBeforeClose) {
    emit("beforeClose", () => {
      if (props.callback[1]) {
        emit("update:show", false);
        props.callback[1] && props.callback[1]();
      }
    });
  } else {
    emit("update:show", false);
    props.callback[1] && props.callback[1]();
  }
}
</script>

<style lang="scss" scoped>
.dialog-templete-btns {
  text-align: center;
  .n-button {
    margin: 10px 10px 0 10px;
  }
}
</style>
<style lang="scss">
.n-modal.dialog-templete {
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.11);
  max-height: 95vh;
  max-width: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .n-card__content {
    flex: 1;
    overflow: auto;
  }
}
</style>
