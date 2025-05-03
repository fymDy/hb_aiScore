/*
 * @Author: Mark
 * @Date: 2025-05-03 19:42:13
 * @LastEditTime: 2025-05-03 21:12:43
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/axios/core/interceptors.ts
 */
import { TOKEN } from '@/config'
import { AxiosInstance, AxiosRequestHeaders} from '../types'
 function appendHeaders(
    headers: AxiosRequestHeaders | undefined,
    extra: Record<string, string>
  ): void {
    if (!headers || typeof headers.set !== 'function') return
  
    for (const key in extra) {
      headers.set(key, extra[key])
    }
  }
/**
 * 为 axios 实例设置请求和响应拦截器
 */
export const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(config => {
    // if (config.headers && typeof config.headers.set === 'function') {
    //     config.headers.set('Authorization', TOKEN ? `Bearer ${TOKEN}` : '')
    //     config.headers.set('X-Custom-Header', 'MyCustomHeaderValue')
    //  }
    appendHeaders(config.headers, {
        Authorization: TOKEN ? `Bearer2 ${TOKEN}` : '',
        'X-Custom-Header': 'MyCustomHeaderValue',
        'X-API': 'X-API'
      })
    return config
  })

  instance.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
  )
}