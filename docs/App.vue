<template>
  <div class="root">
    <c-header />
    <div class="root-main">
      <c-sider />
      <div class="root-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import CHeader from '@docs/components/common/CHeader';
import CSider from '@docs/components/common/CSider';
</script>

<style lang="scss" scoped>
.root {
  height: 100%;
  overflow: hidden;
  &-main {
    height: calc(100% - 54px);
    display: flex;
    justify-content: flex-start;
  }
  &-view {
    width: 100%;
    height: 100%;
    padding: 30px 48px 0;
    overflow: hidden auto;
  }
}
</style>
