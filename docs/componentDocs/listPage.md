基础用法
<n-dialog-provider>
<xnsk-list-page :config="config" />
</n-dialog-provider>

<script setup>
import { ref } from "vue";

const config = {
  data: [
    { name:'张三',age:18,sex:'男' },
    { name:'李四',age:19,sex:'女' },
    { name:'王五',age:20,sex:'男' },
    { name:'赵六',age:21,sex:'女' },
  ],
  params: {},
  table: {
    title: '列表标题',
    columns: [
      {
        title: "姓名",
        key: "name",
      },
      {
        title: "年龄",
        key: "age",
      },
      {
        title: "性别",
        key: "sex",
      },
    ],
  },
};
</script>

注意1：因为是页面级组件，默认有内边框  
注意2：这里有个问题，实际项目中表格宽度是 100%，这里为什么没有撑开，有时间再看

```vue
<template>
  <xnsk-list-page :config="config" />
</template>

<script setup>
import { ref } from "vue";

const config = {
  data: [
    { name: "张三", age: 18, sex: "男" },
    { name: "李四", age: 19, sex: "女" },
    { name: "王五", age: 20, sex: "男" },
    { name: "赵六", age: 21, sex: "女" },
  ],
  params: {},
  table: {
    title: "列表标题",
    columns: [
      {
        title: "姓名",
        key: "name",
      },
      {
        title: "年龄",
        key: "age",
      },
      {
        title: "性别",
        key: "sex",
      },
    ],
  },
};
</script>
```

**config 参数**

`api`：**[Function]** 获取数据的方法。平台项目用的 @xnsk/mini-http，配合 common 模式，直接使用接口 code 码。  
`data`：可以直接设置数据。和配置 api 二选一即可，看情况选择  
`dataProcess`：**[Function]** 数据加工处理，参数：当前数据，需要 return 处理后的数据  
`loadData`：**[Boolean, Function]** 是否自动加载数据，默认 true。  
`isTree`：**[Boolean]** 是否是树形列表  
`noPagination`：**[Boolean]** 当使用 data 注入数据时，是否取消分页器。_api 获取数据必显示分页_  
`noPadding`：**[Boolean]** 是否取消 padding，默认 false。由于最开始是页面级组件，默认有内边框，后面在弹窗、抽屉等位置使用时，父级自带内边框，于是加上此开关  
`height`：**[String]** 自定义表格高度，默认 100%，绝大多数可能用不到  
`childrenKey`：**[String]** 树形表格时，子级的字段名，默认 children  
`selectionKey`：**[String]** 可选型表格，数据唯一性字段，默认 did  
`expand`：**[Function]** 当需要行展开且展开内容自定义时，可以使用该函数`return VNode`  
`clearExpanded`：**[Boolean]** 默认 false。 树形表格每次获取数据后是否自动收起已展开的行。当展开异步获取数据时，已展开的数据不会自动刷新数据，可能需要此开关  
`rowLoad`：**[Function, asyncFunction]** 树形组件异步展开的回调，同步函数可以直接返回子级数据；异步函数数据可以直接将数据返到父级 children 下，响应式数据自动刷新

`params`：**[Object]** 查询参数配置  
└─`change`：**[Function]** 查询项发生变化回调，有时候查询时还需要做其他操作  
└─`hidden`：**[Boolean]** 默认 true。是否显示查询栏，有时候参数是不可修改的，所以不用显示  
└─`items`：**[Array]** 搜索项配置。为**Object**，配置如下  
&emsp;&emsp;└─`label`：**[String]** 文案  
&emsp;&emsp;└─`type`：**[String]** 类型。目前仅支持`input | select`  
&emsp;&emsp;└─`selection`：**[Array, Object]** `type`为`select`时备选数据，注意：如果备选项是有接口获取的，用 ref 变量接收，这里赋值时不加.value（暂时不知道为什么）  
&emsp;&emsp;└─`labelKey`：**[String]** selection 为数组时，文案属性名，默认 label  
&emsp;&emsp;└─`valueKey`：**[String]** selection 为数组时，文案属性名，默认 value  
&emsp;&emsp;└─`propName`：**[String]** 查询的字段名  
&emsp;&emsp;└─`defaultValue`：**[Function, *]** 默认值  
&emsp;&emsp;└─`span`：**[Number]** 24 宫格中所占格数，默认 6  
&emsp;&emsp;└─`hidden`：**[Boolean]** 是否隐藏该项，默认 false
&emsp;&emsp;└─`useValue`：**[Boolean, Function]** 当隐藏该项时，是否继续使用其值，默认 true。<span style="color: gray;">说明：原本隐藏功能是一些不可修改的默认参数。2024 年 3 月 27 日，在新需求（根据某项动态显示、加载另一项）下，只隐藏的话，已修改的值仍然存在。目前方案是以参数控制，如果有特殊情况，可以手动修改 ref.params[key]</span>

`table`：**[Object]** 表格部分配置  
└─`title`：**[String, Function]** 表格上方标题  
└─`headBtns`：**[Array]** 表格右上角的按钮组。单按钮配置如下  
&emsp;&emsp;└─`label`：**[String]** 按钮文案  
&emsp;&emsp;└─`click`：**[Function]** 点击回调  
&emsp;&emsp;└─`loading`：**[Boolean]** 按钮 loading  
&emsp;&emsp;└─`type`：**[String]** 按钮类型，默认 primary  
└─`actions`：操作栏按钮组。单按钮配置如下  
&emsp;&emsp;└─`label`：**[String]** 按钮文案  
&emsp;&emsp;└─`click`：**[Function]** 点击回调  
&emsp;&emsp;└─`show`：**[Boolean, Function]** 是否显示。如果是 Function 类型，参数为该行数据，可根据数据判断该行是否显示该按钮  
&emsp;&emsp;└─`disabled`：**[Boolean, Function]** 是否禁用，使用方式同`show`，目前设置的禁用按钮透明度为 0，用于占位使按钮对齐更美观。当 2 个按钮互斥（如上架、下架）时，可以选择 show  
&emsp;&emsp;└─`type`：**[String]** 按钮类型，默认 primary  
&emsp;&emsp;└─`autoWarn`：**[Boolean]** 默认 false。点击时是否自动警告提示。设置为 true 时，点击提示：确认+label+？。如点击下架按钮提示“确认下架？”，点击确认，触发点击回调  
&emsp;&emsp;└─`permission`：**[String]** 该按钮配置的权限字段。在【用户体系】平台配置菜单时可配置按钮权限编码。注意：由于权限数据需要根据用户数据获取，需要具体项目改造权限指令的 js 文件，可参考【应用配置】项目

└─`columns`：**[Array]** 表格列配置，单项配置如下  
&emsp;&emsp;└─`title`：**[String]** 列标题  
&emsp;&emsp;└─`key`：**[String]** 字段名  
&emsp;&emsp;└─`width`：**[Number]** 列宽。注意：当列中有任意一个 minWidth 时，width 为固定宽度，剩余宽度均给设置 minWidth 的列；所有列都是 width 时，集体均分。  
&emsp;&emsp;└─`minWidth`：**[Number]** 列最小宽  
&emsp;&emsp;└─`customValue`：**[Function]** 自定义单元格内容。如果无需额外标签，仅自定义值可以用它  
&emsp;&emsp;└─`slot`：**[String]** 自定义展示  
&emsp;&emsp;└─`ellipsis`：**[Boolean]** 默认 true，内容溢出是否点点点显示。设置 false 可关闭，即以撑开高度方式显示所有内容  
&emsp;&emsp;└─`align`**：[String]** 列对齐方式，默认 center 居中  
&emsp;&emsp;└─`show`**：[Boolean, Function]** 列是否显示，可以动态控制列的显示

_下面参数已有更优替代_  
`apiName`：**[Function]** 加载数据的方法，已替换为 api  
`unLoad`：**[Boolean]** 不加载数据，当列表不自动加载数据时使用。已替换为 loadData  
`columns-unEllipsis`: **[Boolean]** 不使用溢出点点点显示。已替换为 ellipsis 正向判断  
`dataProcessing`：**[Function]** 数据加工方法，已替换为 dataProcess

**回调方法**  
`search`：**[Function]** 搜索回调  
`success`：**[Function]** 获取数据成功回调  
`finally`：**[Function]** 根据接口加载数据完成回调  
`rowLoad`：**[Function]** 树形表格，点击展开回调，可以动态加载子级  
`onUpdateChecked`：**[Function]** 可勾选时，勾选数据更新回调  
`onError`：**[Function]** 异常回调

**组件实例方法**  
`refresh`：**[Function]** 刷新数据。支持可传入筛选参数  
`getSelectValues`：**[Function]** 可选择型表格时，获取当前选择的值。参数**[String]**：value 表示仅返回唯一标识；row 表示返回选择的原始数据对象，默认 value

**组件属性**  
`loading`：**[Boolean]** 表格 loading 状态。比如当点击操作栏删除，调用接口过程中，可以打开 loading，禁止操作其他功能 `pageRef.value.loading = true`  
`pageData`：**[Object]** 页面源数据，包含外层分页数据相关  
`params`：**[Object]** 当前筛选项数据，可能会用它干点什么
