import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
// options api
// export const useStore = defineStore('counter', {
//   state: () => ({ count: 0, name: 'Eduardo', isCollapse: 'el-icon-s-fold' }),
//   getters: {
//     doubleCount: (state) => state.count * 2
//   },
//   actions: {
//     increment () {
//       this.count++
//     }
//   }
// })

export const collapseStore = defineStore('collapse', () => {
  const isCollapse = ref<boolean>(false)
  function changeCollapse (): void {
    isCollapse.value = !isCollapse.value
  }
  return { isCollapse, changeCollapse }
})

// composition api
export const store = defineStore('user', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment (): void {
    count.value++
  }
  return { count, name, doubleCount, increment }
})
