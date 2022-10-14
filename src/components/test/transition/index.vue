<template>
  <button @click="show = !show">Toggle</button>
  <Transition
    name="slide-fade"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @enter-cancelled="onEnterCancelled"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
    @leave-cancelled="onLeaveCancelled"
  >
    <p v-if="show">hello</p>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const show = ref<boolean>(false);
// 在元素被插入到 DOM 之前被调用
// 用这个来设置元素的 "enter-from" 状态
function onBeforeEnter(el) {
  console.log("onBeforeEnter");
}

// 在元素被插入到 DOM 之后的下一帧被调用
// 用这个来开始进入动画
function onEnter(el, done) {
  console.log("onEnter");
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  done();
}

// 当进入过渡完成时调用。
function onAfterEnter(el) {
  console.log("onAfterEnter");
}
function onEnterCancelled(el) {
  console.log("onEnterCancelled");
}

// 在 leave 钩子之前调用
// 大多数时候，你应该只会用到 leave 钩子
function onBeforeLeave(el) {
  console.log("onBeforeLeave");
}

// 在离开过渡开始时调用
// 用这个来开始离开动画
function onLeave(el, done) {
  console.log("onLeave");
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  done();
}

// 在离开过渡完成、
// 且元素已从 DOM 中移除时调用
function onAfterLeave(el) {
  console.log("onAfterLeave");
}

// 仅在 v-show 过渡中可用
function onLeaveCancelled(el) {
  console.log("onLeaveCancelled");
}
</script>
<style>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
