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
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />

      <span :class="suffixClasses" v-if="isSuffix">
        <dp-icon
          v-if="clearable"
          name="dpui-fill-clear"
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
import useInput from './use-input';

const props = defineProps({
  showCount: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
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
    default: 'blur',
    validator: trigger => {
      return ['blur', 'input'].includes(trigger);
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

const {
  validate,
  isPrefix,
  isSuffix,
  suffixClasses,
  wrapperClasses,
  containerStyle,
  innerStyle,
  handleInput,
  handleFocus,
  handleChange,
  handleClear
} = useInput({ props, emit });
</script>
