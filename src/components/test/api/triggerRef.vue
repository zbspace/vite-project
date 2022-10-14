<template>
  <div class=""></div>
</template>

<script lang="ts" setup>
import { shallowRef, watchEffect, triggerRef } from "vue";

const shallow = shallowRef({
  greet: "Hello, world",
});

// 触发该副作用第一次应该会打印 "Hello, world"
watchEffect(() => {
  console.log(shallow.value.greet);
});

// 这次变更不应触发副作用，因为这个 ref 是浅层的
shallow.value.greet = "Hello, universe";

// 打印 "Hello, universe"
triggerRef(shallow);
</script>

<style lang="scss" scoped></style>
