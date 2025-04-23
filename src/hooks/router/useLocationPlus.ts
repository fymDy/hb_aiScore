/*
 * @Author: Mark
 * @Date: 2025-04-22 14:54:43
 * @LastEditTime: 2025-04-23 22:13:38
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/hooks/router/useLocationPlus.ts
 */
import { useLocation } from 'react-router-dom';
import { IFLocationPlus } from '@/types/location';

/**
 * 封装 useLocation，提供 pathname、searchParams、query 对象等
 */
export const useLocationPlus = (): IFLocationPlus => {
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

