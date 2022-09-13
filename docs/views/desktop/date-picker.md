# Button

To trigger an operation.

## default

Button 组件提供在按钮内增加图标，通过 `icon` 属性在 Button 内嵌入一个 `Icon`。

:::demo `icon` 属性值通过 `Icon`组件中属性值进行支持

```html
<!-- <template>
  <dp-date-picker
    v-model:modelValue="initial.startTime"
    v-model:hint="initial.startHint"
    format="D MMM YYYY"
    :pickerOptions="{
								association: initial.endTime,
								scope: '90',
								isStart: true
							}"
  ></dp-date-picker> -->
</template>

<script>
  export default {
    data() {
      return {
        a: 1
      };
    },
    methods: {
      aaa() {
        this.a++;
      }
    }
  };
</script>

<style>
  .button-item {
    margin: 30px;
  }
</style>
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
