<template><div><p><strong>基础用法</strong></p>
<xnsk-info :config="infoConfig" :data="infoData" /><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-info</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infoConfig<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infoData<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">const</span> infoData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> infoConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"用户信息"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">useColon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"姓名"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"name"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"年龄"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"age"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"性别"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"sex"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>data</code>：<strong>[Object]</strong> 源数据<br>
<code v-pre>config</code>：<strong>[Object]</strong> 配置项</p>
<p><strong>config 参数：</strong><br>
<code v-pre>title</code>：<strong>[String]</strong> 标题<br>
<code v-pre>labelWidth</code>：<strong>[Number]</strong> 文案宽度<br>
<code v-pre>labelAlign</code>：<strong>[String]</strong> 文案对其方式，默认 left<br>
<code v-pre>items</code>：<strong>[Array]</strong> 展示项<br>
<code v-pre>useColon</code>：<strong>[Boolean]</strong> 是否使用冒号</p>
<p><strong>items 单项配置：</strong><br>
<code v-pre>label</code>：<strong>[String]</strong> 文案<br>
<code v-pre>value</code>：<strong>[String, Function]</strong> 字段值。如果是<code v-pre>String</code>类型，表示取 data 数据中对应属性值；如果是<code v-pre>Function</code>类型，则取其返回值，在多个字段拼接或加工数据时会用到<br>
<code v-pre>span</code>：<strong>[Number]</strong> 24 宫格中所占格数，默认 8<br>
<code v-pre>slot</code>：<strong>[String]</strong> 使用 slot 展示</p>
</div></template>


<script setup>
    const infoData = {
        name: "张三",
        age: 18,
        sex: "男"
    }
    const infoConfig = {
        title:"用户信息",
        useColon:true,
        items: [
            { label: "姓名", value: "name" },
            { label: "年龄", value: "age" },
            { label: "性别", value: "sex" },
        ]
    }

</script>