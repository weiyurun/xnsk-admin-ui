<template>
  <div class="p-8">
    <xnsk-upload-file-list v-model:value="fileList" ref="uploadRef">
      <template #uploadBtn="{ loading }">
        <button type="primary" :loading="loading" class="imgBtn">
          上传文件
        </button>
      </template>
    </xnsk-upload-file-list>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { XnskUploadFileList } from "./components";
const fileList = ref("");
</script>
