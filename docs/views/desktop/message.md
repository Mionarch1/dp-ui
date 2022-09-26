# Message

#### Base use

:::demo

```html
<template>
  <dp-button @click="handleClick('success')">success message</dp-button>
  <dp-button @click="handleClick('warning')">warning message</dp-button>
  <dp-button @click="handleClick('error')">error message</dp-button>
</template>

<script>
  export default {
    methods: {
      handleClick(type) {
        this.$dpmessage[type](`${type} message`);
      }
    }
  };
</script>
```

:::

### Attributes

| 参数     | 说明                 | 类型   | 可选值 | 默认值 |
| -------- | -------------------- | ------ | ------ | ------ |
| content  | 消息文字             | String | ——     | ——     |
| duration | 显示时间，单位为毫秒 | Number | ——     | `3000` |

### Methods

| 方法名  | 说明     |
| ------- | -------- |
| success | 成功消息 |
| warning | 警告消息 |
| error   | 错误消息 |
