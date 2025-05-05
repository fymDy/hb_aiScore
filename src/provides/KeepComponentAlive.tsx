import { useRef } from "react";

/*
 * @Author: Mark
 * @Date: 2025-05-05 15:54:20
 * @LastEditTime: 2025-05-05 17:24:07
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/KeepComponentAlive.tsx
 */
export const useComponentCache = () => {
  const cache = useRef<Record<string, React.ReactNode>>({});

  const getOrRender = (key: string, node: React.ReactNode) => {
    if (!cache.current[key]) cache.current[key] = node;
    return cache.current[key];
  };

  return getOrRender;
};