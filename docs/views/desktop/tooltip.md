# Tooltip

This command is used to display the prompt information when the mouse hover.

## demo

:::demo

```html
<template>
  <dp-tooltip width="200px" position="bottom">
    <!-- <dp-button>button</dp-button> -->
    <dp-icon name="dpui-a-line-" type="normal" />    
    <template #content>
      this is
      <span style="color:red">a</span>
      <br />
      dp-button
    </template>
  </dp-tooltip>
  <br />
   <dp-tooltip width="200px" position="right">
    <dp-button>button</dp-button>
    <template #content>
      this is
      <span style="color:red">a</span>
      <br />
      dp-button
    </template>
  </dp-tooltip>
</template>
<script></script>

:::

### Attributes

| 参数    | 说明           | 类型    | 可选值                                              | 默认值 |
| ------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| content    | 内容           | String  |   可输入html              | `-` |
| width   | 宽度           | String  |                                    |`120px`|
| backgroundColor    | 背景颜色           | String  |                             |`#555`|
| color    | 文字颜色           | String  |                             |`#fff`|
| position    | 位置           | String  |                             |`top`|
