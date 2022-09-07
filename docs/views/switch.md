# Tag

To trigger an operation.

## demo

:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<template>
  <dp-switch v-model="isOpen" @click="handleClick" activeColor="#ea2376"></dp-switch>
</template>
<script>
export default {
  data(){
    return {
      isOpen:true
    }
  },
  methods:{
    handleClick(){
      console.log(this.isOpen);
    }
  }
}
</script>
```

:::

### Attributes

| 参数    | 说明           | 类型    | 可选值                                              | 默认值 |
| ------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| modelValue    | 绑定值           | String  |               | `-` |
| name   | switch 对应的 name 属性         | String  |                                    |`-`|
| activeColor    | 当在 on 状态时的背景颜色           | String  |                          |`#3d5cb8`|
| inactiveColor    | off 状态时的背景颜色           | String  |                           |`#E5E7EB`|
| disabled    | 是否禁用           | Boolean  |                             |`#fff`|

