<template><div><p><strong>基础用法</strong></p>
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
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-form</span> <span class="token attr-name">:defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formData<span class="token punctuation">"</span></span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formConfig<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> submitLoading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> formConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">submitBtn</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"确认"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">loading</span><span class="token operator">:</span> submitLoading<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">click</span><span class="token operator">:</span> submitClick<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">propName</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"性别"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"select"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">propName</span><span class="token operator">:</span> <span class="token string">"sex"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">selection</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"女"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"2"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"年龄"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"input"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">propName</span><span class="token operator">:</span> <span class="token string">"age"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">checkByRegExp</span><span class="token operator">:</span> <span class="token string">"number"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">submitClick</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  submitLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 提交数据</span></span>
<span class="line">    submitLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p><strong>config 配置</strong></p>
<p><code v-pre>labelWidth</code>：<strong>[Number]</strong> 左侧文案宽度（默认文字右对齐）<br>
<code v-pre>responsive</code>: <strong>[&quot;self&quot; | &quot;screen&quot;]</strong> 响应式方案。self：以自身宽度为准；screen：以浏览器宽度为准。默认 screen（历史遗留问题）。注意：两种方案对应设置 span 方式不同<br>
<code v-pre>submitBtn</code>：<strong>[Object, null]</strong> 提交按钮。如果不需要按钮，可设置为 null<br>
└─<code v-pre>label</code>：<strong>[String]</strong> 提交按钮文案<br>
└─<code v-pre>loading</code>：<strong>[Boolean, Function]</strong> 按钮是否线上 loading<br>
└─<code v-pre>click</code>：<strong>[Function]</strong> 点击事件<br>
└─<code v-pre>autoWarn</code>：<strong>[Boolean]</strong> 是否自动提示，默认 true<br>
└─<code v-pre>validator</code>：<strong>[Function]</strong> 自定义校验方法，当表单有 slot 需要单独校验时可能需要它。通常情况下，点击确定按钮，自动校验表单项，通过后自动弹窗询问是否保存，当使用 slot 时，可能无法满足 slot 中的校验，此时有两种方法：1. 可以将 submitBtn 设为 null，完全自定义底部按钮。2. 可以使用按钮的 validator 自定义校验</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token punctuation">(</span><span class="token parameter">formData<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 根据formData校验，如果通过执行done</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>items</code>：<strong>[Array]</strong> 表单项，原来叫 columns</p>
<p>itmes 单项配置 <strong>[Object]</strong>，原来叫 columns</p>
<p><code v-pre>label</code>：<strong>[String]</strong> 文案<br>
<code v-pre>type</code>：<strong>[String]</strong> 该表单项类型。可选值：</p>
<ul>
<li><code v-pre>input</code>：输入框</li>
<li><code v-pre>input-select</code>：带输入筛选的选择</li>
<li><code v-pre>textarea</code>：多行输入</li>
<li><code v-pre>select</code>：选择框</li>
<li><code v-pre>treeSelect</code>：树形选择</li>
<li><code v-pre>radio</code>：单选</li>
<li><code v-pre>checkbox</code>：多选</li>
<li><code v-pre>text</code>：纯文本</li>
<li><code v-pre>image</code>：图片选择（默认单张）</li>
<li><code v-pre>slot</code>：自定义内容</li>
</ul>
<p><code v-pre>useFormItem</code>：<strong>Boolean</strong>类型。默认 false。当 type 为 slot 时，默认该项所占区域全部自定义。如果 title 标题、红*、底部异常文案等仍沿用表单默认样式，只自定义具体内容，可以设置<code v-pre>useFormItem:true</code><br>
<code v-pre>propName</code>：<strong>[String]</strong> 属性名<br>
<code v-pre>slotName</code>：<strong>[String]</strong> 当 type 为 slot 时，用 slotName 可能看起来更舒服。和 propName 的区别：propName 表示该项是数据项，提交时包含它，虽然值仍然需要外部注入；slotName 表示不是数据项，可能是一些与表单无关的内容，比如表格中间来个分割线<br>
<code v-pre>required</code>：<strong>[Boolean]</strong> 是否必填，默认 false<br>
<code v-pre>maxlength</code>：<strong>[Number]</strong> 输入框最大输入长度。input 默认 20，textarea 默认 200<br>
<code v-pre>rows</code>：<strong>[Number]</strong> 多行文本默认几行高度。默认 9<br>
<code v-pre>validator</code>：<strong>[Function]</strong> 自定义校验规则<br>
<code v-pre>trigger</code>：<strong>[String]</strong> 校验触发方式，默认 blur。可选<code v-pre>blur | submit</code><br>
<code v-pre>selection</code>：<strong>[Array, Function, Object]</strong> type 为选择类型时，备选项数据。Function 类型需要返回数组；Object 类型会依次将<code v-pre>key: value</code>转换为<code v-pre>[{label: key, value: value}]</code><br>
<code v-pre>selectionLabelKey</code>：<strong>[String]</strong> <code v-pre>selection</code>为数组时，自定义文案的属性名<br>
<code v-pre>selectionValueKey</code>：<strong>[String]</strong> <code v-pre>selection</code>为数组时，自定义值的属性名<br>
<code v-pre>selectionChildrenKey</code>：<strong>[String]</strong> 多级选择时，子级列表属性名<br>
<code v-pre>span</code>：<strong>[Number]</strong> 24 宫格中所占格数。默认 24<br>
<code v-pre>offset</code>：<strong>[Number]</strong> grid 布局中，左侧偏移格数，默认 0<br>
<code v-pre>clearable</code>：<strong>[Boolean]</strong> 是否可清除选择。默认 true，只针对<code v-pre>select, input-select, treeSelect</code>类型<br>
<code v-pre>placeholder</code>：<strong>[String]</strong> 提示文案。不设置时默认值：输入类型为<code v-pre>请输入+label文案</code>；选择类型为<code v-pre>请选择+label文案</code><br>
<code v-pre>readonly</code>：<strong>[Boolean, Function]</strong> 是否只读。注意：当设置为只读时，呈现样式相当于 text，并不是禁用样式<br>
<code v-pre>disabled</code>：<strong>[Boolean, Function]</strong> 是否禁用<br>
<code v-pre>show</code>：<strong>[Boolean, Function]</strong> 是否显示，默认显示。注意：不显示时仍在数据项中，但不进行校验<br>
<code v-pre>className</code>：<strong>[String]</strong> 该表单的 className<br>
<code v-pre>loading</code>：<strong>[Boolean, Function]</strong> 该表单自己的 loading。假如表单间有联动，加个 loading 可能更友好<br>
<code v-pre>style</code>：<strong>[String]</strong> 该表单项的样式，有时候 className 可能不够用<br>
<code v-pre>subStyle</code>：<strong>[String]</strong> 该表单项内容的样式。相信我，会用到的<br>
<code v-pre>clearByRegExp</code>：<strong>[String]</strong> 使用正则或内置类型自动清空不符合规则的字段，目前已内置：<strong>code</strong>-校验编码（英文大小写、数字、下划线），<strong>number</strong>-纯数字<br>
<code v-pre>checkByRegExp</code>：<strong>[String]</strong> 使用正则或内置类型自动校验，内置如上<br>
<code v-pre>onInput</code>：<strong>[Function]</strong> input 事件回调。返回参数：<code v-pre>value</code>值，<code v-pre>itemConfig</code>该项配置<br>
<code v-pre>onBlur</code>：<strong>[Function]</strong> blur 事件回调。返回参数：<code v-pre>value</code>值，<code v-pre>itemConfig</code>该项配置<br>
<code v-pre>onChange</code>：<strong>[Function]</strong> change 事件回调。返回参数：<code v-pre>value</code>值，<code v-pre>itemConfig</code>该项配置<br>
<code v-pre>errorMessage</code>: <strong>[String]</strong> 自定义错误提示语</p>
<p><em>下面属性未删除但有更优方案</em>：
<code v-pre>text</code>：<strong>[String, Function]</strong> 当表单<code v-pre>type</code>值为 text 时设置显示内容，支持函数返回，原本是当修改表单时，一些不可修改内容以纯文本显示，因为禁用样式的字体颜色、背景色、边框的等看起来不友好。后面用 readonly 代替</p>
<p><strong>表单实例方法</strong></p>
<p><code v-pre>validate</code>：发起验证<br>
<code v-pre>getValue</code>：获取当前表单数据<br>
<code v-pre>setValue</code>：设置表单数据，如：<code v-pre>formRef.value.setValue({code:111})</code>。</p>
<p>表单使用心得：简单的表单直接<code v-pre>v-model:value</code>双向绑定数据，配置好接口需要的字段，提交按钮的回调参数直接传给后端，复杂的表单建议<code v-pre>:value</code>传入数据，使用组件<code v-pre>@update:value</code>属性或者 config 配置项的 onChange 手动修改</p>
</div></template>


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