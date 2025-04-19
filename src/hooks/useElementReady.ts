/*
 * @Author: Mark
 * @Date: 2025-04-19 20:06:49
 * @LastEditTime: 2025-04-19 20:36:35
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/hooks/useElementReady.ts
 */
import { useCallback } from 'react';

export function useElementReady<T extends HTMLElement>(
  onReady: (el: T ) => void,
) {
const handleRef = useCallback((el: T | null) => {
    if (el) {
      onReady(el);
    }
  }, []);
  return handleRef;
}
