/*
 * @Author: Mark
 * @Date: 2025-05-03 13:50:33
 * @LastEditTime: 2025-05-03 22:19:45
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/swr/core/swrFactory.ts
 */
// ✅ 推荐type，仅作类型注解
import type { ApiResponse } from '@/axiosSwr/axios/types'
import { mutate, type SWRConfiguration, type SWRMutationConfiguration }  from '../types'
import { useSWRMutationHook, useSWRRequestHook } from '../hooks'


export const swrFactory = {
     /**
   * 自动请求型接口（GET/POST）
   */
    request: <T>(
    key: string,
    fetcher: () => Promise<ApiResponse<T>>,
    config?: SWRConfiguration
  ) => useSWRRequestHook<T>(key, fetcher, config),
  /**
   * 手动触发型接口
   */
   mutation: <T, Arg = void>(
    key: string,
    fetcher: (url: string, options: { arg: Arg }) => Promise<ApiResponse<T>>,
    config?: SWRMutationConfiguration<ApiResponse<T>, any, string, Arg>
  ) => useSWRMutationHook<T, Arg>(key, fetcher, config),
    /**
   *  重新请求单个缓存 key
   * ⚡刷新指定 key 的缓存（重新拉取数据）
   */
    invalidate: (key: string, revalidate: boolean = true) => {
        mutate(key, undefined, { revalidate })
    },
      /**
   * 🔁 批量刷新多个 key（用于登录成功、退出登录、语言切换等）
   */
  invalidateMany: async (keys: string[], revalidate = true) => {
    await Promise.all(
      keys.map(key => mutate(key, undefined, { revalidate }))
    )
  },
  /**
   * 手动设置某个缓存数据（不重新请求）
   */
  setCache: <T>(key: string, data: T) => {
    mutate(key, { data, error: null }, false)
  },

  /**
   * 清除某个缓存数据（置空）
   */
  clearCache: (key: string) => {
    mutate(key, null, false)
  }
}
