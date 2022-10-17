<template>
  <el-icon>
    <Fold
      @click="handleCollapse"
      v-show="!store.isCollapse"
    />
  </el-icon>
  <el-icon
    @click="handleCollapse"
    v-show="store.isCollapse"
  >
    <Expand />
  </el-icon>
</template>

<script lang="ts" setup>
import { collapseStore } from '@/store'
const store = collapseStore()

const handleCollapse = () => {
  store.changeCollapse()
}
</script>

<style lang="scss" scoped></style>
