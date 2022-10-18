import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from './plugins/element-plus'
import components from './components/index'

// 加载全局样式
import './styles/index.scss'

const app = createApp(App)
const pinia = createPinia()

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log('error--->', err)
}
app.config.performance = true
app.use(pinia).use(router).use(ElementPlus).use(components).mount('#app')
