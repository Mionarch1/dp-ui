<template>
  <div class="c-sider scroll-css">
    <div class="c-sider-business" v-for="nav in navs" :key="nav.type">
      <div class="business-title">{{ nav.type }}</div>
      <div
        class="c-sider-type"
        v-for="typeNav in nav.children"
        :key="typeNav.type"
      >
        <div class="type-title">{{ typeNav.type }}</div>
        <div
          :class="[
            'c-sider-component',
            { 'is-active': route.path === component.path }
          ]"
          v-for="component in typeNav.children"
          :key="component.nameEn"
          @click="goRoute(component)"
        >
          {{ component.nameEn }} {{ component.nameZh }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import desktop from './desktop';
import mobile from './mobile';
import material from './material';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goRoute = route => {
  router.push(route.path);
};

const navs = computed(() => {
  if (!route.name) return [];
  if (route.name.indexOf('desktop') >= 0) return desktop;
  if (route.name.indexOf('mobile') >= 0) return mobile;
  if (route.name.indexOf('material') >= 0) return material;
});
</script>

<style lang="scss" scoped>
.c-sider {
  font-family: Plus Jakarta Sans;
  min-width: 260px;
  padding: 32px;
  overflow: hidden auto;
  .business-title,
  .type-title {
    font-family: Plus Jakarta Sans;
    font-weight: 800;
    margin-bottom: 8px;
    line-height: 24px;
    cursor: pointer;
    background: linear-gradient(90deg, #ffdb4c 0%, #ff9e2d 30%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .business-title {
    color: #ffdd00;
  }
  &-component {
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
    color: #525252;
    transition: all 0.2s;
    padding: 10px 16px;
    line-height: 1.5;
    font-size: 13px;
    border-radius: 8px;
    cursor: pointer;
    margin: 6px 0px;
    &:hover {
      color: #525252;
    }
    &.is-active {
      color: #525252;
      background-color: #fff9e4;
      font-family: Plus Jakarta Sans;
      font-weight: 800;
    }
  }
}
</style>
