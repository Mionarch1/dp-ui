<template>
  <div class="dp-tooltip">
    <slot />
    <div
      class="dp-tooltiptext"
      :class="[position ? position : '']"
      :style="style"
    >
      <div v-if="$slots.content"><slot name="content" /></div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
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
  },
  position: {
    type: String,
    default: 'top'
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
