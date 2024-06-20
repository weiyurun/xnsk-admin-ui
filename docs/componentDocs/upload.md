**基础用法**  
<xnsk-upload v-model:value="fileString" :max="1">
<template #uploadBtn="{ loading }">
<n-button type="primary" :loading="loading">选择文件</n-button>
</template>
</xnsk-upload>

<div>上传结果{{fileString}}</div>
<div style="color:red">由于需要server服务，貌似在这个网页验证不了，有时间处理</div>

<script setup>
    import { ref } from 'vue'
    const fileString = ref('')
</script>


```vue
<xnsk-upload v-model:value="fileString" :max="1">
    <template #uploadBtn="{ loading }">
        <n-button type="primary" :loading="loading">选择文件</n-button>
    </template>
</xnsk-upload>
<script setup>
import { ref } from "vue";
const fileString = ref("");
</script>
```

<span style="color: #3eaf7c;">【支持原属性】</span>

**属性**  
`value`：**[String]** 文件列表的字符串，逗号隔开（后端默认文件数据格式）  
`showFileList`：**[Boolean]** 是否显示文件列表，默认 true  
`autoUpload`：**[Boolean]** 选完文件是否自动上传，默认 true  
`multipleUpload`：**[Boolean]** 是否多个上传，默认 false  
`bucket`：**[String]** 存储桶，默认  
`path`：**[String]** 存储路径，默认 base/permission  
`url`：**[String]** 上传地址，默认/less/api/warehouse/rest/obs/upload_file  
`params`：**[Object]** 上传文件携带的参数  
`token`：**[String]** 默认使用平台通用 token，如有需要可以手动指定  
其他可参考原 naive-ui 属性

**回调**  
`value`：**[String]** 返回文件列表地址的字符串，逗号隔开  
`fileList`：**[Array]** 返回文件列表原数据对象
