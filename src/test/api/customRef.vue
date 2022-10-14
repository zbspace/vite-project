<template>
  <div>
    <input v-model="text" />
    <p :class="$style.red">{{ text }}</p>
    <p :class="$style.red">{{ text }}</p>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { useDebouncedRef } from "../hooks/use-custom";
const text = useDebouncedRef("hello");
const a = 1;
</script>

<style module>
.red {
  color: red;
}
</style>
