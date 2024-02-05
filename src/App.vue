<template>
  <div>
    fileString:
    {{ fileString }}
    <XnskUploadFileList
      token="bbaa76d65c9a4d7098b721384691acd8"
      bucket="xnsk-ruian-common"
      path="module/file/aggregationEntrance"
      v-model:value="fileString"
      isUpdateFileName="0"
      :max="1"
    >
      <template #uploadBtn>
        <n-button>选择文件</n-button>
      </template>
    </XnskUploadFileList>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { XnskUploadFileList } from "./components";
</script>
