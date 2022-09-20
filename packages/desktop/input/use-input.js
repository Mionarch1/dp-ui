import { computed, toRefs, ref, reactive, useSlots } from 'vue';

export default ({ props, emit }) => {
  const slots = useSlots();
  const isBlur = ref(true);
  const isFocus = ref(false);
  const validate = reactive({
    trigger: props.validateTrigger || 'blur', // blur / input
    code: true,
    message: ''
  });

  const isPrefix = computed(() => {
    const { prefixIcon } = toRefs(props);
    return slots.prefix || prefixIcon;
  });

  const isSuffix = computed(() => {
    const { suffixIcon, clearable, showCount } = toRefs(props);
    return (
      slots.suffix || suffixIcon.value || clearable.value || showCount.value
    );
  });

  const suffixClasses = computed(() => {
    const { clearable, showCount } = toRefs(props);
    return [
      'dp-input-suffix',
      { 'is-clearable': clearable.value },
      { 'is-show-count': showCount.value }
    ];
  });

  const wrapperClasses = computed(() => {
    const { dark, disabled } = toRefs(props);
    return [
      'dp-input-wrapper',
      { 'is-error': !validate.code },
      { 'is-dark': dark.value },
      { 'is-disabled': disabled.value }
    ];
  });

  const containerStyle = computed(() => {
    return [
      isFocus.value && { 'border-color': '#ffdd00' },
      isFocus.value && !validate.code && { 'border-color': '#ff3a2e' }
    ];
  });

  const innerStyle = computed(() => {
    const { prefixIcon, suffixIcon, clearable, showCount } = toRefs(props);
    return [
      (slots.prefix || prefixIcon.value) && { 'padding-left': '4px' },
      (suffixIcon.value || clearable.value || showCount.value) && {
        'padding-right': '12px'
      }
    ];
  });

  const handleError = () => {
    const { code, message } = props.onValidate();
    validate.code = code;
    validate.message = message || '';
  };

  const handleInput = event => {
    emit('update:modelValue', event.target.value);
    emit('input', event.target.value);
    if (validate.trigger === 'input') {
      handleError();
    }
  };

  const handleFocus = event => {
    isBlur.value = false;
    isFocus.value = true;
    emit('focus', event.target.value);
  };

  const handleBlur = event => {
    isBlur.value = true;
    isFocus.value = false;
    emit('blur', event.target.value);
    if (validate.trigger === 'blur') {
      handleError();
    }
  };

  const handleChange = event => {
    emit('change', event.target.value);
  };

  const handleClear = () => {
    if (props.disabled) return;
    emit('update:modelValue', '');
    emit('change', '');
    emit('clear');
    emit('input', '');
  };

  return {
    slots,
    isBlur,
    isFocus,
    validate,
    isPrefix,
    isSuffix,
    suffixClasses,
    wrapperClasses,
    containerStyle,
    innerStyle,
    handleError,
    handleInput,
    handleFocus,
    handleChange,
    handleClear
  };
};
