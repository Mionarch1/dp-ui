<template>
  <transition
    name="drawer-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      class="dp-drawer-wrapper"
      v-show="modelValue"
      @click.self="handleClose"
    >
      <div
        class="mask"
        v-show="modelValue && !isNest"
        @click.self="handleClose"
      ></div>
      <div
        :class="[
          'dp-drawer',
          `dp-drawer-${direction}`,
          `dp-drawer-${direction}-out`,
          modelValue && `dp-drawer-${direction}-in`
        ]"
        :style="style"
      >
        <div class="iconList" v-if="showHeader">
          <dp-icon class="icon-back" v-if="isNest" @click="handleClose" name="dpui-line-chevron-left" type="line" />
          <dp-icon class="icon-close" name="dpui-line-x" type="line"  @click.self="handleClose"/>
        </div>
        <div class="dp-drawer-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue';
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
const { ctx } = getCurrentInstance();

const props = defineProps({
  direction: { type: String, default: 'right' },
  modelValue: { type: Boolean, default: false },
  width: { type: String, default: '' },
  borderRadius: { type: String, default: '0px' },
  isNest: { type: Boolean, default: false },
  showHeader: { type: Boolean, default: true}
});
const borderRadiusDeal = () => {
  switch (props.direction) {
    case 'left':
      return `0 ${props.borderRadius} ${props.borderRadius} 0`;
    case 'right':
      return `${props.borderRadius} 0 0 ${props.borderRadius}`;
    case 'top':
      return `0 0 ${props.borderRadius} ${props.borderRadius}`;
    case 'bottom':
      return `${props.borderRadius} ${props.borderRadius} 0 0`;
  }
};
const style = computed(() => {
  return {
    'border-radius': borderRadiusDeal(),
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
