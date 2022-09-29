# alert

#### Base use

:::demo

```html
<template>
  <dp-alert type="success">123</dp-alert>
  <br />
  <dp-alert type="warning">123</dp-alert>
  <br />
  <dp-alert type="error">123</dp-alert>
</template>
```

:::

#### Icon

Alert 支持开启 icon.

:::demo

```html
<template>
  <dp-alert type="success" icon>123</dp-alert>
  <br />
  <dp-alert type="warning" icon>123</dp-alert>
  <br />
  <dp-alert type="error" icon>
    <div>
      <div>this is a block element title</div>
      <div>this is a block element content1</div>
      <div>this is a block element content2</div>
      <div>this is a block element content3</div>
      <div>this is a block element content4</div>
    </div>
  </dp-alert>
</template>
```

:::

#### Closable

Alert 支持开启关闭.

:::demo

```html
<template>
  <dp-alert type="success" closable>123</dp-alert>
  <br />
  <dp-alert type="warning" closable>123</dp-alert>
  <br />
  <dp-alert type="error" closable>123</dp-alert>
</template>
```

:::

### Attributes

| 参数     | 说明             | 类型    | 可选值                    | 默认值    |
| -------- | ---------------- | ------- | ------------------------- | --------- |
| type     | Alert 类型       | String  | success / warning / error | `warning` |
| icon     | 是否显示类型图标 | boolean | true / false              | `false`   |
| closable | 开启关闭功能     | boolean | true / false              |           |
