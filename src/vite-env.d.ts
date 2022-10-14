// 添加环境变量类型
/// <reference types="vite/client" />

// 给.vue资源添加类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
