/*
 * @Author: Mark
 * @Date: 2025-04-23 20:13:03
 * @LastEditTime: 2025-05-12 15:07:53
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/types/location.d.ts
 */
import type { Location  } from 'react-router-dom';
 export interface IFLocationPlus extends Location {
  params: Record<string, string>;
  query: Record<string, string>;
  fullPath: string;
  // lastPath:string;
  hashValue: string; // ✅ 额外解析后的纯值
  raw:Location
}
export type LocationPlusFn = () => IFLocationPlus;
declare global {
  var locationPlusFn: LocationPlusFn;
  interface Window {
    locationPlus: IFLocationPlus;
  }
}
export {}; // 让这个文件成为一个 module，避免全局污染