/*
 * @Author: Mark
 * @Date: 2025-04-22 14:54:43
 * @LastEditTime: 2025-04-22 16:53:17
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/hooks/router/useLocationPlus.ts
 */

import { useLocation,Location } from "react-router-dom";
/**
 *  Omit<Location<T>, never>等价于 Location<T>保留扩展能力
 * Omit<Location<T>, state> 用于Location中替换字段时使用，state 可以进行自定义
 */
 interface LocationPlus<T = any> extends Omit<Location<T>, never> {
  query: Record<string, string>;
  fullPath: string;
  hashValue: string; // ✅ 额外解析后的纯值
  raw:Location
}
/**
 * 封装 useLocation，提供 pathname、searchParams、query 对象等
 */
export const useLocationPlus =  <T = any>(): LocationPlus<T> => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query: Record<string, string> = {};
    searchParams.forEach((value, key) => {
        query[key] = value;
      });
      return {
        ...location,
        query, // key-value 形式的 search 对象
        hashValue: location.hash.startsWith('#') ? location.hash.slice(1) : location.hash,
        fullPath: location.pathname + location.search + location.hash,
        raw:location
      };

}