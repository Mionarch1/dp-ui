<template>
  <div class="dp-skeleton" :class="{ 'is-active': active }">
    <div class="dp-skeleton-slot" v-if="loading">
      <slot name="skeleton"></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  loading: { type: Boolean, default: true },
  active: { type: Boolean, default: false }
});
</script>
