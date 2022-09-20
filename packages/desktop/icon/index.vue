<template>
  <i
    v-if="props.type === 'normal'"
    :class="['dpui-iconfont', props.name]"
    :style="normalStyle"
  ></i>
  <svg v-else :style="colorStyle">
    <use :xlink:href="`#${props.name}`"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: { type: String, default: 'normal' }, // normal, color
  name: { type: String, required: true },
  size: { type: String, default: '20px' },
  color: { type: String, default: '#333333' }
});

const normalStyle = computed(() => {
  return {
    'font-size': props.size,
    color: props.color
  };
});

const colorStyle = computed(() => {
  return {
    height: props.size,
    width: props.size
  };
});
</script>
