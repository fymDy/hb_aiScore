/*
 * @Author: Mark
 * @Date: 2025-05-01 11:42:56
 * @LastEditTime: 2025-05-01 14:52:24
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axios/instance.ts
 */
// ✅ 创建 Axios 实例并配置拦截器
import axios from 'axios'
import { BASE_URL, TOKEN } from '@/config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})

// 请求拦截器：自动附加 token
instance.interceptors.request.use(config => {
  if (TOKEN && !config.headers?.Authorization) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${TOKEN}`
  }
  return config
})

// 响应拦截器：保留原始响应，业务错误交由 request.ts 处理
instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export default instance
