import { onMounted,onUnmounted,ref } from 'vue';
import{ throttle } from 'underscore'

export default function useScroll() {
  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const scorllHeight = ref(0)
  const clientHeight = ref(0)
  const scrollListenerHandle = throttle(() => {
      scrollTop.value = document.documentElement.scrollTop
      scorllHeight.value = document.documentElement.scrollHeight
      clientHeight.value = document.documentElement.clientHeight
      if(scorllHeight.value <= scrollTop.value + clientHeight.value) {
        isReachBottom.value = true
      }
    }, 100)
  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandle)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandle)
  })
  return { isReachBottom, scrollTop, scorllHeight, clientHeight}
}