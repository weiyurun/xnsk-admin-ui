<template>
  <div>
    <n-tree-select
      :disabled="disabled"
      :loading="loading"
      v-model:value="localValue"
      :options="options"
      children-field="sonList"
      label-field="name"
      key-field="regionCode"
      :on-load="loadChildren"
      :show-path="showPath"
      placeholder="请选择"
    />
  </div>
</template>
<script setup>
import { NTreeSelect } from "naive-ui";
import { computed, onMounted, ref } from "vue";
import axios from "axios";
import { get } from "../../http";

const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  showPath: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:value"]);
const loading = ref(true);
const localValue = computed({
  get() {
    return props.value;
  },
  set(v) {
    emits("update:value", v);
  },
});
const options = ref([]);
// axios.defaults.headers.common["Authorization"] =
//   localStorage.getItem("ACCESS-TOKEN");
axios.defaults.headers.common["Authorization"] =
  "e5ea0408cf684815bc87b8a7524c69b8";
async function getArea(code) {
  let res = await get(
    `https://xnsk-dev.mapfarm.com/api/sys/dic/region_code/get_current_region_code?regionCode=${code}`
  );
  res.sonList = null;
  res.isLeaf = false;
  return res;
}
function getOptions() {
  getArea("00").then((res) => {
    options.value.push(res);
    if (localValue.value && localValue.value !== "00") {
      getOptionsByValue();
    } else {
      loading.value = false;
    }
  });
}
function loadChildren(op) {
  return new Promise(async (resolve, reject) => {
    let res = await get(
      `https://xnsk-dev.mapfarm.com/api/sys/dic/region_code/get_child_by_region_code?regionCode=${op.regionCode}`
    );
    if (res?.length > 0) {
      res.forEach((i) => {
        if (i.level >= 6) {
          i.sonList = [];
          i.isLeaf = true;
        } else {
          i.sonList = null;
          i.isLeaf = false;
        }
      });
      op.sonList = res;
    } else {
      op.sonList = null;
      op.isLeaf = true;
    }

    resolve(res);
  });
}
function getOptionsByValue() {
  let arr = ["00"];
  arr.push(localValue.value.slice(0, 2));
  arr.push(localValue.value.slice(0, 4));
  arr.push(localValue.value.slice(0, 6));
  arr.push(localValue.value.slice(0, 9));
  arr = Array.from(new Set([...arr]));
  let _list = options.value;
  function getNextLevel(i) {
    let _index = _list.findIndex((item) => item.regionCode === arr[i]);
    let _find = _list[_index];
    if (_find) {
      loadChildren(_find).then(() => {
        _list = _list[_index].sonList;
        if (i < arr.length - 1) {
          i++;
          getNextLevel(i);
        } else {
          loading.value = false;
        }
      });
    }
  }
  getNextLevel(0);
}
onMounted(() => {
  getOptions();
});
</script>
