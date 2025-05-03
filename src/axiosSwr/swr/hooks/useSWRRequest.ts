/*
 * @Author: Mark
 * @Date: 2025-05-03 13:51:10
 * @LastEditTime: 2025-05-03 22:08:52
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/swr/hooks/useSWRRequest.ts
 */
import type { ApiResponse } from '@/axiosSwr/axios/types'
import {type SWRConfiguration, SWRResponse, useSWR } from '../types'


export function useSWRRequestHook<T>(
  key: string,
  fetcher: () => Promise<ApiResponse<T>>,
  config?: SWRConfiguration
): Omit<SWRResponse<ApiResponse<T>, any>, 'data' | 'error'> & {
  data: T | null
  error: string | null
} {
  const result = useSWR<ApiResponse<T>>(key, fetcher, config)

  return {
    ...result,
    data: result.data?.data ?? null,
    error: result.data?.error?.message ?? result.error?.message ?? null
  }
}