<template>
  <div class="tab-group">
    <!-- tabRef 这块本来是用来实现下划线动态切换特效的，暂时没有写效果 -->
    <div ref="barRef" class="tab-bar" :style="{ width: widthRef + 'px' }"></div>
    <div ref="titsRef" class="tab-header" layout="row" layout-wrap>
      <div
        ref="titRef"
        :class="[{ active: activeKey == item.props.actKey }, 'tab-nav']"
        v-for="(item, index) in tabTitLists"
        :key="item"
        @click="onTabClick($event, item, index)"
      >
        {{ item.props.label }}
      </div>
    </div>
    <div class="tab-panel">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, provide } from 'vue';
const props = defineProps({
  defaultKey: { type: String, default: '1' }
});
setup(props, context) {
  const tabTitLists = context.slots.default();
  let activeKey = ref(props.defaultKey); //当前key
  provide('activeKey', activeKey);

  const barRef = ref(null);
  const titRef = ref(null);
  let widthRef = ref();
  onMounted(() => {
    // 设置状态线初始化宽度
    widthRef.value = titRef.value.clientWidth;
  });
  function onTabClick (event, tab, index) {
    activeKey.value = tab.props.actKey;
  }

}
</script>
