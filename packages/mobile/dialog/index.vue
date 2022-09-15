<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="dialog-opacity"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <section
        class="dp-dialog-wrapper"
        v-show="props.modelValue"
        @click.self="handleWrapperClick()"
      >
        <section
          class="dp-dialog"
          :class="[
            `is-${props.theme}`,
            { 'is-fullscreen': props.fullscreen },
            { 'is-header': props.showHeader }
          ]"
          :style="props.innerStyle"
        >
          <header class="dp-dialog-header" v-if="props.showHeader">
            <div class="dp-dialog-header-item">
              <i
                v-if="props.closeType === 'back'"
                @click="handleToggle()"
                class="meta-iconfont meta-Back"
              ></i>
              <span v-if="title">{{ title }}</span>
            </div>
            <div
              class="dp-dialog-header-item is-close"
              v-if="props.closeType === 'close'"
            >
              <i></i>
              <i class="meta-iconfont meta-Close" @click="handleToggle()"></i>
            </div>
          </header>
          <section class="dp-dialog-body">
            <slot />
          </section>
          <footer v-if="$slots.footer" class="dp-dialog-footer">
            <slot name="footer" />
          </footer>
        </section>
      </section>
    </transition>
  </teleport>
</template>

<script setup>
const props = defineProps({
  appendToBody: { type: Boolean, default: false },
  modelValue: { type: Boolean, default: false },
  fullscreen: { type: Boolean, default: false },
  showHeader: { type: Boolean, default: true },
  overlayCloseable: { type: Boolean, default: false },
  title: { type: String, default: '' },
  theme: { type: String, default: 'white' }, // white | black
  closeType: { type: String, default: 'close' }, // close | back
  innerStyle: { type: Object, default: () => {} },
});

const emit = defineEmits([
  'update:modelValue',
  'onClose',
  'onClosed',
  'onOpen',
  'onOpened'
]);

const handleToggle = modalValue => {
  emit('update:modelValue', modalValue);
  emit(modalValue ? 'onOpen' : 'onClose');
};

const afterEnter = () => {
  emit('onOpened');
};
const afterLeave = () => {
  emit('onClosed');
};

const handleWrapperClick = () => {
  if (!props.overlayCloseable) return;
  handleToggle(false);
};
</script>
