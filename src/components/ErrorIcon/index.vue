<template>
  <span style="font-size: 0">
    <n-icon
      class="cursor-pointer"
      size="18"
      @click="errDialogShow = true"
      color="#d03050"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
      >
        <path
          d="M26 2H8a2 2 0 0 0-2 2v4H4v2h2v5H4v2h2v5H4v2h2v4a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 26H8v-4h2v-2H8v-5h2v-2H8v-5h2V8H8V4h18z"
          fill="currentColor"
        ></path>
        <path d="M14 8h8v2h-8z" fill="currentColor"></path>
        <path d="M14 15h8v2h-8z" fill="currentColor"></path>
        <path d="M14 22h8v2h-8z" fill="currentColor"></path>
      </svg>
    </n-icon>
    <XnskDialogMsg
      v-model:show="errDialogShow"
      :data="props.message"
    ></XnskDialogMsg>
  </span>
</template>
<script setup>
import { ref } from "vue";
import { XnskDialogMsg } from "../DialogMsg";
import { NIcon } from "naive-ui";
const props = defineProps({
  message: {
    type: String,
    default: "",
  },
});

const errDialogShow = ref(false);
</script>
