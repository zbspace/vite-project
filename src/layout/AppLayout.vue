<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppMenu from './components/AppMenu/index.vue'
import AppHeader from './components/AppHeader/index.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-header {
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  background-color: #304156;
  color: #333;
  width: auto;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}

</style>
