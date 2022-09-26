# Input

#### Base use

:::demo

```html
<template>
  <dp-input class="input-item" v-model="value" />
  <dp-input class="input-item" type="password" v-model="value" />
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  };
</script>

<style>
  .input-item {
    width: 312px;
    margin: 10px;
  }
</style>
```

:::

#### Validate

Input 组件提供自定义校验方法.

:::demo 通过设置`validate-trigger`属性设置验证函数的触发方式

```html
<template>
  <dp-input
    v-model="value"
    style="width: 312px"
    :on-validate="verify"
    validate-trigger="input"
  />
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    },
    methods: {
      verify() {
        if (this.value) {
          return {
            code: true
          };
        }
        return {
          code: false,
          message: 'value is not exist'
        };
      }
    }
  };
</script>
```

:::

#### Icon

Input 组件支持 icon 以及插槽.

:::demo

```html
<template>
  <div>
    <dp-input
      class="input-item"
      v-model="value"
      prefix-icon="dpui-line-search"
    />
    <dp-input class="input-item" v-model="value">
      <template #prefix>prefix</template>
    </dp-input>
  </div>
  <div>
    <dp-input
      class="input-item"
      v-model="value"
      suffix-icon="dpui-line-search"
    />
    <dp-input class="input-item" v-model="value">
      <template #suffix>suffix</template>
    </dp-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    },
    methods: {
      verify() {
        if (this.value) {
          return {
            code: true
          };
        }
        return {
          code: false,
          message: 'value is not exist'
        };
      }
    }
  };
</script>

<style>
  .input-item {
    width: 312px;
    margin: 10px;
  }
</style>
```

:::

#### Clearable

Input 组件提供清除表单方式.

:::demo

```html
<template>
  <dp-input v-model="value" clearable />
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  };
</script>
```

:::

#### Limit

Input 组件支持对输入内容长度限制.

:::demo 配合`show-count`可实时显示限制

```html
<template>
  <dp-input class="input-item" v-model="value" max-length="20" show-count />
  <dp-input
    class="input-item"
    v-model="value"
    max-length="20"
    show-count
    clearable
  />
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  };
</script>

<style>
  .input-item {
    width: 312px;
    margin: 10px;
  }
</style>
```

:::

#### Disabled

Input 组件支持禁用.

:::demo

```html
<template>
  <dp-input
    class="input-item"
    v-model="value1"
    max-length="20"
    show-count
    disabled
  />
  <dp-input
    class="input-item"
    v-model="value2"
    max-length="20"
    show-count
    clearable
    disabled
  />
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: 'disabled status'
      };
    }
  };
</script>

<style>
  .input-item {
    width: 312px;
    margin: 10px;
  }
</style>
```

:::

#### Dark

Input 组件暗黑模式.

:::demo

```html
<template>
  <div class="demo-input-dark">
    <dp-input
      class="input-item"
      v-model="value1"
      max-length="20"
      show-count
      dark
    />
    <dp-input
      class="input-item"
      v-model="value2"
      max-length="20"
      show-count
      clearable
      disabled
      dark
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: 'disabled status'
      };
    }
  };
</script>

<style>
  .demo-input-dark {
    background: #333333;
    width: 400px;
    height: 160px;
  }
  .input-item {
    width: 312px;
    margin: 10px;
  }
</style>
```

:::

### Attributes

| 参数             | 说明                   | 类型            | 可选值                | 默认值  |
| ---------------- | ---------------------- | --------------- | --------------------- | ------- |
| type             | 类型                   | String          | 原生 input 的 type 值 | `text`  |
| modelValue       | 绑定值                 | String / Number | 原生 input 的 type 值 | `text`  |
| dark             | 暗黑模式               | Boolean         | true / false          | `false` |
| placeholder      | 输入框占位文本         | String          |                       | ——      |
| clearable        | 是否可清空             | Boolean         | true / false          | `false` |
| max-length       | 最大输入长度           | String / Number | ——                    | ——      |
| show-count       | 是否显示统计字数       | Boolean         | true / false          | `false` |
| disabled         | 是否禁用               | Boolean         | true / false          | `false` |
| prefix-icon      | 前缀图标               | String          | ——                    | ——      |
| suffix-icon      | 后缀图标               | String          | ——                    | ——      |
| validate-trigger | 自定义验证函数触发方式 | String          | blur / input          | `blur`  |
| on-validate      | 自定义验证函数         | Function        | ——                    | ——      |

### Slots

| 参数   | 说明                                                |
| ------ | --------------------------------------------------- |
| prefix | 输入框头部内容，不可与 clearable 这类功能性同时使用 |
| suffix | 输入框尾部内容，不可与 clearable 这类功能性同时使用 |

### Events

| 参数   | 说明                                                          | 参数  |
| ------ | ------------------------------------------------------------- | ----- |
| blur   | 在 Input 失去焦点时触发                                       | value |
| focus  | 在 Input 获得焦点时触发                                       | value |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按 Enter 时触发 | value |
| input  | 在 Input 值改变时触发                                         | value |
| clear  | 在点击由 clearable 属性生成的清空按钮时触发                   | ——    |
