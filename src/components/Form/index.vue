<!--
  form表单组件

 <xnsk-form :config="formConfig" :defaultValue="defaultValue" />

defaultValue [Object] 默认值 

 config说明

  labelWidth [Number]  文案宽度（px)
  trigger [String] 校验触发方式
  submitBtn [Ojbect] 提交按钮
    {
      label [String] 按钮文案
      loading [Proxy(Boolean)] 按钮loading ，响应式Boolean
      click [Function] 表单校验成功后的回调
    }
  columns [Array] 表单项
    {
      label [String] 文案
      type [String] 类型（input,textarea,select,radio,checkBox）
      propName [String] 属性名
      required [Boolean] 是否必填
      maxlength [Number] 最大长度
      //defaultValue 默认值 
      show [Function | Boolean] 是否显示
      disabled [Function | Boolean] 是否禁用
      readonly [Function | Boolean] 是否只读
      rows [Number] textarea默认行数
      selection [Array] select,radio,checkBox的备选项
      validator 自定义校验规则
    }

  slot:
    btns  自定义底部按钮

-->
<template>
  <div>
    <n-form
      :model="formResult"
      :rules="rules"
      :ref="
        (el) => {
          formId = el;
        }
      "
      label-placement="left"
      :label-width="config.labelWidth || 'auto'"
      require-mark-placement="right"
    >
      <n-grid x-gap="12" :cols="24">
        <n-gi
          v-for="item in getItems"
          :class="{ 'is-slot': item?.type === 'slot' && !item.useFormItem }"
          :key="item.propName"
          :span="item.span"
          :offset="item.offset"
        >
          <n-form-item
            :label="
              item?.type === 'slot' && !item.useFormItem ? null : item.label
            "
            :path="item.propName"
          >
            <!-- 单行输入框 -->
            <n-input
              v-trim
              v-if="item?.type === 'input'"
              v-model:value="formResult[item.propName]"
              :placeholder="getPlaceholder(item)"
              :maxlength="item.maxlength || 20"
              :disabled="item.disabled"
              :readonly="item.readonly"
              clearable
              @blur="(e) => inputBlur(formResult[item.propName], item)"
              @update:value="(e) => changePropName(e, item)"
            />
            <!-- 可输入，可选择 -->
            <n-select
              v-if="item?.type === 'input-select'"
              class="input-select-select"
              :value="formResult[item.propName]"
              :options="getSelection(item)"
              :placeholder="getPlaceholder(item)"
              :disabled="item.disabled"
              :readonly="item.readonly"
              :label-field="item.selectionLabelKey"
              :value-field="item.selectionValueKey"
              :children-field="item.selectionChildrenKey"
              show-on-focus
              filterable
              :clearable="item.clearable !== false"
              tag
              :ignore-composition="false"
              @input="
                (e) => {
                  formResult[item.propName] = e.target.value;
                }
              "
              @update:value="
                (e) => {
                  formResult[item.propName] = e;
                }
              "
            />
            <!-- 多行输入 -->
            <n-input
              v-trim
              v-if="item?.type === 'textarea'"
              v-model:value="formResult[item.propName]"
              type="textarea"
              :placeholder="getPlaceholder(item)"
              :maxlength="item.maxlength || 200"
              :rows="item.rows || 9"
              show-count
              :disabled="item.disabled"
              :readonly="item.readonly"
              clearable
              @update:value="(e) => changePropName(e, item)"
            />
            <!-- 选择框 -->
            <n-select
              v-if="item?.type === 'select'"
              v-model:value="formResult[item.propName]"
              :options="getSelection(item)"
              :placeholder="getPlaceholder(item)"
              :disabled="item.disabled"
              :readonly="item.readonly"
              :label-field="item.selectionLabelKey"
              :value-field="item.selectionValueKey"
              :children-field="item.selectionChildrenKey"
              :clearable="item.clearable !== false"
              :render-label="item.renderLabel"
              :render-option="item.renderOption"
              :render-tag="item.renderTag"
              @update:value="(e) => changePropName(e, item)"
            />
            <!-- 树形选择框 -->
            <n-tree-select
              v-if="item?.type === 'treeSelect'"
              v-model:value="formResult[item.propName]"
              :options="getSelection(item)"
              :disabled="item.disabled"
              :readonly="item.readonly"
              :label-field="item.selectionLabelKey"
              :key-field="item.selectionValueKey"
              :children-field="item.selectionChildrenKey"
              :clearable="item.clearable !== false"
              @update:value="(e) => changePropName(e, item)"
            />
            <!-- 单选框 -->
            <n-radio-group
              v-if="item?.type === 'radio'"
              v-model:value="formResult[item.propName]"
              @update:value="(e) => changePropName(e, item)"
              :name="item.propName"
              :disabled="item.disabled"
              :readonly="item.readonly"
            >
              <n-space>
                <n-radio
                  v-for="selectionItem in getSelection(item)"
                  :key="selectionItem[item.selectionValueKey]"
                  :value="selectionItem[item.selectionValueKey]"
                >
                  {{ selectionItem[item.selectionLabelKey] }}
                </n-radio>
              </n-space>
            </n-radio-group>
            <!-- 复选框 -->
            <n-checkbox-group
              v-if="item?.type === 'checkbox'"
              v-model:value="formResult[item.propName]"
            >
              <n-space item-style="display: flex;">
                <n-checkbox
                  v-for="selectionItem in getSelection(item)"
                  :key="selectionItem[item.selectionValueKey]"
                  :value="selectionItem[item.selectionValueKey]"
                  :label="selectionItem[item.selectionLabelKey]"
                />
              </n-space>
            </n-checkbox-group>
            <!-- 提示文字 -->
            <span v-if="item?.type === 'text'" :style="item.style">
              {{
                item.text?.xnsk_admin_ui_realType === "function"
                  ? item.text()
                  : item.text
              }}
            </span>
            <slot
              v-if="item?.type === 'slot'"
              :name="item.propName"
              :data="formResult"
              :item="item"
            ></slot>
          </n-form-item>
        </n-gi>
      </n-grid>
    </n-form>
    <template v-if="!slot.btns">
      <XnskFormBtns>
        <n-button
          v-if="config?.submitBtn"
          type="primary"
          :loading="submitLoading"
          @click="submitClick"
          class="m"
        >
          {{ config?.submitBtn?.label || "确定" }}
        </n-button>
        <n-button v-if="config?.submitBtn" @click="cancelClick">
          取消
        </n-button>
      </XnskFormBtns>
    </template>
    <slot v-if="slot.btns" name="btns"></slot>
  </div>
</template>

<script setup>
import { XnskFormBtns } from "../index";
import {
  NForm,
  NFormItem,
  NGrid,
  NGi,
  NCheckboxGroup,
  NCheckbox,
  NRadioGroup,
  NRadio,
  NButton,
  NSelect,
  NInput,
  NMention,
  NTreeSelect,
} from "naive-ui";
import {
  computed,
  onMounted,
  ref,
  unref,
  useAttrs,
  useSlots,
  watchEffect,
  watch,
} from "vue";
import { getRandomId, getParentNode, diffProperty } from "../../utils";
import { useMessage } from "naive-ui";
import { clearByCodeReg, codeReg } from "../../utils/regExp";

const message = useMessage();

const errMsgPrefix = {
  "input-select": "请输入",
  input: "请输入",
  textarea: "请输入",
  select: "请选择",
  radio: "请选择",
  checkbox: "请选择",
  slot: "缺少",
};
const formId = ref("from_" + getRandomId());

const slot = useSlots();
const emit = defineEmits(["submit", "cancel", "change"]);
const attrs = useAttrs();
const props = defineProps({
  config: {
    type: Object,
    default: {},
  },
  defaultValue: {
    type: Object,
    default: {},
  },
});
/* form结果 */
const formResult = ref({});
/* 校验 */
const rules = ref({});
/* loading */
const submitLoading = computed(() => {
  if (props.config?.submitBtn?.loading) {
    return props.config.submitBtn.loading?.xnsk_admin_ui_realType === "function"
      ? unref(props.config.submitBtn.loading())
      : unref(props.config.submitBtn.loading);
  } else {
    return false;
  }
});
/* 表单项 */
const getItems = computed(() => {
  let arr = [];
  if (props.config?.columns?.length > 0) {
    props.config.columns.forEach((item) => {
      let obj = {};
      obj.label = item.label;
      obj.type = item?.type;
      obj.useFormItem = item.useFormItem || false;
      obj.propName = item.propName;
      obj.required = item.required || false;
      obj.maxlength = item.maxlength || item.maxLength;
      obj.rows = item.rows || 9;
      obj.validator = item.validator || null;
      obj.trigger = item.trigger || props.config?.trigger || "blur";
      obj.selection = item.selection || [];
      obj.span = item.span || 24;
      obj.offset = item.offset || 0;
      obj.onInput = item.onInput || null;
      obj.onBlur = item.onBlur || null;
      obj.clearable = item.clearable;

      /* 输入框添加自动清空、自动校验 */
      if (["input"].includes(obj?.type)) {
        obj.clearByRegExp = item.clearByRegExp || null;
        obj.checkByRegExp = item.checkByRegExp || null;
      }

      /* 选择器的自定义渲染 */
      if (["select"].includes(obj?.type)) {
        obj.renderLabel = item.renderLabel;
        obj.renderOption = item.renderOption;
        obj.renderTag = item.renderTag;
      }
      /* 处理树形选择 */
      if (
        ["treeSelect", "select", "radio", "checkbox", "input-select"].includes(
          obj?.type,
        )
      ) {
        obj.selectionLabelKey = item.selectionLabelKey || "label";
        obj.selectionValueKey = item.selectionValueKey || "value";
        obj.selectionChildrenKey = item.selectionChildrenKey || "children";
      }

      obj.text = item.text || "";
      obj.style = item.style || "";

      /* 备选项 */
      //注释掉，不能在这里写，如果备选项是异步获取并且网速极慢，会在填写表单时重置表单，因为计算属性重新执行了
      /* if (item?.type === "select") {
        obj.selection =
          item.selection.xnsk_admin_ui_realType === "function"
            ? unref(item.selection())
            : unref(item.selection);
      } */

      /* 校验 */
      let ruleObject = {
        required: obj?.required,
        trigger: obj.trigger,
        key: obj?.propName,
        validator(rule, value) {
          if (obj?.validator?.xnsk_admin_ui_realType === "function") {
            //如果传函数校验，直接取函数返回结果
            return obj?.validator(value);
          } else if (obj?.validator?.xnsk_admin_ui_realType === undefined) {
            //如果不传校验规则
            if (obj?.required) {
              //但设置了必填

              /* 如果设置了正则校验 */
              if (obj?.checkByRegExp) {
                if (!checkByRegExpHandler(value, obj?.checkByRegExp)) {
                  return new Error(
                    `${errMsgPrefix[obj?.type]}正确的${obj.label}`,
                  );
                }
              }
              //校验空
              if (
                [null, undefined, ""].includes(value) ||
                (value?.xnsk_admin_ui_realType === "array" &&
                  value?.length === 0)
              ) {
                return new Error(`${errMsgPrefix[obj?.type]}${obj.label}`);
              }
              //都通过，返回true
              return true;
            } else {
              //不传自定义校验规则函数，也没有设置必填
              return true;
            }
          }
        },
      };
      rules.value[obj.propName] = ruleObject;

      /* 是否禁用 */
      if (item.disabled !== undefined) {
        let isDisabled =
          item.disabled?.xnsk_admin_ui_realType === "function"
            ? item.disabled()
            : item.disabled;
        isDisabled && (obj.disabled = true);
      }
      /* 是否只读 */
      if (item.readonly !== undefined) {
        let isReadonly =
          item.readonly?.xnsk_admin_ui_realType === "function"
            ? item.readonly()
            : item.readonly;
        isReadonly && (obj.readonly = true);
      }

      /* 是否显示 */
      let isShow =
        item.show === undefined ||
        (item.show?.xnsk_admin_ui_realType === "function"
          ? item.show(formResult.value)
          : item.show);
      isShow && arr.push(obj);
    });
    return arr;
  }
});

/* 初始化字段 */
initForm();
// watchEffect(() => {
//   let keys = Object.keys(props.defaultValue);
//   keys.forEach((key) => {
//     let findItem = props.config?.columns.find((item) => item.propName === key);
//     findItem && (formResult.value[key] = getDefaultValue(findItem));
//   });
// });
watch(
  () => props.defaultValue,
  (newVal, oldVal) => {
    let diff = diffProperty(newVal, oldVal);
    let keys = Object.keys(diff);
    keys.forEach((key) => {
      let findItem = props.config?.columns.find(
        (item) => item.propName === key,
      );
      findItem && (formResult.value[key] = getDefaultValue(findItem));
    });
  },
  {
    deep: true,
    immediate: true,
  },
);
function initForm() {
  let items = props.config?.columns || [];
  items.forEach((item) => {
    switch (item?.type) {
      case "input":
      case "textarea":
        item.propName && (formResult.value[item.propName] = "");
        break;
      case "select":
        item.propName && (formResult.value[item.propName] = null);
        break;
    }
  });
}
/* 处理提示语 */
function getPlaceholder(item) {
  /* 如果未传入placeholder */
  if (!item.placeholder) {
    if (item?.type === "select") {
      return `请选择${item.label}`;
    } else {
      return `请输入${item.label}`;
    }
  } else {
    return item.placeholder;
  }
}
/* 处理备选项 */
function getSelection(item) {
  let res =
    item.selection?.xnsk_admin_ui_realType === "function"
      ? unref(item.selection())
      : unref(item.selection);
  if (res.xnsk_admin_ui_realType === "array") {
    return res;
  } else {
    let keys = Object.keys(res);
    return keys.map((key) => {
      return {
        label: res[key],
        value: key,
      };
    });
  }
}
/* 获取默认值 */
function getDefaultValue(item) {
  return (
    props.defaultValue?.[item.propName] ?? (item?.type === "select" ? null : "")
  );
}

/* 点击取消 */
function cancelClick() {
  if (props?.config?.cancelBtn?.click) {
    props.config.cancelBtn.click();
  } else {
    emit("cancel");
  }
}

//监听change
function changePropName(val, item) {
  /* 单独处理校验规则 */
  if (item.clearByRegExp) {
    formResult.value[item.propName] = clearByRegExpHandler(
      formResult.value[item.propName],
      item.clearByRegExp,
    );
  }
  if (item?.onInput?.xnsk_admin_ui_realType === "function") {
    let res = item?.onInput?.(val);
    if (res !== undefined) {
      formResult.value[item.propName] = res;
    }
  }
  //通知更新，返回最终结果
  if (props.config?.change) {
    props.config?.change(unref(formResult.value), item, val);
  } else {
    emit("change", unref(formResult.value), item, val);
  }
  //通知更新，返回修改项
}
//监听blur
function inputBlur(val, item) {
  if (item?.onBlur?.xnsk_admin_ui_realType === "function") {
    let res = item?.onBlur?.(val);
    if (res !== undefined) {
      formResult.value[item.propName] = res;
    }
  }
}

/* 根据正则处理数据 */
function clearByRegExpHandler(val, reg) {
  let t = reg.xnsk_admin_ui_realType;
  switch (t) {
    case "regexp":
      return val.replace(reg, "");
    case "array":
      reg.forEach((regItem) => {
        if (reg.xnsk_admin_ui_realType === "regexp") {
          val = val.replace(regItem, "");
        }
      });
      return val;
    case "string":
      return clearByRegExpName(val, reg);
  }
}
/* 根据内置的正则名称处理数据 */
function clearByRegExpName(val, name) {
  switch (name) {
    case "code":
      return clearByCodeReg(val);
  }
}
/* 根据正则校验数据 */
function checkByRegExpHandler(val, reg) {
  let t = reg.xnsk_admin_ui_realType;
  switch (t) {
    case "regexp":
      return reg.test(val);
    case "array":
      let bool = true;
      for (let i = 0; i < reg.length; i++) {
        //有任何一个正则匹配不通过，立刻返回false
        if (!reg[i].test(val)) {
          return false;
        }
      }
      //全部通过返回true
      return true;
    case "string":
      return checkByRegExpName(val, reg);
  }
}
/* 根据内置的正则名称校验数据 */
function checkByRegExpName(val, name) {
  switch (name) {
    case "code":
      return codeReg.test(val);
  }
}

/* 点击提交 */
function submitClick() {
  formId.value?.validate((errors) => {
    if (!errors) {
      if (props.config?.submitBtn?.click) {
        $dialog.warning({
          title: "确定提交？",
          content: "",
          positiveText: "确定",
          negativeText: "取消",
          onPositiveClick: () => {
            props.config?.submitBtn?.click(unref(formResult.value));
          },
          onNegativeClick: () => {},
        });
      } else {
        $dialog.warning({
          title: "确定提交？",
          content: "",
          positiveText: "确定",
          negativeText: "取消",
          onPositiveClick: () => {
            emit("submit", unref(formResult.value));
          },
          onNegativeClick: () => {},
        });
      }
    } else {
      /* 不通过 */
      message.error("请检查必填项");
    }
  });
}
/* 外部使用，校验方法 */
function validate(fn, key) {
  if (key?.xnsk_admin_ui_realType === undefined) {
    formId.value?.validate((errors) => fn && fn(errors));
  } else {
    let keys = key.xnsk_admin_ui_realType === "string" ? [key] : key;
    formId.value?.validate(
      (errors) => {
        fn && fn(errors);
      },
      (rule) => {
        return keys.includes(rule?.key);
      },
    );
  }
}
/* 外部使用，获取表单数据*/
function getValue() {
  return formResult.value;
}
/* 外部使用，手动改变组件内部值 */
function setValue(val = {}) {
  let keys = Object.keys(val);
  keys.forEach((key) => {
    formResult.value[key] = val[key];
  });
}
defineExpose({
  validate,
  getValue,
  setValue,
});
</script>

<style lang="scss" scoped>
.form-btns {
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: -20px;
  background-color: #fff;
  z-index: 100;
  padding: 20px;
  // .btn {
  //   margin: 0 30px;
  // }
}

.is-slot {
  :deep(.n-form-item-feedback-wrapper) {
    display: none;
  }
}
// :deep(.n-form-item) {
//   .n-form-item-label {
//     line-height: inherit;
//   }
// }
</style>
