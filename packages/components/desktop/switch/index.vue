<template>
  <div
    :class="[
      'dp-switch',
      { 'is-checked': modelValue },
      { 'dp-switch-disabled': disabled }
    ]"
    @click="handleChange"
  >
    <input
      ref="input"
      class="dp-switch-input"
      type="checkbox"
      :checked="isChecked"
      :name="name"
    />
    <span class="dp-switch-core" :style="coreStyle">
      <span class="dp-switch-button"></span>
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  name: { type: String, default: '' },
  activeColor: { type: String, default: '' },
  inactiveColor: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue', 'change', 'input']);

const input = ref(null);

const isChecked = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    const nextValue = !!value;
    const prevValue = props.modelValue;
    if (nextValue !== prevValue) {
      input.value.checked = nextValue;
      emit('update:modelValue', nextValue);
      emit('input', nextValue);
      emit('change', nextValue);
    }
  }
});


const handleChange = () => {
  if (props.disabled) return;
  isChecked.value = !isChecked.value;

};

const coreStyle = computed(() => {
  if (props.activeColor || props.inactiveColor) {
    const newColor = props.modelValue ? props.activeColor : props.inactiveColor;
    return {
      borderColor: newColor,
      backgroundColor: newColor
    };
  }

  return {};
});
</script>
