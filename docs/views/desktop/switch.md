# Switch

A switch between two opposing states, usually used to trigger an on/OFF switch.

## demo

:::demo 

```html
<template>
  <dp-switch v-model="isOpen" @change="handleClick"></dp-switch>
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
| activeColor    | 当在 on 状态时的背景颜色           | String  |                         |`#FFDD00`|
| inactiveColor    | off 状态时的背景颜色           | String  |                           |`#E5E7EB`|
| disabled    | 是否禁用           | Boolean  |                             |`#fff`|

### Event
| 事件名    | 说明                                                       | 默认值 |
| ------- | --------------------------------------------------------  | ----- |
|change   |  切换开关时触发的事件                                        |       |