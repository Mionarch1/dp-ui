# Tag

Used to mark.

## demo

:::demo 

```html
<template>
  <dp-tag >Badge</dp-tag>
  <dp-tag borderColor="#26BC35" backgroundColor="#fff" color="#26BC35">Badge</dp-tag>
  <dp-tag backgroundColor="#EFEFEF" color="#333">Badge</dp-tag>
</template>
<script>

</script>
```

:::

### Attributes

| 参数    | 说明           | 类型    | 可选值                                              | 默认值 |
| ------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| round   | 圆角           | Boolean  | true / false                                     |`false`|
| size    | 尺寸           | String  | large / middle / small                            |`small`|
| backgroundColor   | 背景颜色  | String  |                                              |  |
| color   | 文字颜色  | String  |                                                        |  |
| borderColor   | border颜色（默认和背景颜色相同）  | String  |                             |  |

### Event
| 事件名    | 说明                                                       | 默认值 |
| ------- | --------------------------------------------------------  | ----- |
| click   |  点击 Tag 时触发的事件                                        |       |
