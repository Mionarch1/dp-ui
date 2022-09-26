# Slider

#### Base use

:::demo

```html
<template>
  <div class="demo-slider-dark">
    <dp-slider class="slider-item" v-model="value" />
  </div>
  <div>{{value}}</div>
</template>

<script>
  export default {
    data() {
      return {
        value: 100
      };
    }
  };
</script>

<style>
  .demo-slider-dark {
    background: #333333;
    height: 60px;
    padding: 20px;
  }
  .slider-item {
    width: 100px;
  }
</style>
```

:::

### Attributes

| 参数       | 说明     | 类型            | 可选值       | 默认值  |
| ---------- | -------- | --------------- | ------------ | ------- |
| modelValue | 绑定值   | String / Number | ——           | `0`     |
| max        | 最大限制 | String / Number |              | `100`   |
| min        | 最小限制 | String / Number | ——           | `0`     |
| unit       | 单位     | String          | ——           | ——      |
| disabled   | 禁用     | Boolean         | true / false | `false` |
