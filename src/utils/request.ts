/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosRequestConfig } from 'axios'
const request = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api/admin/' // 基础路径 https://shop.fed.lagounews.com/
})
// 请求拦截器
request.interceptors.request.use(
  config => {
    // 统一设置用户身份 Token
    return config
  },
  async error => {
    return await Promise.reject(error)
  }
)
// 响应拦截器
request.interceptors.response.use(
  response => {
    // 统一处理响应错误，例如 token 无效、服务端异常等
    return response
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
