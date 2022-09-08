<template>
  <transition>
    <div v-show="visible" :class="['dp-alert', alertType]" role="alert">
      <el-icon v-if="showIcon && iconComponent" :class="iconClass">
        <component :is="iconComponent" />
      </el-icon>

      <div class="dp-alert-content">
        <span
          v-if="title || $slots.title"
          :class="['dp-alert-title', isBoldTitle]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default || description" class="dp-alert-description">
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div
            v-if="closeText"
            :class="['dp-alert-close-btn', 'dp-alert-customed']"
            @click="close"
          >
            {{ closeText }}
          </div>
          <el-icon v-else class="dp-alert-close-btn" @click="close">
            <Close />
          </el-icon>
        </template>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { computed, ref, useSlots } from 'vue';
const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  type: { type: String, default: 'info' },
  closable: { type: Boolean, default: true },
  closeText: { type: String, default: '' },
  showIcon: Boolean,
  center: Boolean,
  effect: { type: String, default: 'light' }
});

const visible = ref(true);

const alertType = computed(() => {
  const iconMap = new Map([
    ['success', 'dp-alert-success'],
    ['warning', 'dp-alert-warning'],
    ['info', 'dp-alert-info'],
    ['error', 'dp-alert-error']
  ]);
  return iconMap.get(props.type);
});

const close = () => {
  visible.value = false;
};
</script>
