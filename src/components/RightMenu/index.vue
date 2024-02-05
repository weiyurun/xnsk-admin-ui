<template>
  <div class="xnsk-right-menu">
    <n-dropdown
      placement="bottom-start"
      trigger="manual"
      :show-arrow="true"
      :x="x"
      :y="y"
      :options="options"
      :show="showDropdown_local"
      :on-clickoutside="onClickoutside"
      @select="handleSelect"
    />
  </div>
</template>
<script setup>
import { watch, computed, ref, nextTick } from "vue";
import { NDropdown } from "naive-ui";

const emit = defineEmits(["click", "update:showDropdown"]);

const props = defineProps({
  event: {
    type: Object,
    default: () => {},
  },
  showDropdown: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const x = ref(0);
const y = ref(0);
const showDropdown_local = ref(false);
function onClickoutside() {
  showDropdown_local.value = false;
}
function handleSelect(option) {
  showDropdown_local.value = false;
  emit("click", { key: option, event: props.event });
}

/* 监听dom */
watch(
  () => props.event,
  (newVal, oldVal) => {
    showDropdown_local.value = false;
    if (newVal) {
      showDropdown_local.value = true;
      x.value = props.event?.clientX ?? 0;
      y.value = props.event?.clientY ?? 0;
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>
