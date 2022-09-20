# Button

To trigger an operation.

#### Type

Button 组件提供在不同类型的按钮.

:::demo 通过修改`type`属性修改按钮类型

```html
<template>
  <dp-button class="btn-item">default btn</dp-button>
  <dp-button class="btn-item" type="primary">primary btn</dp-button>
  <dp-button class="btn-item" type="danger">danger btn</dp-button>
  <dp-button class="butbtnton-item" type="link">link btn</dp-button>
</template>

<style>
  .btn-item {
    margin: 10px;
  }
</style>
```

:::

#### Disabled

Button 组件提供禁用状态.

:::demo 通过修改`disabled`属性开启禁用状态

```html
<template>
  <dp-button class="btn-item" disabled @click="onClick()">
    disabled btn
  </dp-button>
  <dp-button class="btn-item" type="primary" disabled @click="onClick()">
    disabled btn
  </dp-button>
  <dp-button class="btn-item" type="danger" disabled @click="onClick()">
    disabled btn
  </dp-button>
  <dp-button class="btn-item" type="link" disabled @click="onClick()">
    disabled btn
  </dp-button>
</template>

<script>
  export default {
    methods: {
      onClick() {
        console.log('disabled state');
      }
    }
  };
</script>

<style>
  .btn-item {
    margin: 10px;
  }
</style>
```

:::

#### Icon

Button 组件支持 icon.

:::demo 通过修改`prefix-icon` 或者`suffix-icon`设置图标 | 也可以使用 `icon` 设置完全图标按钮

```html
<template>
  <div>
    <dp-button class="btn-item" prefix-icon="dpui-fill-pagesettings-ds">
      icon btn
    </dp-button>
    <dp-button class="btn-item" prefix-icon="dpui-fill-affiliate1">
      icon btn
    </dp-button>
    <dp-button class="btn-item" suffix-icon="dpui-fill-pagesettings-ds">
      icon btn
    </dp-button>
    <dp-button class="btn-item" suffix-icon="dpui-color-link-selected">
      icon btn
    </dp-button>
  </div>
  <div>
    <dp-button class="btn-item" prefix-icon="dpui-fill-pagesettings-ds">
      icon btn
    </dp-button>
    <dp-button class="btn-item" type="primary" prefix-icon="dpui-fill-pagesettings-ds">
      icon btn
    </dp-button>
    <dp-button class="btn-item" type="danger" suffix-icon="dpui-fill-pagesettings-ds">
      icon btn
    </dp-button>
    <dp-button class="btn-item" type="link" suffix-icon="dpui-fill-pagesettings-ds">
      icon btn
    </dp-button>
  </div>
  <div>
    <dp-button class="btn-item" prefix-icon="dpui-fill-pagesettings-ds" disabled>
      icon btn
    </dp-button>
    <dp-button
      class="btn-item"
      type="primary"
      prefix-icon="dpui-fill-pagesettings-ds"
      disabled
    >
      icon btn
    </dp-button>
    <dp-button
      class="btn-item"
      type="danger"
      suffix-icon="dpui-fill-pagesettings-ds"
      disabled
    >
      icon btn
    </dp-button>
    <dp-button
      class="btn-item"
      type="link"
      suffix-icon="dpui-fill-pagesettings-ds"
      disabled
    >
      icon btn
    </dp-button>
  </div>
  <div>
    <dp-button class="btn-item" icon="dpui-fill-pagesettings-ds" />
    <dp-button class="btn-item" type="primary" icon="dpui-fill-pagesettings-ds" />
    <dp-button class="btn-item" type="danger" icon="dpui-fill-pagesettings-ds" />
  </div>
  <div>
    <dp-button class="btn-item" icon="dpui-fill-pagesettings-ds" disabled />
    <dp-button class="btn-item" type="primary" icon="dpui-fill-pagesettings-ds" disabled />
    <dp-button class="btn-item" type="danger" icon="dpui-fill-pagesettings-ds" disabled />
  </div>
</template>

<style>
  .btn-item {
    margin: 10px;
  }
</style>
```

:::

#### Loading

Button 组件提供加载状态.

:::demo 通过修改`loading`属性开启加载状态, 通过修改`icon`设置要加载的图标

```html
<template>
  <dp-button class="btn-item" prefix-icon="dpui-line-loading" loading>
    loading btn
  </dp-button>
  <dp-button
    class="btn-item"
    type="primary"
    prefix-icon="dpui-line-loading"
    loading
  >
    loading btn
  </dp-button>
  <dp-button
    class="btn-item"
    type="danger"
    prefix-icon="dpui-line-windmill"
    suffix-icon="dpui-line-loading"
    loading
  >
    loading btn
  </dp-button>
  <dp-button
    class="butbtnton-item"
    type="link"
    suffix-icon="dpui-line-loading"
    loading
  >
    loading btn
  </dp-button>
</template>

<style>
  .btn-item {
    margin: 10px;
  }
</style>
```

:::

#### Size

Button 组件提供在不同尺寸的按钮.

:::demo 通过修改`size`属性修改按钮尺寸

```html
<template>
  <div>
    <dp-button class="btn-item" size="large">large</dp-button>
    <dp-button class="btn-item" type="primary" size="large">large</dp-button>
    <dp-button class="btn-item" type="danger" size="large">large</dp-button>
    <dp-button class="butbtnton-item" type="link" size="large">large</dp-button>
    <dp-button class="btn-item" icon="dpui-fill-pagesettings-ds" />
  </div>
  <div>
    <dp-button class="btn-item" prefix-icon="dpui-fill-pagesettings-ds" size="middle">
      middle
    </dp-button>
    <dp-button
      class="btn-item"
      type="primary"
      prefix-icon="dpui-fill-pagesettings-ds"
      size="middle"
    >
      middle
    </dp-button>
    <dp-button
      class="btn-item"
      type="danger"
      suffix-icon="dpui-fill-pagesettings-ds"
      size="middle"
    >
      middle
    </dp-button>
    <dp-button
      class="btn-item"
      type="link"
      suffix-icon="dpui-fill-pagesettings-ds"
      size="middle"
    >
      middle
    </dp-button>
    <dp-button class="btn-item" icon="dpui-fill-pagesettings-ds" size="middle" />
  </div>
  <div>
    <dp-button class="btn-item" prefix-icon="dpui-fill-pagesettings-ds" size="small">
      small
    </dp-button>
    <dp-button
      class="btn-item"
      type="primary"
      prefix-icon="dpui-fill-pagesettings-ds"
      size="small"
    >
      small
    </dp-button>
    <dp-button
      class="btn-item"
      type="danger"
      suffix-icon="dpui-fill-pagesettings-ds"
      size="small"
    >
      small
    </dp-button>
    <dp-button
      class="btn-item"
      type="link"
      suffix-icon="dpui-fill-pagesettings-ds"
      size="small"
    >
      small
    </dp-button>
    <dp-button class="btn-item" icon="dpui-fill-pagesettings-ds" size="small" />
  </div>
  <div>
    <dp-button
      class="btn-item"
      prefix-icon="dpui-line-loading"
      loading
      size="small"
    >
      small
    </dp-button>
    <dp-button
      class="btn-item"
      type="primary"
      prefix-icon="dpui-line-loading"
      loading
      size="small"
    >
      small
    </dp-button>
    <dp-button
      class="btn-item"
      type="danger"
      prefix-icon="dpui-line-windmill"
      suffix-icon="dpui-line-loading"
      loading
      size="small"
    >
      small
    </dp-button>
    <dp-button
      class="butbtnton-item"
      type="link"
      suffix-icon="dpui-line-loading"
      loading
      size="small"
    >
      small
    </dp-button>
  </div>
</template>

<style>
  .btn-item {
    margin: 10px;
  }
</style>
```

:::

#### Dark

Button 组件提供暗黑模式.

:::demo 通过修改`dark`属性变更暗黑模式

```html
<template>
  <div>
    <dp-button class="btn-item" dark>dark btn</dp-button>
    <dp-button class="btn-item" type="primary" dark>dark btn</dp-button>
    <dp-button class="btn-item" type="danger" dark>dark btn</dp-button>
    <dp-button class="butbtnton-item" type="link" dark>dark btn</dp-button>
  </div>
  <div>
    <dp-button class="btn-item" disabled dark>dark btn</dp-button>
    <dp-button class="btn-item" disabled type="primary" dark>
      dark btn
    </dp-button>
    <dp-button class="btn-item" disabled type="danger" dark>dark btn</dp-button>
    <dp-button class="butbtnton-item" disabled type="link" dark>
      dark btn
    </dp-button>
  </div>
</template>

<style>
  .btn-item {
    margin: 10px;
  }
</style>
```

:::

### Attributes

| 参数        | 说明     | 类型    | 可选值                            | 默认值    |
| ----------- | -------- | ------- | --------------------------------- | --------- |
| type        | 类型     | String  | default / primary / danger / link | `default` |
| size        | 尺寸     | String  | large / medium / small            | `large`   |
| disabled    | 禁用     | Boolean | true / false                      | `false`   |
| loading     | 加载状态 | Boolean | true / false                      | `false`   |
| dark        | 暗黑模式 | Boolean | true / false                      | `false`   |
| prefix-icon | 前缀图标 | String  | ——                                | ——        |
| suffix-icon | 后缀图标 | String  | ——                                | ——        |
