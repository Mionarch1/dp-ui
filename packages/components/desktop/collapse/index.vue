<template>
  <div ref="collapseRef" class="dp-collapse-body">
    <div class="dp-collapse-text">
      <dp-icon
        v-if="!modelValue"
        name="dpui-line-chevron-down"
        type="normal"
        class="icon-collapse"
        @click="handleClose"
      />
      <dp-icon
        v-else
        name="dpui-line-chevron-right"
        type="normal"
        class="icon-collapse"
        @click="handleOpen"
      />
      <slot name="textTitle"></slot>
    </div>
    <div class="dp-collapse-child"><slot name="content"></slot></div>
  </div>
</template>

<script setup>
import { computed, ref, watch, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
const { ctx } = getCurrentInstance();

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  closedHeight: { type: String, default: '' },
});
const collapseRef = ref();

watch(
  () => props.modelValue,
  value => {
    if (value) {
      collapseRef.value.style.height =
        props.closedHeight ||
        document.querySelector('.dp-collapse-text').offsetHeight + 'px';
    } else {
      collapseRef.value.style.height = 'auto';
    }
  }
);

const emit = defineEmits(['update:modelValue']);

const handleClose = () => {
  emit('update:modelValue', true);
};
const handleOpen = () => {
  emit('update:modelValue', false);
};
</script>
