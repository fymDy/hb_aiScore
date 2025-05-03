/*
 * @Author: Mark
 * @Date: 2025-05-03 22:33:34
 * @LastEditTime: 2025-05-03 22:36:36
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/axios/request/stripConfig.ts
 */
import type { CustomRequestConfig ,AxiosRequestConfig} from '../types'

/**
 * 去除自定义字段，使其符合 Axios 的原始配置
 */
export function stripCustomFields(
  config: CustomRequestConfig
): AxiosRequestConfig {
  const { showLoading, showErrorMsg, ...rest } = config
  return rest
}
