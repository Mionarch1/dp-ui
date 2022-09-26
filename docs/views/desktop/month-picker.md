# Month-Picker

Used to select the month.
## default


:::demo 

```html
<template>
  <dp-month-picker v-model="currentTime" @change="handleChange" icon="dpui-color-theme-unselected"></dp-month-picker>
</template>
<script>
export default {
  data() {
    return {
      currentTime: '',
    };
  },
  methods: {
    handleChange(value){
      console.log(value);
    }
  }
};
</script>
```

:::

### Attributes

| 参数   | 说明           | 类型    | 可选值                                               | 默认值   |
| ------- | -------------- | ------- | --------------------------------------------- | --------- |
| v-model    | 选中项绑定值      | date   | -                                        | currentTime |
| format   | 显示在输入框中的格式         | String	  |       -                         |'MMM YYYY'  |
| icon   | 图标名称         | String	  |       -                         |  |


### Event
| 事件名   | 说明            | 参数   |
| ------- | ------------------- | --------- |
| change   | 用户确认选定的值时触发     |  year month  |

