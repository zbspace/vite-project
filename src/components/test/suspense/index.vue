<template>
  <div class="">{{ str }}</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const str = ref<string>("");
function getInfo(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("zbbbbbb");
    }, 3000);
  });
}
str.value = await getInfo();
</script>

<style lang="scss" scoped></style>
