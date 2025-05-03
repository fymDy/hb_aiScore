/*
 * @Author: Mark
 * @Date: 2025-05-03 22:30:05
 * @LastEditTime: 2025-05-03 22:30:06
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/axios/method/post.ts
 */
import { request } from "../request/request"
import { ApiResponse, CustomRequestConfig } from "../types"

  export const axiosPost = <T = any>(
    url: string,
    data?: any,
    config?: Omit<CustomRequestConfig, 'url' | 'method' | 'data'>
  ): Promise<ApiResponse<T>> => {
    return request<T>({ ...config, url, method: 'post', data })
  }