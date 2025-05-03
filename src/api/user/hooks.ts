import { buildSWRMutationHook, buildSWRRequestHook } from "@/axiosSwr"
import { UserDetailParams, UserInfo } from "./types"
import { apiUpdateUser, apiUserDetail, apiUserInfo } from "./api"

/*
 * @Author: Mark
 * @Date: 2025-05-03 23:23:09
 * @LastEditTime: 2025-05-03 23:32:37
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/api/user/hooks.ts
 */
export const useGetUserDetail = buildSWRRequestHook<UserInfo, UserDetailParams>({
    key: '/user/detail',
    fetcher: (params) => apiUserDetail(params),
    config: {
      revalidateOnFocus: false,
      errorRetryCount: 0
    }
  })
  
  /**
   * 获取用户信息（自动请求）
   */
  export const useGetUserInfo = buildSWRRequestHook<UserInfo, any>({
    key: '/user/info',
    fetcher: (params) => apiUserInfo(params),
    config: {
      revalidateOnFocus: false,
      errorRetryCount: 0
    }
  })

  export const useUpdateUser = buildSWRMutationHook<UserInfo, any>({
    key: '/user/upd/info',
    fetcher: (params) => apiUpdateUser(params),
    config: {
     
  
    }
  })