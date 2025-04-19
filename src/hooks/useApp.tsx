import { LayoutAppContext } from "@/provides/inteface";
import { useContext } from "react";

/*
 * @Author: Mark
 * @Date: 2025-04-19 19:56:55
 * @LastEditTime: 2025-04-19 20:02:17
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/hooks/useApp.tsx
 */
export const useApp = () => {
  const ctx = useContext(LayoutAppContext);
  if (!ctx) {
    throw new Error("useApp must be used within LayoutContextProvider");
  }
  return ctx;
};
