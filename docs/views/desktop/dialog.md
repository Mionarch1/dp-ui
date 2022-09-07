# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## default

Button 组件提供在按钮内增加图标，通过 `icon` 属性在 Button 内嵌入一个 `Icon`。

:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<template>
  <dp-button @click="centerDialogVisible = true">
    Click to open the Dialog
  </dp-button>
  <dp-dialog
    v-model="centerDialogVisible"
    title="Warning"
    :innerStyle="{ width: '312px' }"
  >
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <dp-button @click="centerDialogVisible = false" style="margin-right:12px">
        Cancel
      </dp-button>
      <dp-button @click="centerDialogVisible = false">Confirm</dp-button>
    </template>
  </dp-dialog>
</template>
<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
```

:::

## default

Button 组件提供在按钮内增加图标，通过 `icon` 属性在 Button 内嵌入一个 `Icon`。

:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<template>
  <dp-button>button</dp-button>
</template>
```

:::

## default

Button 组件提供在按钮内增加图标，通过 `icon` 属性在 Button 内嵌入一个 `Icon`。

:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<template>
  <dp-button>button</dp-button>
</template>
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
