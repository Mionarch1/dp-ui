<template>
  <transition name="message-slideY">
    <div :class="[`is-${type}`]" v-show="visible">
      <dp-alert :type="type" icon closable @on-close="handleClose()">
        {{ content }}
      </dp-alert>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DpAlert from '../alert';

const props = defineProps({
  type: { type: String, default: 'success' },
  duration: { type: Number, default: 3000 },
  content: {
    type: [String, Object],
    default: ''
  },
  remove: { type: Function, default: () => {} }
});

let timer = ref(null);
const visible = ref(false);

const handleOpen = () => {
  visible.value = true;
  if (props.duration > 0) {
    timer.value = setTimeout(() => {
      if (visible.value) {
        handleClose();
      }
    }, props.duration);
  }
};

const handleClose = () => {
  visible.value = false;
  clearTimeout(timer.value);
  timer.value = null;
  props.remove();
};

onMounted(() => {
  handleOpen();
});
</script>
