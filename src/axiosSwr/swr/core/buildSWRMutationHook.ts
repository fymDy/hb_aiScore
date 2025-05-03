/*
 * @Author: Mark
 * @Date: 2025-05-03 21:52:21
 * @LastEditTime: 2025-05-03 23:11:49
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/swr/core/buildSWRMutationHook.ts
 */
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ApiResponse } from '@/axiosSwr/axios/types/response'
import { swrFactory } from './swrFactory'
import { getCacheKeyString } from '../utils'

interface BuildSWRMutationHookOptions<T, Arg = void> {
  key: string
  fetcher: (url: string, options: { arg: Arg }) => Promise<ApiResponse<T>>
  config?: SWRMutationConfiguration<ApiResponse<T>, any, string, Arg>
}

/**
 * 构建 SWR 手动触发型 Hook（如 登录、提交表单等）
 * 返回一个 useXXX 的业务 Hook
 */
export function buildSWRMutationHook<T, Arg = void>(
  options: BuildSWRMutationHookOptions<T, Arg>
) {
  return (params?: Arg) => {
    const swrKey = getCacheKeyString(options.key, params)
    return swrFactory.mutation<T, Arg>(swrKey, options.fetcher, options.config)
  }
  // return () => swrFactory.mutation<T, Arg>(options.key, options.fetcher, options.config)
}