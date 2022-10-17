<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userInfo.userInfo?.account }}
      <i class="el-icon-arrow-down el-icon--right" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { logout } from '@/api/common'
import router from '@/router'
import { useStore } from '@/store'
import { ElMessage, ElMessageBox } from 'element-plus'
const userInfo = useStore()

const handleLogout = async () => {
// 退出提示
  ElMessageBox.confirm(
    '确认退出吗?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(async () => {
      // 发出退出请求
      await logout()
      // 清除数据
      userInfo.setUserInfo(null)
      // 跳转到登录页
      router.push({ name: 'login' })
      ElMessage({
        type: 'success',
        message: '退出成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消退出'
      })
    })
}
</script>

<style lang="scss" scoped></style>
