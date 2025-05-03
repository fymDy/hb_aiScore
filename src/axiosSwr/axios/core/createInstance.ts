/*
 * @Author: Mark
 * @Date: 2025-05-03 19:39:37
 * @LastEditTime: 2025-05-03 19:52:44
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/axios/core/createInstance.ts
 */

import { axios, AxiosInstance, AxiosRequestConfig } from "../types"
import { setupInterceptors } from "./interceptors"

/**
 * 创建可配置的 axios 实例
 */
export const createAxiosInstance = (
    config: AxiosRequestConfig
  ): AxiosInstance => {
    const instance = axios.create(config)
    setupInterceptors(instance)
    return instance
  }