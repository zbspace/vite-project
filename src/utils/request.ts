/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useStore } from '@/store'
import router from '@/router'
// 控制登录过期锁
let isRefreshing = false

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL // 基础路径 https://shop.fed.lagounews.com/
})
// 请求拦截器
request.interceptors.request.use(
  config => {
    const store = useStore()
    // 容错：防止请求地址中有空格
    config.url = config.url?.trim()
    // 统一设置用户 token
    const { userInfo } = store
    if (userInfo && userInfo.token) {
      config.headers!.Authorization = `Bearer ${userInfo.token}`
    }
    return config
  },
  async error => {
    return await Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    const store = useStore()
    // 统一处理响应错误，例如 token 无效、服务端异常等
    const { status } = response.data
    // 请求成功
    if (!status || status === 200) {
      return response
    }
    // 处理 Token 过期
    if (status === 410000) {
      if (isRefreshing) return Promise.reject(response)
      isRefreshing = true
      ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      }).then(
        () => {
          // 清除登录状态并跳转到登录页
          store.setUserInfo(null)
          router.push({
            name: 'login',
            query: {
              redirect: router.currentRoute.value.fullPath
            }
          })
        }
      ).finally(() => {
        isRefreshing = false
      })
      return Promise.reject(response)
    }
    // 其它错误给出提示即可，比如 400 参数错误之类的
    ElMessage({
      type: 'error',
      message: response.data.msg || '请求失败',
      duration: 5 * 1000
    })
    return Promise.reject(response)
  },
  async err => {
    return await Promise.reject(err)
  }
)

export default async <T = any>(config: AxiosRequestConfig) => {
  return await request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
