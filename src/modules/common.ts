/*
 * @Author: Mark
 * @Date: 2025-05-01 16:17:48
 * @LastEditTime: 2025-05-01 21:45:33
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/modules/common.ts
 */
import { axiosGet, axiosPost, request } from "@/axiosSwr/axios/request"
import { ApiResponse, CustomRequestConfig } from "@/axiosSwr/axios/types"

export interface UserInfo {
  name: string
  age: number
}

export const apiUserDetail = (params: any) => {
    return axiosGet('/user/detail',params,{ showLoading: true})
}

export const apiUserInfo = (params: any): Promise<ApiResponse<UserInfo>> => {
    return axiosGet('/user/info',params,{ showLoading: true})
}
export const apiUpdateUser = (data: UserInfo): Promise<ApiResponse<null>> => {
    // return request({ url: '/user/update', method: 'post', data: arg })
    return axiosPost('/user/update',data,{ showLoading: true})
}