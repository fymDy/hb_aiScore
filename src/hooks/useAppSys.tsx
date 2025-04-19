/*
 * @Author: Mark
 * @Date: 2025-04-19 21:05:58
 * @LastEditTime: 2025-04-19 22:19:02
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/hooks/useAppSys.tsx
 */

import { LayoutSysContext } from "@/provides/inteface";
import { useContext } from "react";

 const useAppSys = () => {
    const ctx = useContext(LayoutSysContext);
    if (!ctx) {
      throw new Error('useAppSys must be used within LayoutAppContextProvider');
    }
    return ctx;
  };

  export {useAppSys}