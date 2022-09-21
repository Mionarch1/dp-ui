/**
 * clickOutside
 * 点击某元素外部事件指令
 */
 const clickOutside = {
    // 初始化事件
    beforeMount(el, binding, vnode) {
      function handleClick(e) {
        // 如果为元素本身，则返回
        if (el.contains(e.target) || e.target.className.includes(binding.arg)) {
          return false;
        }
        // 如果绑定了函数，则返回执行
        binding.value(e);
      }
      el.__vueClickOutside__ = handleClick;
      document.addEventListener('click', handleClick);
    },
    // 解除事件监听
    unmounted(el, binding) {
      document.removeEventListener('click', el.__vueClickOutside__);
      delete el.__vueClickOutside__;
    }
  };
  module.exports = {
    clickOutside
  }