# Message

## demo

:::demo

```html
<template>
  <dp-button @click="handleClick()">message</dp-button>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$message('12312')
      }
    }
  }
</script>
```

:::

### Attributes

| 参数            | 说明                              | 类型    | 可选值                 | 默认值  |
| --------------- | --------------------------------- | ------- | ---------------------- | ------- |
| round           | 圆角                              | Boolean | true / false           | `false` |
| size            | 尺寸                              | String  | large / middle / small | `small` |
| backgroundColor | 背景颜色                          | String  |                        |         |
| color           | 文字颜色                          | String  |                        |         |
| borderColor     | border 颜色（默认和背景颜色相同） | String  |                        |         |

### Event

| 事件名 | 说明                  | 默认值 |
| ------ | --------------------- | ------ |
| click  | 点击 Tag 时触发的事件 |        |
