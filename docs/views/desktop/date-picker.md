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
    :isStart="true"
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
    },
    methods: {
      aaa() {
        this.a++;
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

| 参数        | 说明                                                              | 类型    | 可选值         | 默认值                |
| ----------- | ----------------------------------------------------------------- | ------- | -------------- | --------------------- |
| modelValue  | 绑定的值                                                          | String  | -------------- | ''                    |
| hint        | input 提示文本                                                    | String  | -------------- | ''                    |
| format      | 时间选择器显示时间的格式，默认为 2022-02-11 这种                  | String  | -----------    | `YYYY-MM-DD`          |
| isStart     | 是否为范围开始的时间选择器                                        | Boolean | ——             | `false`               |
| scope       | 限制时间范围天数                                                  | Number  | ——             | '90'                  |
| association | 限制范围时间可选的最后一天,默认为当天,即可选为当前时间的前 3 个月 | String  | ——             | '当前时间 new Date()' |
