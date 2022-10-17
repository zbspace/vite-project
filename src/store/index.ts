import { IUserInfo } from '@/api/types/common'
import { USER } from '@/utils/constants'
import { getItem, setItem } from '@/utils/storage'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const collapseStore = defineStore('collapse', () => {
  const isCollapse = ref<boolean>(false)
  function changeCollapse (): void {
    isCollapse.value = !isCollapse.value
  }
  return { isCollapse, changeCollapse }
})

export const useStore = defineStore('user', {
  state: () => ({
    userInfo: getItem(USER) as IUserInfo | null
  }),
  actions: {
    setUserInfo (userInfo : IUserInfo | null) {
      this.userInfo = userInfo
      setItem(USER, userInfo)
    }
  }
})
