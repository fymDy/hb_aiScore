import { ApiResponse } from '../axios/types'
import { SWRGet, SWRPost } from './core'
import type { SWRConfiguration } from 'swr'

export function requestSWR<T = any>(
  key: string,
  fetcher: () => Promise<ApiResponse<T>>,
  config?: SWRConfiguration
) {
  const instance = new SWRGet<T>(key, fetcher, config)
  return instance.use()
}


export function requestSWRMutation<T = any>(
  key: string,
  fetcher: (url: string, options: { arg: any }) => Promise<ApiResponse<T>>,
  config?: SWRConfiguration
) {
  const instance = new SWRPost<T>(key, fetcher, config)
  return instance.use()
}
