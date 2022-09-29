<template>
  <div class="dp-popover" ref="elementRef">
    <div class="dp-popover-main" @click="toggle()">
      <slot />
      <i class="dp-popover-badge" v-if="visible"></i>
    </div>
    <div
      :class="['dp-popover-panel', `is-${align}`]"
      :style="{ transform: `translateX(${offset})` }"
      v-if="visible"
    >
      <slot name="panel" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import useClickOutside from '@packages/hooks/use-click-outside';

const props = defineProps({
  align: { type: String, default: 'center' },
  offset: { type: String, default: '0%' }
});

const visible = ref(false);
const elementRef = ref(null);
const isClickOutside = useClickOutside(elementRef);

const toggle = () => {
  visible.value = !visible.value;
};

watch(isClickOutside, () => {
  if (visible.value && isClickOutside.value) {
    visible.value = false;
  }
});
</script>
