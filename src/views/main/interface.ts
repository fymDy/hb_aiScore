import { RouterPathUtil } from "@/router/routerPathUtil";

/*
 * @Author: Mark
 * @Date: 2025-04-04 19:37:29
 * @LastEditTime: 2025-04-07 11:41:45
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/main/interface.ts
 */
export interface IFTab{
    id:string,
    path:RouterPathUtil | string,
    name:string,
    iconClass:string,
    matchNum?:number,
    isActive?:boolean,
  }
  export interface IFTabs{
    menuData:IFTab[]
  
  }


  export interface IFMenu{
    id:string,
    name:string,
    iconClass:string,
  }
  
  export interface IFMatch{
    id:string,
    name:string,
    iconImg:string,
  }
  export interface IFSearchResult{
    id:string,
    name:string,
    iconClass?:string,
    isActive?:boolean,
  }