<template>
  <div :class="['dp-slider', { 'is-disabled': disabled }]">
    <div class="dp-slider-track" ref="barEle" @click="clickBar">
      <div ref="stepEle" class="dp-slider-step"></div>
      <div class="dp-slider-thumb" ref="btnEle"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import useDraggable from '@packages/hooks/use-draggable';

const props = defineProps({
  modelValue: { type: [Number, String], default: 0 },
  max: { type: [Number, String], default: 100 },
  min: { type: [Number, String], default: 0 },
  unit: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
});
const emits = defineEmits(['update:modelValue']);

const barEle = ref(null);
const stepEle = ref(null);
const btnEle = ref(null);
const inputValue = ref(props.modelValue);

const width = computed(() => {
  const step = barEle.value.offsetWidth / (props.max - props.min);
  const width = (inputValue.value - props.min) * step;
  return width;
});

const stepWidth = computed(() => {
  return Math.max(0, width.value);
});

const listenerEvent = event => {
  let x = event.clientX - barEle.value.getBoundingClientRect().left;
  if (x > barEle.value.offsetWidth) {
    x = barEle.value.offsetWidth;
  }
  if (x <= 0) {
    x = 0;
  }
  inputValue.value =
    Math.round((x / barEle.value.offsetWidth) * (props.max - props.min)) +
    props.min;
  if (inputValue.value >= props.max) {
    inputValue.value = props.max;
  }
  if (inputValue.value <= props.min) {
    inputValue.value = props.min;
  }
};

const clickBar = event => {
  if (props.disabled) return;
  listenerEvent(event);
};

onMounted(() => {
  const isPhone = navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i);
  btnEle.value.style.left = Math.max(0, width.value) + 'px';
  stepEle.value.style.width = stepWidth.value + 'px';
  useDraggable(btnEle.value, {
    drag: event => {
      if (isPhone) {
        event = event.changedTouches[0];
      }
      listenerEvent(event);
    },
    end: event => {
      if (isPhone) {
        event = event.changedTouches[0];
      }
      listenerEvent(event);
    }
  });
});

watch(
  () => inputValue.value,
  value => {
    emits('update:modelValue', value);
    btnEle.value.style.left = width.value + 'px';
    stepEle.value.style.width = stepWidth.value + 'px';
  }
);

watch(
  () => props.modelValue,
  value => {
    inputValue.value = value;
    if (props.disabled) {
      btnEle.value.style.left = width.value + 'px';
      stepEle.value.style.width = stepWidth.value + 'px';
    }
  }
);
</script>
