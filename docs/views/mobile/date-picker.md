# Date-Picker

## default

Date-Picker 用于选择或输入日期

:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<template>
  <dpm-date-picker
    v-model:modelValue="value1"
    hint="选择时间"
    format="D MMM YYYY"
    :isStart="true"
  >
    1233333333333
  </dpm-date-picker>
  <dpm-date-picker-panel
    v-model:modelValue="value2"
    format="D MMM YYYY"
    :isStart="true"
    @onChange=onChange
  >
    1233333333333
  </dpm-date-picker-panel>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        endTime: '',
        value2: ''
      };
    },
    methods: {
      aaa() {
        this.a++;
      },
      onChange(item) {
        console.log('改变了时间',item);
      }
    }
  };
</script>

<style>
  .button-item {
    margin: 30px;
  }
</style>
```

:::

### Attributes

| 参数    | 说明           | 类型    | 可选值                                               | 默认值    |
| ------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| type    | 类型           | String  | default / primary / nomal / warm / danger / disabled | `default` |
| shape   | 形状           | String  | square / round                                       | `square`  |
| size    | 尺寸           | String  | large / medium / small / mini                        | `medium`  |
| icon    | 图标名称       | String  | ——                                                   | `square`  |
| loading | 是否加载中状态 | Boolean | ——                                                   | `false`   |
