<template>
  <div class="p-[20px]">
    <XnskTitle title="文件上传" />
    <div class="mb-[20px]">
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
          <button>选择文件</button>
        </template>
      </XnskUploadFileList>
    </div>

    <XnskTitle title="区域选择" />
    <p>{{ areaRes }}</p>
    <XnskAreaSelect v-model:value="areaRes" />
  </div>
</template>
<!-- 
module/file/aggregationEntrance
fe/resource/js/common-files/tracking/v2/
 -->
<script setup>
import { computed, ref } from "vue";
import { XnskUploadFileList, XnskAreaSelect, XnskTitle } from "./components";
const fileString = ref("");
const areaRes = ref("130983103210");
</script>
