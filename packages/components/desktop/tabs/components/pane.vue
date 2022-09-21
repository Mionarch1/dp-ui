<template>
  <div v-show="show">
    <slot></slot>
  </div>
</template>
<script setup>
import { ref, inject, computed } from 'vue';
const props = defineProps({
  name: {
    type: String
  },
  label: {
    type: String,
    default: ''
  }
});
const activeKey = inject('activeKey');

const show = computed(() => {
  return props.label == activeKey.value;
});

defineExpose({
  name: 'TabPane'
});
</script>
