# Tabs

To trigger an operation.

## default

Tabs 组件提供了选项卡功能， 默认选中第一个标签页。

:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<template>
  <dp-tabs>
    <tab-pane label="标签1" name="name1">标签一的内容</tab-pane>
    <tab-pane label="标签2" name="name2">标签二的内容</tab-pane>
    <tab-pane label="标签3" name="name3">标签三的内容</tab-pane>
    <tab-pane label="标签4" name="name4">
      <span class="custom-tabs-label">
        <p>dsdsdsd</p>
        <p>Route</p>
      </span>
      标签四的内容
    </tab-pane>
  </dp-tabs>
  <br />
  <br />
  <br />
  <dp-tabs :showToggle="true">
    <tab-pane label="标签1" name="name1">标签一的内容</tab-pane>
    <tab-pane label="标签2" name="name2">标签二的内容</tab-pane>
    <tab-pane label="标签3" name="name3">标签三的内容</tab-pane>
    <tab-pane label="标签4" name="name4">
      <span class="custom-tabs-label">
        <p>dsdsdsd</p>
        <p>Route</p>
      </span>
      标签四的内容
    </tab-pane>
  </dp-tabs>
</template>
```

:::

### Attributes

| 参数       | 说明           | 类型    | 可选值     | 默认值 |
| ---------- | -------------- | ------- | ---------- | ------ |
| showToggle | 是否需要切换键 | Boolean | false/true | false  |
