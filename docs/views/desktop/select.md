# Select 选择器

To trigger an operation.

## default

当选项过多时，使用下拉菜单展示并选择内容。
:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

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
  <dp-select>
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
<script setup>
  import { ref } from 'vue';


  const a = ref(1);

  const aaa = () => {
    a.value += 1;
  };

  defineExpose({
    a,
    aaa
  });
</script>
```

:::

### Attributes

dp-select 为 select 下选项父标签, 必须含有插槽 #selectDropDown 才能正常使用;
dp-select-item 为 select 下选项子标签(选项标签), dp-select-item 内可以继续写入其他 HTML 内容, 每项的具体值由

| 参数    | 说明           | 类型    | 可选值                                               | 默认值    |
| ------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| type    | 类型           | String  | default / primary / nomal / warm / danger / disabled | `default` |
| shape   | 形状           | String  | square / round                                       | `square`  |
| size    | 尺寸           | String  | large / medium / small / mini                        | `medium`  |
| icon    | 图标名称       | String  | ——                                                   | `square`  |
| loading | 是否加载中状态 | Boolean | ——                                                   | `false`   |
