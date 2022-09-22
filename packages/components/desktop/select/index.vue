<template>
  <!-- 下拉框 -->
  <div class="dp-select">
    <div
      ref="select_button"
      class="dp-select-button"
      @click="selectOpen = !selectOpen"
    >
      <!-- 选中内容 -->
      <span>{{ selctValue }}</span>
      <div class="select-icon" :class="{ selectOpen: selectOpen }">
        <dp-icon name="dpui-line-chevron-down" type="line" size="12px" />
      </div>
    </div>
    <!-- 下拉框 -->
    <teleport to="body">
      <transition name="select">
        <div
          ref="select_dropdown"
          v-show="selectOpen"
          :style="dropdownStyle"
          class="dp-select-dropdown"
        >
          <ul>
            <slot name="selectDropDown"></slot>
          </ul>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { tokenFun } from './components/token';
import Bus from './components/selectBus';
import {
  ref,
  onMounted,
  computed,
  watch,
  onDeactivated,
  provide,
  getCurrentInstance,
  useSlots
} from 'vue';

const props = defineProps({
  selected: { type: String, default: '' }
});
const page = getCurrentInstance();
const slots = useSlots();

// 获取按钮
const select_button = ref(null);
const select_dropdown = ref(null);

// 打开状态
const selectOpen = ref(false);

// 选中内容
const selctValue = ref('');

// 下拉框位置
const dropdownPosition = ref({ x: 0, y: 0, w: 0 });

// 下拉框位置
const dropdownStyle = computed(() => {
  return {
    left: `${dropdownPosition.value.x}px`,
    top: `${dropdownPosition.value.y}px`,
    width: `${dropdownPosition.value.w}px`
  };
});

watch(selectOpen, val => {
  if (val)
    // 计算位置
    calculateLocation();
});

// watch(selctValue, () => {
// setupContext.emit('update:modelValue', selctValue.value);
// });

// 计算位置
const calculateLocation = () => {
  var select_button_dom = select_button.value.getBoundingClientRect();
  dropdownPosition.value.w = select_button_dom.width;
  dropdownPosition.value.x = select_button_dom.left;
  dropdownPosition.value.y =
    select_button_dom.top + select_button_dom.height + 5;
};

window.addEventListener('click', event => {
  if (
    !select_button.value.contains(event.target) &&
    !select_dropdown.value.contains(event.target)
  ) {
    selectOpen.value = false;
  }
});
window.addEventListener('touchstart', event => {
  if (
    !select_button.value.contains(event.target) &&
    !select_dropdown.value.contains(event.target)
  ) {
    selectOpen.value = false;
  }
});

window.addEventListener(
  'resize',
  () => {
    // 计算面板位置
    calculateLocation();
  },
  true
);
window.addEventListener(
  'scroll',
  () => {
    // 计算面板位置
    calculateLocation();
  },
  true
);

onDeactivated(() => {
  window.removeEventListener('resize');
  window.removeEventListener('scroll');
  window.removeEventListener('click');
  window.removeEventListener('touchstart');
  Bus.$off('chooseSelectItem');
});

var token = 'select-' + tokenFun();
// 获取生成的token
page.token = token;
// 给子元素派发token
provide('token', token);

onMounted(() => {
  Bus.$on('chooseSelectItem', res => {
    if (res.token === page.token) {
      selctValue.value = res.value;
      selectOpen.value = false;
      Bus.$emit('chooseActive', { token: token, value: selctValue.value });
    }
  });
  if (props.selected) {
    selctValue.value = props.selected;
    Bus.$emit('chooseActive', { token: token, value: selctValue.value });
  } else {
    selctValue.value = slots.selectDropDown()[0].props.value;
    Bus.$emit('chooseActive', { token: token, value: selctValue.value });
  }
});
</script>
