import { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  install (app: App) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    // element-plus 组件
    app.use(ElementPlus, { size: 'small', zIndex: 2000 })
  }
}
