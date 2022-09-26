# Popover

#### Base use

:::demo

```html
<template>
  <div class="demo-popover-dark">
    <dp-popover align="left">
      <template #default>
        <dp-button size="middle">left</dp-button>
      </template>
      <template #panel>
        <div class="demo-popover-panel">this is a left popover panel</div>
      </template>
    </dp-popover>

    <dp-popover align="center" offset="-50%">
      <template #default>
        <dp-button size="middle">center</dp-button>
      </template>
      <template #panel>
        <div class="demo-popover-panel">this is a center popover panel</div>
      </template>
    </dp-popover>

    <dp-popover align="right">
      <template #default>
        <dp-button size="middle">right</dp-button>
      </template>
      <template #panel>
        <div class="demo-popover-panel">this is a right popover panel</div>
      </template>
    </dp-popover>
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
  .demo-popover-dark {
    background: #333333;
    width: 400px;
    padding: 20px;
  }
  .demo-popover-panel {
    width: 230px;
    color: #fff;
  }
</style>
```

:::

### Attributes

| 参数   | 说明   | 类型   | 可选值                | 默认值   |
| ------ | ------ | ------ | --------------------- | -------- |
| align  | 位置   | String | left / center / right | `center` |
| offset | 偏移量 | String | ——                    | `center` |
