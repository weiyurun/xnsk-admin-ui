**基础用法**
<n-message-provider>

<div style="color:red;display:flex;align-items:center;">
    <span>操作失败</span>
    <xnsk-log-icon message="失败原因" />
</div>
</n-message-provider>

```vue
<div style="color:red;display:flex;align-items:center;">
    <span>操作失败</span>
    <xnsk-log-icon message="失败原因" />
</div>
```

在任务成功或失败时，页面默认只显示成功或失败的结果，后面带一个 icon，点击查看详情，比 dialogMsg 更方便

**属性**  
`autoClose`： **[Boolean]** 复制后是否自动关闭，默认 true
