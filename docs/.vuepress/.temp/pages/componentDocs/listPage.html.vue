<template><div><p>基础用法</p>
<n-dialog-provider>
<xnsk-list-page :config="config" />
</n-dialog-provider>
<p>注意1：因为是页面级组件，默认有内边框<br>
注意2：这里有个问题，实际项目中表格宽度是 100%，这里为什么没有撑开，有时间再看</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-list-page</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>config<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">"男"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">"女"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"王五"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">"男"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"赵六"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">"女"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"列表标题"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"年龄"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"age"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"性别"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"sex"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>config 参数</strong></p>
<p><code v-pre>api</code>：<strong>[Function]</strong> 获取数据的方法。平台项目用的 @xnsk/mini-http，配合 common 模式，直接使用接口 code 码。<br>
<code v-pre>data</code>：可以直接设置数据。和配置 api 二选一即可，看情况选择<br>
<code v-pre>dataProcess</code>：<strong>[Function]</strong> 数据加工处理，参数：当前数据，需要 return 处理后的数据<br>
<code v-pre>loadData</code>：<strong>[Boolean, Function]</strong> 是否自动加载数据，默认 true。<br>
<code v-pre>isTree</code>：<strong>[Boolean]</strong> 是否是树形列表<br>
<code v-pre>noPagination</code>：<strong>[Boolean]</strong> 当使用 data 注入数据时，是否取消分页器。<em>api 获取数据必显示分页</em><br>
<code v-pre>noPadding</code>：<strong>[Boolean]</strong> 是否取消 padding，默认 false。由于最开始是页面级组件，默认有内边框，后面在弹窗、抽屉等位置使用时，父级自带内边框，于是加上此开关<br>
<code v-pre>height</code>：<strong>[String]</strong> 自定义表格高度，默认 100%，绝大多数可能用不到<br>
<code v-pre>childrenKey</code>：<strong>[String]</strong> 树形表格时，子级的字段名，默认 children<br>
<code v-pre>selectionKey</code>：<strong>[String]</strong> 可选型表格，数据唯一性字段，默认 did<br>
<code v-pre>expand</code>：<strong>[Function]</strong> 当需要行展开且展开内容自定义时，可以使用该函数<code v-pre>return VNode</code><br>
<code v-pre>clearExpanded</code>：<strong>[Boolean]</strong> 默认 false。 树形表格每次获取数据后是否自动收起已展开的行。当展开异步获取数据时，已展开的数据不会自动刷新数据，可能需要此开关<br>
<code v-pre>rowLoad</code>：<strong>[Function, asyncFunction]</strong> 树形组件异步展开的回调，同步函数可以直接返回子级数据；异步函数数据可以直接将数据返到父级 children 下，响应式数据自动刷新</p>
<p><code v-pre>params</code>：<strong>[Object]</strong> 查询参数配置<br>
└─<code v-pre>change</code>：<strong>[Function]</strong> 查询项发生变化回调，有时候查询时还需要做其他操作<br>
└─<code v-pre>hidden</code>：<strong>[Boolean]</strong> 默认 true。是否显示查询栏，有时候参数是不可修改的，所以不用显示<br>
└─<code v-pre>items</code>：<strong>[Array]</strong> 搜索项配置。为<strong>Object</strong>，配置如下<br>
  └─<code v-pre>label</code>：<strong>[String]</strong> 文案<br>
  └─<code v-pre>type</code>：<strong>[String]</strong> 类型。目前仅支持<code v-pre>input | select</code><br>
  └─<code v-pre>selection</code>：<strong>[Array, Object]</strong> <code v-pre>type</code>为<code v-pre>select</code>时备选数据，注意：如果备选项是有接口获取的，用 ref 变量接收，这里赋值时不加.value（暂时不知道为什么）<br>
  └─<code v-pre>labelKey</code>：<strong>[String]</strong> selection 为数组时，文案属性名，默认 label<br>
  └─<code v-pre>valueKey</code>：<strong>[String]</strong> selection 为数组时，文案属性名，默认 value<br>
  └─<code v-pre>propName</code>：<strong>[String]</strong> 查询的字段名<br>
  └─<code v-pre>defaultValue</code>：<em><em>[Function, <em>]</em></em> 默认值<br>
  └─<code v-pre>span</code>：</em><em>[Number]</em>* 24 宫格中所占格数，默认 6<br>
  └─<code v-pre>hidden</code>：<strong>[Boolean]</strong> 是否隐藏该项，默认 false
  └─<code v-pre>useValue</code>：<strong>[Boolean, Function]</strong> 当隐藏该项时，是否继续使用其值，默认 true。<span style="color: gray;">说明：原本隐藏功能是一些不可修改的默认参数。2024 年 3 月 27 日，在新需求（根据某项动态显示、加载另一项）下，只隐藏的话，已修改的值仍然存在。目前方案是以参数控制，如果有特殊情况，可以手动修改 ref.params[key]</span></p>
<p><code v-pre>table</code>：<strong>[Object]</strong> 表格部分配置<br>
└─<code v-pre>title</code>：<strong>[String, Function]</strong> 表格上方标题<br>
└─<code v-pre>headBtns</code>：<strong>[Array]</strong> 表格右上角的按钮组。单按钮配置如下<br>
  └─<code v-pre>label</code>：<strong>[String]</strong> 按钮文案<br>
  └─<code v-pre>click</code>：<strong>[Function]</strong> 点击回调<br>
  └─<code v-pre>loading</code>：<strong>[Boolean]</strong> 按钮 loading<br>
  └─<code v-pre>type</code>：<strong>[String]</strong> 按钮类型，默认 primary<br>
└─<code v-pre>actions</code>：操作栏按钮组。单按钮配置如下<br>
  └─<code v-pre>label</code>：<strong>[String]</strong> 按钮文案<br>
  └─<code v-pre>click</code>：<strong>[Function]</strong> 点击回调<br>
  └─<code v-pre>show</code>：<strong>[Boolean, Function]</strong> 是否显示。如果是 Function 类型，参数为该行数据，可根据数据判断该行是否显示该按钮<br>
  └─<code v-pre>disabled</code>：<strong>[Boolean, Function]</strong> 是否禁用，使用方式同<code v-pre>show</code>，目前设置的禁用按钮透明度为 0，用于占位使按钮对齐更美观。当 2 个按钮互斥（如上架、下架）时，可以选择 show<br>
  └─<code v-pre>type</code>：<strong>[String]</strong> 按钮类型，默认 primary<br>
  └─<code v-pre>autoWarn</code>：<strong>[Boolean]</strong> 默认 false。点击时是否自动警告提示。设置为 true 时，点击提示：确认+label+？。如点击下架按钮提示“确认下架？”，点击确认，触发点击回调<br>
  └─<code v-pre>permission</code>：<strong>[String]</strong> 该按钮配置的权限字段。在【用户体系】平台配置菜单时可配置按钮权限编码。注意：由于权限数据需要根据用户数据获取，需要具体项目改造权限指令的 js 文件，可参考【应用配置】项目</p>
<p>└─<code v-pre>columns</code>：<strong>[Array]</strong> 表格列配置，单项配置如下<br>
  └─<code v-pre>title</code>：<strong>[String]</strong> 列标题<br>
  └─<code v-pre>key</code>：<strong>[String]</strong> 字段名<br>
  └─<code v-pre>width</code>：<strong>[Number]</strong> 列宽。注意：当列中有任意一个 minWidth 时，width 为固定宽度，剩余宽度均给设置 minWidth 的列；所有列都是 width 时，集体均分。<br>
  └─<code v-pre>minWidth</code>：<strong>[Number]</strong> 列最小宽<br>
  └─<code v-pre>customValue</code>：<strong>[Function]</strong> 自定义单元格内容。如果无需额外标签，仅自定义值可以用它<br>
  └─<code v-pre>slot</code>：<strong>[String]</strong> 自定义展示<br>
  └─<code v-pre>ellipsis</code>：<strong>[Boolean]</strong> 默认 true，内容溢出是否点点点显示。设置 false 可关闭，即以撑开高度方式显示所有内容<br>
  └─<code v-pre>align</code><strong>：[String]</strong> 列对齐方式，默认 center 居中<br>
  └─<code v-pre>show</code><strong>：[Boolean, Function]</strong> 列是否显示，可以动态控制列的显示</p>
<p><em>下面参数已有更优替代</em><br>
<code v-pre>apiName</code>：<strong>[Function]</strong> 加载数据的方法，已替换为 api<br>
<code v-pre>unLoad</code>：<strong>[Boolean]</strong> 不加载数据，当列表不自动加载数据时使用。已替换为 loadData<br>
<code v-pre>columns-unEllipsis</code>: <strong>[Boolean]</strong> 不使用溢出点点点显示。已替换为 ellipsis 正向判断<br>
<code v-pre>dataProcessing</code>：<strong>[Function]</strong> 数据加工方法，已替换为 dataProcess</p>
<p><strong>回调方法</strong><br>
<code v-pre>search</code>：<strong>[Function]</strong> 搜索回调<br>
<code v-pre>success</code>：<strong>[Function]</strong> 获取数据成功回调<br>
<code v-pre>finally</code>：<strong>[Function]</strong> 根据接口加载数据完成回调<br>
<code v-pre>rowLoad</code>：<strong>[Function]</strong> 树形表格，点击展开回调，可以动态加载子级<br>
<code v-pre>onUpdateChecked</code>：<strong>[Function]</strong> 可勾选时，勾选数据更新回调<br>
<code v-pre>onError</code>：<strong>[Function]</strong> 异常回调</p>
<p><strong>组件实例方法</strong><br>
<code v-pre>refresh</code>：<strong>[Function]</strong> 刷新数据。支持可传入筛选参数<br>
<code v-pre>getSelectValues</code>：<strong>[Function]</strong> 可选择型表格时，获取当前选择的值。参数**[String]**：value 表示仅返回唯一标识；row 表示返回选择的原始数据对象，默认 value</p>
<p><strong>组件属性</strong><br>
<code v-pre>loading</code>：<strong>[Boolean]</strong> 表格 loading 状态。比如当点击操作栏删除，调用接口过程中，可以打开 loading，禁止操作其他功能 <code v-pre>pageRef.value.loading = true</code><br>
<code v-pre>pageData</code>：<strong>[Object]</strong> 页面源数据，包含外层分页数据相关<br>
<code v-pre>params</code>：<strong>[Object]</strong> 当前筛选项数据，可能会用它干点什么</p>
</div></template>


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