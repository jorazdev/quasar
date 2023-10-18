import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)
  
  const increment = () => {
    count.value++
  }

  const setCount = (ct: number) => {
    count.value = ct
  }

  return { count, doubleCount, increment, setCount }
})
