<template><div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-info</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infoConfig<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infoData<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>data</code>：<strong>[Object]</strong> 源数据<br>
<code v-pre>config</code>：<strong>[Object]</strong> 配置项</p>
<p><strong>config 参数：</strong><br>
<code v-pre>title</code>：<strong>[String]</strong> 标题<br>
<code v-pre>labelWidth</code>：<strong>[Number]</strong> 文案宽度<br>
<code v-pre>labelAlign</code>：<strong>[String]</strong> 文案对其方式，默认 left<br>
<code v-pre>items</code>：<strong>[Array]</strong> 展示项
<code v-pre>useColon</code>：<strong>[Boolean]</strong> 是否使用冒号</p>
<p><strong>items 单项配置：</strong><br>
<code v-pre>label</code>：<strong>[String]</strong> 文案<br>
<code v-pre>value</code>：<strong>[String, Function]</strong> 字段值。如果是<code v-pre>String</code>类型，表示取 data 数据中对应属性值；如果是<code v-pre>Function</code>类型，则取其返回值，在多个字段拼接或加工数据时会用到<br>
<code v-pre>span</code>：<strong>[Number]</strong> 24 宫格中所占格数，默认 8<br>
<code v-pre>slot</code>：<strong>[String]</strong> 使用 slot 展示</p>
</div></template>


