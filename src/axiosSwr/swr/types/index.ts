/*
 * @Author: Mark
 * @Date: 2025-05-03 18:57:01
 * @LastEditTime: 2025-05-03 22:06:30
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/axiosSwr/swr/types/index.ts
 */


// ✅ 导出值（函数、hook）
// import useSWR, { mutate } from 'swr'
// import useSWRMutation from 'swr/mutation'
// // ✅ 导出类型
// import type {   SWRConfiguration } from 'swr'
// import type {
//   SWRMutationConfiguration,
//   SWRMutationResponse
// } from 'swr/mutation'
// export type {
//   SWRConfiguration,
//   SWRMutationConfiguration,
//   SWRMutationResponse
// }
// export { useSWR,useSWRMutation,mutate }

export type { SWRMutationConfiguration, SWRMutationResponse } from 'swr/mutation'
export type { SWRConfiguration,SWRResponse} from 'swr'
export { default as useSWR , mutate  } from 'swr'
export { default as useSWRMutation } from 'swr/mutation'