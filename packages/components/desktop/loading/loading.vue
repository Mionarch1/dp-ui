<template>
  <transition name="loading-fade">
    <div class="dp-loading" v-if="visible">
      <dp-icon class="dp-loading-icon" name="dpui-line-loading" />
      <span class="dp-loading-content" v-if="content">{{ content }}</span>
      <div
        class="dp-loading-cancel"
        v-if="cancelable"
        @click.stop="handleClose()"
      >
        Cancel
      </div>
    </div>
  </transition>
</template>

<script setup>
import DpIcon from '../icon';

const props = defineProps({
  visible: { type: Boolean, default: true },
  content: { type: String, default: '' },
  cancelable: { type: Boolean, default: false },
  remove: { type: Function, default: () => {} }
});

const handleClose = () => {
  props.remove();
};
</script>
