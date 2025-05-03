import { axiosGet, axiosPost } from "@/axiosSwr/axios"
import { ApiResponse } from "@/axiosSwr/axios/types"
import { UserInfo } from "./types"


export const apiUserDetail = (params: any) => {
    return axiosGet('/user/detail',params,{ showLoading: true})
}

export const apiUserInfo = (params: any): Promise<ApiResponse<UserInfo>> => {
    return axiosGet('/user/info',params,{ showLoading: true})
}
export const apiUpdateUser = (data: any): Promise<ApiResponse<UserInfo>> => {
    return axiosPost('/user/update',data,{ showLoading: true})
}