<template>
  <div>
    <slot name="aaa">aaa</slot>
    <p>1</p>
    <slot name="bbb" :text="greetingMessage">bbb</slot>
    <p>2</p>
    <slot name="ccc">ccc</slot>
    <p>3</p>
    <p>{{ message1 }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from "vue";
const greetingMessage = ref<string>("zb");
const message1 = inject("message1");
</script>
