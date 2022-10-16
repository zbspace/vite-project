<template>
  <div class="">
    <h4>首页</h4>
    {{ userStore.name }}
    {{ title }}
    <el-button
      type="primary"
      size="default"
    >
      123
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { store } from '../../store'
const userStore = store()
const title = import.meta.env.VITE_APP_TITLE
</script>

<style lang="scss" scoped>
h4 {
  color: $color;
}
</style>
