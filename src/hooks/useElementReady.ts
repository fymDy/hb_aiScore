/*
 * @Author: Mark
 * @Date: 2025-04-19 20:06:49
 * @LastEditTime: 2025-04-21 11:43:06
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

  const recalc = useCallback(() => {
    const el = elementRef.current;
    if (el) {
      el.style.height = ''; // ✅ 清掉 style 上的高度，恢复内容撑开
      requestAnimationFrame(() => {
        onReadyOrResize(el); // ✅ 再测量
      });
    }
  }, [onReadyOrResize]);

  const handleRef = useCallback((el: T | null) => {
    if (el) {
      elementRef.current = el;
      onReadyOrResize(el); // 初始立即触发

      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new ResizeObserver(() => {
        if (elementRef.current) {
          onReadyOrResize(elementRef.current);
        }
      });
      observerRef.current.observe(el);
    } else {
      observerRef.current?.disconnect();
      observerRef.current = null;
      elementRef.current = null;
    }
  }, [onReadyOrResize]);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { ref: handleRef, recalc };
}
