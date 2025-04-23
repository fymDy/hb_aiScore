/*
 * @Author: Mark
 * @Date: 2025-04-22 15:24:21
 * @LastEditTime: 2025-04-23 11:51:50
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/hooks/router/useNavigatePlus.ts
 */
// 📁 src/hooks/usePageNavigate.ts
import { GoToFn, NavigatePlusFn } from "@/types/navigation";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IFUseNavigatePlusProps {
  navigatePlus: NavigatePlusFn;
  goTo: GoToFn;
  navigate: ReturnType<typeof useNavigate>; // 原始 navigate 也暴露
}

export const useNavigatePlus = (): IFUseNavigatePlusProps => {
  const navigate = useNavigate();
  /**
   * 跳转并附带 URL 参数
   */
  const goTo: GoToFn = useCallback(
    (to, options = {}) => {
      if (typeof to === "string") {
        const { query = {}, replace = false, hash = "" } = options;
        const searchParams = new URLSearchParams();
        Object.entries(query).forEach(([key, val]) => {
          if (val !== undefined && val !== null) {
            searchParams.set(key, String(val));
          }
        });
        const queryStr = searchParams.toString();
        const finalUrl = `${to}${queryStr ? `?${queryStr}` : ""}${hash}`;
        navigate(finalUrl, { replace });
      }
    },
    [navigate]
  );

  /**
   * 跳转并传递 state 参数（不暴露在地址栏）
   */
  const navigatePlus: NavigatePlusFn = useCallback(
    (to, options = {}) => {
      if (typeof to === "number") {
        navigate(to);
      } else {
        const { state, replace = false } = options;
        navigate(to, { state, replace });
      }
    },
    [navigate]
  );
  // 全局绑定（一次性）
  useEffect(() => {
    window.navigatePlus = navigatePlus;
    window.goTo = goTo;
  }, [navigatePlus, goTo]);

  return {
    goTo,
    navigatePlus,
    navigate, // 原始 navigate 也暴露
  };
};
