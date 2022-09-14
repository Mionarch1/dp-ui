# Drawer

Exhale a temporary sidebar that supports up, down, left and right.
## default


:::demo 

```html
<template>
  <dp-button @click="handleClick">open</dp-button>
  	<dp-drawer
	  v-model="showDrawer"
	  @on-closed="onClosed"
	  width="12.5%"
	  @on-opened="onOpened"
	  border-radius="24px"
	  direction="right"
	>
	Hi,desty!
  <dp-button @click="handleClick1">open</dp-button>
	</dp-drawer>
  <dp-drawer
	  v-model="showDrawer1"
	  @on-closed="onClosed"
	  width="12.5%"
	  @on-opened="onOpened"
	  border-radius="24px"
	  direction="bottom"
    :isNest="true"
	>
	Hi,desty!!!!
	</dp-drawer>
</template>
<script>
export default {
  data() {
    return {
      showDrawer: false,
      showDrawer1: false,
    };
  },
  methods: {
    handleClick() {
      this.showDrawer = true;
    },
    handleClick1() {
      this.showDrawer1 = true;
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
| v-model   | 是否显示 Drawer          | Boolean  | true /false                     |`false`  |
| direction    | Drawer 打开的方向      | String  | right / left / top / bottom        | `right` |
| width    | 尺寸                      | String  |                                    | `250px`  |
| borderRadius    | 圆角属性            | String  |                                    | `-`  |
| isNest    |是否为嵌套的Drawer，嵌套必须指定该属性并赋值为 true   | Boolean  |               | `-`  |

### Event
| 事件名   | 说明            | 参数   |
| ------- | -------------- | --------- |
| onClosed   | 关闭drawer触发的函数            | -   |
| onOpened   | 开启drawer触发的函数            | -   |
