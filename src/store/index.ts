import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
// options api
export const useStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment () {
      this.count++
    }
  }
})

// composition api
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment (): void {
    count.value++
  }
  return { count, name, doubleCount, increment }
})
