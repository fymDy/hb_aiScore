import { request } from "../request/request"
import { ApiResponse, CustomRequestConfig } from "../types"

/*
 * @Author: Mark
 * @Date: 2025-05-03 22:29:12
 * @LastEditTime: 2025-05-03 22:29:13
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/axios/method/get.ts
 */
export const axiosGet = <T = any>(
    url: string,
    params?: any,
    config?: Omit<CustomRequestConfig, 'url' | 'method' | 'params'>
  ): Promise<ApiResponse<T>> => {
    return request({ ...config, url, method: 'get', params })
  }
  