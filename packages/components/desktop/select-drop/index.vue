<template>
  <div class="dp-select-drop" ref="elementRef">
    <div class="dp-select-drop-selection" @click="handleToggle(!modelValue)">
      <div class="dp-select-drop-selection-rendered">
        <slot name="input"></slot>
      </div>
    </div>
    <transition name="select-drop-fade">
      <div v-if="props.modelValue" class="dp-select-drop-down">
        <slot name="down"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import useClickOutside from '@packages/hooks/use-click-outside';

const props = defineProps({
  modelValue: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue']);

const elementRef = ref(null);
const isClickOutside = useClickOutside(elementRef);

const handleToggle = status => {
  emit('update:modelValue', status);
};

watch(isClickOutside, () => {
  if (props.modelValue && isClickOutside.value) {
    handleToggle(false);
  }
});
</script>
