import useSWR, { SWRConfiguration} from 'swr'
import useSWRMutation from 'swr/mutation'
import type { ApiResponse } from '@/axiosSwr/axios/types'

export class SWRGet<T = any> {
  key: string
  fetcher: () => Promise<ApiResponse<T>>
  config?: SWRConfiguration
  
  constructor(key: string, fetcher: () => Promise<ApiResponse<T>>, config?: SWRConfiguration) {
    this.key = key
    this.fetcher = fetcher
    this.config = config
  }


  use() {
    const { data, error }  = useSWR<ApiResponse<T>>(this.key, this.fetcher, this.config)
    return {
      data: data?.data ?? null,
      error: data?.error?.message ?? error?.message ?? null
    }
  }
}

export class SWRPost<T = any> {
  key: string
  fetcher: (url: string, options: { arg: any }) => Promise<ApiResponse<T>>
  config?: any

  constructor(
    key: string,
    fetcher: (url: string, options: { arg: any }) => Promise<ApiResponse<T>>,
    config?: SWRConfiguration
  ) {
    this.key = key
    this.fetcher = fetcher
    this.config = config
  }
  use() {
    const result = useSWRMutation<ApiResponse<T>, any, string, any>(
      this.key,
      this.fetcher,
      this.config
    )
    return {
      ...result,
      data: result.data?.data ?? null,
      error: result.data?.error?.message ?? result.error?.message ?? null
    }
  }
}