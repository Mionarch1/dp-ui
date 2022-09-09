<template>
  <div class="tabs">
    <div ref="navWrap" class="tabs-nav-wrap" :class="[scrollable ? 'tabs-nav-scrollable' : '']">
      <span class="tabs-nav-prev" :class="[scrollable ? '' : 'tabs-nav-scroll-disabled']" @click="scrollPrev">
        &lt;
      </span>
      <span class="tabs-nav-next" :class="[scrollable ? '' : 'tabs-nav-scroll-disabled']" @click="scrollNext">
        &gt;
      </span>
      <div ref="navScroll" class="tabs-nav-scroll">
        <div ref="nav" class="tabs-nav" :style="navStyle">
          <div class="tabs-inv-bar" :style="barStyle"></div>
          <div class="tabs-tab" v-for="(item, index) in navList" :key="index" @click="handleChange(index)">
            {{ item.label }}
            <slot v-if="$slots.label"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="pane-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import {
  ref,
  reactive,
  provide,
  computed,
  watch,
  onMounted,
  nextTick,
  useSlots
} from 'vue';
const props = defineProps({
  value: {
    type: [String, Number]
  }
});
const slots = useSlots();
const navList = ref([]);
const tabElement = ref([]);
const activeKey = ref('');
const barWidth = ref(0);
const barOffset = ref(0);
const scrollable = ref(true);
const navWrap = ref(null);
const navScroll = ref(null);
const nav = ref(null);
const navStyle = reactive({
  transform: ''
});
const barStyle = computed(() => {
  return {
    width: `${barWidth.value}px`,
    transform: `translate3d(${barOffset.value}px,0px,0px)`
  };
});

const getTabs = () => {
  const tabElement = slots.default();
  tabElement.forEach((pane, index) => {
    navList.value.push({
      label: pane?.props?.label || '',
      name: pane.props?.name || index
    });
    if (index === 0 && !activeKey.value) {
      activeKey.value = pane?.props?.label;
    }
  });
};
const initTabs = () => {
  getTabs();
  updateStatus();
  updataBar();
};
const updataBar = () => {
  nextTick(() => {
    const index = navList.value.findIndex(nav => nav.label === activeKey.value);
    const elemTabs = navWrap.value.querySelectorAll('.tabs-tab');
    const elemTab = elemTabs[index];
    barWidth.value = elemTab ? elemTab.offsetWidth : 0;
    if (index > 0) {
      let offset = 0;
      for (let i = 0; i < index; i++) {
        offset += elemTabs[i].offsetWidth + 16;
      }
      barOffset.value = offset;
    } else {
      barOffset.value = 0;
    }
  });
};
const updateStatus = () => {
  navList.value.forEach(tab => (tab.show = tab.label === activeKey.value));
};
const handleChange = index => {
  const nav = navList.value[index];
  activeKey.value = nav.label;
  updataBar();
};
const handleResize = () => {
  const navWidth = nav.value.offsetWidth;
  const scrollWidth = navScroll.value.offsetWidth;
  if (scrollWidth < navWidth) {
    scrollable.value = true;
  } else {
    scrollable.value = false;
  }
  updateMove();
};
const updateMove = () => {
  const navWidth = nav.value.offsetWidth;
  const scrollWidth = navScroll.value.offsetWidth;
  const currentOffset = getCurrentScrollOffset();
  if (scrollWidth < navWidth) {
    if (navWidth - currentOffset < scrollWidth) {
      navStyle.transform = `translateX(-${navWidth - scrollWidth}px)`;
    }
  } else {
    if (currentOffset > 0) {
      navStyle.transform = `translateX(-${0}px)`;
    }
  }
};
const getCurrentScrollOffset = () => {
  const reg = /translateX\(-(\d+(\.\d+)*)px\)/;
  return navStyle.transform ? Number(navStyle.transform.match(reg)[1]) : 0;
};
const setOffset = value => {
  navStyle.transform = `translateX(-${value}px)`;
};
const scrollPrev = () => {
  const containerWidth = navScroll.value.offsetWidth;
  const currentOffset = getCurrentScrollOffset();
  if (!currentOffset) return;
  let newOffset = 0;
  if (currentOffset > containerWidth) {
    newOffset = currentOffset - containerWidth;
  }
  navStyle.transform = `translateX(-${newOffset}px)`;
};
const scrollNext = () => {
  const navWidth = nav.value.offsetWidth;
  const containerWidth = navScroll.value.offsetWidth;
  const currentOffset = getCurrentScrollOffset();
  if (navWidth - currentOffset <= containerWidth) return;
  let newOffset = null;
  if (navWidth - currentOffset > containerWidth * 2) {
    newOffset = currentOffset + containerWidth;
  } else {
    newOffset = navWidth - containerWidth;
  }
  navStyle.transform = `translateX(-${newOffset}px)`;
};

watch(activeKey.value, () => {
  updateStatus();
  updataBar();
});
onMounted(() => {
  initTabs();
  // this.observer = elementResizeDetectorMaker()
  // this.observer.listenTo(this.$refs.navWrap, this.handleResize)
});
provide('activeKey', activeKey);
// onBeforeUnmount() {
//   this.observer.removeListener(this.$refs.navWrap, this.handleResize)
// }
</script>
