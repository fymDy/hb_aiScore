/*
 * @Author: Mark
 * @Date: 2025-05-01 14:40:17
 * @LastEditTime: 2025-05-01 15:59:32
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axios/types.ts
 */

// ✅ 原生 AxiosRequestConfig 拆解重建 + 注释，结构清晰
import type {
    Method,
    ResponseType,
    AxiosBasicCredentials,
    AxiosProxyConfig,
    CancelToken,
    AxiosAdapter,
    AxiosRequestHeaders,
    TransitionalOptions,
    ParamsSerializerOptions
  } from 'axios'
  
  /** 原生 Axios 配置字段（带注释） */
  export interface BaseAxiosRequestConfig<D = any> {
    /** 请求地址（相对或绝对） */
    url?: string
    /** 请求方法，如 GET/POST */
    method?: Method
    /** 基础路径，自动拼接在 url 前 */
    baseURL?: string
    /** 请求头 */
    headers?: AxiosRequestHeaders
    /** 查询字符串参数 */
    params?: any
    /** 参数序列化配置 */
    paramsSerializer?: ParamsSerializerOptions
    /** 请求体 */
    data?: D
    /** 超时时间（毫秒） */
    timeout?: number
    /** 超时错误信息 */
    timeoutErrorMessage?: string
    /** 是否允许跨域请求带 Cookie */
    withCredentials?: boolean
    /** 基本认证（用户名/密码） */
    auth?: AxiosBasicCredentials
    /** 响应数据类型 */
    responseType?: ResponseType
    /** 响应数据编码（仅 Node） */
    responseEncoding?: string
    /** XSRF 相关 */
    xsrfCookieName?: string
    xsrfHeaderName?: string
    /** 上传/下载进度监听 */
    onUploadProgress?: (progressEvent: ProgressEvent) => void
    onDownloadProgress?: (progressEvent: ProgressEvent) => void
    /** 最大响应体/请求体大小（字节） */
    maxContentLength?: number
    maxBodyLength?: number
    /** 自定义状态码校验 */
    validateStatus?: ((status: number) => boolean) | null
    /** 最大重定向次数 */
    maxRedirects?: number
    /** socket 路径（仅 Node） */
    socketPath?: string | null
    /** HTTP/HTTPS Agent（仅 Node） */
    httpAgent?: any
    httpsAgent?: any
    /** 代理配置 */
    proxy?: AxiosProxyConfig | false
    /** 请求取消控制 */
    cancelToken?: CancelToken
    signal?: AbortSignal
    /** 是否自动解压（gzip） */
    decompress?: boolean
    /** axios 迁移选项 */
    transitional?: TransitionalOptions
    /** 自定义适配器（如小程序） */
    adapter?: AxiosAdapter
  }
  
  /** ✅ 最终自定义请求配置：继承原生属性并扩展 */
  export interface CustomRequestConfig<D = any> extends BaseAxiosRequestConfig<D> {
    /** 是否显示全局 loading 提示 */
    showLoading?: boolean
    /** 是否自动提示错误信息 */
    showErrorMsg?: boolean
    /** 是否启用缓存（结合 swr） */
    useCache?: boolean
    /** 是否跳过 token 校验 */
    noAuth?: boolean
    /** 请求唯一 key（防抖/中断） */
    requestKey?: string
  }
  export interface ServerResponse<T = any> {
    code: number
    message: string
    data: T
  }
  
  export interface ApiError {
    code: number
    message: string
  }
  
  export interface ApiResponse<T = any> {
    data: T | null
    error: ApiError | null
  }
  