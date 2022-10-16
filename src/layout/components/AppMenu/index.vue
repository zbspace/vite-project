<template>
  <el-menu
    :collapse="store.isCollapse"
    :unique-opened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    router
  >
    <!-- 首页 -->
    <el-menu-item index="/">
      <el-icon><location /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <!-- 商品 -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <el-icon><location /></el-icon>
        <span>商品列表</span>
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        <el-icon><location /></el-icon>
        <span>商品分类</span>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <el-icon><location /></el-icon>
        <span>商品规格</span>
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        <el-icon><location /></el-icon>
        <span>商品评论</span>
      </el-menu-item>
    </el-sub-menu>
    <!-- 订单 -->
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/product/product_list">
        <el-icon><location /></el-icon>
        <span>商品列表</span>
      </el-menu-item>
    </el-sub-menu>
    <!-- 营销 -->
    <el-sub-menu index="3">
      <template #title>
        <el-icon><location /></el-icon>
        <span>营销</span>
      </template>
      <el-menu-item index="/product/product_list">
        <el-icon><location /></el-icon>
        <span>商品列表</span>
      </el-menu-item>
    </el-sub-menu>
    <!-- 设置 -->
    <el-sub-menu index="4">
      <template #title>
        <el-icon><location /></el-icon>
        <span>设置</span>
      </template>
      <el-menu-item index="/permission/role">
        <el-icon><location /></el-icon>
        <template #title>
          1
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/admin">
        <el-icon><location /></el-icon>
        <template #title>
          2
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        <el-icon><location /></el-icon>
        <template #title>
          3
        </template>
      </el-menu-item>
    </el-sub-menu>
    <!-- 权限 -->
    <el-sub-menu index="5">
      <template #title>
        <el-icon><location /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/role">
        <el-icon><location /></el-icon>
        <template #title>
          1
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/admin">
        <el-icon><location /></el-icon>
        <template #title>
          2
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        <el-icon><location /></el-icon>
        <template #title>
          3
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Location
} from '@element-plus/icons-vue'
import { collapseStore } from '@/store'
const store = collapseStore()
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width:200px;
  height:400px
}
</style>
