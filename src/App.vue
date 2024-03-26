<template>
  <div>
    fileString:
    {{ fileString }}
    <XnskUploadFileList
      token="55bf295bce144cec995d4ffd47bce63c"
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
