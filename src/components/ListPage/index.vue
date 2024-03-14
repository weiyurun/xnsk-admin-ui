<!-- 列表页面 -->
<template>
  <div
    class="list-page"
    :class="{ noPadding: props?.config?.noPadding }"
    :style="{ height: props?.config?.height ?? '100%' }"
  >
    <div class="list-page-content">
      <!-- 顶部插槽 -->
      <slot name="top" :dataList="dataList" :loading="loading"></slot>
      <!-- 搜索部分 -->
      <div
        class="list-page-search flex marB20"
        v-if="searchItems.length > 0 && !config.params.hidden"
      >
        <n-grid
          class="flex-1"
          x-gap="12"
          y-gap="12"
          cols="24 s:6 m:10 l:12 xl:24"
          responsive="screen"
          style="padding-right: 100px"
        >
          <template v-for="(item, index) in searchItems">
            <n-gi v-if="!item.hidden" :key="index" :span="item.span || 6">
              <!-- 输入框 -->
              <n-input
                v-if="item?.type === 'input'"
                v-model:value="params[item.propName ?? item.key]"
                :placeholder="item.placeholder || '请输入' + item.label"
                clearable
                :disabled="item.disabled === true || false"
                :maxlength="item.maxlength || 200"
                @update:value="paramsChange(item)"
                @keyup.enter="searchClick"
              >
              </n-input>
              <!-- 下拉框 -->
              <n-select
                v-if="item?.type === 'select'"
                v-model:value="params[item.propName]"
                :options="getSelection(item.selection)"
                :placeholder="item.placeholder || '请选择' + item.label"
                clearable
                :disabled="item.disabled === true || false"
                :value-field="item.valueKey || 'value'"
                :label-field="item.labelKey || 'label'"
                @update:value="paramsChange(item)"
              >
              </n-select>
            </n-gi>
          </template>

          <!-- <n-gi suffix>
            <div class="flex-1 justify-end flex">
              <n-button type="primary" @click="searchClick">
                <template #icon>
                  <n-icon>
                    <SearchOutline />
                  </n-icon>
                </template>
                查询</n-button
              >
              <n-button class="ml-3" @click="searchReset">
                <template #icon>
                  <n-icon>
                    <ReloadOutline />
                  </n-icon> </template
                >重置</n-button
              >
            </div>
          </n-gi> -->
        </n-grid>
        <div style="min-width: max-content">
          <n-button type="primary" @click="searchClick">
            <template #icon>
              <n-icon>
                <SearchOutline />
              </n-icon>
            </template>
            查询
          </n-button>
          <n-button class="ml-3" @click="searchReset">
            <template #icon>
              <n-icon>
                <ReloadOutline />
              </n-icon>
            </template>
            重置
          </n-button>
        </div>
      </div>
      <!-- 中间插槽 -->
      <slot name="center" :dataList="dataList" :loading="loading"></slot>
      <!-- 标题 + 按钮  -->
      <div
        v-if="
          props?.config?.table?.title ||
          props?.config?.table?.headBtns ||
          props?.config?.table?.titleSlot
        "
        class="overflow-hidden flex items-center justify-between"
        style="margin-bottom: 20px"
      >
        <XnskBlueTitle
          size="16px"
          v-if="props?.config?.table?.title && !props.config?.table?.titleSlot"
          :title="getTitle"
        />

        <slot
          v-else-if="props?.config?.table?.titleSlot"
          :name="props.config.table.titleSlot"
        ></slot>
        <!-- 无标题时占位，保证按钮在右侧 -->
        <span v-else></span>
        <p style="display: flex">
          <template
            v-for="(item, index) in props?.config?.table?.headBtns || []"
          >
            <n-button
              :type="item?.type || 'primary'"
              class="marL20"
              v-if="getHeadBtnShow(item)"
              :key="index"
              :loading="getButtonLoading(item.loading)"
              :disabled="getHeadBtnDisabled(item)"
              @click="item.click"
            >
              <n-icon
                v-if="item.icon"
                :component="item.icon"
                style="margin-right: 8px"
              />
              <span> {{ item.label }}</span>
            </n-button>
          </template>
        </p>
      </div>
      <slot name="tableHeader" :dataList="dataList" :loading="loading"></slot>
      <!-- table部分 -->
      <div class="list-page-table">
        <n-data-table
          :columns="tableColumns"
          :data="dataList"
          :scroll-x="tableWidth"
          striped
          :loading="loading"
          :row-key="
            (row) =>
              (props.config.selectionKey && row?.[props.config.selectionKey]) ??
              row.did ??
              row.id ??
              row.xnsk_admin_ui_table_randomId ??
              ''
          "
          :pagination="
            props?.config?.data &&
            !props?.config?.unPagination &&
            !props?.config?.noPagination && {
              page: pagination.page,
              pageSize: pagination.pageSize,
              showSizePicker: true,
              pageSizes: pagination.pageSizeOptions,
              itemCount: pagination.itemCount,
              showQuickJumper: true,
            }
          "
          :on-update:page-size="handleSizeChange"
          :on-update:page="pageChange"
          :on-update:checked-row-keys="handleCheckedRowKeys"
          :children-key="
            props?.config?.isTree
              ? props?.config?.childrenKey || 'children'
              : null
          "
          :default-expanded-row-keys="[getExpandedRow]"
          v-model:expanded-row-keys="expandedIds"
          @load="onLoad"
          v-bind="attrs"
        />
      </div>
      <!-- 底部插槽 -->
      <slot name="footer" :dataList="dataList" :loading="loading"></slot>
    </div>
    <n-pagination
      v-if="!props?.config?.data"
      class="list-page-table-pagination"
      v-model:page="pagination.page"
      v-model:page-size="pagination.pageSize"
      :page-sizes="pagination.pageSizeOptions"
      :item-count="pagination.itemCount"
      :on-update:page-size="handleSizeChange"
      :on-update:page="pageChange"
      show-size-picker
      show-quick-jumper
    >
      <template #prefix>
        <span
          v-if="tableColumns.find((i) => i.type === 'selection')"
          style="position: absolute; left: 2px"
        >
          已选 {{ checkedKeys.length }}
        </span>
        <span> 总计 {{ pagination.itemCount }} </span>
      </template>
    </n-pagination>
  </div>
</template>

<script setup>
import { getRandomId, addRandomID } from "../../utils";
import { XnskBlueTitle, XnskDialog } from "../index";
import {
  NButton,
  NIcon,
  NDataTable,
  NInput,
  NSelect,
  NCheckbox,
  NGrid,
  NGi,
  useDialog,
  NPagination,
} from "naive-ui";
import {
  computed,
  onMounted,
  ref,
  useAttrs,
  useSlots,
  h,
  unref,
  watchEffect,
  watch,
  onActivated,
  resolveDirective,
} from "vue";
import { SearchOutline, ReloadOutline } from "../../icon";
const loading = ref(false);
const slots = useSlots();
const attrs = useAttrs();
const dialog = useDialog();
const emit = defineEmits([
  "search",
  "success",
  "finally",
  "rowLoad",
  "rowExpand",
  "onUpdateChecked",
  // "update:expandedIds"
]);
const props = defineProps({
  config: {
    type: [Object, Function],
    default: () => ({}),
  },
  // expandedIds: {
  //   type: Array,
  //   default: () => [],
  // },
  loading: {
    type: Boolean,
    default: false,
  },
});
/* 搜索项 */
const searchItems = computed(() => {
  // 2024年3月11日 优化：搜索项以后用items
  let res = props?.config?.params?.items || props?.config?.params?.columns;
  return res?.length > 0 ? res : [];
});
/* 标题 */
const getTitle = computed(() => {
  let titleValue = props?.config?.table?.title || "";
  if (Object.prototype.toString.call(titleValue) === "[object Function]") {
    return titleValue();
  } else {
    return titleValue;
  }
});
/* 请求参数 */
const params = ref({});
/* 表格列 */
const tableColumns = ref([]);
/* 计算表格宽度 */
let tableWidth = ref(0);
/* 页码 */
const pagination = ref({
  page: 1,
  pageSize: 10,
  pageSizeOptions: [1, 5, 10, 20, 50],
  itemCount: 0,
  isDel: 0,
});
/* pageSize改变 */
function handleSizeChange(val) {
  pagination.value.pageSize = val;
  getTableData();
}
/* page发生变化 */
function pageChange(n) {
  pagination.value.page = n;
  getTableData();
}
/* 搜索内容发生变化 */
function paramsChange(item) {
  props?.config?.params?.change?.(params.value, item);
}

let dataList = ref([]);
let pageData = ref({});

/* 初始化参数 */
function initParams() {
  if (searchItems.value.length) {
    searchItems.value.forEach((item) => {
      if (item?.type === "input" || !item.type) {
        params.value[item.propName] =
          item?.defaultValue?.xnsk_admin_ui_realValue ?? "";
      } else if (item?.type === "select") {
        params.value[item.propName] =
          item.defaultValue === "" || item.defaultValue === undefined
            ? null
            : item.defaultValue?.xnsk_admin_ui_realValue;
      }
    });
  }
}
/* 初始化列 */
function initTableColumns() {
  let _columns = props?.config?.table?.columns || [];
  tableColumns.value = _columns
    .filter((item) => {
      // 兼容以前的配置，如果传空，不解析此列
      if (!item) {
        return false;
      }
      // 2024.3.1 添加show字段，决定是否显示列
      if (item?.show?.xnsk_admin_ui_realValue === false) {
        return false;
      }
      // 默认显示
      return true;
    })
    .map((item, index) => {
      let obj = {
        ellipsis:
          // 用ellipsis可能更直观，默认true，显示...，如需关闭，必须设置为false
          !item.unEllipsis && item?.ellipsis !== false
            ? {
                tooltip: true,
              }
            : false,
        align:
          props?.config?.isTree && index === 0
            ? "left"
            : item.align || "center",
        titleAlign: "center",
        /* ...item, */
      };
      /* 自定义内容，支持String和slot */
      if (item.customValue) {
        obj.render = (row) => {
          return item.customValue(row);
        };
      } else if (item.slot) {
        obj.render = (row, rowIndex) => {
          return h(slots[item.slot], { ...row, rowIndex });
        };
      } else {
        obj.render = (row) => {
          return row[item.key] === null ||
            row[item.key] === undefined ||
            row[item.key] === ""
            ? "—"
            : row[item.key];
        };
      }
      /* 2023.8.9 更新：宽度支持传入函数，以便动态更改（限首次渲染），场景：不同角色/业务展示的宽度不同，但不支持按表格数据动态更改 */
      item.width = item.width?.xnsk_admin_ui_realValue;
      item.minWidth = item.minWidth?.xnsk_admin_ui_realValue;

      /* 2023.8.2 更新，去除了以前的对于width和minWidth的处理，因为暂时没有完美方案，先用组件自带的方案处理 */
      /* 理想中的方案：设置width表示此列固定宽，无需均分；minWidth表示此列最小值，有溢出空间则参与均分，
    目前组件自带方案有问题，当有多列设置了minWidth，它们被强行均分了（不知道是故意还是bug） */
      if (item?.type !== "selection") {
      }

      /* 操作栏统一固定右侧 */
      if (item.key === "actions") {
        obj.fixed = "right";
        obj.render = (row, rowIndex) => {
          let btns = [];
          if (props?.config?.table?.actions?.length > 0) {
            props.config.table.actions.forEach((item) => {
              /* 判断是否显示、禁用 */
              let _show, _disabled;
              if (item.show?.xnsk_admin_ui_realType === "function") {
                _show = item.show(row);
              } else {
                _show = item.show;
              }
              if (item.disabled?.xnsk_admin_ui_realType === "function") {
                _disabled = item.disabled(row);
              } else {
                _disabled = item.disabled ?? false;
              }

              /* 生成按钮 */
              let _icon;
              let _iconType = Object.prototype.toString.call(item.icon);
              if (_iconType === "[object String]") {
                //图片icon
                _icon = h(
                  "img",
                  {
                    src: item.icon,
                  },
                  { default: () => "" }
                );
              } else if (_iconType === "[object Object]") {
                //组件icon
                _icon = item.icon;
              }
              /* 判断loading */
              /*  let _loading;
            if (
              Object.prototype.toString.call(item.loading) ===
              "[object Function]"
            ) {
              _loading = unref(item.loading());
            } else {
              _loading = unref(item.loading);
            } */
              (_show || _show === undefined) &&
                btns.push(
                  h(
                    NButton,
                    {
                      size: "small",
                      /* loading: _loading, */
                      quaternary: true,
                      type: item?.type || "primary",
                      disabled: _disabled,
                      onClick: () => {
                        if (item?.autoWarn) {
                          dialog.warning({
                            title: `确定${item.label}`,
                            content: "",
                            positiveText: "确定",
                            negativeText: "取消",
                            onPositiveClick: () => {
                              item.click(row, rowIndex) || null;
                            },
                            onNegativeClick: () => {},
                          });
                        } else {
                          item.click(row, rowIndex) || null;
                        }
                      },
                      style: "--n-opacity-disabled: 0;",
                    },
                    {
                      default: () => [
                        _icon &&
                          h(NIcon, {
                            component: _icon,
                          }),
                        h(
                          "div",
                          {
                            style: `margin-left:${_icon ? 5 : 0}px;`,
                          },
                          {
                            default: () => item.label,
                          }
                        ),
                      ],
                    }
                  )
                );
            });
          }
          return h(
            "div",
            {
              class: "flex",
            },
            {
              default: () => [...btns],
            }
          );
        };
      }
      return { ...item, ...obj };
    });
  /* 如果需要展开且自定义内容，可配置该函数 */
  if (props?.config?.expand) {
    tableColumns.value.unshift({
      type: "expand",
      align: "right",
      expandable: (rowData) => true,
      renderExpand: props?.config?.expand,
    });
  }
  tableWidth.value = tableColumns.value.reduce((a, b) => {
    return a + (b.minWidth || b.width || 0);
  }, 0);
}
/* 获取下拉项 */
function getSelection(_arr = []) {
  let _type = Object.prototype.toString.call(_arr);
  if (_type === "[object Array]") {
    return _arr;
  } else if (_type === "[object Object]") {
    let _keys = Object.keys(_arr);
    let res = _keys.map((key) => {
      return {
        label: _arr[key],
        value: key,
      };
    });
    return res;
  }
}

/* 获取页面数据 */
function getTableData(newParams = {}, callback = null) {
  /* newParams合并到当前搜索条件中 */
  params.value = { ...params.value, ...newParams };

  if (props?.config?.data?.xnsk_admin_ui_realValue?.length > 0) {
    if (props?.config?.isTree) {
      let data_ = props.config.data.xnsk_admin_ui_realValue.map((i) => {
        return { ...i, xnsk_admin_ui_table_randomId: getRandomId() };
      });
      dataList.value = addRandomID(data_);
    } else {
      dataList.value = props.config.data.xnsk_admin_ui_realValue;
    }
    pagination.value.itemCount =
      props.config.data.xnsk_admin_ui_realValue.length;
    return;
  } else if (props?.config?.data?.xnsk_admin_ui_realType === "array") {
    //当配置项里data为[]时，表格数据为[]。因为需要和组件内部获取数据区分开，所以加了判断，当外部传入数据或清空数据时，实时变化
    dataList.value = [];
  }
  if (!props.config.apiName && !props.config.api) return; // 2024年3月14日15:03:12 更名为props.config.api
  let apiFunction = props.config.apiName ?? props.config.api;
  loading.value = true;
  apiFunction({
    ...params.value,
    pageNum: pagination.value.page,
    pageSize: pagination.value.pageSize,
  })
    .then((res) => {
      callback && callback(res); //如果想处理数据，请用dataProcessing；如果只是监听接口请求完成可以继续使用它
      if (res.status === 200) {
        let list_ = res?.list || res?.data?.list || [];
        if (props?.config?.isTree) {
          /* 20241.26 如果是树形，又设置了clearExpanded为true（清空展开状态），则清空展开*/
          if (props.config?.clearExpanded === true) {
            expandedIds.value = [];
          }

          // 树形数据，无论后端是否有唯一标识did，默认添加一个唯一值
          list_.forEach((i) => {
            i.xnsk_admin_ui_table_randomId = getRandomId();
          });
          // list_ = list_.map((i) => {
          //   return { ...i, xnsk_admin_ui_table_randomId: getRandomId() };
          // });
          // 2024.1.25 添加数据处理方法，某些情况，接口返回的数据需要处理格式或添加一些字段
          // 2024年3月14日 更名为dataProcess
          let dataProcess =
            props?.config?.dataProcessing ?? props?.config?.dataProcess;
          if (dataProcess?.xnsk_admin_ui_realType === "function") {
            dataList.value = dataProcess(list_);
          } else {
            dataList.value = list_;
          }
        } else {
          dataList.value = list_;
        }
        pageData.value = res?.data || {};
        pagination.value.itemCount = res.total || res.data.total;
        pagination.value.page = res.pageNum || res.data.pageNum || 1;
        emit("success", pageData.value);
      } else {
        if (
          props?.config?.onError &&
          props?.config?.onError.xnsk_admin_ui_realType === "function"
        ) {
          props.config.onError(res);
        } else if (
          attrs.onError &&
          attrs.onError.xnsk_admin_ui_realType === "function"
        ) {
          attrs.onError(res);
        } else {
          $message.error(res.message);
        }
      }
    })
    /*    .catch((err) => {
      err.message && $message.error(err.message);
    }) */
    .finally(() => {
      loading.value = false;
      emit("finally");
    });
}
/* onload事件 */
function onLoad(row) {
  return new Promise((resolve, reject) => {
    let cb = (data = []) => {
      let key = props?.config?.childrenKey || "children";
      row[key] = data.map((i) => {
        return { ...i };
      });
      resolve();
    };
    if (
      ["function", "asyncfunction"].includes(
        props.config?.rowLoad?.xnsk_admin_ui_realType
      )
    ) {
      props.config?.rowLoad(row, cb);
    } else {
      emit("rowLoad", row, cb);
    }
  });
}
/* 树形，默认展开的行 */
/* 2024.1.26停止维护该功能，目前没有遇到需要指定第几行需要展开的功能，要么全闭合，要么全展开 */
const getExpandedRow = computed(() => {
  if (props?.config?.expandedIndex !== undefined) {
    return (
      dataList.value[props.config?.expandedIndex]?.did ??
      dataList.value[props.config?.expandedIndex]?.id ??
      dataList.value[props.config?.expandedIndex]
        ?.xnsk_admin_ui_table_randomId ??
      ""
    );
  } else {
    return [];
  }
});
/* 2024.1.26 指定展开行的唯一标识 */
const localExpandIds = ref([]);
const expandedIds = computed({
  get() {
    return attrs.expandedIds ?? localExpandIds.value;
  },
  set(v) {
    localExpandIds.value = v;
    emit("update:expandedIds", v);
  },
});
/* function getExpandedRow() {
  if (props?.config?.expandedIndex !== undefined) {
    return dataList.value[props.config?.expandedIndex]?.xnsk_admin_ui_table_randomId;
  }
} */

/* 搜索 */
function searchClick() {
  pagination.value.page = 1;
  getTableData();
  emit("search");
}
/* 重置查询条件 */
async function searchReset() {
  for (let p in params.value) {
    let findItem = searchItems.value.find((i) => i.propName === p);
    if (findItem) {
      if (
        !findItem?.readOnly?.xnsk_admin_ui_realValue &&
        !findItem?.hidden?.xnsk_admin_ui_realValue
      ) {
        params.value[p] =
          findItem?.defaultValue?.xnsk_admin_ui_realValue ?? null;
      }
    }
  }
  searchClick();
  emit("search");
}

/* 表格头部按钮是否显示 */
function getHeadBtnShow(item) {
  if (item?.show === undefined) {
    return true;
  } else {
    if (item.show?.xnsk_admin_ui_realType === "function") {
      return unref(item.show());
    } else {
      return unref(item.show);
    }
  }
}

/* 表格头部按钮是否禁用 */
function getHeadBtnDisabled(item) {
  if (!item?.disabled) {
    return false;
  } else {
    if (item.disabled?.xnsk_admin_ui_realType === "function") {
      return unref(item.disabled());
    } else {
      return unref(item.disabled);
    }
  }
}

/* 获取按钮loading */
function getButtonLoading(_value) {
  if (_value?.xnsk_admin_ui_realType === "function") {
    return unref(_value());
  } else {
    return unref(_value);
  }
}

/* 可勾选时，勾选更新 */
const checkedKeys = ref([]);
//保存历史数据，提供跨页勾选使用
const historyCheckedData = ref([]);
function handleCheckedRowKeys(keys, rows) {
  /*
    此处的坑：keys在翻页后会保留，rows不会，所以需要手动存储选择时的数据
    目前逻辑：1. 先将rows排重存储，保证如何翻页，已选数据不会丢失；2. 用keys筛选最终结果数据

  */
  let keyWord = "";
  if (rows?.length > 0) {
    keyWord =
      props?.config?.selectionKey ??
      rows[0]?.did ??
      rows[0]?.id ??
      rows[0]?.xnsk_admin_ui_table_randomId ??
      "did";
    rows.forEach((rowData) => {
      if (rowData) {
        //查询历史数据是否已存在
        let findItem = historyCheckedData.value.find(
          (i) => i[keyWord] === rowData[keyWord]
        );
        //新选择的数据，保存源对象
        if (!findItem) {
          historyCheckedData.value.push(rowData);
        }
      }
    });
    //添加完后，再根据keys，筛选不需要的数据
    historyCheckedData.value = historyCheckedData.value.filter((i) =>
      keys.includes(i[keyWord])
    );
  } else {
    historyCheckedData.value = [];
  }

  checkedKeys.value = keys;
  if (props.config?.onUpdateChecked?.xnsk_admin_ui_realType === "function") {
    props.config.onUpdateChecked(keys, historyCheckedData.value);
  } else {
    emit("onUpdateChecked", keys, historyCheckedData.value);
  }
}
/* 手动获取勾选数据 */
function getSelectValues(type = "value") {
  /* type说明：
      value：只返回唯一表示，did或id
      row: 获取原数据对象
   */
  if (type === "value") {
    return unref(checkedKeys.value);
  } else if (type === "row") {
    return unref(historyCheckedData.value);
  }
}
onMounted(() => {
  initParams();
  // initTableColumns();
  //优化：unload原意是不加载数据。改为：loadData，默认自动加载；设为false，表示关闭
  let unLoad = props.config?.unLoad?.xnsk_admin_ui_realValue;
  let loadData = props.config?.loadData?.xnsk_admin_ui_realValue;
  !unLoad && loadData !== false && getTableData();
});
watchEffect(() => {
  if (props.config?.data?.xnsk_admin_ui_realType === "asyncfunction") {
    props.config?.data?.().then((res) => {
      dataList.value = res;
    });
  } else if (props.config?.data !== undefined) {
    getTableData();
  }
});
watch(
  () => props.loading,
  () => {
    loading.value = props.loading;
  }
);
/* 监听列参数变化 */
watch(
  () => props?.config?.table?.columns,
  () => {
    initTableColumns();
  },
  {
    deep: true,
    immediate: true,
  }
);
defineExpose({
  getTableData,
  refresh: getTableData,
  getSelectValues,
  pageData,
  loading,
  params,
});
</script>

<style lang="scss" scoped>
:deep(.text-left) {
  text-align: left !important;
}
:deep(.text-right) {
  text-align: right !important;
}

:deep(.text-red) {
  color: #d03050;
}
:deep(.text-blue) {
  color: #257ff7;
}
:deep(.text-green) {
  color: #18a058;
}
:deep(.text-grey) {
  color: #999999;
}
:deep(.text-yellow) {
  color: #f0a020;
}
:deep(.n-data-table__pagination) {
  position: sticky;
  bottom: -20px;
  padding: 20px 20px;
  background-color: #fff;
  z-index: 99;
}
.list-page {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &.noPadding {
    .list-page-content {
      padding: 0;
    }
  }
  .list-page-content {
    flex: 1;
    overflow: auto;
    padding: 20px 24px;
  }

  .list-page-table-pagination {
    padding: 20px 20px;
    justify-content: flex-end;
    position: sticky;
    bottom: 0;
    z-index: 1;
    background-color: #fff;
  }
}
</style>
