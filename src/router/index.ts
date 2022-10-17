import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useStore } from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'appLayout',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
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
  const userInfo = useStore()
  if (to.meta.requiresAuth && !userInfo.userInfo) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath }
    }
  }
})

router.afterEach(() => {
  nprogress.done()
})

export default router
