# Tabs

To trigger an operation.

## default

Button 组件提供在按钮内增加图标，通过 `icon` 属性在 Button 内嵌入一个 `Icon`。

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

| 参数    | 说明           | 类型    | 可选值                                               | 默认值    |
| ------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| type    | 类型           | String  | default / primary / nomal / warm / danger / disabled | `default` |
| shape   | 形状           | String  | square / round                                       | `square`  |
| size    | 尺寸           | String  | large / medium / small / mini                        | `medium`  |
| icon    | 图标名称       | String  | ——                                                   | `square`  |
| loading | 是否加载中状态 | Boolean | ——                                                   | `false`   |
