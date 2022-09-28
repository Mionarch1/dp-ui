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
            { 'is-header': props.showHeader },
            { 'is-dark': props.dark }
          ]"
          :style="props.innerStyle"
        >
          <header class="dp-dialog-header" v-if="props.showHeader">
            <div
              v-if="props.closeType == 'close'"
              class="dp-dialog-header-close"
            >
              <dp-icon
                name="dpui-line-x"
                type="normal"
                @click="handleToggle(false)"
                size="16px"
              />
            </div>
            <div v-else class="dp-dialog-header-back">
              <dp-icon
                name="dpui-line-chevron-left"
                type="normal"
                @click="handleToggle(false)"
                size="16px"
              />
            </div>
            <span v-if="title">{{ title }}</span>
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
  innerStyle: { type: Object, default: () => {} },
  dark: { type: Boolean, default: false },
  closeType: { type: String, default: 'close' } // back | close
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
