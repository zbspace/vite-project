<template>
  <div class="">
    <h4>首页</h4>
    {{ piniaStore.name }}
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../../store'
const piniaStore = useCounterStore()
</script>

<style lang="scss" scoped>
h4 {
  color: $color;
}
</style>
