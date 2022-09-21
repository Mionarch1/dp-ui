# Select Drop

## Base use

:::demo

```html
<template>
  <dp-select-drop v-model="isOpen">
    <template #input>
      <dp-input v-model="value" readonly>
        <template #suffix>
          <dp-icon
            :style="iconStyles"
            name="dpui-line-chevron-down"
            type="normal"
          />
        </template>
      </dp-input>
    </template>
    <template #down>
      <section class="down-panel">
        <div
          class="down-panel-item"
          @click="handleToggle(item)"
          v-for="item in 10"
          :key="item"
        >
          {{item}}: content
        </div>
      </section>
    </template>
  </dp-select-drop>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        value: ''
      };
    },
    computed: {
      iconStyles() {
        return [
          { color: '#333333 !important' },
          { transition: 'all 0.2s' },
          this.isOpen && { transform: 'rotate(180deg)' }
        ];
      }
    },
    methods: {
      handleToggle(item) {
        this.value = item;
        this.isOpen = false;
      }
    }
  };
</script>

<style>
  .down-panel {
    max-height: 236px;
    background: #ffffff;
    border: 1px solid #c6c6c6;
    border-radius: 8px;
    padding: 8px;
    overflow: hidden auto;
  }
  .down-panel-item {
    cursor: pointer;
    padding: 12px 16px;
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    border-bottom: 1px solid #efefef;
  }
  .down-panel-item:last-child {
    border: none;
  }
</style>
```

:::

### Attributes

| 参数       | 说明             | 类型    | 可选值       | 默认值 |
| ---------- | ---------------- | ------- | ------------ | ------ |
| modelValue | 控制是否开启下拉 | Boolean | true / false | `true` |

### Slots

| 参数  | 说明         |
| ----- | ------------ |
| input | 默认展示节点 |
| down  | 下拉节点     |
