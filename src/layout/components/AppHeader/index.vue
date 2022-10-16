<template>
  <el-space size="large">
    <ToggleSidebar />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <MenuSearch />
    <FullScreen />
    <Notification />
    <UserInfo />
  </el-space>
</template>

<script lang="ts" setup>
import ToggleSidebar from '../ToggleSidebar/index.vue'
import Breadcrumb from '../Breadcrumb/index.vue'
import MenuSearch from '../MenuSearch/index.vue'
import FullScreen from '../FullScreen/index.vue'
import Notification from '../Notification/index.vue'
import UserInfo from '../UserInfo/index.vue'

</script>

<style lang="scss" scoped>
i {
  font-size: 19px;
  cursor: pointer;
}
</style>
