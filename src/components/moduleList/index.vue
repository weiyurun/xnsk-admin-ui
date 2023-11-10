<!-- 已发布市场的组件列表 -->
<template>
  <div>
    <XnskListPage
      :config="moduleListConfig"
      :default-checked-row-keys="checkedRowKeys"
      :ref="
        (el) => {
          refId = el;
        }
      "
    >
      <template #tags="row">
        <n-tag
          class="marR15 marT2 marB2"
          v-for="item in splitString(row.tags)"
          :key="item"
          type="info"
        >
          {{ item }}
        </n-tag>
      </template>
    </XnskListPage>
  </div>
</template>
<script setup>
import { XnskListPage } from "../index";
import { splitString } from "../../utils/index";
import { NTag } from "naive-ui";
import http from "../../http";
import enums from "../../enums";
import { computed, ref, unref } from "vue";

const props = defineProps({
  keys: {
    type: Array,
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
});
const refId = ref(
  "ref" + new Date().getTime() + parseInt(Math.random() * 10000)
);
const emits = defineEmits(["update:value", "change"]);

/* 选中的keys */
const checkedRowKeys = computed(() => {
  return props.keys ?? [];
});

const moduleListConfig = ref({
  apiName: http("module_version_page"), //接口
  noPadding: true,
  height: "auto",
  params: {
    columns: [
      {
        label: "组件名称",
        type: "input",
        propName: "moduleName",
        maxlength: 20,
        width: 120,
      },
      {
        label: "组件平台",
        type: "select",
        propName: "moduleType",
        width: 160,
        selection: enums.moduleType,
      },
      {
        hidden: true,
        type: "input",
        propName: "releaseStatus",
        defaultValue: 1,
      },
    ],
  },
  table: {
    columns: [
      {
        type: "selection",
        multiple: props.multiple,
        width: 40,
      },
      /*  {
        title: "组件ID",
        key: "moduleId",
        minWidth: 160,
      }, */
      {
        title: "组件名称",
        key: "moduleName",
        minWidth: 120,
      },
      {
        title: "组件编码",
        key: "moduleCode",
        minWidth: 120,
      },
      {
        title: "版本号",
        key: "publishVersion",
        width: 100,
      },
      {
        title: "组件平台",
        customValue: (row) => enums.moduleType.getLabel(row.moduleType),
        width: 120,
      },
      {
        title: "标签",
        slot: "tags",
        unEllipsis: true,
        width: 120,
      },
      {
        title: "更新时间",
        key: "updateTime",
        width: 160,
      },
    ],
  },
});
function getSelectValues(type = "value") {
  return refId.value.getSelectValues(type);
}
defineExpose({
  getSelectValues,
});
</script>
