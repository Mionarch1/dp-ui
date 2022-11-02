<template>
  <div class="c-header">
    <img
      class="c-header-logo"
      src="@docs/assets/mionarch.jpg"
      @click="showInfo('success')"
    />
    <div class="c-header-navs">
      <div
        :class="[
          'nav-item',
          {
            'is-active': route.name && route.name.indexOf(nav.type) >= 0
          }
        ]"
        v-for="nav in navs"
        :key="nav.name"
        @click="goRoute(nav)"
      >
        {{ nav.name }}
      </div>
      <svg
        @click="goLink('https://github.com/Mionarch1/dp-ui')"
        width="24"
        height="24"
        class="c-header-code"
        viewBox="0 0 36 36"
      >
        <path
          class="tanuki-shape tanuki-left-ear"
          fill="#e24329"
          d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"
        ></path>
        <path
          class="tanuki-shape tanuki-right-ear"
          fill="#e24329"
          d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
        ></path>
        <path
          class="tanuki-shape tanuki-nose"
          fill="#e24329"
          d="M18,34.38 3,14 33,14 Z"
        ></path>
        <path
          class="tanuki-shape tanuki-left-eye"
          fill="#fc6d26"
          d="M18,34.38 11.38,14 2,14 6,25Z"
        ></path>
        <path
          class="tanuki-shape tanuki-right-eye"
          fill="#fc6d26"
          d="M18,34.38 24.62,14 34,14 30,25Z"
        ></path>
        <path
          class="tanuki-shape tanuki-left-cheek"
          fill="#fca326"
          d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
        ></path>
        <path
          class="tanuki-shape tanuki-right-cheek"
          fill="#fca326"
          d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, watch, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { debounce, throttle } = require('@utils/funcHandle/index.js');

const stepWord = ref(0);
const lastClickTime = ref(0);
const timer = ref(null);

const { proxy } = getCurrentInstance();
const route = useRoute();
const router = useRouter();
const navs = [
  {
    name: 'Guide',
    type: 'guide',
    path: '/guide'
  },
  {
    name: 'Desktop',
    type: 'desktop',
    path: '/desktop/quickly'
  },
  {
    name: 'Mobile',
    type: 'mobile',
    path: '/mobile/quickly'
  },
  {
    name: 'Material',
    type: 'material',
    path: '/material/quickly'
  }
];

const goRoute = route => {
  router.push(route.path);
};
// 节流失败案例
// const showInfo = type => {
//   lastClickTime.value = new Date().getTime() * 1;
//   throttle((type = 'success') => {
//     if (stepWord.value === 0) {
//       proxy.$dpmessage[type](`Hello,I'm Mionarch`);
//       stepWord.value++;
//     } else if (stepWord.value === 1) {
//       proxy.$dpmessage[type](`Welcome to my displayUi`);
//       stepWord.value++;
//     } else if (stepWord.value === 2) {
//       proxy.$dpmessage[type](`Hope you have a good day!`);
//       stepWord.value = 0;
//     }
//   }, 3000)();
// };

// 节流
const showInfo = throttle((type = 'success') => {
  lastClickTime.value = new Date().getTime() * 1;
  if (stepWord.value === 0) {
    proxy.$dpmessage[type](`Hello,I'm Mionarch`);
    stepWord.value++;
  } else if (stepWord.value === 1) {
    proxy.$dpmessage[type](`Welcome to my displayUi`);
    stepWord.value++;
  } else if (stepWord.value === 2) {
    proxy.$dpmessage[type](`Hope you have a good day!`);
    stepWord.value = 0;
  }
}, 3000);

const isTimeOut = () => {
  timer.value = setInterval(() => {
    let nowTime = new Date().getTime(); // 获取当前时间
    // 5秒钟不进行点击操作，就重新提示
    if (nowTime - lastClickTime.value > 1000 * 5) {
      // 这里要清除定时器，结束任务
      clearInterval(timer);
      stepWord.value = 0;
    }
  }, 1000);
};
onMounted(() => {
  isTimeOut();
});

onUnmounted(() => {
  timer.value = null;
});

const goLink = link => {
  window.open(link, '_blank');
};
</script>

<style lang="scss" scoped>
.c-header {
  height: 54px;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  &-logo {
    width: 40px;
    margin-left: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
  &-navs {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .nav-item {
    cursor: pointer;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100px;
    color: #ffdd00;
    font-size: 13px;
    font-family: Plus Jakarta Sans;
    font-weight: bold;
    letter-spacing: 0.06em;
    transition: all 0.2s;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    &:hover {
      background-color: #525252;
      border-bottom-color: #ffdd00;
    }
    &.is-active {
      background-color: #333333;
      border-bottom-color: #ffdd00;
    }
  }
  &-code {
    margin-left: 12px;
    cursor: pointer;
  }
}
</style>
