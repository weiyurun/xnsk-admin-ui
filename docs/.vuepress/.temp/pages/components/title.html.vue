<template><div><p>默认</p>
<xnsk-title title="标题" /><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-title</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>小标题</p>
<xnsk-title size="small" title="小标题" /><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-title</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>小标题<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>大标题</p>
<xnsk-title size="big" title="大标题" /><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-title</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>big<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>大标题<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>自定义大小</p>
<xnsk-title size="40px" title="自定义大小" /><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-title</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40px<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义大小<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>标签内容将放到右侧，通常是放按钮</p>
<xnsk-title title="标题">
<n-button type="primary">按钮</n-button>
</xnsk-title>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-title</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>n-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>n-button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xnsk-title</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性：</p>
<blockquote>
<p><code v-pre>size</code>：<strong>[Number, String]</strong> 字体大小。默认 small 对应 14px，可选 big 对应 18px。其他值直接写（如 20px）<br>
<code v-pre>showTitleBar</code>：<strong>[Boolean]</strong> 是否显示蓝条，默认 true</p>
</blockquote>
</div></template>


