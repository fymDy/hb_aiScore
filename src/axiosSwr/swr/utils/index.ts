/*
 * @Author: Mark
 * @Date: 2025-05-03 23:08:49
 * @LastEditTime: 2025-05-03 23:08:50
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/swr/utils/index.ts
 */
export function getCacheKeyString(key: string, params?: unknown): string {
    return params ? `${key}?${JSON.stringify(params)}` : key
  }