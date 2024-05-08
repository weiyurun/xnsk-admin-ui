<template>
  <div>
    fileString:
    {{ fileString }}
    <XnskUploadFileList
      token="9f9f2e198b7c467ca11d5cd86a261a19"
      bucket="xnsk-ruian-common"
      path="fe/resource/js/common-files/tracking/v2"
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
<!-- 
module/file/aggregationEntrance
fe/resource/js/common-files/tracking/v2/
 -->
<script setup>
import { computed, ref } from "vue";
import { XnskUploadFileList } from "./components";
</script>
