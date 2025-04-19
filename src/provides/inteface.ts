/*
 * @Author: Mark
 * @Date: 2025-04-19 20:01:04
 * @LastEditTime: 2025-04-19 20:34:26
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/provides/inteface.ts
 */

import { EnumDeviceType } from "@/enum";
import { createContext } from "react";

export type IFDeviceTypeInfo = {
  deviceType: EnumDeviceType;
  fontSize: number;
  deviceRatio: number;
};


export interface LayoutAppContextType extends IFDeviceTypeInfo {
    appElementRef: React.RefObject<HTMLDivElement | null>;
    // headerRef: React.RefObject<HTMLDivElement | null> ;
    handleHeaderReady: React.RefCallback<HTMLDivElement>;
    downloadRef: React.RefObject<HTMLDivElement | null>;
    headerHeight: number;
    downloadHeight: number;
    contentHeight: number;
    isDownloadVisible: boolean;
    setDownloadVisible: (visible: boolean) => void;
  }
  
  export const LayoutAppContext = createContext<LayoutAppContextType | undefined>(
    undefined
  );