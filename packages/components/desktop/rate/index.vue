<template>
  <div class="container">
    <span
      @click="selectValue(item)"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
      class="star-container"
      v-for="(item, key) in max"
      :key="key"
    >
      <dp-icon
        :class="[{ 'is-active': activeValue >= item || mouseActive >= item }]"
        name="dpui-line-star"
        type="normal"
      />
    </span>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const activeValue = ref(0);
const mouseActive = ref(0);
const rateClasses = computed(() => {
  return [];
});
const props = defineProps({
  max: { type: Number, default: 5 }
});
const emit = defineEmits(['change']);
const selectValue = value => {
  activeValue.value = value;
  emit('change', activeValue.value);
};
const setCurrentValue = (value, event) => {
  mouseActive.value = value;
  emit('change', mouseActive.value);
};
const resetCurrentValue = () => {
  mouseActive.value = 0;
};

defineExpose({
  setCurrentValue,
  resetCurrentValue
});
</script>
