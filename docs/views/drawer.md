# Drawer

Exhale a temporary sidebar that supports up, down, left and right.
## default


:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<template>
  <dp-button @click="handleClick">open</dp-button>
  	<dp-drawer
	  v-model:visible="showDrawer"
	  @on-closed="onClosed"
	  class="image-display-drawer"
	  width="12.5%"
	  @on-opened="onOpened"
	  border-radius="24px 24px 0 0"
	  direction="bottom"
	>
	Hi,desty!
	</dp-drawer>
</template>
<script>
export default {
  data() {
    return {
      showDrawer: false,
    };
  },
  methods: {
    handleClick() {
      this.showDrawer = true;
    },
    onClosed() {
    },
	onOpened() {
    }
  }
};
</script>
```

:::

### Attributes

| 参数   | 说明           | 类型    | 可选值                                               | 默认值   |
| ------- | -------------- | ------- | --------------------------------------------- | --------- |
| direction    | Drawer 打开的方向      | String  | right / left / top / bottom        | `right` |
| showDrawer   | 是否显示 Drawer          | Boolean  | true /false                     |`false`  |
| width    | 尺寸                      | String  |                                    | `250px`  |
| borderRadius    | 圆角属性            | String  |                                    | `-`  |

### Event
| 事件名   | 说明            | 参数   |
| ------- | -------------- | --------- |
| onClosed   | 关闭drawer触发的函数            | -   |
| onOpened   | 开启drawer触发的函数            | -   |
