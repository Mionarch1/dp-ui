<template>
  <textarea
    class="dp-field"
    ref="textareaRef"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    :maxlength="maxLength"
    :style="style"
    @input="handleInput"
  />
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  customStyle: { type: Object, default: () => {} },
  maxLength: { type: Number, default: -1 }
});
const emit = defineEmits(['update:modelValue']);

const style = computed(() => {
  const string = JSON.stringify(props.modelValue);
  const arr = string.split('\\n');
  return {
    height: `${arr.length * 25}px`,
    ...props.customStyle
  };
});

const handleInput = e => {
  emit('update:modelValue', e.target.value);
};
</script>
