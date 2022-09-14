# alert

:::demo

```html
<template>
  <dp-alert type="success" title="success alert">123</dp-alert>
  <br />
  <dp-alert type="warning">123</dp-alert>
  <br />
  <dp-alert type="info">123</dp-alert>
  <br />
  <dp-alert type="error">123</dp-alert>
</template>
```

:::

### Attributes


| 参数        | 说明               | 类型    | 可选值                                   | 默认值    |
| ----------- | ------------------ | ------- | ---------------------------------------- | --------- |
| title       | Alert 标题         | String  | ——                                       | `square`  |
| type        | Alert 类型         | String  | 'success' / 'warning' / 'info' / 'error' | `warning` |
| description | 描述性文本         | String  | ——                                       | ``        |
| closable    | 是否可关闭         | boolean | ——                                       | `true`    |
| close-text  | 自定义关闭按钮文本 | string  |
| show-icon   | 是否显示类型图标   | boolean |                                          | false     |
