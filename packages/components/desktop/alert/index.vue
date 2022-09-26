<template>
  <div v-show="visible" :class="containerClasses">
    <div class="dp-alert-content">
      <dp-icon v-if="icon" :class="iconClasses" :name="iconName" size="16px" />
      <slot />
    </div>
    <dp-icon
      v-show="closable"
      class="dp-alert-icon"
      name="dpui-line-x"
      size="16px"
      @click.stop="handleClose()"
    />
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import DpIcon from '../icon'

const props = defineProps({
  type: { type: String, default: 'info' },
  icon: { type: Boolean, default: false },
  closable: { type: Boolean, default: false }
});
const emits = defineEmits(['onClose']);
const visible = ref(true);

const containerClasses = computed(() => {
  return ['dp-alert', `is-${props.type}`];
});

const iconClasses = computed(() => {
  return ['dp-alert-icon', `is-${props.type}`];
});

const iconName = computed(() => {
  const icons = {
    warning: 'dpui-a-fill-',
    error: 'dpui-fill-x',
    success: 'dpui-fill-check'
  };
  return icons[props.type];
});

const handleClose = () => {
  emits('onClose');
  visible.value = false;
};
</script>
