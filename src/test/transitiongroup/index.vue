<template>
  <!-- <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </TransitionGroup> -->
  <p>23</p>
</template>

<script lang="ts" setup>
const title = "transitiongroup";
const items = [1, 2, 3, 4, 5, 6, 7];
</script>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
