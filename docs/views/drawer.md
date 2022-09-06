# Drawer

To trigger an operation.

## default

Button 组件提供在按钮内增加图标，通过 `icon` 属性在 Button 内嵌入一个 `Icon`。

:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<template>
  <dp-button @click="handleClick">open</dp-button>
  	<!-- <DP-drawer
	  v-model:visible="showDrawer"
	  v-model:direction="drawerDirection"
	  @on-closed="onClosed"
	  class="image-display-drawer"
	  width="87.5%"
	  @on-opened="onOpened"
	  border-radius="24px 24px 0 0"
	/> -->
</template>
<script setup>
const handleClick = () => {
    console.log(111);
}
</script>
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
