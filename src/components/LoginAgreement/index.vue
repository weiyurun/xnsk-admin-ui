<template>
  <div>
    <n-checkbox
      :default-checked="checked"
      @update:checked="updateCheck"
    ></n-checkbox>
    请阅读
    <span
      class="cursor-pointer"
      style="color: #2d8cf0"
      v-for="(item, index) in agreementList"
      :key="item.did || index"
      @click="openAgreementUrl(item.agreementUrl)"
    >
      《{{ item.agreementName }}》 </span
    >，并同意
  </div>
</template>
<script setup>
import { ref } from "vue";
import { NCheckbox } from "naive-ui";
import hp from "houriprotocol";
const emit = defineEmits(["update:checked"]);
const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
});

// 协议数据
const agreementList = ref([]);
function getAgreementData() {
  hp.init({
    projectId: "20230704143829127",
    sceneCode: "scdl",
    debug: true,
    authContext: "https://xnsk.mapfarm.com",
    userId: "",
  })
    .then((res) => {
      agreementList.value = res?.agreementList ?? [];
    })
    .catch((err) => {
      console.log(err.message || err.msg || "系统异常");
      $message.error(err.message || err.msg || "系统异常");
    });
}
getAgreementData();

//打开协议
function openAgreementUrl(url) {
  url && window.open(url);
}

//更新
function updateCheck(v) {
  emit("update:checked", v);
}
</script>
