<template><div><p><strong>基础用法</strong></p>
<n-message-provider>
<div style="color:red;display:flex;align-items:center;">
    <span>操作失败</span>
    <xnsk-log-icon message="失败原因" />
</div>
</n-message-provider>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">align-items</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>操作失败<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-log-icon</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>失败原因<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在任务成功或失败时，页面默认只显示成功或失败的结果，后面带一个 icon，点击查看详情，比 dialogMsg 更方便</p>
<p><strong>属性</strong><br>
<code v-pre>autoClose</code>： <strong>[Boolean]</strong> 复制后是否自动关闭，默认 true</p>
</div></template>


