<template>
  <div class="dp-tooltip">
    <slot />
    <div v-html="content" class="dp-tooltiptext" :style="style"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  width: {
    type: String,
    default: '120px'
  },
  content: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
});
const style = computed(() => {
  return {
    width: props.width,
    backgroundColor: props.backgroundColor,
    color: props.color
  };
});
</script>