import React, { useState, useEffect } from "react";
import { EnumCustomerSize, EnumDeviceType } from "@/enum";
import {
  addEventListenerResize,
  getDeviceType,
  removeEventListenerResize,
  setRootFontSize
} from "@/utils/common";
import { debounce } from "lodash";
import { IFDeviceTypeInfo } from "@/provides/inteface";



// 计算 fontSize、倍率等
function calculateDeviceInfo(viewportWidth: number): IFDeviceTypeInfo {
  const deviceType = getDeviceType(viewportWidth);
  let deviceRatio = 1;

  if (deviceType === EnumDeviceType.Tablet) {
    deviceRatio = 2;
  } else if (deviceType === EnumDeviceType.Mobile) {
    deviceRatio = 3;
  }

  const fontSize = viewportWidth / 37.5;
  return {
    deviceType,
    fontSize,
    deviceRatio
  };
}

function calViewWidth() {
  const raw = document.documentElement.clientWidth; // ⬅️ 这里换掉 window.innerWidth
  const w = raw > 1024 ? 1024 : raw < 320 ? 320 : raw;
  return w;
}

// hook：返回信息并自动设置 <html> 的 font-size
 function useDeviceType(): IFDeviceTypeInfo {
  const [info, setInfo] = useState<IFDeviceTypeInfo>(() => {
    const w = calViewWidth();
    return calculateDeviceInfo(w);
  });

  useEffect(() => {
    const applyInfo = debounce(() => {
      requestAnimationFrame(() => {
        const w = calViewWidth();
        console.log(w)
        const newInfo = calculateDeviceInfo(w);
        setInfo(newInfo);
        setRootFontSize(newInfo.fontSize);
      });
    }, 100);

    applyInfo();
    addEventListenerResize("resize", applyInfo);
    addEventListenerResize("orientationchange", applyInfo);

    // 👉 滑动相关逻辑（保留原有功能）
    let startX: number;
    const threshold = 20;
    addEventListenerResize("touchstart", (event: any) => {
      startX = event?.touches?.[0]?.clientX;
    });
    addEventListenerResize("touchend", (event: any) => {
      const endX = event.changedTouches[0].clientX;
      const deltaX = endX - startX;
      if (Math.abs(deltaX) > threshold) {
        console.log(deltaX > 0 ? "右滑" : "左滑");
      }
    });

    return () => {
      removeEventListenerResize("resize", applyInfo);
      removeEventListenerResize("orientationchange", applyInfo);
      applyInfo.cancel();
    };
  }, []);

  return info;
}
export {useDeviceType}