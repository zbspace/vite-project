import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'appLayout',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: async () => await import('../views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      productRoutes,
      orderRoutes,
      permissionRoutes,
      mediaRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: async () => await import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), // 路由模式 createWebHashHistory , createWebHistory
  routes// 路由规则
})

router.beforeEach((to, from) => {
  nprogress.start()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
