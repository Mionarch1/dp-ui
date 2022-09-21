# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## default

Dialog 弹出一个对话框，适合需要定制性更大的场景。。

:::demo

```html
<template>
  <dp-button @click="centerDialogVisible = true">
    Click to open the Dialog
  </dp-button>
  <dp-dialog
    v-model="centerDialogVisible"
    title="Warning"
    :innerStyle="{ width: '312px' }"
    @onOpened="onOpened"
    @on-closed="onClosed"
  >
    <span>
      It should be noted that the content will not be aligned in center
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
    },
    methods: {
      onOpened() {
        console.log('打开了dialog');
      },
      onClosed() {
        console.log('关闭了dialog');
      }
    }
  };
</script>
```
:::
#### dark 模式

:::demo

```html
<template>
  <dp-button @click="centerDialogVisible = true">
    Click to open the Dialog
  </dp-button>
  <dp-dialog
    v-model="centerDialogVisible"
    title="Warning"
    :innerStyle="{ width: '312px' }"
    @onOpened="onOpened"
    @on-closed="onClosed"
    dark
  >
    <span>
      It should be noted that the content will not be aligned in center
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
    },
    methods: {
      onOpened() {
        console.log('打开了dialog');
      },
      onClosed() {
        console.log('关闭了dialog');
      }
    }
  };
</script>
```

:::

### Attributes

| 参数             | 说明                                                                        | 类型    | 可选值   | 默认值 |
| ---------------- | --------------------------------------------------------------------------- | ------- | -------- | ------ |
| append-to-body   | Dialog 自身是否插入至 body 元素上,嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | ------   | false  |
| full             | 是否为全屏 Dialog                                                           | boolean | -----    | false  |
| showHeader       | 是否有头部                                                                  | boolean | -------- | true   |
| overlayCloseable | 是否可以通过点击 modal 关闭 Dialog                                          | string  | -----    | ------ |
| innerStyle       | Dialog 对话框的自定义样式                                                   | object  | ——       | ------ |

### Event

| 事件名   | 说明              | 参数 |
| -------- | ----------------- | ---- |
| onOpened | Dialog 打开的回调 | ---- |
| onClosed | Dialog 关闭的回调 | ---- |
