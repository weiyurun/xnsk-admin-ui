<template><div><p><strong>基础用法</strong></p>
<n-button type="primary" @click="show = true">打开弹窗</n-button><xnsk-dialog title="标题" v-model:show="show" :callbacks="[confirmHandler]" :loading="loading">
弹窗内容
</xnsk-dialog>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>n-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打开弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>n-button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-dialog</span></span>
<span class="line">    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name"><span class="token namespace">v-model:</span>show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:callbacks</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[confirmHandler]<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">></span></span></span>
<span class="line">    弹窗内容</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xnsk-dialog</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">confirmHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数</strong></p>
<p><code v-pre>title</code>：<strong>[String]</strong> 弹窗标题<br>
<code v-pre>width</code>：<strong>[Number]</strong> 弹窗宽度<br>
<code v-pre>btns</code>：<strong>[Array]</strong> 按钮组，只传文案，默认为['确定', '取消'] 。第一个按钮为提交样式，第二个为取消样式，特殊情况可以 slot = btns 自定义按钮组<br>
<code v-pre>callbacks</code>：<strong>[Number]</strong> 回调函数数组，对应 btns 数组。第二个内置为取消操作<br>
<code v-pre>beforeClose</code>：<strong>[Function]</strong> 关闭前置守卫，使用案例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">beforeClose</span><span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  dialog<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"警告"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"确定关闭？"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">positiveText</span><span class="token operator">:</span> <span class="token string">"确定"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">negativeText</span><span class="token operator">:</span> <span class="token string">"取消"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onPositiveClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">/* 判断…… */</span></span>
<span class="line">      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//判断后手动执行关闭动作</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onNegativeClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


<script setup>
  import {ref} from "vue"
  const show = ref(false);
  const loading = ref(false);
  function confirmHandler () {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      show.value = false;
    },1000)
  }
</script>