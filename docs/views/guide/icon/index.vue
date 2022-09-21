<template>
  <div class="icons-docs">
    <div class="icons-title">Color Icons</div>
    <div class="icons-panel">
      <icon-card
        v-for="icon in filterIcons(icons.glyphs, 'color')"
        :key="icon.unicode_decimal"
        :name="icon.font_class"
        @click="handleCopy(icon.font_class, 'color')"
      ></icon-card>
    </div>
    <div class="icons-title">Line Icons</div>
    <div class="icons-panel">
      <icon-card
        v-for="icon in filterIcons(icons.glyphs, 'line')"
        :key="icon.unicode_decimal"
        :name="icon.font_class"
        @click="handleCopy(icon.font_class, 'normal')"
      ></icon-card>
    </div>
    <div class="icons-title">Fill Icons</div>
    <div class="icons-panel">
      <icon-card
        v-for="icon in filterIcons(icons.glyphs, 'fill')"
        :key="icon.unicode_decimal"
        :name="icon.font_class"
        @click="handleCopy(icon.font_class, 'normal')"
      ></icon-card>
    </div>
  </div>
</template>

<script setup>
import copy from 'copy-to-clipboard';
import IconCard from './IconCard.vue';
import icons from '@themes/common/iconfont/iconfont.json';

const filterIcons = (icons, type) => {
  return icons.filter(icon => icon.font_class.indexOf(`${type}-`) >= 0);
};

const handleCopy = (name, type) => {
  copy(`<dp-icon name="dpui-${name}" type="${type}" />`);
};
</script>

<style lang="scss" scoped>
.icons-docs {
  .icons-title {
    font-size: 52px;
    margin: 36px 0px;
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 800;
    color: #333;
    text-shadow: 4px 2px #ffdb4c;
  }
  .icons-panel {
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    border-top: 1px solid #efefef;
    border-right: 1px solid #efefef;
  }
}
</style>
