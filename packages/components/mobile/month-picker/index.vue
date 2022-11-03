<template>
  <div class="dpm-month-picker" v-click-outside="onClose">
    <dp-input
      readonly
      @focus="onOpen"
      :value="incomingTime"
      :class="[{ openPicker: state.visible }]"
      :icon="icon"
    ></dp-input>
    <transition name="option-slide">
      <div class="dp-picker-inner" v-if="state.visible" @click="handleClick">
        <div class="dp-picker-box">
          <div class="dp-pick-close">
            <dp-icon
              @click="onClose"
              style="width: 16px; height: 16px"
              name="dpui-line-x"
              type="normal"
            />
          </div>
          <div class="dp-picker-select">
            <div class="picker-select-left">
              <dp-icon
                @click="onYearChange('reduce')"
                name="dpui-line-chevron-left"
                type="normal"
              />
            </div>
            <div class="picker-select-middle">
              <p class="picker-select-year">{{ state.year }}</p>
            </div>
            <div class="picker-select-right">
              <dp-icon
                @click="onYearChange('add')"
                name="dpui-line-chevron-right"
                type="normal"
              />
            </div>
          </div>
          <div class="dp-picker-content">
            <div
              class="month"
              v-for="month in state.months"
              :key="`month-${month.as}`"
              @click="selectMonth(month.as)"
            >
              <div
                :class="[
                  'block',
                  { 'block-active': month.as == incomingTime.split(' ')[0] }
                ]"
              >
                {{ month.as }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import DpInput from './input.vue';
import { clickOutside } from '@packages/utils/util';
import { ref, reactive, computed, toRefs } from 'vue';

const vClickOutside = clickOutside;

const emit = defineEmits(['update:modelValue', 'change']);
const props = defineProps({
  modelValue: { type: String, default: '' },
  format: { type: String, default: 'MMM YYYY' },
  icon: { type: String, default: 'dpui-line-chevron-down' }
});

const incomingTime = computed(() => {
  if (dayjs(props.modelValue).format('MMM YYYY') == 'Invalid Date') {
    return dayjs(new Date()).format('MMM YYYY');
  } else {
    return dayjs(props.modelValue).format('MMM YYYY');
  }
});
const state = reactive({
  visible: false,
  year: 2001,
  month: 1,
  day: 1,
  toYear: 2001,
  toMonth: 1,
  today: 1,
  prevMonth: [],
  nextMonth: [],
  months: [
    { en: 'January', as: 'Jan', num: 1 },
    { en: 'February', as: 'Feb', num: 2 },
    { en: 'March', as: 'Mar', num: 3 },
    { en: 'April', as: 'Apr', num: 4 },
    { en: 'May', as: 'May', num: 5 },
    { en: 'June', as: 'Jun', num: 6 },
    { en: 'July', as: 'Jul', num: 7 },
    { en: 'August', as: 'Aug', num: 8 },
    { en: 'September', as: 'Sep', num: 9 },
    { en: 'October', as: 'Oct', num: 10 },
    { en: 'November', as: 'Nov', num: 11 },
    { en: 'December', as: 'Dec', num: 12 }
  ]
});

const isActive = month => {
  const { modelValue = '' } = props;
  if (!modelValue) return;
  const val = modelValue.split('-');
  return true;
};

// 显示日期盒子并初始化
const onOpen = () => {
  let date = new Date();
  state.toYear = date.getFullYear();
  state.toMonth = date.getMonth() + 1;
  if (!props.modelValue) {
    state.year = date.getFullYear();
    state.month = date.getMonth() + 1;
  } else {
    const { modelValue } = props;
    const val = modelValue.split(' ');
    state.month = val[0];
    state.year = val[1];
  }
  state.visible = true;
};

const onClose = () => {
  state.visible = false;
};

const handleClick = e => {
  if(e.target.className === 'dp-picker-inner') {
    onClose()
  }
};

const onYearChange = (type = 'specify', year = '') => {
  const isSpecify = type === 'specify';
  if (!year && isSpecify) return;

  let y = state.year;
  if (type === 'specify') m = year;
  if (type === 'add') y++;
  if (type === 'reduce') y--;

  if (y < 1000 || y > 3000) y = 1000;

  return (state.year = y);
};

const selectMonth = month => {
  state.month = month;
  emit('update:modelValue', `${state.month} ${state.year}`);
  emit('change', `${state.month} ${state.year}`);

  state.visible = false;
};
</script>

