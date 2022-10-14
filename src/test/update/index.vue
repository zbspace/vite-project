<template>
  <div class="">{{ count }}</div>
  <div class="">{{ name }}</div>
</template>

<script lang="ts" setup>
import { onUpdated } from "vue";
export interface IProps {
  name?: string;
  count?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  name: "zb",
  count: 99,
});
onUpdated(() => {
  console.log("onUpdated");
});
</script>
