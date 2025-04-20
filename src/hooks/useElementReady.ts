/*
 * @Author: Mark
 * @Date: 2025-04-19 20:06:49
 * @LastEditTime: 2025-04-20 14:43:43
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/hooks/useElementReady.ts
 */
import { useCallback, useEffect, useRef } from 'react';

export function useElementReady<T extends HTMLElement>(
  onReadyOrResize: (el: T) => void
) {
  const observerRef = useRef<ResizeObserver | null>(null);
  const elementRef = useRef<T | null>(null);

  const handleRef = useCallback((el: T | null) => {
    if (el) {
      elementRef.current = el;
      onReadyOrResize(el);  // 初始立即触发
      if (observerRef.current) observerRef.current.disconnect();
      // 监听后续尺寸变化
      observerRef.current = new ResizeObserver(() => {
        if (elementRef.current) {
          onReadyOrResize(elementRef.current);
        }
      });
      observerRef.current.observe(el);
    } else {
      // 元素卸载时 disconnect
      observerRef.current?.disconnect();
      observerRef.current = null;
      elementRef.current = null;
    }
  }, [onReadyOrResize]);

  // 清理 observer
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return handleRef;
}
