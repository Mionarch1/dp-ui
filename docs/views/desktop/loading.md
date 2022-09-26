# Loading

#### Base use

:::demo

```html
<template>
  <dp-button @click="handleClick()">open loading</dp-button>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$loading.open();
        setTimeout(() => {
          this.$loading.close();
        }, 3000);
      }
    }
  };
</script>
```

:::

#### Content

:::demo

```html
<template>
  <dp-button @click="handleClick()">open loading</dp-button>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$loading.open({
          content: 'this is a loading description'
        });
        setTimeout(() => {
          this.$loading.close();
        }, 3000);
      }
    }
  };
</script>
```

:::

#### Cancel

:::demo

```html
<template>
  <dp-button @click="handleClick()">open loading</dp-button>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$loading.open({
          cancelable: true
        });
        setTimeout(() => {
          this.$loading.close();
        }, 3000);
      }
    }
  };
</script>
```

:::

### Attributes

| 参数       | 说明       | 类型    | 可选值       | 默认值  |
| ---------- | ---------- | ------- | ------------ | ------- |
| content    | 消息文字   | String  | ——           | ——      |
| cancelable | 是否可取消 | Boolean | true / false | `false` |

### Methods

| 方法名 | 说明         |
| ------ | ------------ |
| open   | 打开 loading |
| close  | 关闭 loading |
