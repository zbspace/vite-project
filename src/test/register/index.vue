<template>
  <div class="">
    注册comp
    <p>{{ props.foo }}</p>
  </div>
  <div>
    <button @click="$emit('onEmit', 123)">emit</button>
    <button @click="onClick">submit</button>
    <input type="text" />
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["submit"]);
const props = defineProps({
  foo: String,
  bar: {
    type: String,
    required: true,
  },
  name: {
    validator(value: string) {
      // The value must match one of these strings
      return ["success", "warning", "danger"].includes(value);
    },
  },
  modelValue: String,
});
function onClick() {
  emit("submit", "submit");
}
</script>
