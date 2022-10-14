<template>
  <div class="">
    <input type="text" v-focus />
    <input v-color="{ color: 'red', text: 'zb' }" />
  </div>
</template>

<script lang="ts" setup>
const vFocus = {
  mounted: (el: any) => el.focus(),
};
</script>
