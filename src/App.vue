<template>
  <div class="p-8">
    <xnsk-upload-file-list bucket="xnsk-ruian-common" path="privacy/weiyr" token="09bd9adb4631455a9e70ac91c9b57046">
      <template #uploadBtn>
        <button>选择文件</button>
      </template>
    </xnsk-upload-file-list>
  </div>
</template>

<script setup>
import { XnskUploadFileList } from "./components";
</script>
