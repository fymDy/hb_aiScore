/*
 * @Author: Mark
 * @Date: 2025-05-03 13:52:11
 * @LastEditTime: 2025-05-03 22:05:12
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/swr/hooks/useSWRMutation.ts
 */
import type { ApiResponse } from '@/axiosSwr/axios/types'
import {type SWRMutationConfiguration,type SWRMutationResponse, useSWRMutation } from '../types'

export function useSWRMutationHook<T = any, Arg = void>(
  key: string,
  fetcher: (url: string, options: { arg: Arg }) => Promise<ApiResponse<T>>,
  config?: SWRMutationConfiguration<ApiResponse<T>, any, string, Arg>
): Omit<SWRMutationResponse<ApiResponse<T>, any, string, Arg>, 'data' | 'error'> & {
  data: T | null
  error: string | null
} {
  const result = useSWRMutation<ApiResponse<T>, any, string, Arg>(key, fetcher, config)
  return {
    ...result,
    data: result.data?.data ?? null,
    error: result.data?.error?.message ?? null
  }
}
