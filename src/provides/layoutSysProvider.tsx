/*
 * @Author: Mark
 * @Date: 2025-04-18 18:42:35
 * @LastEditTime: 2025-04-23 19:49:26
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

  const {viewportWidth,viewportHeight, deviceType, fontSize, deviceRatio } = useDeviceType();

  return (
    <LayoutSysContext.Provider
      value={{
        viewportWidth,
        viewportHeight,
        deviceType,
        fontSize,
        deviceRatio,
      }}
    >
      <Suspense fallback={<div className="Loading">Loading...</div>}>{children}</Suspense>
    </LayoutSysContext.Provider>
  );
};

