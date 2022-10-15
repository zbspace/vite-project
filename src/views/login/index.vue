<template>
  <div class="" />
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import { ILoginInfo } from '@/api/types/common'
import { onMounted, ref } from 'vue'
const list = ref < ILoginInfo['slide'] > ([])

onMounted(async () => {
  const res = await getLoginInfo()
  list.value = res.slide
  console.log(res)
})

</script>

<style lang="scss" scoped>
</style>
