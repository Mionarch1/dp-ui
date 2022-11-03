# Rate

Used to rate

## demo

:::demo 

```html
<template>
  <dp-rate ref="oo" :max="8" @change="handleChange"></dp-rate>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    handleChange(val){
    //   console.log(this.$refs.oo.setCurrentValue);
    }
  }
}
</script>
```

:::

### Attributes

| 参数     | 说明           | 类型     | 可选值                                                | 默认值 |
| ------- | -------------- | ------- | ---------------------------------------------------- | --------- |
| max     | 最高分          | Number  |  -                                                   |      5    |


### Event
| 事件名    | 说明                                                       | 默认值 |
| ------- | --------------------------------------------------------  | ----- |
| change   |  评分改变触发的事件                                        |    val 改变后的值  |
