<template>
  <div class="">Mouse position is at: {{ x }},{{ y }}</div>
</template>

<script lang="ts" setup>
import { useMouse } from "./mouse";
const { x, y } = useMouse();
</script>
