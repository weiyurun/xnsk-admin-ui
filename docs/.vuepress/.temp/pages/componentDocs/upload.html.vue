<template><div><p><strong>基础用法</strong></p>
<xnsk-upload v-model:value="fileString" :max="1">
<template #uploadBtn="{ loading }">
<n-button type="primary" :loading="loading">选择文件</n-button>
</template>
</xnsk-upload>
<div>上传结果{{fileString}}</div>
<div style="color:red">由于需要server服务，貌似在这个网页验证不了，有时间处理</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xnsk-upload</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fileString<span class="token punctuation">"</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#uploadBtn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ loading }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>n-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>选择文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>n-button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xnsk-upload</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> fileString <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color: #3eaf7c;">【支持原属性】</span></p>
<p><strong>属性</strong><br>
<code v-pre>value</code>：<strong>[String]</strong> 文件列表的字符串，逗号隔开（后端默认文件数据格式）<br>
<code v-pre>showFileList</code>：<strong>[Boolean]</strong> 是否显示文件列表，默认 true<br>
<code v-pre>autoUpload</code>：<strong>[Boolean]</strong> 选完文件是否自动上传，默认 true<br>
<code v-pre>multipleUpload</code>：<strong>[Boolean]</strong> 是否多个上传，默认 false<br>
<code v-pre>bucket</code>：<strong>[String]</strong> 存储桶，默认<br>
<code v-pre>path</code>：<strong>[String]</strong> 存储路径，默认 base/permission<br>
<code v-pre>url</code>：<strong>[String]</strong> 上传地址，默认/less/api/warehouse/rest/obs/upload_file<br>
<code v-pre>params</code>：<strong>[Object]</strong> 上传文件携带的参数<br>
<code v-pre>token</code>：<strong>[String]</strong> 默认使用平台通用 token，如有需要可以手动指定<br>
其他可参考原 naive-ui 属性</p>
<p><strong>回调</strong><br>
<code v-pre>value</code>：<strong>[String]</strong> 返回文件列表地址的字符串，逗号隔开<br>
<code v-pre>fileList</code>：<strong>[Array]</strong> 返回文件列表原数据对象</p>
</div></template>


<script setup>
    import { ref } from 'vue'
    const fileString = ref('')
</script>