# Quickly this is a material

### npm / yarn install

```shell
npm/cnpm i dp-ui -S
```

OR

```shell
yarn add dp-ui -S
```

:::tip
我们后期会提供 CDN 引入方式，便于用户在链接地址上切换和锁定版本。
:::

### Usage

通过 vue 项目中的入口文件 main.js 进行引入操作。

```js
import { createApp } from 'vue';
import App from './App.vue';
import DPUI from 'dp-ui';
import 'dp-ui/dp-ui.css';

const app = createApp(App);

app.use(DPUI);
app.mount('#app');
```
