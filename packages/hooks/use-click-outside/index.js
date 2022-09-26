import { ref, onMounted, onUnmounted } from 'vue'

export default (elementRef) => {
  const isClickOutside = ref(false)
  const handler = (event) => {
    if (elementRef.value) {
      isClickOutside.value = !elementRef.value.contains(event.target);
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside;
}