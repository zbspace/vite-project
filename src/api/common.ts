/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * 公共基础封装
 */
import request from '@/utils/request'
import { ILoginInfo } from './types/common'

/**
 * 获取登录信息
 * @returns
 */
export const getLoginInfo = async () => {
  return await request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
}

/**
 * 获取验证码
 * @returns
 */
export const getCaptcha = async () => {
  return await request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    params: {
      statmp: Date.now() // 避免缓存
    },
    responseType: 'blob' // 请求获取图片数据
  })
}
