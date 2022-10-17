<template>
  <div class="">
    <h4>首页</h4>
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
const title = import.meta.env.VITE_APP_TITLE
</script>

<style lang="scss" scoped>
h4 {
  color: $color;
}
</style>
