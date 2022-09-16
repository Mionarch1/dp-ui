<template>
  <div class="icons-docs">
    <icon-card
      v-for="item in icons.glyphs"
      :key="item.unicode_decimal"
      :name="item.name"
    ></icon-card>
  </div>
</template>

<script setup>
import IconCard from './IconCard.vue';
import icons from '@themes/common/iconfont/iconfont.json';
</script>

<style lang="scss" scoped>
.icons-docs {
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border-top: 1px solid #efefef;
  border-right: 1px solid #efefef;
}
</style>
