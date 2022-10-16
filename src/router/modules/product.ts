// src\router\modules\product.ts

import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/product',
  name: 'product',
  component: RouterView,
  children: [
    {
      path: 'product_list',
      name: 'product_list',
      component: async () => await import('@/views/product/list/index.vue')
    },
    {
      path: 'product_classify',
      name: 'product_classify',
      component: async () => await import('@/views/product/classify/index.vue')
    },
    {
      path: 'product_attr',
      name: 'product_attr',
      component: async () => await import('@/views/product/attr/index.vue')
    },
    {
      path: 'product_reply',
      name: 'product_reply',
      component: async () => await import('@/views/product/reply/index.vue')
    }
  ]
}

export default routes
