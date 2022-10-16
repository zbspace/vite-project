import { createApp } from 'vue'
import '@/styles/iconfont/iconfont.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from './plugins/element-plus'

// 加载全局样式
import './styles/index.scss'

const app = createApp(App)
const pinia = createPinia()

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log('error--->', err)
}
app.config.performance = true
// app.config.compilerOptions.comments = true;
app.use(router).use(pinia).use(ElementPlus).mount('#app')
