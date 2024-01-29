
# 先农数科，平台项目专用 UI 框架

  

基于 naiveUI

  

##### XnskBlueTitle 左侧带蓝条标题

  

单标题使用

  

```

<xnsk-blue-title title="标题" />

```

  

闭合标签内容将放到右侧

  

```

<xnsk-blue-title title="标题" >

<n-button>按钮</n-button>

</xnsk-blue-title>

```

  

其他属性：

`size`：字体大小。默认 small 对应 14px，可选 big 对应 18px。其他值直接写（如 20px）

`showTitleBar`：是否显示蓝条，默认 true

  

---

  

##### XnskDialog 弹窗

  

```

<xnsk-dialog

title="标题"

v-model:show="true"

width="600"

:footBtns="['确定', '取消']"

:callbacks="[submitHandler,cancelHandler]"

@beforeClose="beforeClose"

>

/* 弹窗主体内容 */

</xnsk-dialog>

```

  

`beforeClose`使用案例：

  

```

function beforeClose(done) {

dialog.warning({

title: "警告",

content: "确定关闭？",

positiveText: "确定",

negativeText: "取消",

onPositiveClick: () => {

//判断逻辑

done();

},

onNegativeClick: () => {},

});

}

```

  

---

  

##### XnskDialogMsg 文本弹窗，带复制功能

  

```

<xnsk-dialog-msg

v-model:show="true"

data="日志文本内容"

title="查看日志"

buttonText="复制"

/>

```

  

---

  

##### XnskDrawer 右侧抽屉

  

```

<xnsk-drawer v-model:show="true" title="新增">

//抽屉内容

</xnsk-drawer>

```

  

其他属性：

`width`：抽屉宽度，`Number`类型，固定 px 单位不用写，默认 500

`outClosable`：点击外侧是否自动关闭，`Boolean`类型，默认`false`

  

---

  

##### XnskErrorIcon 专门查看错误信息的 icon

  

显示为一个 icon，点击弹窗显示，带复制功能

  

```

<xnsk-error-icon message="某某异常" />

```

  

---

  

##### XnskForm 表单

  

```

<xnsk-form v-model:value="formData" :config="formConfig"></xnsk-form>

```

  

**config 配置**

`labelWidth`：左侧文案宽度（默认文字右对齐）

`submitBtn`：提交按钮。如果不需要按钮，可设置为`null`

&emsp;&emsp;`label`：提交按钮文案

&emsp;&emsp;`loading`：按钮 loading

&emsp;&emsp;`click`：点击事件

  

`columns`：表单项，`Array`类型

单项配置

`label`：文案

`type`：类型。可选值：`input`输入框；`input-select`带输入筛选的选择；`textarea`多行输入；`select`选择框；`treeSelect`：树形选择；`radio`：单选；`checkbox`：多选；`text`：文本（用作显示，比如编辑时某字段不可编辑，可用 text 或用 input 并只读）;`slot`自定义内容

`propName`：属性名

`required`：是否必填

`validator`：自定义校验规则，`Function`类型。

`trigger`：校验触发方式，默认`blur`。可选`submit`

`maxlength`：输入类型的最大输入长度

`rows`：多行文本默认几行高度。默认 9

`useFormItem`：当 type 为 slot 时，默认该项所占区域都是自定义区，如果标题、红\*、底部异常文案等仍沿用表单样式，只自定义交部分，可以设置`useFormItem:true`

`selection`：type 为选择类型时，备选项数据。支持`Array,Object,Function`类型

`selectionLabelKey`：`selection`为数组时，自定义文案的属性名

`selectionValueKey`：`selection`为数组时，自定义值的属性名

`selectionChildrenKey`：多级选择时，子级列表属性名

`span`：24 宫格中所占格数。默认 24

`offset`：grid 布局中，左侧偏移格数

`onInput`：input 事件回调。返回参数：`value`值，`itemConfig`该项配置

`onBlur`：blur 事件回调。返回参数：`value`值，`itemConfig`该项配置

`clearable`：是否可清空。默认 true，只针对`select,treeSelect`类型。

`placeholder`：提示文案。默认值：输入类型：请输入+label；选择类型：请选择+label

`text`：当`type`值为 text 时设置显示内容。

`clearByRegExp`：使用正则或内置类型自动清空不符合规则的字段，目前已内置：`code`校验编码（英文大小写、数字、下划线），`number`纯数字

`checkByRegExp`：使用正则或内置类型自动校验，内置如上

`disabled`：是否禁用

`show`：是否显示

  

**表单实例方法**

`validate`：发起验证

`getValue`：获取当前表单数据

`setValue`：设置表单数据

  

---

  

##### XnskFormBtns 按钮组

  

原本是表单里用的，抽出来忘记换名字了。主要提供按钮组的吸底，统一间距

  

```

<xnsk-form-btns>

<n-button>保存</n-button>

<n-button>取消</n-button>

</xnsk-form-btns>

```

  

---

  

##### XnskInfo 详情展示

  

`<xnsk-info :config="infoConfig" :data="infoData" />`

  

`data`原数据

`config`**配置说明**：

  

`title`：标题

`labelWidth`：文案宽度

`labelAlign`：文案对其方式

`column`：展示项，`Array`类型

单项配置：

`label`：文案

`value`：字段名。如果是`String`类型，表示取`data`对应属性值，如果是`Function`类型，则取其返回值

`span`：24 宫格中所占格数，默认 8

`slot`：使用 slot 展示

  

---

  

##### XnskListPage 列表页面

  

`<xnsk-list-page :config="config" />`

  

**回调方法**

`search`：搜索回调

`success`：获取数据成功回调

`finally`：根据接口加载数据完成回调

`rowLoad`：树形表格，点击展开回调，可以动态加载子级

`onUpdateChecked`：可勾选时，勾选数据更新回调

  

**`config`说明**

  

`apiName`：获取数据接口方法，`Function`类型

`data`：可以直接设置数据，无需`apiName`动态获取数据

`dataProcessing`：数据处理，`Function`类型，参数：当前数据，需要return处理后的数据

`params`：查询配置，`Object`类型

&emsp;&emsp;`change`：查询项发生变化回调

&emsp;&emsp;`hidden`：是否显示

&emsp;&emsp;`columns`：搜索项，`Array`类型

&emsp;&emsp;&emsp;&emsp;`label`：文案

&emsp;&emsp;&emsp;&emsp;`type`：类型。目前仅支持`input,select`

&emsp;&emsp;&emsp;&emsp;`selection`：`type`为`select`时备选数据，暂未支持自定义 key，需要用`label,value`

&emsp;&emsp;&emsp;&emsp;`propName`：字段名

&emsp;&emsp;&emsp;&emsp;`defaultValue`：默认值

&emsp;&emsp;&emsp;&emsp;`span`：24 宫格中所占格数，默认 6

`table`：表格部分配置

&emsp;&emsp;`title`：标题

&emsp;&emsp;`headBtns`：表格右上角的按钮组。`Array`类型

&emsp;&emsp;&emsp;&emsp;`label`：按钮文案

&emsp;&emsp;&emsp;&emsp;`click`：点击回调

&emsp;&emsp;&emsp;&emsp;`loading`：按钮 loading

&emsp;&emsp;&emsp;&emsp;`type`：按钮类型，默认`primary`

&emsp;&emsp;`actions`：操作栏按钮组。`Array`类型

&emsp;&emsp;&emsp;&emsp;`label`：按钮文案

&emsp;&emsp;&emsp;&emsp;`click`：点击回调

&emsp;&emsp;&emsp;&emsp;`show`：是否显示。可使用`Function`类型，参数为该行数据，可根据数据判断该行是否显示该按钮

&emsp;&emsp;&emsp;&emsp;`disabled`：是否禁用，使用同`show`，目前设置的禁用按钮透明度为 0，用于站位使按钮对其更美观

&emsp;&emsp;&emsp;&emsp;`type`：按钮类型，默认`primary`

&emsp;&emsp;&emsp;&emsp;`autoWarn`：设置为`true`时，点击提示：确认+label 文案？，点击确认，触发点击回调

&emsp;&emsp;`columns`：列配置，`Array`类型

&emsp;&emsp;&emsp;&emsp;`title`：列标题

&emsp;&emsp;&emsp;&emsp;`key`：字段名

&emsp;&emsp;&emsp;&emsp;`width`：列宽

&emsp;&emsp;&emsp;&emsp;`minWidth`：列最小宽

&emsp;&emsp;&emsp;&emsp;`customValue`：自定义单元格内容。如果无需额外标签，仅自定义值可以用它

&emsp;&emsp;&emsp;&emsp;`slot`：自定义展示

  

**组件实例方法**

`refresh`：刷新数据。可传入筛选参数

`getSelectValues`：可选择表格时，获取当前选择的值。参数：字符串`value`表示仅返回唯一标识；`row`表示返回选择的原始数据对象，默认`value`

  

**组件实例属性**

`loading`：是否显示 loading。比如当点击操作栏删除，调用接口过程中，可以打开 loading，禁止操作其他功能

`pageData`：页面数据原对象

`params`：当前筛选值

  

---

  

##### XnskUploadFileList 上传组件

  

```

<xnsk-upload-file-list

:token="storage.get(ACCESS_TOKEN, '')"

bucket="xnsk-module"

path="module/file/"

v-model:value="fileString"

accept=".md"

:max="1"

>

<template #uploadBtn="{ loading }">

<n-button :loading="loading">选择文件</n-button>

<span class="pointer-events-none">（.md类型）</span>

</template>

</xnsk-upload-file-list>

```

  

**属性**

`value`：文件列表的字符串，逗号隔开（后端默认文件数据格式）

`showFileList`：是否显示文件列表，默认`true`

`autoUpload`：选完文件是否自动上传，默认`true`

`multipleUpload`：是否多个上传，默认`false`

`bucket`：存储桶

`path`：存储路径

`url`：上传地址，默认`/less/api/warehouse/rest/obs/upload_file`

`params`：上传文件携带的参数

`token`：由于组件不涉及登录，需要手动传入 token

  

**回调**

`value`：返回文件列表地址的字符串，逗号隔开

`fileList`：返回文件列表原数据对象