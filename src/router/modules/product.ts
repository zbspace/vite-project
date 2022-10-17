// src\router\modules\product.ts

import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/product',
  name: 'product',
  component: RouterView,
  meta: {
    title: '商品'
  },
  children: [
    {
      path: 'product_list',
      name: 'product_list',
      component: async () => await import('@/views/product/list/index.vue'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'product_classify',
      name: 'product_classify',
      component: async () => await import('@/views/product/classify/index.vue'),
      meta: {
        title: '商品分类'
      }
    },
    {
      path: 'product_reply',
      name: 'product_reply',
      component: async () => await import('@/views/product/reply/index.vue'),
      meta: {
        title: '商品评论'
      }
    },
    {
      path: 'product_attr',
      name: 'product_attr',
      component: async () => await import('@/views/product/attr/index.vue'),
      meta: {
        title: '商品规格'
      }
    }

  ]
}

export default routes
