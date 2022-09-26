# Select 选择器

To trigger an operation.

## default

当选项过多时，使用下拉菜单展示并选择内容。
:::demo

```html
<template>
  <dp-select selected="请选择">
    <template #selectDropDown>
      <dp-select-item value="最新案例">最新案例</dp-select-item>
      <dp-select-item value="最热案例">最热案例</dp-select-item>
    </template>
  </dp-select>
  <br />
  <br />
  <dp-select @change="selectChange">
    <template #selectDropDown>
      <dp-select-item value="扬州市">扬州市</dp-select-item>
      <dp-select-item value="南京市">南京市</dp-select-item>
      <dp-select-item value="无锡市">无锡市</dp-select-item>
      <dp-select-item value="徐州市">徐州市</dp-select-item>
      <dp-select-item value="苏州市">苏州市</dp-select-item>
      <dp-select-item value="镇江市">镇江市</dp-select-item>
    </template>
  </dp-select>
</template>
<script>
  export default {
    methods: {
      selectChange(item) {
        console.log(item);
      }
    }
  };
</script>
```

:::

### Attributes

dp-select 为 select 下选项父标签, 必须含有插槽 #selectDropDown 才能正常使用;

dp-select-item 为 select 下选项子标签(选项标签), dp-select-item 内可以继续写入其他 HTML 内容, 每项的具体值由 props value 决定

| 参数     | 说明                                                                      | 类型   | 可选值 | 默认值    |
| -------- | ------------------------------------------------------------------------- | ------ | ------ | --------- |
| selected | 默认选中的值,如果不填或为空则默认选中插槽中的第一个 tk-select-item 中的值 | String |        | `default` |
| value    | 词选项默认返回的数据 (必须设置)                                           | String |        |           |

### Event

| 事件名 | 说明                  | 参数        |
| ------ | --------------------- | ----------- |
| change | select 选项改变时触发 | ----------- |
