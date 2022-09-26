# Skeleton

#### Base use

:::demo

```html
<template>
  <dp-skeleton class="skeleton-demo" :loading="isLoading" active>
    <template #default>
      <div>123123213jdlas;defaultasd askldmsalkmklsafas asknfakjdvnjknkvj</div>
      <div>123123213jdlas;defaultasd askldmsalkmklsafas asknfakjdvnjknkvj</div>
    </template>
    <template #skeleton>
      <div class="skeleton-panel">
        <div class="skeleton-section"></div>
      </div>
      <div class="skeleton-panel"></div>
    </template>
  </dp-skeleton>
  <dp-button @click="handleClick()">open skeleton</dp-button>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false
      };
    },
    methods: {
      handleClick() {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      }
    }
  };
</script>

<style>
  .skeleton-demo {
    margin: 10px;
  }
  .skeleton-panel {
    width: 300px;
    height: 80px;
    margin: 10px;
    padding: 10px;
    background: #f2f2f2;
  }
  .skeleton-section {
    height: 40px;
    margin: 10px;
    background: #fff;
  }
</style>
```

:::

### Attributes

| 参数    | 说明     | 类型    | 可选值       | 默认值  |
| ------- | -------- | ------- | ------------ | ------- |
| loading | 开启加载 | Boolean | true / false | `true`  |
| active  | 开启动画 | Boolean | true / false | `false` |

### Slots

| 名称     | 说明                                                                                                              |
| -------- | ----------------------------------------------------------------------------------------------------------------- |
| skeleton | 设置自定义骨架，通过 css 类名(skeleton-panel、skeleton-section)进行骨架修饰，动画效果只对 `skeleton-section` 生效 |
