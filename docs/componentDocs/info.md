**基础用法**

<xnsk-info :config="infoConfig" :data="infoData" />
<script setup>
    const infoData = {
        name: "张三",
        age: 18,
        sex: "男"
    }
    const infoConfig = {
        title:"用户信息",
        useColon:true,
        items: [
            { label: "姓名", value: "name" },
            { label: "年龄", value: "age" },
            { label: "性别", value: "sex" },
        ]
    }

</script>

```vue
<template>
  <xnsk-info :config="infoConfig" :data="infoData" />
</template>
<script setup>
const infoData = {
  name: "张三",
  age: 18,
  sex: "男",
};
const infoConfig = {
  title: "用户信息",
  useColon: true,
  items: [
    { label: "姓名", value: "name" },
    { label: "年龄", value: "age" },
    { label: "性别", value: "sex" },
  ],
};
</script>
```

`data`：**[Object]** 源数据  
`config`：**[Object]** 配置项

**config 参数：**  
`title`：**[String]** 标题  
`labelWidth`：**[Number]** 文案宽度  
`labelAlign`：**[String]** 文案对其方式，默认 left  
`items`：**[Array]** 展示项  
`useColon`：**[Boolean]** 是否使用冒号

**items 单项配置：**  
`label`：**[String]** 文案  
`value`：**[String, Function]** 字段值。如果是`String`类型，表示取 data 数据中对应属性值；如果是`Function`类型，则取其返回值，在多个字段拼接或加工数据时会用到  
`span`：**[Number]** 24 宫格中所占格数，默认 8  
`slot`：**[String]** 使用 slot 展示
