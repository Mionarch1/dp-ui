<template>
  <div class="dp-input" @click="onFocus">
    <slot name="prefix" class="dp-input-prefix"></slot>
    <input
      :value="value"
      :maxlength="maxLength"
      v-on="inputListeners"
      :class="['dp-input-inner', clear ? 'clear' : '']"
      :placeholder="hint"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />
    <div class="dp-input-after">
      <p class="after-count" v-if="showCount">
        {{ props.value?.length }}/{{ max }}
      </p>
      <dp-icon :name="icon" type="normal" size="12px" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  showCount: { type: Boolean, default: false },
  maxLength: { type: Number, default: 99999999 },
  value: { type: [String, Number], default: '' },
  clear: { type: Boolean, default: false },
  hint: { type: String, default: '' },
  type: { type: String, default: 'text' },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  icon: { type: String, default: '' }
});

const emit = defineEmits([
  'input',
  'clear',
  'focus',
  'change',
  'update:value',
  'blur',
  'keyup',
  'keydown'
]);

const onFocus = e => {
  emit('focus', e);
};

const onBlur = e => {
  emit('blur', e);
};

const inputListeners = computed(() => {
  return {
    change: e => emit('change', e.target.value),
    focus: e => emit('focus', e),
    input: e => {
      emit('input', e.target.value);
    }
  };
});

const onClear = () => {
  emit('input', '');
  emit('clear');
};
</script>
<style lang="scss" scoped>
.openPicker {
  .dp-input-after {
    transform: rotate(180deg);
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;

  }
}
.dp-input {
  width: 264px;
  line-height: 48px;
  display: inline-flex;
  padding: 0 15px;
  border-radius: 8px;
  font-family: 'Plus Jakarta Sans';
  border: 1px solid #c6c6c6;
  &:hover {
    border-color: #959595;
  }

  input {
    border: none;
  }
  &-inner {
    font-size: inherit;
    height: 48px;
    line-height: 48px;
    outline: none;
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 400;
    color: #333;
  }
  .dp-input-after {
    display: flex;
    align-items: center;
  }
}
</style>
