# Date-Picker

## default

Date-Picker 用于选择或输入日期

:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<template>
  <dp-date-picker
    v-model:modelValue="value1"
    hint="选择时间"
    format="D MMM YYYY"
    :pickerOptions="{
								association: endTime,
								scope: '90',
								isStart: true
							}"
  >
    1233333333333
  </dp-date-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        endTime: ''
      };
    }
  };
</script>
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