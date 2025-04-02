import React, { useState, useEffect } from "react";
import {  EnumCustomerSize, EnumDeviceType } from "@/enum";
import { addEventListenerResize, getDeviceType, removeEventListenerResize, setRootFontSize } from "@/utils/common";

export type IFDeviceType = "Mobile" | "Tablet" | "Pc";

export type IFDeviceTypeInfo = {
  deviceType: IFDeviceType;
  fontSize: number;
  deviceRatio: number;
};



// 计算 fontSize、倍率等
function calculateDeviceInfo(): IFDeviceTypeInfo {
  let rawWidth = window.innerWidth ;
  console.log('window.innerWidth---',window.innerWidth)
  const deviceType = getDeviceType(rawWidth);
  let deviceRatio = 1;
  if (deviceType === EnumDeviceType.Tablet) {
    deviceRatio = 2;
  } else if (deviceType === EnumDeviceType.Mobile) {
    deviceRatio = 3;
  }
  const screenWidth = Math.min(
    EnumCustomerSize.maxWidth,
    Math.max(EnumCustomerSize.minWidth, rawWidth)
  );
  const fontSize =
    (screenWidth / EnumCustomerSize.baseWidth) *
    EnumCustomerSize.baseFontSize *
    deviceRatio;

  return {
    deviceType,
    fontSize: fontSize ,
    deviceRatio,
  };
}

// hook：返回信息并自动设置 <html> 的 font-size
export function useDeviceType(): IFDeviceTypeInfo {
  /**() => calculateDeviceInfo()保证回调函数只会在组件的首次渲染时执行一次，即使组件在后续的渲染中会被多次调用。 */
  const [info, setInfo] = useState<IFDeviceTypeInfo>(() =>calculateDeviceInfo());
  console.log(' info---', info);
  useEffect(() => {

    const applyInfo = () => { // 移除 debounce
   
      const newInfo = calculateDeviceInfo();
      setInfo(newInfo);
      setRootFontSize(newInfo.fontSize, newInfo.deviceRatio);
    };
    applyInfo(); // 初始设置一次
    addEventListenerResize('resize', applyInfo);
    addEventListenerResize('orientationchange', applyInfo);
  
    return () => {
      removeEventListenerResize('resize', applyInfo);
      removeEventListenerResize('orientationchange', applyInfo);
    };
  }, []);

  return info;
}
