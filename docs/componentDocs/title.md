默认  
<xnsk-title title="标题" />

```vue
<xnsk-title title="标题" />
```

---

小标题
<xnsk-title size="small" title="小标题" />

```vue
<xnsk-title size="small" title="小标题" />
```

---

大标题
<xnsk-title size="big" title="大标题" />

```vue
<xnsk-title size="big" title="大标题" />
```

---

自定义大小
<xnsk-title size="40px" title="自定义大小" />

```vue
<xnsk-title size="40px" title="自定义大小" />
```

---

标签内容将放到右侧，通常是放按钮
<xnsk-title title="标题">
<n-button type="primary">按钮</n-button>
</xnsk-title>

```vue
<xnsk-title title="标题">
    <n-button type="primary">按钮</n-button>
</xnsk-title>
```

属性：

> `size`：**[Number, String]** 字体大小。默认 small 对应 14px，可选 big 对应 18px。其他值直接写（如 20px）  
> `showTitleBar`：**[Boolean]** 是否显示蓝条，默认 true
