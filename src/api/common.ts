/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * 公共基础封装
 */
import request from '@/utils/request'
import { ILoginInfo, ILoginResponse } from './types/common'

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

/**
 * 登录
 * @param data
 * @returns
 */
export const login = async (data: {
  account: string,
  pwd: string,
  imgcode: string
}) => {
  return await request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

/**
 * 退出登录
 * @returns
 */
export const logout = async () => {
  return await request({
    method: 'GET',
    url: '/setting/admin/logout'
  })
}
