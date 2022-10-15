/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * 公共基础封装
 */
import request from '@/utils/request'
import { ILoginInfo } from './types/common'

export const getLoginInfo = async () => {
  return await request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
}
