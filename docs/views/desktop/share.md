# Share


## default


:::demo 

```html
<template>
	<dp-share @click="handleClick" network="facebook" :url="pageUrl" :title="pageDesc">
			<template v-slot:icon>
				<img
				class="pixel-button"
				src="https://static.desty.app/desty-page-v2/DP-page/poseidon/sharing/facebook-share.svg"
				alt=""/>
			</template>
	</dp-share>
</template>
<script>
export default {
  data() {
    return {
      pageUrl: window.location.href,
      pageDesc:"11"
    };
  },
  methods: {
   handleClick(url){
    console.log(url);
   }
  }
};
</script>
```

:::

### Attributes

| 参数   | 说明           | 类型    | 可选值                                               | 默认值   |
| ------- | -------------- | ------- | --------------------------------------------- | --------- |
| url   |         | String(必填)  |      |  |
| title    |      | String(必填) |        |  |
| description    |                | String(必填)  |                                    |   |
| quote    |             | String  |                                    | `-`  |
| hashtags    |             | String  |                                    | `-`  |
| twitterUser    |             | String  |                                    | `-`  |
| media    |             | String  |                                    | `-`  |
| network    |             | String  |                                    | `-`  |
| popup    |   窗口宽高          | Object  |                           |  width: 626,height: 436  |

### Event
| 事件名   | 说明            | 参数   |
| ------- | -------------- | --------- |
| click   | 点击触发的函数            | shareLink |
