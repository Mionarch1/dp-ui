<template>
  <div class="c-header">
    <img
      class="c-header-logo"
      src="https://static.desty.app/desty-page-v2/DP-page/poseidon/footer/desty-page-footer-logo.svg"
    />
    <div class="c-header-navs">
      <div
        class="nav-item"
        v-for="nav in navs"
        :key="nav.name"
        @click="goRoute(nav)"
      >
        {{ nav.name }}
      </div>
      <svg
        @click="goLink('https://code.desty.app:11443/pinganzhang/dp-ui')"
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
import { useRouter } from 'vue-router';

const router = useRouter();
const navs = [
  // {
  //   name: 'Components',
  //   path: '/components'
  // }
];

const goRoute = route => {
  router.push(route);
};

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
    width: 86px;
    height: 30px;
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
    color: #ffdd00;
    font-size: 13px;
    font-family: Plus Jakarta Sans;
    margin-right: 12px;
    transition: all 0.2s;
    &:hover {
      background-color: #525252;
    }
    &.is-active {
      background-color: #333333;
      border-bottom: 2px solid #ffdd00;
    }
  }
  &-code {
    cursor: pointer;
  }
}
</style>
