<!-- 可编辑表格 -->
<template>
  <div>
    <n-data-table
      :columns="columns"
      :data="value"
      :render-cell="renderCell"
      :scroll-x="scrollWidth"
    />
  </div>
</template>
<script setup>
import { computed, ref, h } from "vue";
import { NButton, NInput, NSelect, NDataTable } from "naive-ui";
const props = defineProps({
  value: {
    type: Array,
    default: () => [],
  },
  config: {
    type: Object,
    default: () => {},
  },
});
const emits = defineEmits(["onUpdate"]);
const columns = computed(() => {
  if (!props.config?.columns || props.config?.columns?.realType !== "array") {
    return [];
  } else {
    let arr = props.config.columns.map((item) => {
      let itemKey = item?.key || item?.propName || "";
      let obj = {};
      return {
        key: itemKey,
        align: item?.align || "left",
        titleAlign: item?.titleAlign || "left",
        width: item?.width?.xnsk_admin_ui_realValue,
        minWidth: item?.minWidth?.xnsk_admin_ui_realValue,
        fixed: item.type === "actions" ? "right" : item.fixed || false,
        render: (row, index) => {
          let type = item.type || item.key;

          switch (type) {
            case "input":
              return h(
                NInput,
                {
                  value: props.value[index]?.[itemKey],
                  "onUpdate:value": (val) =>
                    upDateValue(val, props.value[index], item),
                  onBlur: (dom) => onBlur(dom, props.value[index], item),
                },
                { default: () => {} },
              );
            case "select":
              return h(
                NSelect,
                {
                  options: getOptions(item),
                  value: props.value?.[index]?.[itemKey],
                  "onUpdate:value": (val) =>
                    upDateValue(val, props.value?.[index], item),
                },
                { default: () => {} },
              );
            case "actions":
              //按钮组
              let btns = props.config?.actions || [];
              let doms = btns.map((item) => {
                return h(
                  NButton,
                  {
                    quaternary: true,
                    type: item.type || "primary",
                    onClick: () => item.click(row, index),
                  },
                  { default: () => item.label },
                );
              });
              return doms;
          }
        },
        ...item,
      };
    });
    if (props.config?.acitons?.length) {
    }
    return arr;
  }
});
/* 计算宽度 */
const scrollWidth = computed(() => {
  return (columns.value || []).reduce((a, b) => {
    return a + (b.minWidth || b.width || 120);
  }, 0);
});
function renderCell(value) {}

/* 获取下拉项 */
function getOptions(item) {
  let labelKey = item?.selectionLabelKey ?? "label";
  let valueKey = item?.selectionValueKey ?? "value";
  let type = item?.selection?.xnsk_admin_ui_realType;
  switch (type) {
    case "array":
      return item.selection.map((i) => {
        return {
          label: i[labelKey],
          value: i[valueKey],
        };
      });
    case "object":
      let keys = Object.keys(item.selection);
      return keys.map((key) => {
        return {
          label: key,
          value: item.selection[key],
        };
      });
    case "promise":
      // 允许使用异步，但异步的结果需要是数组（不要将后端返回的数组直接丢进来）
      item.selection
        .then((res) => {
          if (res?.xnsk_admin_ui_realType === "array") {
            return res.map((i) => {
              return {
                label: i[labelKey],
                value: i[valueKey],
              };
            });
          } else {
            return [];
          }
        })
        .catch((err) => {
          console.log(err);
        });
      break;
  }
}

/* 更新值 */
function upDateValue(val, rowData, item) {
  //先原地更改
  try {
    rowData[item.key] = val;
  } catch (err) {
    console.log(err);
  }
  //再通知外面单个配置项
  item?.onUpdate && item.onUpdate(val, rowData, item);

  //最后通知整体更新
  if (props.config?.onUpdate?.xnsk_admin_ui_realType === "function") {
    props.config.onUpdate(val, rowData, item);
  } else {
    emits("onUpdate", val, rowData, item);
  }
}

/* 失去焦点 */
function onBlur(dom, rowData, item) {
  rowData[item?.key]?.xnsk_admin_ui_realType === "string"
    ? (rowData[item?.key] = rowData[item?.key].trim())
    : "";
  item?.onBlur?.xnsk_admin_ui_realType === "function"
    ? item?.onBlur(dom, rowData, item)
    : "";
}
</script>
