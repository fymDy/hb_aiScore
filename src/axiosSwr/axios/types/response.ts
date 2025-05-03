/*
 * @Author: Mark
 * @Date: 2025-05-03 20:28:55
 * @LastEditTime: 2025-05-03 20:28:56
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/axios/types/response.ts
 */

export interface ServerResponse<T = any> {
    code: number
    message: string
    data: T
  }
  
  export interface ApiError {
    code: number
    message: string
  }
  
  export interface ApiResponse<T = any> {
    data: T | null
    error: ApiError | null
  }