import request from '@/utils/request'
import { Admin, IAdminPostData, IListParams } from './types/admin'

/**
 * 查询管理员列表
 * @param params
 * @returns
 */
export const getAdmins = async (params: IListParams) => {
  return await request<{count: number, list: Admin[]}>({
    method: 'GET',
    url: '/setting/admin',
    params
  })
}
/**
 * 添加管理员
 * @param data
 * @returns
 */
export const createAdmin = async (data: IAdminPostData) => {
  return await request({
    method: 'POST',
    url: '/setting/admin',
    data
  })
}

/**
 * 修改管理员信息
 * @param data
 * @returns
 */
export const updateAdmin = async (id: number, data: IAdminPostData) => {
  return await request({
    method: 'PUT',
    url: `/setting/admin/${id}`,
    data
  })
}
/**
 * 删除管理员
 * @param id
 * @returns
 */
export const deleteAdmin = async (id: number) => {
  return await request({
    method: 'DELETE',
    url: `/setting/admin/${id}`
  })
}

/**
 * 修改状态
 * @param id
 * @param status
 * @returns
 */
export const updateAdminStatus = async (id: number, status: number) => {
  return await request({
    method: 'PUT',
    url: `/setting/admin/${id}/${status}`
  })
}
