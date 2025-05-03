import type { ApiResponse } from "@/axiosSwr/axios/types"
import type { SWRConfiguration } from "../types"
import { swrFactory } from "./swrFactory"
import { getCacheKeyString } from "../utils"

/*
 * @Author: Mark
 * @Date: 2025-05-03 21:30:21
 * @LastEditTime: 2025-05-03 23:09:45
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/swr/core/buildSWRRequestHook.ts
 */
interface BuildSWRRequestHookOptions<T, P= void> {
  key: string
  fetcher: (params?: P) => Promise<ApiResponse<T>> // ✅ 推荐这样写
  config?: SWRConfiguration
}
/**
 * 创建一个支持参数的 SWR 请求 Hook
 * @returns (params?: P) => swr response
 */
export function buildSWRRequestHook<T, P = void>(
  options: BuildSWRRequestHookOptions<T, P>
) {
  return (params?: P) => {
    // const swrKey = params ? `${options.key}?${JSON.stringify(params)}` : options.key
    const swrKey = getCacheKeyString(options.key, params)
    const wrappedFetcher = () => options.fetcher(params)

    return swrFactory.request<T>(swrKey, wrappedFetcher, options.config)
  }
}

