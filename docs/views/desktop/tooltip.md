# Tooltip

This command is used to display the prompt information when the mouse hover.

## demo

:::demo 

```html
<template>
  <dp-tooltip content="this is <span style='color:red'>a</span><br/>dp-button" width="200px">
    <dp-button>button</dp-button>
  </dp-tooltip>
  <br/>
</template>
<script>

</script>
```

:::

### Attributes

| 参数    | 说明           | 类型    | 可选值                                              | 默认值 |
| ------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| content    | 内容           | String  |   可输入html              | `-` |
| width   | 宽度           | String  |                                    |`120px`|
| backgroundColor    | 背景颜色           | String  |                             |`#555`|
| color    | 文字颜色           | String  |                             |`#fff`|

