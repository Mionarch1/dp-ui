# collapse

#### Base use

:::demo

```html
<template>
  <dp-collapse v-model="isCollapse">
    <template #textTitle>
      <div>这是标题</div>
    </template>
    <template #content>这是内容</template>
  </dp-collapse>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    }
  };
</script>
```

:::

### Attributes

| 参数     | 说明             | 类型    | 可选值                    | 默认值    |
| -------- | ---------------- | ------- | ------------------------- | --------- |
| modelValue     | 是否收起      | Boolean  | true/false   | `fasle` |
| closedHeight     | 高度 | String | -           | `标题div的高度`   |
