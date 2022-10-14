<template>
  <div class="aaa">xxxx</div>
</template>

<script lang="ts" setup>
import { useAttrs } from "vue";

defineProps(["aaa"]);
const attrs = useAttrs();
console.log(attrs);
</script>
