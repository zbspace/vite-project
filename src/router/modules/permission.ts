import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView,
  children: [
    {
      path: 'role',
      name: 'permission-role',
      component: async () => await import('@/views/permission/role/index.vue')
    },
    {
      path: 'admin',
      name: 'permission-admin',
      component: async () => await import('@/views/permission/admin/index.vue')
    },
    {
      path: 'rule',
      name: 'permission-rule',
      component: async () => await import('@/views/permission/rule/index.vue')
    }
  ]
}

export default routes
