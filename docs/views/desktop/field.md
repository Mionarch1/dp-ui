# Field

#### Base use

:::demo

```html
<template>
  <div class="demo-field-dark">
    <dp-field class="field-item" v-model="value" max-length="60" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: `this is a field`
      };
    }
  };
</script>

<style>
  .demo-field-dark {
    background: #333333;
    width: 200px;
  }
  .field-item {
    width: 100px;
  }
</style>
```

:::

### Attributes

| 参数        | 说明           | 类型            | 可选值                | 默认值 |
| ----------- | -------------- | --------------- | --------------------- | ------ |
| modelValue  | 绑定值         | String / Number | 原生 input 的 type 值 | `text` |
| placeholder | 输入框占位文本 | String          |                       | ——     |
| max-length  | 最大输入长度   | String / Number | ——                    | ——     |
| customStyle | 自定义样式     | Object          | ——                    | ——     |
