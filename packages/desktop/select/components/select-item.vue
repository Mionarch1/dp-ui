<template>
  <li
    class="dp-select-item"
    :class="{ active: active }"
    @click="chooseSelectItem"
  >
    <slot v-if="$slots.label"></slot>
  </li>
</template>

<script setup>
import Bus from './selectBus';
import { ref, getCurrentInstance, inject, onDeactivated } from 'vue';
const props = defineProps({
  selected: { type: String, default: '' },
  value: { type: String, default: '' }
});
const page = getCurrentInstance();

const active = ref(false);

// 接收token
const token = inject('token');
page.token = token;
Bus.$on('chooseActive', res => {
  if (res.token !== page.token) return;
  if (res.value == props.value) active.value = true;
  else active.value = false;
});

// 选择下拉
const chooseSelectItem = () => {
  Bus.$emit('chooseSelectItem', { token: token, value: props.value });
};

onDeactivated(() => {
  Bus.$off('chooseActive');
});
</script>
