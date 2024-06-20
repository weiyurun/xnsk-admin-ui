<template><div><p><strong>基础用法</strong></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-bottom-btns</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>n-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>保存<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>n-button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>n-button</span><span class="token punctuation">></span></span>取消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>n-button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xnsk-bottom-btns</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意需要父容器支持 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/position#sticky" target="_blank" rel="noopener noreferrer">参考</a></p>
<div style="height:100vh"></div>
<xnsk-bottom-btns>
<n-button type="primary">保存</n-button>
<n-button>取消</n-button>
</xnsk-bottom-btns>
</div></template>


