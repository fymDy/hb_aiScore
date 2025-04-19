/*
 * @Author: Mark
 * @Date: 2025-04-18 18:42:35
 * @LastEditTime: 2025-04-19 22:04:16
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/layoutSysProvider.tsx
 */
import {
  Suspense,
} from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
import {  LayoutSysContext, LayoutSysContextType } from "./inteface";


export const LayoutSysContextProvider: React.FC<LayoutSysContextType> = ({ children }) => {
  
  const { deviceType, fontSize, deviceRatio } = useDeviceType();
  return (
    <LayoutSysContext.Provider
      value={{
        deviceType,
        fontSize,
        deviceRatio,
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </LayoutSysContext.Provider>
  );
};

