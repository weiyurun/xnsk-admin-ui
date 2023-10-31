<!--
    文件上传

    案例：
    <XnskUploadFile>
        <template #uploadBtn>
            <n-button type="primary">点击上传</n-button>
        </template>
    </XnskUploadFile>

    参数：
      autoUpload: 选择完成后是否自动上传

    事件：
      change: 文件上传完成回调
      fileChange: 文件选择回调
-->
<template>
  <div style="width: 100%" :class="{ 'hidden-upload-trigger': !triggerShow }">
    <n-upload
      :ref="
        (el) => {
          refId = el;
        }
      "
      v-model:file-list="localFileList"
      @remove="handleRemove"
      :multiple="multipleUpload"
      :default-upload="autoUpload"
      :custom-request="customRequest"
      @before-upload="beforeUpload"
      @change="upLoadFileChange"
      v-bind="attrs"
    >
      <span class="inline-block uploadBtn">
        <template v-if="attrs?.['list-type'] === 'image-card'">
          <span style="font-size: 40px; line-height: 20px">+</span>
        </template>
        <slot v-else name="uploadBtn" :loading="loading"></slot>
      </span>
    </n-upload>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, useAttrs, watch, computed } from "vue";
import { getFileNameByUrl, getSuffixName, getRandomKeys } from "../../utils";
import http from "../../http";
import { NUpload } from "naive-ui";
const attrs = useAttrs();
/* 上传地址 */
/* 随机数ID，为同时加载多个上传组件准备 , 后期换成 uuid*/
const refId = ref(
  "ref" + new Date().getTime() + parseInt(Math.random() * 10000),
);
/* loading */
let loading = ref(false);
/* 定义参数 */
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  /* 是否显示文件列表 */
  showFileList: {
    type: Boolean,
    default: () => true,
  },
  /* 选中文件是否直接上传 */
  autoUpload: {
    type: Boolean,
    default: () => true,
  },
  // 是否上传多个
  multipleUpload: {
    type: Boolean,
    default: () => false,
  },
  // obs 桶
  bucket: {
    type: String,
    default: "xnsk-base",
  },
  // 存储路径
  path: {
    type: String,
    default: "base/permission",
  },
  url: {
    type: String,
    default: "/less/api/warehouse/rest/obs/upload_file",
  },
  params: {
    type: Object,
    default: () => ({}),
  },
  token: {
    type: String,
    default: "",
  },
  triggerShow: {
    type: Boolean,
    default: true,
  },
});
/* 定义事件 */
const emit = defineEmits([
  "change",
  "fileChange",
  "update:value",
  "update:fileList",
]);

//组件内的文件列表
const localFileList = ref([]);
watch(
  () => props.value,
  (newData) => {
    if (newData === null || newData === undefined) {
      emit("update:value", "");
    }
    if ([null, undefined, ""].includes(newData)) {
      localFileList.value.splice(0);
      return;
    }
    if (newData?.length > 0) {
      let list = newData.split(",");
      list.forEach((url) => {
        let find_ = localFileList.value.find((file) => {
          return file.url === url;
        });
        if (!find_) {
          localFileList.value.push({
            url: url,
            name: getFileNameByUrl(url),
            status: "finished",
          });
        }
      });
    }
  },
  { deep: true, immediate: true },
);

/* 自定义上传 */
const customRequest = async ({ file, onFinish, onError }) => {
  let formData = new FormData();
  formData.append("file", file.file);
  formData.append("bucket", props.bucket);
  formData.append("pathPrefix", props.path);
  //扩展参数
  let keys = Object.keys(props.params) || [];
  keys.forEach((key) => {
    formData.append(key, props.params[key]);
  });
  loading.value = true;
  let res = await http(props.url, {
    token: props.token,
  })(formData);
  loading.value = false;
  if (res?.status === 200) {
    const strId = getRandomKeys(10);
    file.url = res?.data?.url ?? "";
    file.name = getFileNameByUrl(file.url);
    onFinish();
  } else {
    onError();
  }
};

/* 文件移除 */
function handleRemove(data) {}

async function beforeUpload(file) {
  //判断格式
  if (
    attrs?.accept?.indexOf(
      getSuffixName(file.file.name?.toLowerCase(), "."),
    ) === -1
  ) {
    $message.error("格式不正确");
    return false;
  }
  //判断大小
  if (file.file.size / 1024 > props.maxSize) {
    $message.error("文件大小超出限制");
    return false;
  }
  return true;
}
function upLoadFileChange({ file, fileList }) {
  let list_ = (fileList || [])
    .filter((file) => {
      return file.url;
    })
    .map((file) => {
      return file.url;
    });
  emit("update:value", list_.join(","));
  emit("update:fileList", fileList);
}

defineExpose({
  submitFile: () => {
    refId.value?.submit();
  },
});
</script>

<style lang="scss" scoped>
.showFileName {
  display: flex;
  justify-content: space-between;

  * {
    display: inline-block;
  }

  span:first-child {
    width: 80%;
    padding: 5px 0;
  }
}
.hidden-upload-trigger {
  :deep(.n-upload-trigger) {
    display: none;
  }
}
// :deep(.n-upload-file-list) {
//   margin-top: 0;
//   > div:first-child {
//     margin-top: 8px;
//   }
// }
</style>
