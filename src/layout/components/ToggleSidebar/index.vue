<template>
  <i
    class="iconfont"
    :class="collapseIcon"
    @click="handleCollapse"
  />
</template>

<script lang="ts" setup>
import { collapseStore } from '@/store'
import { computed } from 'vue'
const store = collapseStore()

const collapseIcon = computed(() => {
  return !store.isCollapse ? 'icon-daoru' : 'icon-daochu'
})

const handleCollapse = () => {
  store.changeCollapse()
}
</script>

<style lang="scss" scoped></style>
