<template>
  <div class="">
    {{ piniaStore.name }}
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../../store'
const piniaStore = useCounterStore()

</script>

<style lang="scss" scoped></style>
