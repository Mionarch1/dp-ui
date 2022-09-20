<template>
  <button @click="handleClick" :class="classes">
    <dp-icon
      v-if="(!icon && prefixIcon) || loading"
      :name="prefixIcon"
      :style="prefixStyles"
    />
    <slot v-if="!icon" />
    <dp-icon v-else :name="icon" />
    <dp-icon
      v-if="(!icon && suffixIcon) || loading"
      :name="suffixIcon"
      :style="suffixStyles"
    />
  </button>
</template>

<script setup>
import { computed, toRefs } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: type => {
      return ['default', 'primary', 'danger', 'link'].includes(type);
    }
  },
  size: {
    type: String,
    default: 'large',
    validator: size => {
      return ['small', 'middle', 'large'].includes(size);
    }
  },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  dark: { type: Boolean, default: false },
  icon: { type: String, default: '' },
  prefixIcon: { type: String, default: '' },
  suffixIcon: { type: String, default: '' }
});

const emit = defineEmits(['click']);

const classes = computed(() => {
  const { type, size, disabled, loading, icon, dark } = toRefs(props);
  return [
    'dp-btn',
    `is-${type.value}`,
    `is-${size.value}`,
    { 'is-dark': dark.value },
    { 'is-icon': icon.value },
    { 'is-disabled': disabled.value },
    { 'is-loading': loading.value }
  ];
});

const prefixStyles = computed(() => {
  const { prefixIcon } = toRefs(props);
  return prefixIcon.value
    ? {
        'margin-right': '4px',
        'font-size': '20px'
      }
    : {};
});
const suffixStyles = computed(() => {
  const { suffixIcon } = toRefs(props);
  return suffixIcon.value
    ? {
        'margin-left': '4px',
        'font-size': '20px'
      }
    : {};
});

const handleClick = event => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  emit('click', event);
};
</script>
