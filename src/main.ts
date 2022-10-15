import { createApp } from 'vue'
import './styles/style.css'
import 'tailwindcss/tailwind.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log('error--->', err)
}
app.config.performance = true
// app.config.compilerOptions.comments = true;
app.use(router).use(pinia).mount('#app')
