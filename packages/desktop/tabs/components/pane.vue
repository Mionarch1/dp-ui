<template>
  <div v-show="show">
    <slot></slot>
  </div>
</template>
<script setup>
import { ref, inject, computed, onMounted } from 'vue';
const props = defineProps({
  name: {
    type: String
  },
  label: {
    type: String,
    default: ''
  }
});
const activeKey = inject('activeKey');

const show = computed(() => {
  return props.label == activeKey.value;
});

onMounted(() => {
  console.log(111, props.label, props.name, activeKey.value);
});
defineExpose({
  name: 'TabPane'
})
// watch( props.label,()=>{

// } )
//   label() {
//     console.log(111,this.props.label,this.props)
//     this.TabsInstance.initTabs()
//   },
//   name() {
//     this.TabsInstance.initTabs()
//   }
</script>
