import instance from './instance'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { ApiResponse, CustomRequestConfig, ServerResponse } from './types'

export function stripCustomFields<T = any>(
    config: CustomRequestConfig<T>
  ): AxiosRequestConfig<T> {
    const {
      showLoading,
      showErrorMsg,
      useCache,
      noAuth,
      requestKey,
      ...rest
    } = config
    return rest as AxiosRequestConfig<T>
  }

export const request = async <T = any>(
  config: CustomRequestConfig
): Promise<ApiResponse<T>> => {

    const { showLoading = false, showErrorMsg = true } = config
  if (showLoading) {
    // TODO: show global loading
  }

  try {
    const res: AxiosResponse<ServerResponse<T>> = await instance.request(stripCustomFields(config))
    const { code, message, data } = res.data

    if (code === 0) {
      return { data, error: null }
    } else {
      if (showErrorMsg) {
        // TODO: toast(message)
      }
      return { data: null, error: { code, message } }
    }
  } catch (err:any) {
    const isAxiosError = err?.isAxiosError || err?.response
    const message = isAxiosError(err) ? err.message || '网络请求异常': '系统错误'
    if (showErrorMsg) {
      // TODO: toast('系统错误')
    }
    return {
      data: null,
      error: { code: -1, message }  // ✅ 网络错误封装为业务错误格式
    }
  } finally {
    if (showLoading) {
      // TODO: hide global loading
    }
  }
}


export const axiosGet = <T = any>(
  url: string,
  params?: any,
  config?: Omit<CustomRequestConfig, 'url' | 'method' | 'params'>
): Promise<ApiResponse<T>> => {
  return request<T>({ ...config, url, method: 'get', params })
}

export const axiosPost = <T = any>(
  url: string,
  data?: any,
  config?: Omit<CustomRequestConfig, 'url' | 'method' | 'data'>
): Promise<ApiResponse<T>> => {
  return request<T>({ ...config, url, method: 'post', data })
}
