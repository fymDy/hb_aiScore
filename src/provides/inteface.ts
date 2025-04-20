/*
 * @Author: Mark
 * @Date: 2025-04-19 20:01:04
 * @LastEditTime: 2025-04-20 13:27:31
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
export interface LayoutSysContextType  {
    children?: React.ReactNode;
}

export interface LayoutAppContextType  {
    // appElementRef: React.RefObject<HTMLDivElement | null>;
    // DownloadComponent: React.ReactNode;
    // HeaderComponent?: React.ReactNode;
    handleHeaderReady: React.RefCallback<HTMLDivElement>;
    downloadHeight: number;
    headerHeight: number;
    contentHeight: string;
    isDownloadVisible: boolean;
    setDownloadVisible: (visible: boolean) => void;
  }
  export interface LayoutHomeContextType extends LayoutSysContextType{
    activeTabId:string,
    activeFilterId:string,
    onClickJumpPage:(item:any)=>void,
  
}


  
  export const LayoutSysContext = createContext<IFDeviceTypeInfo | undefined>(undefined);

  export const LayoutAppContext = createContext<LayoutAppContextType | undefined>(undefined);

  export const LayoutHomeContext=createContext<LayoutHomeContextType | null >(null)
