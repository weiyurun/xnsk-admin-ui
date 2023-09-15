<!--
    案例：
    <XnskTreeSync
        v-model:value="treeSelect"
        :treeData="treeData"
        search
        checkable
      />
    说明：
    v-model:value: 双向绑定选择结果
    treeData: 树形数据
    search: 可搜索
    checkable: 可选
    key: 指定唯一标识，默认did
    label: 指定显示文案，默认name
    childrenKey: 指定children字段，默认children

    @click: 点击树事件
-->
<template>
  <div>
    <n-input
      class="marB10"
      v-model:value="pattern"
      placeholder="搜索"
      clearable
      v-if="search"
    />
    <n-tree
      :ref="
        (el) => {
          formId = el;
        }
      "
      block-line
      :data="localTreeData"
      :default-checked-keys="
        (value || []).filter((i) => i[1] === 1).map((i) => i[0])
      "
      :indeterminate-keys="
        (value || []).filter((i) => i[1] === 0).map((i) => i[0])
      "
      :key-field="dataKey"
      :label-field="label"
      :children-field="childrenKey"
      :pattern="pattern"
      :checkable="checkable"
      :node-props="nodeProps"
      :cancelable="cancelable"
      cascade
      selectable
      :show-irrelevant-nodes="false"
      v-bind="attrs"
      @update:checked-keys="upDateChecked"
      @update:indeterminate-keys="upDateHalfChecked"
      @update:selected-keys="upDateSelected"
    />
  </div>
</template>
<script setup>
import { computed, ref, unref, useAttrs } from "vue";
import { childrenEmptyToNull, getRandomId } from "../../utils";
import { NInput, NTree } from "naive-ui";
const formId = ref("tree_" + getRandomId());
const props = defineProps({
  value: {
    type: Array,
    default: () => [],
  },
  treeData: {
    type: Array,
    default: () => [],
  },
  dataKey: {
    type: String,
    default: "did",
  },
  label: {
    type: String,
    default: "name",
  },
  childrenKey: {
    type: String,
    default: "children",
  },
  checkable: {
    type: Boolean,
    default: false,
  },
  search: {
    type: Boolean,
    default: false,
  },
  cancelable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click", "update:value", "select"]);
const attrs = useAttrs();
const pattern = ref(""); //筛选

//转为本地数据，处理children为[]的情况
const localTreeData = computed(() =>
  childrenEmptyToNull(props.treeData, props.childrenKey || "children"),
);

/* const localTreeData = computed(() => {
  let childrenKey = props.childrenKey || "children";
  let data = unref(props.treeData);
  function setNullForEmptyChildren(node) {
    if (node?.[childrenKey]?.length === 0) {
      node[childrenKey] = null;
    } else if (node?.[childrenKey]) {
      node[childrenKey].forEach((child) => setNullForEmptyChildren(child));
    }
  }
  (data || []).forEach((i) => setNullForEmptyChildren(i));
  setNullForEmptyChildren(data);
  return data;
}); */

//更新全选数据
function upDateChecked(keys, options, meta) {
  emit("update:value", mergeValue());
}
//更新半选数据
function upDateHalfChecked(keys, options, meta) {
  emit("update:value", mergeValue());
}
//合并全选、半选数据
function mergeValue() {
  let arr1 = formId.value.getCheckedData()?.keys ?? [];
  let arr2 = formId.value.getIndeterminateData().keys ?? [];
  let res1 = arr1.map((i) => {
    return [i, 1];
  });
  let res2 = arr2.map((i) => {
    return [i, 0];
  });
  return [...res1, ...res2];
}
//更新选中
function upDateSelected(keys, options, meta) {
  emit("select", keys, options, meta);
}

/* 自定义标签属性 */
function nodeProps({ option }) {
  return {
    onClick() {
      emit("click", option);
    },
  };
}
</script>
<style lang="scss" scoped>
:deep(.n-tree-node-switcher__icon) {
  svg {
    transform: scale(1.5);
  }
}
</style>
