<template>
  <div :class="wrapperClasses">
    <div class="dp-input" :style="containerStyle">
      <span class="dp-input-prefix" v-if="isPrefix">
        <dp-icon v-if="prefixIcon" :name="prefixIcon" />
        <slot name="prefix" v-else />
      </span>

      <input
        class="dp-input-inner"
        :value="modelValue"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        :style="innerStyle"
        :maxlength="maxLength"
        :readonly="readonly"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />

      <span :class="suffixClasses" v-if="isSuffix">
        <dp-icon
          v-if="clearable"
          name="dpui-fill-x"
          size="16px"
          @click="handleClear()"
        />
        <span v-if="showCount">
          {{ modelValue.length }}/{{ maxLength || modelValue.length }}
        </span>
        <dp-icon v-if="suffixIcon && !clearable" :name="suffixIcon" />
        <slot name="suffix" v-if="!suffixIcon && !clearable && !showCount" />
      </span>
    </div>
    <div class="dp-input-validate" v-if="!validate.code">
      {{ validate.message }}
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs, ref, reactive, useSlots, watch } from 'vue';

const props = defineProps({
  showCount: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  dark: { type: Boolean, default: false },
  maxLength: { type: [String, Number], default: '' },
  modelValue: { type: [String, Number], default: '' },
  placeholder: { type: String, default: 'Content' },
  type: { type: String, default: 'text' },
  disabled: { type: Boolean, default: false },
  prefixIcon: { type: String, default: '' },
  suffixIcon: { type: String, default: '' },
  validateTrigger: {
    type: String,
    default: 'custom',
    validator: trigger => {
      return ['custom', 'blur', 'input'].includes(trigger);
    }
  },
  onValidate: {
    type: Function,
    default: () => ({ code: true, message: '' })
  }
});
const emit = defineEmits([
  'update:modelValue',
  'clear',
  'change',
  'input',
  'blur',
  'focus'
]);

const slots = useSlots();
const isBlur = ref(true);
const isFocus = ref(false);
const validate = reactive({
  trigger: props.validateTrigger || 'custom', // blur / input / custom
  code: true,
  message: ''
});

const isPrefix = computed(() => {
  const { prefixIcon } = toRefs(props);
  return slots.prefix || prefixIcon;
});

const isSuffix = computed(() => {
  const { suffixIcon, clearable, showCount } = toRefs(props);
  return slots.suffix || suffixIcon.value || clearable.value || showCount.value;
});

const suffixClasses = computed(() => {
  const { clearable, showCount } = toRefs(props);
  return [
    'dp-input-suffix',
    { 'is-clearable': clearable.value },
    { 'is-show-count': showCount.value }
  ];
});

const wrapperClasses = computed(() => {
  const { dark, disabled } = toRefs(props);
  return [
    'dp-input-wrapper',
    { 'is-error': !validate.code },
    { 'is-dark': dark.value },
    { 'is-disabled': disabled.value }
  ];
});

const containerStyle = computed(() => {
  return [
    isFocus.value && { 'border-color': '#ffdd00' },
    isFocus.value && !validate.code && { 'border-color': '#ff3a2e' }
  ];
});

const innerStyle = computed(() => {
  const { prefixIcon, suffixIcon, clearable, showCount } = toRefs(props);
  return [
    (slots.prefix || prefixIcon.value) && { 'padding-left': '4px' },
    (suffixIcon.value || clearable.value || showCount.value) && {
      'padding-right': '12px'
    }
  ];
});

const handleError = () => {
  const { code, message } = props.onValidate();
  console.log(code, message);
  validate.code = code;
  validate.message = message || '';
};

const handleInput = event => {
  emit('update:modelValue', event.target.value);
  emit('input', event.target.value);
  if (validate.trigger === 'input') {
    handleError();
  }
};

const handleFocus = event => {
  isBlur.value = false;
  isFocus.value = true;
  emit('focus', event.target.value);
};

const handleBlur = event => {
  isBlur.value = true;
  isFocus.value = false;
  emit('blur', event.target.value);
  if (validate.trigger === 'blur') {
    handleError();
  }
};

const handleChange = event => {
  emit('change', event.target.value);
};

const handleClear = () => {
  if (props.disabled) return;
  emit('update:modelValue', '');
  emit('change', '');
  emit('clear');
  emit('input', '');
};

defineExpose({
  handleError
});
</script>
