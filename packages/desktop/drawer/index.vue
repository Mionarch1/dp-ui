<template>
  <transition
    name="drawer-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="dp-drawer-wrapper" v-show="modelValue" @click.self="handleClose">
      <div
        :class="[
          'dp-drawer',
          `dp-drawer-${direction}`,
          `dp-drawer-${direction}-out`,
          modelValue && `dp-drawer-${direction}-in`
        ]"
        :style="style"
      >
       <i>{{'<'}}</i>
        <div class="dp-drawer-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  direction: { type: String, default: 'right' },
  modelValue: { type: Boolean, default: false },
  width: { type: String, default: '250px' },
  borderRadius: { type: String, default: '0px' }
});

const style = computed(() => {
  return {
    'border-radius': props.borderRadius,
    width: ['right', 'left'].includes(props.direction) ? props.width : '100%',
    height: ['bottom', 'top'].includes(props.direction) ? props.width : '100%'
  };
});

const emit = defineEmits(['update:modelValue', 'onOpened', 'onClosed']);

const handleClose = () => {
  emit('update:modelValue', false);
};
const afterEnter = () => {
  emit('onOpened');
};
const afterLeave = () => {
  emit('onClosed');
};
</script>
