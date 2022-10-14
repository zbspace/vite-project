<template>
  <input
    :value="modelValue1"
    @input="$emit('update:modelValue1', $event.target.value)"
  />
  <input
    :value="modelValue2"
    @input="$emit('update:modelValue2', $event.target.value)"
  />
</template>

<script lang="ts" setup>
defineEmits(["update:modelValue1", "update:modelValue2"]);
defineProps(["modelValue1", "modelValue2"]);
</script>
