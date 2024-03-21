<!--
    详情页组件
    //使用24宫格布局，默认3列，每列8格
      config
        title [String]: 标题
        data [Object]: 数据
        labelWidth [Number]://label宽度px（如果需要label右对齐，该值必传）
        labelAlign [String]: //label对齐方式，left | center | right,
        border [Boolean]: 是否有border
        column [Array]: 展示的字段
          label [String]:文案
          value [String | Function]:字段名
          span [Number]:所占的单元格数
          slot [Component]:插槽
          注意：value只支持String和Function类型。String表示data中的字段名，Function表示自定义值
        

-->
<template>
  <div>
    <XnskBlueTitle
      class="marT5 marB15"
      v-if="config.title"
      :title="config.title || ''"
    />
    <n-grid :class="{ 'has-border': config?.border }">
      <n-gi
        class="info-page-item items-start padT10 padB10"
        :class="{
          block: item.flex === false,
          'inline-flex': item.flex !== false,
        }"
        v-for="(item, index) in getItems"
        :key="item?.did || index"
        :span="item.span ?? 8"
      >
        <!-- label -->
        <template v-if="item.labelSlot">
          <slot :name="item.labelSlot"></slot>
        </template>
        <span
          class="info-page-label inline-block padR10"
          else
          :style="{
            minWidth: config.labelWidth ? config.labelWidth + 'px' : 'auto',
            'text-align': config.labelAlign ?? 'left',
          }"
        >
          {{ item.label }}{{ config?.useColon ? ":" : "" }}
        </span>
        <!-- 值 -->
        <template v-if="item.slot">
          <slot :name="item.slot"></slot>
        </template>
        <span class="info-page-value inline-block marL5 padR10 break-all" else>
          {{ getItemValue(item.value) }}
        </span>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
import { useAttrs, computed } from "vue";
import { XnskBlueTitle } from "../index";
import { NGrid, NGi } from "naive-ui";
import { clearEmptyData } from "../../utils/index";
const attrs = useAttrs();
const props = defineProps({
  config: {
    type: Object,
    defualt: () => {},
  },
  data: {
    type: Object,
    defualt: () => {},
  },
});
const getItems = computed(() => {
  return clearEmptyData(props?.config?.items) || props?.config?.column || [];
});
/* 处理值 */
function getItemValue(_value) {
  if (typeof _value === "string") {
    if (props.data) {
      return props?.data[_value] || "—";
    } else {
      return props.config?.data[_value] || "—";
    }
  } else if (Object.prototype.toString.call(_value) === "[object Function]") {
    return _value();
  } else {
    return "";
  }
}
</script>

<style lang="scss" scoped>
:deep(.has-border) {
  border-top: 1px solid #efeff5;
  border-right: 1px solid #efeff5;
  .info-page-item {
    border-bottom: 1px solid #efeff5;
    .info-page-label {
      background-color: #f9f9f9;
    }
  }
}
</style>
