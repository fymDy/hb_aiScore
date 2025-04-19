/*
 * @Author: Mark
 * @Date: 2025-03-24 14:28:45
 * @LastEditTime: 2025-04-18 18:51:44
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/utils/common.ts
 */

import { EnumBreakpoints, EnumCustomerSize, EnumDeviceType } from "@/enum";
const  ua =navigator.userAgent


/**
 * 根据userAgent判断设备类型
 * 暂时不用，若是纯网页，不包含小程序，混合开发，可以去掉屏幕宽度来判断
 * @returns 

function getUADeviceType(): IFDeviceType {
  const ua = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const minWH = Math.min(width, height);
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  const isIpad = ua.includes('ipad');
  const isAndroid = ua.includes('android');
  const isMobileUA = ua.includes('mobile') || ua.includes('iphone') || ua.includes('ipod');
  const isAndroidTabletUA = isAndroid && !isMobileUA;

  if (isIpad || isAndroidTabletUA  || (width>EnumBreakpoints.mobile && width<EnumBreakpoints.tablet)) return EnumDeviceType.Tablet;
  if (isMobileUA && width<EnumBreakpoints.mobile) return EnumDeviceType.Mobile;
  if (isTouch && minWH >= 600 && (width>EnumBreakpoints.mobile && width<EnumBreakpoints.tablet) ) return EnumDeviceType.Tablet;
  return EnumDeviceType.Pc;
}
 */
  /**
 * 是否手机端
 * @returns 
 */
export function isMobile(width:number) {
    if (width <= 768 ) {///Mobile|Android|iPhone|iPod/.test(ua) 
      return true; // 手机端
    }else{
      return false
    }
  }
  /**
   * 是否pad端
   * @returns 
   */
  export function isTablet(width:number) {
    if ( (width > 768 && width <= 1024)) {// /iPad|Tablet|Nexus 7|Nexus 10|KFAPWI/i.test(ua) 
      return true// 平板端
    }else{
     return false
    }
  }
/**
 * 判断设备类型
 * @returns 
 */
export function getDeviceType(width:number){
  if(isMobile(width)){
    return EnumDeviceType.Mobile
  }else if(isTablet(width)){
    return EnumDeviceType.Tablet
  }else{
    return EnumDeviceType.Pc
  }
}
/**
 * 判断设备类型
 * @returns 
 */
export function getRatioType(width:number){
  if(isMobile(width)){
    return 3
  }else if(isTablet(width)){
    return 2
  }else{
    return 1
  }
}

  export function setRootFontSize(fontSize:number) {

    document.documentElement.style.fontSize = `${fontSize}px`;

  }

  /**
 * 浏览器屏幕调整监听
 * @param callback 
 * @returns 
 */
export function addEventListenerResize(flag='resize',callback:any){
    window.addEventListener(flag, callback);
  }
/**
 * 移除监听
 * @param callback 
 */
export function removeEventListenerResize(flag='resize',callback:any){
    window.removeEventListener(flag, callback);
  }
  export const pxToRem = (px: number): string => {
    return `${px / 10}rem`;
  };
  export const pxToCalc = (px: number): string => {
    return `${px / 10}`;
  };




