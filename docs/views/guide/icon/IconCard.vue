<template>
  <div class="icon-card">
    <dp-icon :name="`dpui-${props.name}`" :type="type"></dp-icon>
    <span>dpui-{{ props.name }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: { type: String, default: '' }
});

const type = computed(() => {
  if (props.name.indexOf('color-') >= 0) {
    return 'color';
  }
  return 'normal';
});
</script>

<style lang="scss" scoped>
.icon-card {
  min-width: 200px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  cursor: pointer;
  transition: all 0.2s;
  padding: 24px;
  flex: 1;
  &:hover {
    background: #fff9e4;
  }
  span {
    margin-top: 12px;
    font-size: 13px;
  }
}
</style>
