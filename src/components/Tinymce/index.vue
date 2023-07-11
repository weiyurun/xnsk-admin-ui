<!--
  富文本组件
  基础用法：
  <XnskTinymce v-model:value="tinymceResult"  />
  参数：
  tools [Array] 快捷使用功能/工具，默认仅文本及文本相关，用于省去配置plugins和toolbar
  config [Object] 初始化时的参数，会覆盖原配置项及上面配置的tools，尽量不在config中配置plugins和toolbar
  err-border 是否显示错误框（表单校验时可使用）

  @input 输入，返回值: editer对象 
  @blur  失去焦点，返回值: editer对象 
  @onload  富文本初始化完成回调
-->
<template>
  <div class="xnsk-tinymce" :class="{ 'xnsk-tinymce-err-border': errBorder }">
    <textarea :id="_ID" cols="30" rows="10"></textarea>
    <!-- 自定义图片上传 -->
    <div style="position: absolute; z-index: -1">
      <XnskUploadFile accept=".png,.jpg,.jpeg" @change="uploadCallback">
        <template #uploadBtn>
          <span :id="'uploadBtn_' + _ID"></span>
        </template>
      </XnskUploadFile>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, reactive, ref, unref, watch } from "vue";
import { XnskUploadFile } from "@/components";
import { getRandomId } from "@/utils/random";
import "#/tinymce/tinymce.min.js";
import "#/tinymce/themes/silver/theme.min.js";
import "#/tinymce/langs/zh_CN";
import "#/tinymce/icons/default/icons.min";

const emit = defineEmits(["update:value", "onload", "blur", "input", "setup"]);
const _editor = ref({});
/* 父级参数 */
let props = defineProps({
  value: {
    type: String,
    default: () => "",
  },
  placeholder: {
    type: String,
    defualt: () => "",
  },
  config: {
    type: Object,
    default: () => {},
  },
  /* 工具 */
  tools: {
    type: Array,
    default: () => [],
  },
  /* 错误框 */
  errBorder: {
    type: Boolean,
    default: () => false,
  },
  /* 是否使用自定义菜单 */
  customMenu: {
    type: Array,
    defualt: () => [],
  },
});
/* 唯一ID */
const _ID = ref("tinymce_" + getRandomId());
/* plugin枚举 */
const pluginJSON = {
  default: [
    "lists advlist",
    "undo redo blocks bold italic fontsize forecolor backcolor alignleft aligncentre alignright alignjustify indent outdent bullist numlist",
  ],
  list: ["lists advlist"], // 列表
  anchor: ["anchor", "anchor"], //锚点
  autolink: ["autolink"], //自动识别地址
  autoresize: ["autoresize"], //自动尺寸
  //autosave:["autosave", "restoredraft"],//自动保存
  charmap: ["charmap", "charmap"], //特殊字符
  code: ["code", "code"], //查看源代码
  codesample: ["codesample", "codesample"], //代码段
  directionality: ["directionality", "ltr rtl"], //文字方向
  emoticons: ["emoticons", "emoticons"], //表情
  fullscreen: ["fullscreen", "fullscreen"], //全屏
  help: ["help", "help"], //帮助
  image: ["image", "image"], //图片
  //importcss: ["importcss"], //预置CSS
  insertdatetime: ["insertdatetime", "insertdatetime"], //时间
  link: ["link", "link"], //外部链接
  lists: ["lists", "numlist bullist"], //高级列表
  //media: ["media", "media"], //媒体
  nonbreaking: ["nonbreaking", "nonbreaking"],
  pagebreak: ["pagebreak", "pagebreak"],
  preview: ["preview", "preview"],
  save: ["save", "save"],
  searchreplace: ["searchreplace", "searchreplace"],
  table: ["table", "table"], //表格
  template: ["template", "template"], //自定义模板
  visualblocks: ["visualblocks", "visualblocks"],
  visualchars: ["visualchars", "visualchars"],
  wordcount: ["wordcount", "wordcount"],
};
/* 本地默认参数 */
let defaultConfig = reactive({
  selector: "#" + _ID.value,
  language: "zh_CN",
  suffix: ".min",
  plugins: "",
  toolbar: "",
  branding: false,
  promotion: false,
  image_caption: true,
  quickbars_selection_toolbar: false,

  plugins: [],
  menu: {
    custom: { title: "插入变量", items: "basicitems" },
  },
  menubar: "file edit view insert format custom",
  setup: (editor) => {
    SettingsRemoteSharp(editor);
    emit("setup", editor);
  },

  /* 代码格式 */
  codesample_languages: [
    { text: "HTML/XML", value: "markup" },
    { text: "JavaScript", value: "javascript" },
    { text: "CSS", value: "css" },
    { text: "PHP", value: "php" },
    { text: "Ruby", value: "ruby" },
    { text: "Python", value: "python" },
    { text: "Java", value: "java" },
    { text: "C", value: "c" },
    { text: "C#", value: "csharp" },
    { text: "C++", value: "cpp" },
  ],
  // codesample_content_css: "/static/prism.css",
  /* 钩子 */
  init_instance_callback: init_instance_callback,
  file_picker_callback: file_picker_callback,
});

/* 根目录配置 */
tinymce.baseURL =
  window.location.origin + window.location.pathname + "/tinymce";
/* 处理tools */
setToolsToConfig();
/* 合并配置项 */
let config = Object.assign({}, defaultConfig, props.config);
/* -------------------- 方法--------------------- */
/* 设置自定义菜单 */
function SettingsRemoteSharp(editor) {
  let list = props.customMenu || [];
  if (list.length > 0) {
    list.forEach((item) => {
      let itemId = "item_" + getRandomId();
      defaultConfig.menu.custom.items += ` ${itemId}`;
      editor.ui.registry.addMenuItem(itemId, {
        text: item.label,
        onAction: () => editor.insertContent(`<span>${item.value}</span>`),
      });
    });
  }
}
/* 处理tools。根据名称找到对应的plugin和toolbar */
function setToolsToConfig() {
  if (!Array.isArray(props.tools)) return;
  if (!props.tools.length) {
    props.tools.push("default");
  }
  props.tools.map((key) => {
    /* 添加plugin */
    pluginJSON[key] &&
      pluginJSON[key][0] &&
      (defaultConfig.plugins += " " + pluginJSON[key][0]);
    /* 添加toolbar */
    pluginJSON[key] &&
      pluginJSON[key][1] &&
      (defaultConfig.toolbar += " " + pluginJSON[key][1]);
  });
}

/* 监听值 */
watch(
  () => props.value,
  (newValue, oldValue) => {
    if (_editor?.value?.getContent?.() != newValue) {
      _editor?.value?.setContent?.(newValue);
      nextTick(() => {
        let _s = _editor?.value?.selection;
        if (_s) {
          _s.select(_s.getNode(), true);
          _s.collapse(false);
        }
      });
    }
  }
);
/* 监听变量 */
//不起作用，暂时注释掉
/* watch(
  () => props.customMenu,
  (newValue, oldValue) => {
    if (_editor.value) {
      SettingsRemoteSharp(_editor.value);
      let config = Object.assign({}, defaultConfig, props.config);
      setTimeout(() => {
        tinymce.init(unref(config));
      }, 1000);
    }
  },
  { deep: true }
); */
/* 富文本初始化完成 */
function init_instance_callback(editor) {
  _editor.value = editor;
  emit("onload", editor);
  /* 回显 */
  editor.setContent(props.value);
  /* 初始化事件 */
  editor.on("blur", () => emit("blur", editor));
  editor.on("change input undo redo", () => {
    emit("update:value", editor.getContent());
  });
  editor.on("input", () => emit("input", editor));
}
/* 文件选择 */
let fileCallBack;
function file_picker_callback(callback, value, meta) {
  if (meta.filetype == "image") {
    document.getElementById("uploadBtn_" + _ID.value)?.click();
    fileCallBack = callback;
  }
}
/* 图片上传完成 */
function uploadCallback(res) {
  fileCallBack(res.url);
}
/* 手动添加内容 */
function insertContent(content = "", args = {}) {
  _editor.value?.insertContent(content, args);
}
/* ------------------- 钩子 -------------------------- */
onMounted(() => {
  tinymce.init(unref(config));
});
defineExpose({
  insertContent,
});
</script>

<style lang="scss" scoped>
.xnsk-tinymce {
  width: 100%;
  display: flex;
  flex-direction: column;
  :deep(.tox-tinymce) {
    border: 1px solid #e0e0e6;
    border-radius: 3px;
    flex: 1;
  }
  &.xnsk-tinymce-err-border {
    :deep(.tox-tinymce) {
      border-color: #fe4029;
    }
  }
}
</style>
