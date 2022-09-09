# Tag

To trigger an operation.

## demo

:::demo 

```html
<template>
  <dp-tag >default</dp-tag>
  <dp-tag :round="true">round</dp-tag>
  <dp-tag type="suceess">suceess</dp-tag>
  <dp-tag type="info">info</dp-tag>
  <dp-tag type="warning">warning</dp-tag>
  <dp-tag type="danger">danger</dp-tag>
  <dp-tag size="big" type="danger">danger</dp-tag>
  <dp-tag size="small" type="danger">danger</dp-tag>
</template>
<script>

</script>
```

:::

### Attributes

| 参数    | 说明           | 类型    | 可选值                                              | 默认值 |
| ------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| type    | 类型           | String  |   success / info / warning / danger               | `-` |
| round   | 圆角           | Boolean  | true / false                                     |`false`|
| size    | 尺寸           | String  | large / middle / small                            |`middle`|

### Event
| 事件名    | 说明                                                       | 默认值 |
| ------- | --------------------------------------------------------  | ----- |
|click   |  点击 Tag 时触发的事件                                        |       |
