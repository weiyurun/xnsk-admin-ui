
# 先农数科，平台项目专用 UI 框架


本文档不再更新，后期以[ 在线文档 ](https://www.zybuluo.com/weiyurun/note/2546489)形式查看最新文档


安装

    npm i xnsk-admin-ui


**说明**
 > - 基于 [naive-ui][1]，版本>=2.34.3  
 > - 个别组件的属性并未加工，直接继承了attrs，所以可以直接使用原naive-ui的属性，注意标识
 <span style="color: blue;">【支持原属性】</span>  

## XnskTitle 左侧带蓝条标题  
<span style="color: gray;">替换原 XnskBlueTitle</span>  
单标题使用  
```  
<xnsk-title title="标题" />
```  
标签内容将放到右侧，通常是放按钮  
```  
<xnsk-title title="标题" >  
    <n-button>按钮</n-button>  
</xnsk-title>  
```  
其他属性：  

> `size`：**[Number, String]** 字体大小。默认 small 对应 14px，可选 big 对应 18px。其他值直接写（如 20px）  
> `showTitleBar`：**[Boolean]** 是否显示蓝条，默认 true  

  
---

  

##XnskDialog 弹窗

  
```
<xnsk-dialog
    title="标题"
    v-model:show="true"
    width="600"
    :btns="['确定', '取消']"
    :callbacks="[submitHandler,cancelHandler]"
    @beforeClose="beforeClose"
>
<!-- 弹窗主体 -->
</xnsk-dialog>

```

  
beforeClose使用案例：

```
function beforeClose(done) {
    dialog.warning({
        title: "警告",
        content: "确定关闭？",
        positiveText: "确定",
        negativeText: "取消",
        onPositiveClick: () => {
            /* 业务判断 */
            done();//执行关闭动作
        },
        onNegativeClick: () => {},
    });
}
```

---
  

## XnskDialogMsg 文本弹窗，带复制功能

```
<xnsk-dialog-msg
    v-model:show="true"
    data="日志文本内容"
    title="查看日志"
    buttonText="复制"
/>
```

---

##XnskDrawer 右侧抽屉

```
<xnsk-drawer v-model:show="true" title="新增">
    <!-- 抽屉内容 -->
</xnsk-drawer>
```
***$\color{blue}{【支持原属性】}$***

属性
> `title`：**[String]** 标题
> `width`：**[Number]** 抽屉宽度，固定 px 单位不用写，默认 500
> `outClosable`：**[Boolean]** 点击外部是否自动关闭，默认false

---

## XnskErrorIcon 专门查看错误信息的 icon

显示为一个 icon，点击弹窗显示，带复制功能

```
<xnsk-error-icon message="某某异常" />
```

---

## XnskForm 表单

```
<xnsk-form v-model:value="formData" :config="formConfig"></xnsk-form>
```

  

**config 配置**

`labelWidth`：**[Number]** 左侧文案宽度（默认文字右对齐）   
`submitBtn`：**[Object, null]** 提交按钮。如果不需要按钮，可设置为null  
└─`label`：**[String]** 提交按钮文案     
└─`loading`：**[Boolean, Function]** 按钮是否线上loading   
└─`click`：**[Function]** 点击事件  
`columns`：**[Array]** 表单项  

columns 单项配置 **[Object]**  

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
 
`useFormItem`：**Boolean**类型。默认false。当type为slot时，默认该项所占区域全部自定义。如果title标题、红*、底部异常文案等仍沿用表单默认样式，只自定义具体内容，可以设置`useFormItem:true`  
`propName`：**[String]** 属性名  
`slotName`：**[String]**   当type为slot时，用slotName可能看起来更舒服。和propName的区别：propName表示该项是数据项，提交时包含它，虽然值仍然需要外部注入；slotName表示不是数据项，可能是一些与表单无关的内容，比如表格中间来个分割线  
`required`：**[Boolean]** 是否必填，默认false  
`maxlength`：**[Number]** 输入框最大输入长度。input默认20，textarea默认200  
`rows`：**[Number]** 多行文本默认几行高度。默认 9  
`validator`：**[Function]** 自定义校验规则  
`trigger`：**[String]** 校验触发方式，默认blur。可选` blur | submit `  
`selection`：**[Array, Function, Object]** type 为选择类型时，备选项数据。Function类型需要返回数组；Object类型会依次将`key: value`转换为`[{label: key, value: value}]`  
`selectionLabelKey`：**[String]** `selection`为数组时，自定义文案的属性名  
`selectionValueKey`：**[String]** `selection`为数组时，自定义值的属性名  
`selectionChildrenKey`：**[String]** 多级选择时，子级列表属性名  
`span`：**[Number]** 24 宫格中所占格数。默认24  
`offset`：**[Number]** grid 布局中，左侧偏移格数，默认0  
`clearable`：**[Boolean]** 是否可清除选择。默认 true，只针对`select, input-select, treeSelect`类型  
`placeholder`：**[String]** 提示文案。不设置时默认值：输入类型为`请输入+label文案`；选择类型为`请选择+label文案`  
`readonly`：**[Boolean, Function]** 是否只读。注意：当设置为只读时，呈现样式相当于text，并不是禁用样式  
`disabled`：**[Boolean, Function]** 是否禁用  
`show`：**[Boolean, Function]** 是否显示，默认显示。注意：不显示时仍在数据项中，但不进行校验  
`className`：**[String]** 该表单的className  
`loading`：**[Boolean, Function]** 该表单自己的loading。假如表单间有联动，加个loading可能更友好  
`style`：**[String]** 该表单项的样式，有时候className可能不够用  
`subStyle`：**[String]** 该表单项内容的样式。相信我，会用到的  
`clearByRegExp`：**[String]** 使用正则或内置类型自动清空不符合规则的字段，目前已内置：**code**-校验编码（英文大小写、数字、下划线），**number**-纯数字  
`checkByRegExp`：**[String]** 使用正则或内置类型自动校验，内置如上  
`onInput`：**[Function]** input 事件回调。返回参数：`value`值，`itemConfig`该项配置  
`onBlur`：**[Function]** blur 事件回调。返回参数：`value`值，`itemConfig`该项配置  
`onChange`：**[Function]** change 事件回调。返回参数：`value`值，`itemConfig`该项配置  

*下面属性未删除但有更优方案*：
`text`：**[String, Function]** 当表单`type`值为 text 时设置显示内容，支持函数返回，原本是当修改表单时，一些不可修改内容以纯文本显示，因为禁用样式的字体颜色、背景色、边框的等看起来不友好。后面用readonly代替  


**表单实例方法**

`validate`：发起验证  
`getValue`：获取当前表单数据  
`setValue`：设置表单数据，如：`formRef.value.setValue({code:111})`。  

表单使用心得：简单的表单直接`v-model:value`双向绑定数据，配置好接口需要的字段，提交按钮的回调参数直接传给后端，复杂的表单建议`:value`传入数据，使用组件`@update:value`属性或者config配置项的onChange手动修改
  
---

  

## XnskBottomBtns 底部按钮组

<span style="color: gray;">替换原 XnskFromBtns</span>

主要作用：页面过长时吸附在底部，注意需要父级容器支持

```
<xnsk-bottom-btns>
    <n-button>保存</n-button>
    <n-button>取消</n-button>
</xnsk-bottom-btns>

```

---

  

## XnskInfo 详情展示

```
<xnsk-info :config="infoConfig" :data="infoData" />
```

`data`：**[Object]** 源数据  
`config`：**[Object]** 配置项  

**config参数：**
`title`：**[String]** 标题  
`labelWidth`：**[Number]** 文案宽度  
`labelAlign`：**[String]** 文案对其方式，默认left  
`column`：**[Array]** 展示项  
`useColon`：**[Boolean]** 是否使用冒号  

**column单项配置：**
`label`：**[String]** 文案  
`value`：**[String, Function]** 字段值。如果是`String`类型，表示取data数据中对应属性值；如果是`Function`类型，则取其返回值，在多个字段拼接或加工数据时会用到`Function`  
`span`：**[Number]** 24 宫格中所占格数，默认 8  
`slot`：**[String]** 使用 slot 展示  

---

## XnskListPage 列表页面

```
<xnsk-list-page :config="config" />
```

**config参数**

`api`：**[Function]** 获取数据接口方法  
`data`：可以直接设置数据。和配置api二选一即可，看情况选择   
`dataProcess`：**[Function]** 数据加工处理，参数：当前数据，需要return处理后的数据  
`loadData`：**[Boolean, Function]** 是否自动加载数据，默认true。  
`isTree`：**[Boolean]** 是否是树形列表  
`noPagination`：**[Boolean]** 当使用data注入数据时，是否使用分页器。*api获取数据必显示分页*  
`noPadding`：**[Boolean]** 是否有padding，默认true。由于最开始是页面级组件，默认有内边框，后面在弹窗、抽屉等位置使用时，父级自带内边框，于是加上此开关  
`height`：**[String]** 自定义表格高度，默认100%，绝大多数可能用不到  
`childrenKey`：**[String]** 树形表格时，子级的字段名，默认children  
`selectionKey`：**[String]** 可选型表格，数据唯一性字段，默认did  
`expand`：**[Function]** 当需要行展开且展开内容自定义时，可以使用该函数`return VNode`  
`clearExpanded`：**[Boolean]** 默认false。 树形表格每次获取数据后是否自动收起已展开的行。当展开异步获取数据时，已展开的数据不会自动刷新数据，可能需要此开关  
`rowLoad`：**[Function, asyncFunction]** 树形组件异步展开的回调，同步函数可以直接返回子级数据；异步函数数据可以直接将数据返到父级children下，响应式数据自动刷新  

`params`：**[Object]** 查询参数配置  
└─`change`：**[Function]** 查询项发生变化回调，有时候查询时还需要做其他操作  
└─`hidden`：**[Boolean]** 默认true。是否显示查询栏，有时候参数是不可修改的，所以不用显示  
└─`items`：**[Array]** 搜索项配置。为**Object**，配置如下  
&emsp;&emsp;└─`label`：**[String]** 文案  
&emsp;&emsp;└─`type`：**[String]** 类型。目前仅支持` input | select `  
&emsp;&emsp;└─`selection`：**[Array, Object, Function]** `type`为`select`时备选数据  
&emsp;&emsp;└─`labelKey`：**[String]** selection为数组时，文案属性名，默认label  
&emsp;&emsp;└─`valueKey`：**[String]** selection为数组时，文案属性名，默认value  
&emsp;&emsp;└─`propName`：**[String]** 查询的字段名  
&emsp;&emsp;└─`defaultValue`：**[Function, *]** 默认值  
&emsp;&emsp;└─`span`：**[Number]** 24 宫格中所占格数，默认 6  
 
`table`：**[Object]** 表格部分配置  
└─`title`：**[String, Function]** 表格上方标题  
└─`headBtns`：**[Array]** 表格右上角的按钮组。单按钮配置如下  
&emsp;&emsp;└─`label`：**[String]** 按钮文案  
&emsp;&emsp;└─`click`：**[Function]** 点击回调  
&emsp;&emsp;└─`loading`：**[Boolean]** 按钮loading  
&emsp;&emsp;└─`type`：**[String]** 按钮类型，默认primary  
└─`actions`：操作栏按钮组。单按钮配置如下  
&emsp;&emsp;└─`label`：**[String]** 按钮文案  
&emsp;&emsp;└─`click`：**[Function]** 点击回调  
&emsp;&emsp;└─`show`：**[Boolean, Function]** 是否显示。如果是Function类型，参数为该行数据，可根据数据判断该行是否显示该按钮  
&emsp;&emsp;└─`disabled`：**[Boolean, Function]** 是否禁用，使用方式同`show`，目前设置的禁用按钮透明度为 0，用于占位使按钮对齐更美观。当2个按钮互斥（如上架、下架）时，可以选择show  
&emsp;&emsp;└─`type`：**[String]** 按钮类型，默认primary  
&emsp;&emsp;└─`autoWarn`：**[Boolean]** 默认false。点击时是否自动警告提示。设置为true时，点击提示：确认+label+？。如点击下架按钮提示“确认下架？”，点击确认，触发点击回调  
&emsp;&emsp;└─`permission`：**[String]** 该按钮配置的权限字段。在【用户体系】平台配置菜单时可配置按钮权限编码。注意：由于权限数据需要根据用户数据获取，需要具体项目改造权限指令的js文件，可参考【应用配置】项目  

└─`columns`：**[Array]** 表格列配置，单项配置如下  
&emsp;&emsp;└─`title`：**[String]** 列标题  
&emsp;&emsp;└─`key`：**[String]** 字段名  
&emsp;&emsp;└─`width`：**[Number]** 列宽。注意：当列中有任意一个minWidth时，width为固定宽度，剩余宽度均给设置minWidth的列；所有列都是width时，集体均分。  
&emsp;&emsp;└─`minWidth`：**[Number]** 列最小宽  
&emsp;&emsp;└─`customValue`：**[Function]** 自定义单元格内容。如果无需额外标签，仅自定义值可以用它  
&emsp;&emsp;└─`slot`：**[String]** 自定义展示  
&emsp;&emsp;└─`ellipsis`：**[Boolean]** 默认true，内容溢出是否点点点显示。设置false可关闭，即以撑开高度方式显示所有内容  
&emsp;&emsp;└─`align`**：[String]** 列对齐方式，默认center居中  
&emsp;&emsp;└─`show`**：[Boolean, Function]** 列是否显示，可以动态控制列的显示  

*下面参数已有更优替代*  
`apiName`：**[Function]** 加载数据的方法，已替换为api  
`unLoad`：**[Boolean]** 不加载数据，当列表不自动加载数据时使用。已替换为loadData  
`columns-unEllipsis`: **[Boolean]** 不使用溢出点点点显示。已替换为ellipsis正向判断  
`dataProcessing`：**[Function]** 数据加工方法，已替换为dataProcess  
  
**回调方法**  
`search`：：**[Function]** 搜索回调  
`success`：：**[Function]** 获取数据成功回调  
`finally`：：**[Function]** 根据接口加载数据完成回调  
`rowLoad`：：**[Function]** 树形表格，点击展开回调，可以动态加载子级  
`onUpdateChecked`：：**[Function]** 可勾选时，勾选数据更新回调  
`onError`：：**[Function]** 异常回调  

**组件实例方法**  
`refresh`：**[Function]** 刷新数据。支持可传入筛选参数  
`getSelectValues`：**[Function]** 可选择型表格时，获取当前选择的值。参数**[String]**：value表示仅返回唯一标识；row表示返回选择的原始数据对象，默认value  

**组件属性**  
`loading`：**[Boolean]** 表格loading状态。比如当点击操作栏删除，调用接口过程中，可以打开 loading，禁止操作其他功能 `pageRef.value.loading = true`  
`pageData`：**[Object]** 页面源数据，包含外层分页数据相关  
`params`：**[Object]** 当前筛选项数据，可能会用它干点什么  

---

##XnskUpload 上传组件  

<span style="color: gray;">替换原 XnskUploadFileList</span>  

```
<xnsk-upload  
    v-model:value="fileString"  
    accept=".md"  
    :max="1"  
>  
<template #uploadBtn="{ loading }">  
<n-button :loading="loading">选择文件</n-button>  
<span class="pointer-events-none">（.md类型）</span>  
</template>  
</xnsk-upload>  
```

***$\color{blue}{【支持原属性】}$***  

**属性**
`value`：**[String]**文件列表的字符串，逗号隔开（后端默认文件数据格式）  
`showFileList`：**[Boolean]**是否显示文件列表，默认true   
`autoUpload`：**[Boolean]**选完文件是否自动上传，默认true  
`multipleUpload`：**[Boolean]** 是否多个上传，默认false  
`bucket`：**[String]** 存储桶，默认  
`path`：**[String]** 存储路径，默认base/permission  
`url`：**[String]** 上传地址，默认/less/api/warehouse/rest/obs/upload_file  
`params`：**[Object]** 上传文件携带的参数  
`token`：**[String]** 默认使用平台通用token，如有需要可以手动指定  
其他可参考原naive-ui属性  

  
**回调**  
`value`：**[String]** 返回文件列表地址的字符串，逗号隔开  
`fileList`：**[Array]** 返回文件列表原数据对象  

  [1]: https://www.naiveui.com/zh-CN/os-theme/docs/introduction