import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: async () => await import('@/views/media/index.vue')
}

export default routes
