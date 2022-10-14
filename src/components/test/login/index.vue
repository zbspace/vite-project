<template>
  <div class="login-comp">
    {{ userName }}
    {{ obj.title }}
    {{ double }}
    {{ props.bar }}
    {{ getValue }}
    {{ getValueFn() }}
    {{ getValueFn() }}
  </div>
  <div>
    <input type="text" ref="el" v-model="shallowObj.count" />
    <button @click="change">change</button>
  </div>

  <div :class="{ active: isActive }"></div>
  <div>{{ getArray }}</div>
  <div>{{ arr }}</div>
  <div>{{ arr1 }}</div>

  <!-- 组件 -->
  <div>{{ title }}</div>
  <button @click="onClick">click</button>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped></style>
