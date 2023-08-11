<template>
  <div
    class="form-btns sticky marB20 relative"
    style="bottom: 0; padding: 20px; background-color: #fff; z-index: 103"
  >
    <n-space justify="center" :size="[40, 20]">
      <slot></slot>
    </n-space>
  </div>
  <!-- <shadow></shadow> -->
</template>
<script setup>
import { NSpace } from "naive-ui";
</script> 
<style lang="scss" scoped>
// .form-btns {
//   &::after {
//     content: "";
//     width: 100%;
//     height: 10px;
//     position: absolute;
//     transform: translateY(-64px);
//     bottom: 0;
//     box-shadow: 0 -5px 5px #0000001a;
//     z-index: 101;
//   }
// }
// shadow {
// &::after {
//   content: "";
//   width: 100%;
//   height: 10px;
//   position: absolute;
//   transform: translateY(-64px) translateX(-8px);
//   bottom: 0;
//   box-shadow: 0 -5px 5px #0000001a;
//   z-index: 101;
// }
// &::before {
//   content: "";
//   width: 100%;
//   height: 10px;
//   display: block;
//   position: relative;
//   background: linear-gradient(to bottom, transparent, #fff 50%);
//   z-index: 102;
// }
// }
</style>
