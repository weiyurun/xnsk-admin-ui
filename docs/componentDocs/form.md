**基础用法**

<n-dialog-provider>
<n-notification-provider>
<n-message-provider>
<xnsk-form :defaultValue="formData" :config="formConfig" />
<div id="result1">
表单结果：{{ formData }}
</div>
</n-message-provider>
</n-notification-provider>
</n-dialog-provider>

<script setup>
  import { ref } from 'vue'

  const submitLoading = ref(false);
  const formData = ref({})
  const formConfig = {
    submitBtn: {
      label: "确认",
      loading: submitLoading,
      click: submitClick,
    },
    items:[
      {
        label: "姓名",
        type: "input",
        propName: "name",
        required: true,
      },
      {
        label: "性别",
        type: "select",
        propName: "sex",
        selection:[
          {label:'男',value:'1'},
          {label:'女',value:'2'},
        ],
        required: true,
      },
      {
        label: "年龄",
        type: "input",
        propName: "age",
        required: true,
        checkByRegExp:"number"
      },
    ]
  }
function submitClick(obj) {
  submitLoading.value = true;
  formData.value = obj
  setTimeout(() => {
    // 提交数据
    submitLoading.value = false;
  }, 1000);
}
</script>

```vue
<template>
  <xnsk-form :defaultValue="formData" :config="formConfig" />
</template>
<script setup>
import { ref } from "vue";

const submitLoading = ref(false);
const formData = ref({});
const formConfig = {
  submitBtn: {
    label: "确认",
    loading: submitLoading,
    click: submitClick,
  },
  items: [
    {
      label: "姓名",
      type: "input",
      propName: "name",
      required: true,
    },
    {
      label: "性别",
      type: "select",
      propName: "sex",
      selection: [
        { label: "男", value: "1" },
        { label: "女", value: "2" },
      ],
      required: true,
    },
    {
      label: "年龄",
      type: "input",
      propName: "age",
      required: true,
      checkByRegExp: "number",
    },
  ],
};
function submitClick(obj) {
  submitLoading.value = true;
  setTimeout(() => {
    // 提交数据
    submitLoading.value = false;
  }, 1000);
}
</script>
```

---

**config 配置**

`labelWidth`：**[Number]** 左侧文案宽度（默认文字右对齐）  
`responsive`: **["self" | "screen"]** 响应式方案。self：以自身宽度为准；screen：以浏览器宽度为准。默认 screen（历史遗留问题）。注意：两种方案对应设置 span 方式不同  
`submitBtn`：**[Object, null]** 提交按钮。如果不需要按钮，可设置为 null  
└─`label`：**[String]** 提交按钮文案  
└─`loading`：**[Boolean, Function]** 按钮是否线上 loading  
└─`click`：**[Function]** 点击事件  
└─`autoWarn`：**[Boolean]** 是否自动提示，默认 true  
└─`validator`：**[Function]** 自定义校验方法，当表单有 slot 需要单独校验时可能需要它。通常情况下，点击确定按钮，自动校验表单项，通过后自动弹窗询问是否保存，当使用 slot 时，可能无法满足 slot 中的校验，此时有两种方法：1. 可以将 submitBtn 设为 null，完全自定义底部按钮。2. 可以使用按钮的 validator 自定义校验

```js
(formData, done) => {
  // 根据formData校验，如果通过执行done
};
```

`items`：**[Array]** 表单项，原来叫 columns

itmes 单项配置 **[Object]**，原来叫 columns

`label`：**[String]** 文案  
`type`：**[String]** 该表单项类型。可选值：

- `input`：输入框
- `input-select`：带输入筛选的选择
- `textarea`：多行输入
- `select`：选择框
- `treeSelect`：树形选择
- `radio`：单选
- `checkbox`：多选
- `text`：纯文本
- `image`：图片选择（默认单张）
- `slot`：自定义内容

`useFormItem`：**Boolean**类型。默认 false。当 type 为 slot 时，默认该项所占区域全部自定义。如果 title 标题、红\*、底部异常文案等仍沿用表单默认样式，只自定义具体内容，可以设置`useFormItem:true`  
`propName`：**[String]** 属性名  
`slotName`：**[String]** 当 type 为 slot 时，用 slotName 可能看起来更舒服。和 propName 的区别：propName 表示该项是数据项，提交时包含它，虽然值仍然需要外部注入；slotName 表示不是数据项，可能是一些与表单无关的内容，比如表格中间来个分割线  
`required`：**[Boolean]** 是否必填，默认 false  
`maxlength`：**[Number]** 输入框最大输入长度。input 默认 20，textarea 默认 200  
`rows`：**[Number]** 多行文本默认几行高度。默认 9  
`validator`：**[Function]** 自定义校验规则  
`trigger`：**[String]** 校验触发方式，默认 blur。可选`blur | submit`  
`selection`：**[Array, Function, Object]** type 为选择类型时，备选项数据。Function 类型需要返回数组；Object 类型会依次将`key: value`转换为`[{label: key, value: value}]`  
`selectionLabelKey`：**[String]** `selection`为数组时，自定义文案的属性名  
`selectionValueKey`：**[String]** `selection`为数组时，自定义值的属性名  
`selectionChildrenKey`：**[String]** 多级选择时，子级列表属性名  
`span`：**[Number]** 24 宫格中所占格数。默认 24  
`offset`：**[Number]** grid 布局中，左侧偏移格数，默认 0  
`clearable`：**[Boolean]** 是否可清除选择。默认 true，只针对`select, input-select, treeSelect`类型  
`placeholder`：**[String]** 提示文案。不设置时默认值：输入类型为`请输入+label文案`；选择类型为`请选择+label文案`  
`readonly`：**[Boolean, Function]** 是否只读。注意：当设置为只读时，呈现样式相当于 text，并不是禁用样式  
`disabled`：**[Boolean, Function]** 是否禁用  
`show`：**[Boolean, Function]** 是否显示，默认显示。注意：不显示时仍在数据项中，但不进行校验  
`className`：**[String]** 该表单的 className  
`loading`：**[Boolean, Function]** 该表单自己的 loading。假如表单间有联动，加个 loading 可能更友好  
`style`：**[String]** 该表单项的样式，有时候 className 可能不够用  
`subStyle`：**[String]** 该表单项内容的样式。相信我，会用到的  
`clearByRegExp`：**[String]** 使用正则或内置类型自动清空不符合规则的字段，目前已内置：**code**-校验编码（英文大小写、数字、下划线），**number**-纯数字  
`checkByRegExp`：**[String]** 使用正则或内置类型自动校验，内置如上  
`onInput`：**[Function]** input 事件回调。返回参数：`value`值，`itemConfig`该项配置  
`onBlur`：**[Function]** blur 事件回调。返回参数：`value`值，`itemConfig`该项配置  
`onChange`：**[Function]** change 事件回调。返回参数：`value`值，`itemConfig`该项配置  
`errorMessage`: **[String]** 自定义错误提示语

_下面属性未删除但有更优方案_：
`text`：**[String, Function]** 当表单`type`值为 text 时设置显示内容，支持函数返回，原本是当修改表单时，一些不可修改内容以纯文本显示，因为禁用样式的字体颜色、背景色、边框的等看起来不友好。后面用 readonly 代替

**表单实例方法**

`validate`：发起验证  
`getValue`：获取当前表单数据  
`setValue`：设置表单数据，如：`formRef.value.setValue({code:111})`。

表单使用心得：简单的表单直接`v-model:value`双向绑定数据，配置好接口需要的字段，提交按钮的回调参数直接传给后端，复杂的表单建议`:value`传入数据，使用组件`@update:value`属性或者 config 配置项的 onChange 手动修改
