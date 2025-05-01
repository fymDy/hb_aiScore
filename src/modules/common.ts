/*
 * @Author: Mark
 * @Date: 2025-05-01 16:17:48
 * @LastEditTime: 2025-05-01 21:22:50
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/modules/common.ts
 */
import { request } from "@/axiosSwr/axios/request"
import { ApiResponse, CustomRequestConfig } from "@/axiosSwr/axios/types"

export interface UserInfo {
  name: string
  age: number
}

export const apiUserDetail = (params: { id: number }) => {
    return request({
      url: '/user/detail',
      method: 'get',
      showLoading: true,
      params
    })
  }

export const apiUserInfo = (): Promise<ApiResponse<UserInfo>> => {
  const config: CustomRequestConfig = {
    url: '/user/info',
    method: 'get',
    showLoading: true,
    showErrorMsg: true,
  }
  return request<UserInfo>(config)
}
export const apiUpdateUser = (arg: UserInfo): Promise<ApiResponse<null>> => {
    return request({ url: '/user/update', method: 'post', data: arg })
  }