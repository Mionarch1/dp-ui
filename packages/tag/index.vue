<template>
  <div
    :class="[
      'dp-tag',
      type ? `dp-tag-${type}` : '',
      round ? 'dp-tag-round' : '',
      size ? `dp-tag-${size}` : ''
    ]"
    @click="onClick()"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'middle'
  }
});
const onClick = ()=>{
	console.log('出发了点击事件');
}
</script>