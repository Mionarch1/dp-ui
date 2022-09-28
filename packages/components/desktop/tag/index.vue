<template>
  <div
    :class="[
      'dp-tag',
      round ? 'dp-tag-round' : '',
      size ? `dp-tag-${size}` : ''
    ]"
    :style="style"
    @click="onClick()"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  backgroundColor: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'small'
  }
});
const style = computed(() => {
  let styleObj = {};
  if (props.backgroundColor) {
    styleObj.backgroundColor = props.backgroundColor;
    if (!props.borderColor) {
      styleObj.borderColor = props.backgroundColor;
    }
  }
  if (props.color) {
    styleObj.color = props.color;
  }
  if (props.borderColor) {
    styleObj.borderColor = props.borderColor;
  }
  return styleObj;
});
const onClick = () => {
  console.log('触发了点击事件');
};
</script>
