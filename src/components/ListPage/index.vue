<!--
    列表页组件
    <ListPage :config="config" />
    参数说明：
    config：
      expand [Function]: 行展开事件，不写就是不可展开
      isTree [Boolean]: 是否树形
      apiName [Function]: 接口方法
      data [Array]: 本地数据，如果使用本地数据，将忽略apiName
      params [Object]: 搜索参数
        columns [Array]: 搜索项
          说明：
            label [String]: 文案
            type [String]: 类型，目前支持input、select，持续开发中
            propName [String]: 参数名
            defaultValue [] : 默认值
            width [Number]:  自定义宽度（开发中……）
        change [Function]: 搜索项发生变化时回调
            返回params: 1. 完整搜索结果 2. 发生变化的那一项
        hidden 是否显示 页面不需要筛选项但接口需要默认参数时使用
      table [Object]: 表格内容
        title [String]: 标题
        headBtns [Array]: 头部按钮
          说明：
            label [String] 按钮名
            click: [Function] 按钮回调
            icon: [Component] 按钮图标
            loading: [Proxy(Boolean) | Function] 是否显示loading
              案例：
                const _loading = ref(false)
              支持的写法：
                1. loading : _loading
                2. loading : () => _loading
                3. loading : () => _loading.value
              不支持将原始值直接赋值，原因都懂的~
        actions [Array]: 右侧操作按钮
          说明：
              label: [String] 按钮名
              click: [Function] 按钮回调
              icon: [Component] 按钮图标
              show: [Function | Boolean] 是否显示
              disabled: [Function | Boolean] 是否禁用
        columns [Array] 表格列
          说明：
            title [String] 标题
            key [String] 参数名
            width [Number] 列宽
            slot [String] 自定义显示内容，以slot形式
            unEllipsis:不适用溢出省略号（默认溢出显示省略号，鼠标滑过显示内容）
            customValue [Function] 自定义显示内容
              例如：customValue: (row) => moment(row.updateTime).format("yyyy-MM-DD hh:mm:ss")
          注意：操作栏key统一为actions 
    组件slot
      top 搜索栏上面部分
      center 搜索栏和表格中间部分
      footer 底部

    事件：
      search 搜索或重置时触发，已使用场景：列表页的统计需要单独获取
    实例方法：
      getTableData 主动更新列表数据，用于右侧操作区更改数据后的刷新
    实例属性：
      pageData 页面数据
      loading table上的loading，右侧操作区异步操作时可以设为true防止频繁点击
      params 当前筛选项值，用本页面的筛选项查其他接口时使用

-->
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
        class="list-page-search marB20"
        v-if="searchItems.length > 0 && !config.params.hidden"
      >
        <n-grid x-gap="12" cols="3 s:3 m:4 l:5 xl:6" responsive="screen">
          <template v-for="(item, index) in searchItems">
            <n-gi v-if="!item.hidden" :key="item?.did || index">
              <!-- 输入框 -->
              <n-input
                v-if="item.type === 'input'"
                v-model:value="params[item.propName]"
                :placeholder="item.placeholder || '请输入' + item.label"
                clearable
                :disabled="item.disabled === true || false"
                :maxlength="item.maxlength || 20"
                @update:value="paramsChange(item)"
                @keyup.enter="searchClick"
              >
              </n-input>
              <!-- 下拉框 -->
              <n-select
                v-if="item.type === 'select'"
                v-model:value="params[item.propName]"
                :options="getSelection(item.selection)"
                :placeholder="item.placeholder || '请选择' + item.label"
                clearable
                :disabled="item.disabled === true || false"
                @update:value="paramsChange(item)"
              >
              </n-select>
            </n-gi>
          </template>

          <n-gi :suffix="true">
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
          </n-gi>
        </n-grid>
      </div>
      <!-- 中间插槽 -->
      <slot name="center" :dataList="dataList" :loading="loading"></slot>
      <!-- 标题 + 按钮  -->
      <div
        v-if="props?.config?.table?.title || props?.config?.table?.headBtns"
        class="overflow-hidden flex items-center justify-between"
        style="margin-bottom: 24px"
      >
        <blue-title
          size="16px"
          v-if="props?.config?.table?.title"
          :title="getTitle"
        />
        <p style="display: flex">
          <template
            v-for="(item, index) in props?.config?.table?.headBtns || []"
          >
            <n-button
              :type="item.type || 'primary'"
              class="marL15"
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
          :row-key="(row) => row.did ?? row.id ?? row.randomId ?? ''"
          :pagination="
            props?.config?.data &&
            !props?.config?.unPagination && {
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
    />
  </div>
</template>

<script setup>
import { getRandomId, addRandomID } from "../../utils";
import { BlueTitle, Dialog } from "../index";
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
]);
const props = defineProps({
  config: {
    type: [Object, Function],
    default: () => {},
  },
});
/* 搜索项 */
const searchItems = computed(() => {
  return props?.config?.params?.columns?.length > 0
    ? props?.config?.params?.columns
    : [];
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
      if (item.type === "input") {
        params.value[item.propName] =
          item?.defaultValue?.xnsk_admin_ui_realValue || "";
      } else if (item.type === "select") {
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
  tableColumns.value = _columns.map((item, index) => {
    let obj = {
      ellipsis: !item.unEllipsis
        ? {
            tooltip: true,
          }
        : false,
      align:
        props?.config?.isTree && index === 0 ? "left" : item.align || "center",
      titleAlign: "center",
      resizable: false,
      /* ...item, */
    };
    /* 自定义内容，支持String和slot */
    if (item.customValue) {
      obj.render = (row) => {
        return item.customValue(row);
      };
    } else if (item.slot) {
      obj.render = (row) => {
        return h(slots[item.slot], row);
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
    // 外部默认都用width，此处转为minWidth，表示默认均分多余空间
    // if (item.type !== "selection") {
    //   item.minWidth = item.minWidth || item.width;
    //   item.width = "auto";
    // }
    item.minWidth = item.minWidth || item.width;
    // item.width = "auto";

    /* 操作栏统一固定右侧 */
    if (item.key === "actions") {
      obj.fixed = "right";
      //右侧操作栏不参与均分空间，把宽度改回来
      item.width = item.minWidth;
      item.minWidth = 0;
      obj.render = (row) => {
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
                { default: () => "" },
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
                    type: item.type || "primary",
                    disabled: _disabled,
                    onClick: () => {
                      if (item?.autoWarn) {
                        dialog.warning({
                          title: `确定${item.label}`,
                          content: "",
                          positiveText: "确定",
                          negativeText: "取消",
                          onPositiveClick: () => {
                            item.click(row) || null;
                          },
                          onNegativeClick: () => {},
                        });
                      } else {
                        item.click(row) || null;
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
                        },
                      ),
                    ],
                  },
                ),
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
          },
        );
      };
    }
    console.log("{ ...obj, ...item }", { ...obj, ...item });
    return { ...obj, ...item };
  });
  /* 行是否可展开 */
  if (props?.config?.expand) {
    tableColumns.value.unshift({
      type: "expand",
      align: "right",
      expandable: (rowData) => true,
      renderExpand: props?.config?.expand,
    });
  }
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
        return { ...i, randomId: getRandomId() };
      });
      dataList.value = addRandomID(data_);
    } else {
      dataList.value = props.config.data.xnsk_admin_ui_realValue;
    }
    pagination.value.itemCount =
      props.config.data.xnsk_admin_ui_realValue.length;
    return;
  }
  if (!props.config.apiName) return;
  loading.value = true;
  props.config
    .apiName({
      ...params.value,
      pageNum: pagination.value.page,
      pageSize: pagination.value.pageSize,
    })
    .then((res) => {
      callback && callback(res);
      if (res.status === 200) {
        let list_ = res?.list || res?.data?.list || [];
        if (props?.config?.isTree) {
          dataList.value = list_.map((i) => {
            return { ...i, getRandomId: getRandomId() };
          });
        } else {
          dataList.value = list_;
        }
        pageData.value = res || {};
        pagination.value.itemCount = res.total || res.data.total;
        pagination.value.page = res.pageNum || res.data.pageNum;
        emit("success", pageData.value);
      } else {
        props?.config?.showErrMsg && $message.error(res.message);
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
    emit("rowLoad", row, (data = []) => {
      row.children = data.map((i) => {
        return { ...i };
      });
      resolve();
    });
  });
}
/* 树形，默认展开的行 */
const getExpandedRow = computed(() => {
  if (props?.config?.expandedIndex !== undefined) {
    return (
      dataList.value[props.config?.expandedIndex]?.did ??
      dataList.value[props.config?.expandedIndex]?.id ??
      dataList.value[props.config?.expandedIndex]?.randomId ??
      ""
    );
  } else {
    return null;
  }
});
/* function getExpandedRow() {
  if (props?.config?.expandedIndex !== undefined) {
    return dataList.value[props.config?.expandedIndex]?.getRandomId;
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
      if (!findItem?.readOnly?.realValue && !findItem?.hidden?.realValue) {
        params.value[p] = findItem?.defaultValue?.realValue ?? null;
      }
    }
  }
  searchClick();
  emit("search");
}

/* 表格头部按钮是否显示 */
function getHeadBtnShow(item) {
  if (!item?.show) {
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
function handleCheckedRowKeys(keys) {
  if (props.config?.onUpdateChecked?.xnsk_admin_ui_realType === "function") {
    props.config.onUpdateChecked(keys);
  } else {
    emit("onUpdateChecked", keys);
  }
}

onMounted(() => {
  initParams();
  initTableColumns();
  !props.config?.unLoad && getTableData();
  tableWidth.value = tableColumns.value.reduce((a, b) => {
    return a + (b.minWidth || b.width || 0);
  }, 0);
  console.log("[ tableWidth.value ] >", tableWidth.value);
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
defineExpose({
  getTableData,
  refresh: getTableData,
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
