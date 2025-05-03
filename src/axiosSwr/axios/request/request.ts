import { createAxiosInstance } from "../core"
import { ApiResponse, AxiosResponse, CustomRequestConfig, ServerResponse } from "../types"
import { stripCustomFields } from "./stripConfig"



const instance = createAxiosInstance({
  baseURL: '/api',
  timeout: 10000
})

export const request = async <T = any>(
  config: CustomRequestConfig
): Promise<ApiResponse<T>> => {
  const axiosConfig = stripCustomFields(config)
    const { showLoading = false, showErrorMsg = true } = config
  if (showLoading) {
    // TODO: show global loading
  }

  try {
    const res: AxiosResponse<ServerResponse<T>> = await instance.request(axiosConfig)
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
    if (showErrorMsg) {
           // TODO: toast('网络请求异常')
    }
    return {
      data: null,
      error: { code: -1, message: err.message || '网络错误' }
    }
  } finally {
    if (showLoading) {
      // TODO: hide global loading
    }
  }
}



